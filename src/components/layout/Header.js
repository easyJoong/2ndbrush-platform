'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, LogOut, Settings } from 'lucide-react'
import LanguageSelector from '@/components/common/LanguageSelector'
import { useTranslation } from 'react-i18next'
import { useAuth } from '@/contexts/AuthContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const { t } = useTranslation('common')
  const { user, isAdmin, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
      setIsUserMenuOpen(false)
      setIsMenuOpen(false)
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <header className="glass-effect bg-white/90 backdrop-blur-xl shadow-lg border-b border-white/20 fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="font-display text-3xl font-bold text-gradient hover:scale-105 transition-transform duration-300">2ndBrush</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/services"
              className="font-modern text-gray-700 hover:text-primary-600 font-semibold transition-all duration-300 hover:scale-105 relative group"
            >
              {t('nav.services')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-crimson-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/education"
              className="font-modern text-gray-700 hover:text-primary-600 font-semibold transition-all duration-300 hover:scale-105 relative group"
            >
              {t('nav.education')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-crimson-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/shop"
              className="font-modern text-gray-700 hover:text-primary-600 font-semibold transition-all duration-300 hover:scale-105 relative group"
            >
              {t('nav.shop')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-crimson-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/blog"
              className="font-modern text-gray-700 hover:text-primary-600 font-semibold transition-all duration-300 hover:scale-105 relative group"
            >
              {t('nav.blog')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-crimson-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 font-semibold transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-medium text-sm">
                      {user.displayName?.charAt(0) || user.email?.charAt(0)}
                    </span>
                  </div>
                  <span className="font-modern">{user.displayName || user.email}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    {isAdmin && (
                      <Link
                        href="/admin/members"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <Settings className="w-4 h-4 inline mr-2" />
                        회원 관리
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut className="w-4 h-4 inline mr-2" />
                      로그아웃
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="font-modern text-gray-700 hover:text-primary-600 font-semibold transition-all duration-300 hover:scale-105"
                >
                  {t('nav.login')}
                </Link>
                <Link
                  href="/auth/signup"
                  className="animated-bg text-white px-6 py-3 rounded-2xl font-bold transition-all duration-300 hover:scale-105 neon-glow"
                >
                  {t('nav.signup')}
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-2xl glass-effect hover:bg-white/20 transition-all duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/20 glass-effect mt-2 rounded-2xl">
            <nav className="flex flex-col space-y-4">
              <div className="flex justify-center mb-4">
                <LanguageSelector />
              </div>
              <Link
                href="/services"
                className="font-modern text-gray-700 hover:text-primary-600 font-semibold transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/20"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
              </Link>
              <Link
                href="/education"
                className="font-modern text-gray-700 hover:text-primary-600 font-semibold transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/20"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.education')}
              </Link>
              <Link
                href="/shop"
                className="font-modern text-gray-700 hover:text-primary-600 font-semibold transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/20"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.shop')}
              </Link>
              <Link
                href="/blog"
                className="font-modern text-gray-700 hover:text-primary-600 font-semibold transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/20"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.blog')}
              </Link>
              <hr className="my-6 border-white/30" />
              {user ? (
                <>
                  <div className="px-4 py-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 font-medium text-sm">
                          {user.displayName?.charAt(0) || user.email?.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{user.displayName || user.email}</p>
                        {isAdmin && (
                          <p className="text-xs text-red-600">관리자</p>
                        )}
                      </div>
                    </div>
                  </div>
                  {isAdmin && (
                    <Link
                      href="/admin/members"
                      className="font-modern text-gray-700 hover:text-primary-600 font-semibold transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/20 flex items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      회원 관리
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="w-full text-left font-modern text-gray-700 hover:text-primary-600 font-semibold transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/20 flex items-center"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    로그아웃
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/login"
                    className="font-modern text-gray-700 hover:text-primary-600 font-semibold transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('nav.login')}
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="animated-bg text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 text-center neon-glow mx-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('nav.signup')}
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}