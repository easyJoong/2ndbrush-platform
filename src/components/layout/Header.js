'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, User, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">2ndBrush</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/services" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              시술 서비스
            </Link>
            <Link 
              href="/education" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              교육 프로그램
            </Link>
            <Link 
              href="/shop" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              쇼핑
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              블로그
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/auth/login"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              로그인
            </Link>
            <Link 
              href="/auth/signup"
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              회원가입
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/services"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                시술 서비스
              </Link>
              <Link 
                href="/education"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                교육 프로그램
              </Link>
              <Link 
                href="/shop"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                쇼핑
              </Link>
              <Link 
                href="/blog"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                블로그
              </Link>
              <hr className="my-4 border-gray-200" />
              <Link 
                href="/auth/login"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                로그인
              </Link>
              <Link 
                href="/auth/signup"
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                회원가입
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}