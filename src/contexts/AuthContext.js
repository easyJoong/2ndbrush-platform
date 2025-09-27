'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth'
import { doc, setDoc, getDoc, collection, getDocs, query, orderBy } from 'firebase/firestore'
import { auth, db } from '@/lib/firebase'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// 관리자 이메일 목록
const ADMIN_EMAILS = ['dandyjoong@naver.com']

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  // 회원가입
  const signup = async (email, password, userData) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)

      // 사용자 프로필 업데이트
      await updateProfile(user, {
        displayName: userData.name
      })

      // Firestore에 사용자 정보 저장
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        name: userData.name,
        phone: userData.phone || '',
        birthDate: userData.birthDate || '',
        createdAt: new Date(),
        isAdmin: ADMIN_EMAILS.includes(email.toLowerCase()),
        lastLoginAt: new Date()
      })

      return user
    } catch (error) {
      console.error('Signup error:', error)
      throw error
    }
  }

  // 로그인
  const login = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)

      // 마지막 로그인 시간 업데이트
      await setDoc(doc(db, 'users', user.uid), {
        lastLoginAt: new Date()
      }, { merge: true })

      return user
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }

  // 로그아웃
  const logout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Logout error:', error)
      throw error
    }
  }

  // 서버에서 ID 토큰 가져오기
  const getIdToken = async () => {
    if (!auth.currentUser) {
      throw new Error('No authenticated user')
    }
    return await auth.currentUser.getIdToken()
  }

  // 모든 사용자 조회 (관리자용) - 서버 API 사용
  const getAllUsers = async () => {
    try {
      const token = await getIdToken()
      const response = await fetch('/api/admin/users', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to fetch users')
      }

      const data = await response.json()
      return data.users
    } catch (error) {
      console.error('Get users error:', error)
      throw error
    }
  }

  // 통계 데이터 조회 (관리자용)
  const getAdminStats = async () => {
    try {
      const token = await getIdToken()
      const response = await fetch('/api/admin/stats', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to fetch stats')
      }

      const data = await response.json()
      return data.stats
    } catch (error) {
      console.error('Get stats error:', error)
      throw error
    }
  }

  // 사용자 정보 업데이트 (관리자용)
  const updateUser = async (userId, updates) => {
    try {
      const token = await getIdToken()
      const response = await fetch('/api/admin/users', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, updates })
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to update user')
      }

      return await response.json()
    } catch (error) {
      console.error('Update user error:', error)
      throw error
    }
  }

  // 사용자 삭제 (관리자용)
  const deleteUser = async (userId) => {
    try {
      const token = await getIdToken()
      const response = await fetch(`/api/admin/users?userId=${userId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to delete user')
      }

      return await response.json()
    } catch (error) {
      console.error('Delete user error:', error)
      throw error
    }
  }

  // 사용자 정보 조회
  const getUserData = async (uid) => {
    try {
      const userDoc = await getDoc(doc(db, 'users', uid))
      return userDoc.exists() ? userDoc.data() : null
    } catch (error) {
      console.error('Get user data error:', error)
      throw error
    }
  }

  // 인증 상태 변화 감지
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // 사용자 정보를 Firestore에서 가져와서 관리자 여부 확인
        const userData = await getUserData(user.uid)
        setUser(user)
        setIsAdmin(userData?.isAdmin || ADMIN_EMAILS.includes(user.email?.toLowerCase()))
      } else {
        setUser(null)
        setIsAdmin(false)
      }
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    user,
    isAdmin,
    loading,
    signup,
    login,
    logout,
    getAllUsers,
    getUserData,
    getAdminStats,
    updateUser,
    deleteUser,
    getIdToken
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}