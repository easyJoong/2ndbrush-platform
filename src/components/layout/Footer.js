'use client'

import Link from 'next/link'
import { Instagram, Facebook, Youtube } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-mocha-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-6 group">
              <span className="font-display text-3xl font-bold text-gradient hover:scale-105 transition-transform duration-300">2ndBrush</span>
            </Link>
            <p className="font-modern text-gray-300 mb-6 leading-relaxed">
              {t('footer.description') || '프리미엄 뷰티 서비스를 제공하는 회원제 통합 플랫폼'}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/2ndbrush_official"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-effect text-gray-400 hover:text-primary-400 transition-all duration-300 hover:scale-110 neon-glow"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full glass-effect text-gray-400 hover:text-primary-400 transition-all duration-300 hover:scale-110 neon-glow"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full glass-effect text-gray-400 hover:text-primary-400 transition-all duration-300 hover:scale-110 neon-glow"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-gradient">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/eyebrow" className="font-modern text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  {t('footer.eyebrowService')}
                </Link>
              </li>
              <li>
                <Link href="/services/skincare" className="font-modern text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  {t('footer.skincare')}
                </Link>
              </li>
              <li>
                <Link href="/services/scalp" className="font-modern text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  {t('footer.scalpTattoo')}
                </Link>
              </li>
              <li>
                <Link href="/services/booking" className="font-modern text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  {t('footer.onlineBooking')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-gradient">{t('footer.education')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/education/basic" className="font-modern text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  {t('footer.basicCourse')}
                </Link>
              </li>
              <li>
                <Link href="/education/advanced" className="font-modern text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  {t('footer.advancedCourse')}
                </Link>
              </li>
              <li>
                <Link href="/education/startup" className="font-modern text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  {t('footer.startupCourse')}
                </Link>
              </li>
              <li>
                <Link href="/education/apply" className="font-modern text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  {t('footer.educationApply')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-gradient">{t('footer.companyInfo')}</h3>
            <ul className="space-y-3">
              <li className="font-modern text-gray-400">
                {t('footer.email')}
              </li>
              <li className="font-modern text-gray-400">
                {t('footer.phone')}
              </li>
              <li>
                <Link href="/privacy" className="font-modern text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="font-modern text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gradient-to-r from-transparent via-primary-500 to-transparent my-12 border-t" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-modern text-gray-400 text-sm">
            {t('footer.copyright')}
          </p>
          <p className="font-modern text-gray-400 text-sm mt-2 md:mt-0">
            {t('footer.madeWith')}
          </p>
        </div>
      </div>
    </footer>
  )
}