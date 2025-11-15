'use client'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// 번역 리소스 import
import koCommon from '@/../public/locales/ko/common.json'
import enCommon from '@/../public/locales/en/common.json'
import zhCommon from '@/../public/locales/zh/common.json'

// i18next 초기화
i18n
  .use(LanguageDetector) // 브라우저 언어 감지
  .use(initReactI18next) // react-i18next 바인딩
  .init({
    resources: {
      ko: {
        common: koCommon
      },
      en: {
        common: enCommon
      },
      zh: {
        common: zhCommon
      }
    },
    fallbackLng: 'ko', // 기본 언어
    defaultNS: 'common', // 기본 네임스페이스
    ns: ['common'], // 사용할 네임스페이스

    interpolation: {
      escapeValue: false // React는 이미 XSS 방지
    },

    detection: {
      // 언어 감지 옵션
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'selectedLanguage'
    },

    react: {
      useSuspense: false // SSR 지원
    }
  })

export default i18n
