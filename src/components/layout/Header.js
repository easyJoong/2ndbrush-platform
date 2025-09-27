'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, User, ChevronDown } from 'lucide-react'
import LanguageSelector from '@/components/common/LanguageSelector'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="glass-effect bg-white/80 backdrop-blur-lg shadow-lg border-b border-white/20 sticky top-0 z-50">
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
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}