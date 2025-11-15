'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import { Shield, AlertCircle } from 'lucide-react'
import { Button, Input } from '@/components/ui'

export default function AdminLoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // admin/admin 입력을 관리자 이메일로 변환
      const adminEmail = formData.email === 'admin'
        ? 'dandyjoong@naver.com'
        : formData.email

      const adminPassword = formData.password === 'admin'
        ? 'admin123'
        : formData.password

      await login(adminEmail, adminPassword)

      // 로그인 성공 후 관리자 페이지로 리다이렉트
      router.push('/admin/dashboard')
    } catch (error) {
      console.error('Admin login error:', error)
      setError('관리자 로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4 shadow-lg">
            <Shield className="w-10 h-10 text-primary-600" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">관리자 로그인</h1>
          <p className="text-primary-100">2ndBrush Admin Panel</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="관리자 ID"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin"
              disabled={loading}
              required
              helperText="기본값: admin"
            />

            <Input
              label="비밀번호"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              disabled={loading}
              required
              helperText="기본값: admin"
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              loading={loading}
            >
              관리자 로그인
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600">
              일반 사용자이신가요?{' '}
              <a href="/auth/login" className="text-primary-600 hover:text-primary-700 font-semibold">
                일반 로그인
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-primary-100 mt-8">
          © 2024 2ndBrush. All rights reserved.
        </p>
      </div>
    </div>
  )
}
