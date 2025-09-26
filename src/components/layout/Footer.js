import Link from 'next/link'
import { Instagram, Facebook, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary-400">2ndBrush</span>
            </Link>
            <p className="text-gray-400 mb-4">
              프리미엄 뷰티 서비스를 제공하는 회원제 통합 플랫폼
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/2ndbrush_official" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">서비스</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/eyebrow" className="text-gray-400 hover:text-white transition-colors">
                  눈썹 시술
                </Link>
              </li>
              <li>
                <Link href="/services/skincare" className="text-gray-400 hover:text-white transition-colors">
                  피부 관리
                </Link>
              </li>
              <li>
                <Link href="/services/scalp" className="text-gray-400 hover:text-white transition-colors">
                  두피 문신
                </Link>
              </li>
              <li>
                <Link href="/services/booking" className="text-gray-400 hover:text-white transition-colors">
                  온라인 예약
                </Link>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-semibold text-lg mb-4">교육</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/education/basic" className="text-gray-400 hover:text-white transition-colors">
                  기초 과정
                </Link>
              </li>
              <li>
                <Link href="/education/advanced" className="text-gray-400 hover:text-white transition-colors">
                  심화 과정
                </Link>
              </li>
              <li>
                <Link href="/education/startup" className="text-gray-400 hover:text-white transition-colors">
                  창업 과정
                </Link>
              </li>
              <li>
                <Link href="/education/apply" className="text-gray-400 hover:text-white transition-colors">
                  교육 신청
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">회사정보</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                이메일: contact@2ndbrush.com
              </li>
              <li className="text-gray-400">
                전화: 02-1234-5678
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 2ndBrush. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Made with ❤️ for beautiful you
          </p>
        </div>
      </div>
    </footer>
  )
}