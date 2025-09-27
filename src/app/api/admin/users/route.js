import { NextResponse } from 'next/server'
import { adminAuth, adminDb } from '@/lib/firebase-admin'

// 관리자 권한 확인 함수
async function verifyAdminAuth(request) {
  try {
    const authHeader = request.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { error: 'No authorization token provided', status: 401 }
    }

    const token = authHeader.split('Bearer ')[1]
    const decodedToken = await adminAuth.verifyIdToken(token)

    // 관리자 이메일 확인
    const adminEmails = ['dandyjoong@naver.com']
    if (!adminEmails.includes(decodedToken.email)) {
      return { error: 'Admin access required', status: 403 }
    }

    return { user: decodedToken }
  } catch (error) {
    console.error('Auth verification error:', error)
    return { error: 'Invalid token', status: 401 }
  }
}

// GET: 모든 사용자 목록 조회 (관리자 전용)
export async function GET(request) {
  try {
    const authResult = await verifyAdminAuth(request)
    if (authResult.error) {
      return NextResponse.json({ error: authResult.error }, { status: authResult.status })
    }

    // Firestore에서 모든 사용자 정보 가져오기
    const usersCollection = await adminDb.collection('users').orderBy('createdAt', 'desc').get()
    const users = []

    usersCollection.forEach(doc => {
      users.push({
        id: doc.id,
        ...doc.data(),
        // Firestore Timestamp를 JSON으로 변환
        createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || doc.data().createdAt,
        lastLoginAt: doc.data().lastLoginAt?.toDate?.()?.toISOString() || doc.data().lastLoginAt
      })
    })

    return NextResponse.json({ users })
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST: 사용자 생성 (관리자 전용)
export async function POST(request) {
  try {
    const authResult = await verifyAdminAuth(request)
    if (authResult.error) {
      return NextResponse.json({ error: authResult.error }, { status: authResult.status })
    }

    const { email, password, displayName, userData } = await request.json()

    // Firebase Auth에서 사용자 생성
    const userRecord = await adminAuth.createUser({
      email,
      password,
      displayName
    })

    // Firestore에 사용자 정보 저장
    await adminDb.collection('users').doc(userRecord.uid).set({
      email: userRecord.email,
      name: displayName,
      phone: userData?.phone || '',
      birthDate: userData?.birthDate || '',
      createdAt: new Date(),
      isAdmin: email === 'dandyjoong@naver.com',
      lastLoginAt: null,
      disabled: false
    })

    return NextResponse.json({
      message: 'User created successfully',
      userId: userRecord.uid
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}

// PUT: 사용자 정보 업데이트 (관리자 전용)
export async function PUT(request) {
  try {
    const authResult = await verifyAdminAuth(request)
    if (authResult.error) {
      return NextResponse.json({ error: authResult.error }, { status: authResult.status })
    }

    const { userId, updates } = await request.json()

    // Firebase Auth 업데이트
    if (updates.email || updates.displayName || updates.disabled !== undefined) {
      const authUpdates = {}
      if (updates.email) authUpdates.email = updates.email
      if (updates.displayName) authUpdates.displayName = updates.displayName
      if (updates.disabled !== undefined) authUpdates.disabled = updates.disabled

      await adminAuth.updateUser(userId, authUpdates)
    }

    // Firestore 업데이트
    const firestoreUpdates = { ...updates }
    delete firestoreUpdates.password // 비밀번호는 Firestore에 저장하지 않음
    firestoreUpdates.updatedAt = new Date()

    await adminDb.collection('users').doc(userId).update(firestoreUpdates)

    return NextResponse.json({ message: 'User updated successfully' })
  } catch (error) {
    console.error('Error updating user:', error)
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}

// DELETE: 사용자 삭제 (관리자 전용)
export async function DELETE(request) {
  try {
    const authResult = await verifyAdminAuth(request)
    if (authResult.error) {
      return NextResponse.json({ error: authResult.error }, { status: authResult.status })
    }

    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 })
    }

    // Firebase Auth에서 사용자 삭제
    await adminAuth.deleteUser(userId)

    // Firestore에서 사용자 데이터 삭제
    await adminDb.collection('users').doc(userId).delete()

    return NextResponse.json({ message: 'User deleted successfully' })
  } catch (error) {
    console.error('Error deleting user:', error)
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}