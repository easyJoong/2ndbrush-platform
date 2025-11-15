'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Users, ShoppingBag, TrendingUp, DollarSign } from 'lucide-react'

export default function AdminDashboardPage() {
  const { getAdminStats } = useAuth()
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadStats()
  }, [])

  const loadStats = async () => {
    try {
      const data = await getAdminStats()
      setStats(data)
    } catch (error) {
      console.error('Failed to load stats:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  const cards = [
    {
      title: '총 회원수',
      value: stats?.totalUsers || 0,
      icon: Users,
      color: 'bg-blue-500',
      change: '+12%'
    },
    {
      title: '이번 달 신규 회원',
      value: stats?.newUsersThisMonth || 0,
      icon: TrendingUp,
      color: 'bg-green-500',
      change: '+18%'
    },
    {
      title: '등록 상품',
      value: '24',
      icon: ShoppingBag,
      color: 'bg-purple-500',
      change: '+5%'
    },
    {
      title: '이번 달 매출',
      value: '₩12,450,000',
      icon: DollarSign,
      color: 'bg-yellow-500',
      change: '+23%'
    }
  ]

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">대시보드</h1>
        <p className="text-gray-600 mt-2">2ndBrush 관리자 대시보드에 오신 것을 환영합니다</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className={`${card.color} p-3 rounded-lg`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-green-600">{card.change}</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">{card.title}</h3>
            <p className="text-2xl font-bold text-gray-900">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Members */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">최근 가입 회원</h2>
          <div className="space-y-4">
            {stats?.recentUsers?.slice(0, 5).map((user) => (
              <div key={user.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-600 font-semibold">
                      {user.name?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase()}
                    </span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-semibold text-gray-900">{user.name || '이름 없음'}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">
                  {new Date(user.createdAt?.seconds * 1000).toLocaleDateString('ko-KR')}
                </span>
              </div>
            )) || (
              <p className="text-gray-500 text-center py-4">최근 가입한 회원이 없습니다</p>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">빠른 작업</h2>
          <div className="space-y-3">
            <a
              href="/admin/dashboard/members"
              className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              <h3 className="font-semibold text-blue-900 mb-1">회원 관리</h3>
              <p className="text-sm text-blue-700">회원 목록 조회 및 관리</p>
            </a>
            <a
              href="/admin/dashboard/products"
              className="block p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
            >
              <h3 className="font-semibold text-green-900 mb-1">상품 관리</h3>
              <p className="text-sm text-green-700">상품 등록 및 수정</p>
            </a>
            <button className="w-full p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-left">
              <h3 className="font-semibold text-purple-900 mb-1">설정</h3>
              <p className="text-sm text-purple-700">시스템 설정 관리</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
