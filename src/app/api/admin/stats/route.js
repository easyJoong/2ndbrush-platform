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

// GET: 회원 통계 데이터 조회 (관리자 전용)
export async function GET(request) {
  try {
    const authResult = await verifyAdminAuth(request)
    if (authResult.error) {
      return NextResponse.json({ error: authResult.error }, { status: authResult.status })
    }

    // 모든 사용자 데이터 가져오기
    const usersSnapshot = await adminDb.collection('users').get()
    const users = []

    usersSnapshot.forEach(doc => {
      users.push({
        id: doc.id,
        ...doc.data()
      })
    })

    const now = new Date()
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1)

    // 통계 계산
    const stats = {
      totalUsers: users.length,
      activeUsers: users.filter(user => !user.disabled).length,
      disabledUsers: users.filter(user => user.disabled).length,
      adminUsers: users.filter(user => user.isAdmin).length,

      // 이번 달 신규 회원
      newUsersThisMonth: users.filter(user => {
        const createdAt = user.createdAt?.toDate ? user.createdAt.toDate() : new Date(user.createdAt)
        return createdAt >= thisMonth
      }).length,

      // 지난 달 신규 회원
      newUsersLastMonth: users.filter(user => {
        const createdAt = user.createdAt?.toDate ? user.createdAt.toDate() : new Date(user.createdAt)
        return createdAt >= lastMonth && createdAt < thisMonth
      }).length,

      // 최근 30일 로그인 사용자
      activeUsersLast30Days: users.filter(user => {
        if (!user.lastLoginAt) return false
        const lastLoginAt = user.lastLoginAt?.toDate ? user.lastLoginAt.toDate() : new Date(user.lastLoginAt)
        const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
        return lastLoginAt >= thirtyDaysAgo
      }).length,

      // 연령대별 분포 (생년월일 기준)
      ageDistribution: calculateAgeDistribution(users),

      // 가입 추세 (최근 12개월)
      registrationTrend: calculateRegistrationTrend(users),

      // 로그인 추세 (최근 30일)
      loginTrend: calculateLoginTrend(users)
    }

    return NextResponse.json({ stats })
  } catch (error) {
    console.error('Error fetching stats:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// 연령대별 분포 계산
function calculateAgeDistribution(users) {
  const ageGroups = {
    '10대': 0,
    '20대': 0,
    '30대': 0,
    '40대': 0,
    '50대': 0,
    '60대 이상': 0,
    '미상': 0
  }

  users.forEach(user => {
    if (!user.birthDate) {
      ageGroups['미상']++
      return
    }

    const birthYear = new Date(user.birthDate).getFullYear()
    const currentYear = new Date().getFullYear()
    const age = currentYear - birthYear

    if (age < 20) ageGroups['10대']++
    else if (age < 30) ageGroups['20대']++
    else if (age < 40) ageGroups['30대']++
    else if (age < 50) ageGroups['40대']++
    else if (age < 60) ageGroups['50대']++
    else ageGroups['60대 이상']++
  })

  return ageGroups
}

// 가입 추세 계산 (최근 12개월)
function calculateRegistrationTrend(users) {
  const trend = []
  const now = new Date()

  for (let i = 11; i >= 0; i--) {
    const month = new Date(now.getFullYear(), now.getMonth() - i, 1)
    const nextMonth = new Date(now.getFullYear(), now.getMonth() - i + 1, 1)

    const count = users.filter(user => {
      const createdAt = user.createdAt?.toDate ? user.createdAt.toDate() : new Date(user.createdAt)
      return createdAt >= month && createdAt < nextMonth
    }).length

    trend.push({
      month: month.toISOString().slice(0, 7), // YYYY-MM 형식
      count
    })
  }

  return trend
}

// 로그인 추세 계산 (최근 30일)
function calculateLoginTrend(users) {
  const trend = []
  const now = new Date()

  for (let i = 29; i >= 0; i--) {
    const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000)
    const nextDate = new Date(date.getTime() + 24 * 60 * 60 * 1000)

    const count = users.filter(user => {
      if (!user.lastLoginAt) return false
      const lastLoginAt = user.lastLoginAt?.toDate ? user.lastLoginAt.toDate() : new Date(user.lastLoginAt)
      return lastLoginAt >= date && lastLoginAt < nextDate
    }).length

    trend.push({
      date: date.toISOString().slice(0, 10), // YYYY-MM-DD 형식
      count
    })
  }

  return trend
}