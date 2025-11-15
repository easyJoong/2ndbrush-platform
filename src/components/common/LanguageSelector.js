'use client'

import { useState } from 'react'
import { ChevronDown, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

// 지원 언어 목록
const SUPPORTED_LANGUAGES = {
  ko: {
    code: 'ko',
    name: '한국어',
    flag: '🇰🇷'
  },
  en: {
    code: 'en',
    name: 'English',
    flag: '🇺🇸'
  },
  zh: {
    code: 'zh',
    name: '中文',
    flag: '🇨🇳'
  }
}

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { i18n } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)

  const handleLanguageChange = async (langCode) => {
    setIsLoading(true)
    try {
      await i18n.changeLanguage(langCode)
      setIsOpen(false)
    } catch (error) {
      console.error('언어 변경 오류:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const currentLang = SUPPORTED_LANGUAGES[i18n.language] || SUPPORTED_LANGUAGES.ko

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-xl glass-effect text-gray-700 hover:text-primary-600 transition-all duration-300 hover:scale-105 group"
        disabled={isLoading}
      >
        <Globe className="w-4 h-4" />
        <span className="font-medium text-sm">{currentLang?.flag}</span>
        <span className="font-modern text-sm font-medium hidden sm:block">
          {currentLang?.name}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* 드롭다운 메뉴 */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 glass-effect rounded-2xl shadow-lg border border-white/20 z-50 overflow-hidden">
          {Object.values(SUPPORTED_LANGUAGES).map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-white/20 transition-all duration-300 ${
                i18n.language === language.code
                  ? 'bg-primary-50/50 text-primary-600'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
              disabled={isLoading}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="font-modern font-medium">{language.name}</span>
              {i18n.language === language.code && (
                <div className="ml-auto w-2 h-2 bg-primary-500 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* 로딩 오버레이 */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/50 rounded-xl">
          <div className="w-4 h-4 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* 배경 클릭 시 메뉴 닫기 */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}