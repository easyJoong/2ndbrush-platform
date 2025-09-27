import { NextResponse } from 'next/server'
import { adminAuth, adminDb } from '@/lib/firebase-admin'

// POST: 토큰 검증 및 사용자 정보 반환
export async function POST(request) {
  try {
    const { token } = await request.json()

    if (!token) {
      return NextResponse.json({ error: 'Token is required' }, { status: 400 })
    }

    // Firebase Admin SDK로 토큰 검증
    const decodedToken = await adminAuth.verifyIdToken(token)

    // Firestore에서 사용자 추가 정보 가져오기
    const userDoc = await adminDb.collection('users').doc(decodedToken.uid).get()
    let userData = {}

    if (userDoc.exists) {
      userData = userDoc.data()
      // 마지막 로그인 시간 업데이트
      await adminDb.collection('users').doc(decodedToken.uid).update({
        lastLoginAt: new Date()
      })
    }

    // 관리자 권한 확인
    const adminEmails = ['dandyjoong@naver.com']
    const isAdmin = adminEmails.includes(decodedToken.email) || userData.isAdmin

    return NextResponse.json({
      user: {
        uid: decodedToken.uid,
        email: decodedToken.email,
        displayName: decodedToken.name || userData.name,
        isAdmin,
        ...userData
      }
    })
  } catch (error) {
    console.error('Token verification error:', error)
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }
}

// GET: 현재 사용자 정보 조회 (토큰 기반)
export async function GET(request) {
  try {
    const authHeader = request.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'No authorization token provided' }, { status: 401 })
    }

    const token = authHeader.split('Bearer ')[1]
    const decodedToken = await adminAuth.verifyIdToken(token)

    // Firestore에서 사용자 정보 가져오기
    const userDoc = await adminDb.collection('users').doc(decodedToken.uid).get()
    let userData = {}

    if (userDoc.exists) {
      userData = userDoc.data()
    }

    // 관리자 권한 확인
    const adminEmails = ['dandyjoong@naver.com']
    const isAdmin = adminEmails.includes(decodedToken.email) || userData.isAdmin

    return NextResponse.json({
      user: {
        uid: decodedToken.uid,
        email: decodedToken.email,
        displayName: decodedToken.name || userData.name,
        isAdmin,
        ...userData
      }
    })
  } catch (error) {
    console.error('Auth verification error:', error)
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }
}