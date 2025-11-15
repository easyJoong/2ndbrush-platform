'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// 지원 언어 목록
export const SUPPORTED_LANGUAGES = {
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

// 기본 텍스트 (한국어)
const DEFAULT_TEXTS = {
  // 네비게이션
  nav: {
    services: '시술 서비스',
    education: '교육 프로그램',
    shop: '쇼핑',
    blog: '블로그',
    login: '로그인',
    signup: '회원가입'
  },

  // 메인 페이지
  home: {
    heroTitle1: '아름다운 당신을 위한',
    heroTitle2: '프리미엄 뷰티',
    heroSubtitle: '전문적인 시술 서비스, 체계적인 교육 프로그램, 그리고 고품질 뷰티 디바이스까지. 2ndBrush에서 모든 뷰티 솔루션을 만나보세요.',
    freeSignup: '무료 회원가입',
    exploreServices: '서비스 둘러보기',

    servicesTitle: '전문 시술 서비스',
    servicesSubtitle: '숙련된 전문가가 제공하는 프리미엄 뷰티 서비스',

    eyebrowTitle: '눈썹 시술',
    eyebrowDesc: '반영구 문신부터 리터치, 제거까지 완벽한 눈썹 라인을 만들어드립니다.',

    skincareTitle: '피부 관리',
    skincareDesc: '기본 관리부터 문제성 피부 집중 케어까지 맞춤형 피부 관리 서비스.',

    scalpTitle: '두피 문신',
    scalpDesc: '헤어라인 교정과 밀도 보강으로 자연스럽고 완벽한 헤어라인을 완성.',

    seeMore: '자세히 보기',

    statsCustomers: '만족한 고객',
    statsProcedures: '완료된 시술',
    statsRating: '평균 만족도',
    statsProducts: '프리미엄 제품',

    instagramTitle: 'Instagram에서 더 많은 소식을',
    instagramSubtitle: '@2ndbrush_official을 팔로우하고 특별 혜택을 받아보세요',
    followUs: '팔로우하기',

    testimonialsTitle: '고객 후기',
    testimonialsSubtitle: '2ndBrush와 함께한 고객들의 생생한 후기',

    testimonial1: '"눈썹 시술을 받았는데 정말 만족스러워요. 자연스러우면서도 또렷한 라인이 완성되었어요!"',
    testimonial1Name: '김○○ 님',
    testimonial1Service: '눈썹 반영구 시술',

    testimonial2: '"교육 프로그램이 체계적이고 실무에 바로 적용할 수 있는 내용들이 많아서 도움이 되었어요."',
    testimonial2Name: '이○○ 님',
    testimonial2Service: '심화 교육 과정',

    testimonial3: '"온라인 예약이 편리하고, 구매한 디바이스도 품질이 정말 좋아요. 추천합니다!"',
    testimonial3Name: '박○○ 님',
    testimonial3Service: '홈케어 디바이스 구매',

    ctaTitle: '지금 회원가입하고 특별 혜택을 받아보세요',
    ctaSubtitle: 'Instagram 팔로워라면 추가 10% 할인!'
  },

  // 푸터
  footer: {
    services: '서비스',
    education: '교육',
    companyInfo: '회사정보',
    eyebrowService: '눈썹 시술',
    skincare: '피부 관리',
    scalpTattoo: '두피 문신',
    onlineBooking: '온라인 예약',
    basicCourse: '기초 과정',
    advancedCourse: '심화 과정',
    startupCourse: '창업 과정',
    educationApply: '교육 신청',
    email: '이메일: contact@2ndbrush.com',
    phone: '전화: 02-1234-5678',
    privacy: '개인정보처리방침',
    terms: '이용약관',
    copyright: '© 2024 2ndBrush. All rights reserved.',
    madeWith: 'Made with ❤️ for beautiful you'
  },

  // 회원가입 관련
  signup: {
    title: '회원가입',
    subtitle: '2ndBrush와 함께하세요',
    hasAccount: '이미 계정이 있으신가요?',
    loginLink: '로그인',
    name: '이름',
    email: '이메일',
    phone: '휴대폰 번호',
    birthDate: '생년월일 (선택)',
    password: '비밀번호',
    namePlaceholder: '이름을 입력하세요',
    emailPlaceholder: '이메일을 입력하세요',
    phonePlaceholder: '010-1234-5678',
    passwordPlaceholder: '6자 이상 입력하세요',
    submit: '회원가입',
    loading: '가입 중...',
    errors: {
      nameRequired: '이름을 입력해주세요',
      emailRequired: '이메일을 입력해주세요',
      emailInvalid: '올바른 이메일 형식이 아닙니다',
      phoneRequired: '휴대폰 번호를 입력해주세요',
      passwordRequired: '비밀번호를 입력해주세요',
      passwordLength: '비밀번호는 6자 이상이어야 합니다'
    }
  },

  // 로그인 관련
  login: {
    title: '로그인',
    subtitle: '계정에 로그인하세요',
    noAccount: '계정이 없으신가요?',
    signupLink: '회원가입',
    email: '이메일',
    password: '비밀번호',
    emailPlaceholder: '이메일을 입력하세요',
    passwordPlaceholder: '비밀번호를 입력하세요',
    submit: '로그인',
    loading: '로그인 중...',
    forgotPassword: '비밀번호를 잊으셨나요?',
    errors: {
      emailRequired: '이메일을 입력해주세요',
      emailInvalid: '올바른 이메일 형식이 아닙니다',
      passwordRequired: '비밀번호를 입력해주세요'
    }
  },

  // 교육 페이지
  education: {
    heroTitle: '전문가 교육 프로그램',
    heroSubtitle: '체계적인 커리큘럼과 실무 중심의 교육으로 뷰티 전문가의 꿈을 실현해보세요.',
    applyButton: '교육 신청하기',
    consultButton: '상담 예약',
    coursesTitle: '교육 과정',
    coursesSubtitle: '초보자부터 전문가까지, 단계별 맞춤 교육',
    benefitsTitle: '2ndBrush 교육의 특별함',
    benefitsSubtitle: '차별화된 교육 시스템으로 실력있는 전문가를 양성합니다',
    successTitle: '수료생 성공 사례',
    successSubtitle: '2ndBrush 교육으로 꿈을 이룬 수료생들의 이야기',
    ctaTitle: '지금 시작하세요',
    ctaSubtitle: '전문가의 꿈, 2ndBrush와 함께 실현해보세요',
    freeConsult: '무료 상담 예약',

    // 과정 정보
    basicCourse: '기초 과정',
    advancedCourse: '심화 과정',
    startupCourse: '창업 과정',
    oneDayClass: '원데이 클래스',

    // 공통 레이블
    duration: '기간',
    level: '레벨',
    students: '수료',
    schedule: '일정',
    certificate: '수료증 발급',
    curriculum: '주요 커리큘럼',
    more: '개 더',
    price: '원',
    detailButton: '자세히 보기',

    // 레벨
    beginner: '입문자',
    intermediate: '중급자',
    expert: '전문가',
    allLevels: '모든 레벨',

    // 혜택
    certificationTitle: '공인 수료증',
    certificationDesc: '모든 과정 수료 시 2ndBrush 공인 수료증을 발급해드립니다.',
    smallClassTitle: '소수 정예',
    smallClassDesc: '강사 1명당 최대 8명의 소수 정예로 진행하여 개별 케어가 가능합니다.',
    practicalTitle: '실무 중심',
    practicalDesc: '이론보다는 실제 현장에서 바로 활용 가능한 실무 중심 교육을 제공합니다.',

    // 과정 설명
    basicDesc: '뷰티 업계 입문자를 위한 기초 과정입니다. 이론부터 실습까지 체계적으로 배워보세요.',
    advancedDesc: '기초 과정 수료자를 위한 심화 과정입니다. 전문적인 기술과 노하우를 습득할 수 있습니다.',
    startupDesc: '독립 창업을 목표로 하는 전문가를 위한 종합 과정입니다. 기술부터 경영까지 모든 것을 배웁니다.',
    oneDayDesc: '바쁜 일정 중에도 부담 없이 참여할 수 있는 하루 완성 클래스입니다.',

    // 수료생 후기
    review1: '"창업 과정을 통해 체계적으로 배워서 지금은 성공적으로 샵을 운영하고 있어요. 정말 감사합니다!"',
    review1Author: '김○○ 원장',
    review1Role: '창업 과정 수료 → 독립 창업',
    review2: '"기초부터 심화까지 단계별로 배워서 자신감을 갖고 고객을 응대할 수 있게 되었어요."',
    review2Author: '이○○ 실장',
    review2Role: '심화 과정 수료 → 대형샵 취업',
    review3: '"원데이 클래스로 시작해서 지금은 정규 과정까지 모두 수료했어요. 정말 알찬 교육이에요!"',
    review3Author: '박○○ 님',
    review3Role: '전 과정 수료 → 프리랜서 활동',

    popular: '인기'
  },

  // 쇼핑 페이지
  shop: {
    heroTitle: '프리미엄 뷰티 스토어',
    heroSubtitle: '전문가가 엄선한 고품질 뷰티 디바이스와 제품들을 만나보세요. 회원만의 특별한 가격으로 제공합니다.',
    searchPlaceholder: '상품을 검색하세요...',
    filter: '필터',
    categories: '카테고리',
    priceRange: '가격대',

    // 카테고리
    allProducts: '전체',
    treatmentTools: '시술 도구',
    homeDevices: '홈케어 디바이스',
    cosmetics: '화장품/앰플',
    materials: '교육 교재',

    // 가격대
    under50k: '5만원 미만',
    range50to100k: '5만원 - 10만원',
    range100to200k: '10만원 - 20만원',
    over200k: '20만원 이상',

    // 정렬
    sortBy: '정렬',
    recommended: '추천순',
    popular: '인기순',
    priceLow: '가격 낮은 순',
    priceHigh: '가격 높은 순',
    newest: '최신순',

    // 배지
    bestseller: '베스트셀러',
    professional: '프로용',
    sale: '할인',
    new: '신상품',

    // 상품 정보
    totalProducts: '총',
    productsCount: '개 상품',
    reviews: '리뷰',
    detailButton: '자세히 보기',
    addToCart: '장바구니',

    // 페이지네이션
    previous: '이전',
    next: '다음',

    // CTA
    memberBenefitsTitle: '회원만의 특별한 혜택',
    memberBenefitsSubtitle: '지금 회원가입하고 최대 20% 할인받으세요',
    signupButton: '회원가입하기'
  }
}

// 자동 번역 함수
const translateText = async (text, targetLang) => {
  if (targetLang === 'ko') return text

  try {
    // Google Translate API 시뮬레이션
    // 실제로는 Google Translate API나 다른 번역 서비스를 사용
    const translations = {
      en: {
        // 네비게이션
        '시술 서비스': 'Beauty Services',
        '교육 프로그램': 'Education Programs',
        '쇼핑': 'Shopping',
        '블로그': 'Blog',
        '로그인': 'Login',
        '회원가입': 'Sign Up',

        // 메인 페이지
        '아름다운 당신을 위한': 'For Beautiful You',
        '프리미엄 뷰티': 'Premium Beauty',
        '전문적인 시술 서비스, 체계적인 교육 프로그램, 그리고 고품질 뷰티 디바이스까지. 2ndBrush에서 모든 뷰티 솔루션을 만나보세요.': 'Professional beauty services, systematic education programs, and high-quality beauty devices. Discover all beauty solutions at 2ndBrush.',
        '무료 회원가입': 'Free Sign Up',
        '서비스 둘러보기': 'Explore Services',

        '전문 시술 서비스': 'Professional Beauty Services',
        '숙련된 전문가가 제공하는 프리미엄 뷰티 서비스': 'Premium beauty services provided by skilled professionals',

        '눈썹 시술': 'Eyebrow Services',
        '반영구 문신부터 리터치, 제거까지 완벽한 눈썹 라인을 만들어드립니다.': 'From semi-permanent tattoos to retouching and removal, we create perfect eyebrow lines.',

        '피부 관리': 'Skincare',
        '기본 관리부터 문제성 피부 집중 케어까지 맞춤형 피부 관리 서비스.': 'Customized skincare services from basic care to intensive care for problem skin.',

        '두피 문신': 'Scalp Tattooing',
        '헤어라인 교정과 밀도 보강으로 자연스럽고 완벽한 헤어라인을 완성.': 'Complete natural and perfect hairline with hairline correction and density enhancement.',

        '자세히 보기': 'Learn More',

        '만족한 고객': 'Satisfied Customers',
        '완료된 시술': 'Completed Procedures',
        '평균 만족도': 'Average Satisfaction',
        '프리미엄 제품': 'Premium Products',

        'Instagram에서 더 많은 소식을': 'More News on Instagram',
        '@2ndbrush_official을 팔로우하고 특별 혜택을 받아보세요': 'Follow @2ndbrush_official and get special benefits',
        '팔로우하기': 'Follow Us',

        '고객 후기': 'Customer Reviews',
        '2ndBrush와 함께한 고객들의 생생한 후기': 'Real reviews from customers who experienced 2ndBrush',

        '"눈썹 시술을 받았는데 정말 만족스러워요. 자연스러우면서도 또렷한 라인이 완성되었어요!"': '"I received eyebrow treatment and I\'m really satisfied. A natural yet clear line was completed!"',
        '김○○ 님': 'Ms. Kim○○',
        '눈썹 반영구 시술': 'Eyebrow Semi-permanent Treatment',

        '"교육 프로그램이 체계적이고 실무에 바로 적용할 수 있는 내용들이 많아서 도움이 되었어요."': '"The education program is systematic and has a lot of content that can be applied directly to practice, so it was helpful."',
        '이○○ 님': 'Ms. Lee○○',
        '심화 교육 과정': 'Advanced Education Course',

        '"온라인 예약이 편리하고, 구매한 디바이스도 품질이 정말 좋아요. 추천합니다!"': '"Online booking is convenient, and the quality of the device I purchased is really good. I recommend it!"',
        '박○○ 님': 'Ms. Park○○',
        '홈케어 디바이스 구매': 'Home Care Device Purchase',

        '지금 회원가입하고 특별 혜택을 받아보세요': 'Sign up now and get special benefits',
        'Instagram 팔로워라면 추가 10% 할인!': 'Additional 10% discount for Instagram followers!',

        // 푸터
        '서비스': 'Services',
        '교육': 'Education',
        '회사정보': 'Company Info',
        '온라인 예약': 'Online Booking',
        '기초 과정': 'Basic Course',
        '심화 과정': 'Advanced Course',
        '창업 과정': 'Startup Course',
        '교육 신청': 'Apply for Education',
        '이메일: contact@2ndbrush.com': 'Email: contact@2ndbrush.com',
        '전화: 02-1234-5678': 'Phone: 02-1234-5678',
        '개인정보처리방침': 'Privacy Policy',
        '이용약관': 'Terms of Service',
        '© 2024 2ndBrush. All rights reserved.': '© 2024 2ndBrush. All rights reserved.',
        'Made with ❤️ for beautiful you': 'Made with ❤️ for beautiful you'
      },
      zh: {
        // 네비게이션
        '시술 서비스': '美容服务',
        '교육 프로그램': '教育课程',
        '쇼핑': '购物',
        '블로그': '博客',
        '로그인': '登录',
        '회원가입': '注册',

        // 메인 페이지
        '아름다운 당신을 위한': '为美丽的您',
        '프리미엄 뷰티': '高端美容',
        '전문적인 시술 서비스, 체계적인 교육 프로그램, 그리고 고품질 뷰티 디바이스까지. 2ndBrush에서 모든 뷰티 솔루션을 만나보세요.': '专业的美容服务、系统化的教育课程以及高品质的美容设备。在2ndBrush发现所有美容解决方案。',
        '무료 회원가입': '免费注册',
        '서비스 둘러보기': '浏览服务',

        '전문 시술 서비스': '专业美容服务',
        '숙련된 전문가가 제공하는 프리미엄 뷰티 서비스': '由熟练专家提供的高端美容服务',

        '눈썹 시술': '眉毛美容',
        '반영구 문신부터 리터치, 제거까지 완벽한 눈썹 라인을 만들어드립니다.': '从半永久纹身到修饰、去除，为您打造完美的眉毛线条。',

        '피부 관리': '皮肤护理',
        '기본 관리부터 문제성 피부 집중 케어까지 맞춤형 피부 관리 서비스.': '从基础护理到问题肌肤集中护理的定制化皮肤护理服务。',

        '두피 문신': '头皮纹身',
        '헤어라인 교정과 밀도 보강으로 자연스럽고 완벽한 헤어라인을 완성.': '通过发际线矫正和密度增强，完成自然完美的发际线。',

        '자세히 보기': '了解更多',

        '만족한 고객': '满意客户',
        '완료된 시술': '完成的美容项目',
        '평균 만족도': '平均满意度',
        '프리미엄 제품': '高端产品',

        'Instagram에서 더 많은 소식을': '在Instagram上获取更多资讯',
        '@2ndbrush_official을 팔로우하고 특별 혜택을 받아보세요': '关注@2ndbrush_official获取特别优惠',
        '팔로우하기': '关注我们',

        '고객 후기': '客户评价',
        '2ndBrush와 함께한 고객들의 생생한 후기': '与2ndBrush一起的客户真实评价',

        '"눈썹 시술을 받았는데 정말 만족스러워요. 자연스러우면서도 또렷한 라인이 완성되었어요!"': '"我接受了眉毛美容服务，真的很满意。完成了自然而清晰的线条！"',
        '김○○ 님': '金○○女士',
        '눈썹 반영구 시술': '眉毛半永久美容',

        '"교육 프로그램이 체계적이고 실무에 바로 적용할 수 있는 내용들이 많아서 도움이 되었어요."': '"教育课程很系统，有很多可以直接应用到实践中的内容，很有帮助。"',
        '이○○ 님': '李○○女士',
        '심화 교육 과정': '深度教育课程',

        '"온라인 예약이 편리하고, 구매한 디바이스도 품질이 정말 좋아요. 추천합니다!"': '"在线预约很方便，购买的设备质量也很好。推荐！"',
        '박○○ 님': '朴○○女士',
        '홈케어 디바이스 구매': '家庭护理设备购买',

        '지금 회원가입하고 특별 혜택을 받아보세요': '立即注册并获得特别优惠',
        'Instagram 팔로워라면 추가 10% 할인!': 'Instagram关注者额外享受10%折扣！',

        // 푸터
        '서비스': '服务',
        '교육': '教育',
        '회사정보': '公司信息',
        '온라인 예약': '在线预约',
        '기초 과정': '基础课程',
        '심화 과정': '深度课程',
        '창업 과정': '创业课程',
        '교육 신청': '申请教育',
        '이메일: contact@2ndbrush.com': '邮箱: contact@2ndbrush.com',
        '전화: 02-1234-5678': '电话: 02-1234-5678',
        '개인정보처리방침': '隐私政策',
        '이용약관': '使用条款',
        '© 2024 2ndBrush. All rights reserved.': '© 2024 2ndBrush. 版权所有。',
        'Made with ❤️ for beautiful you': '用❤️为美丽的您制作'
      }
    }

    return translations[targetLang]?.[text] || text
  } catch (error) {
    console.error('Translation error:', error)
    return text
  }
}

// 중첩 객체 번역 함수
const translateObject = async (obj, targetLang) => {
  if (targetLang === 'ko') return obj

  const translated = {}
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      translated[key] = await translateText(value, targetLang)
    } else if (typeof value === 'object' && value !== null) {
      translated[key] = await translateObject(value, targetLang)
    } else {
      translated[key] = value
    }
  }
  return translated
}

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('ko')
  const [texts, setTexts] = useState(DEFAULT_TEXTS)
  const [isLoading, setIsLoading] = useState(false)

  // 언어 변경 함수
  const changeLanguage = async (langCode) => {
    if (langCode === currentLanguage) return

    setIsLoading(true)
    try {
      const translatedTexts = await translateObject(DEFAULT_TEXTS, langCode)
      setTexts(translatedTexts)
      setCurrentLanguage(langCode)

      // 로컬 스토리지에 저장
      localStorage.setItem('selectedLanguage', langCode)
    } catch (error) {
      console.error('언어 변경 오류:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // 번역 함수
  const t = (key) => {
    const keys = key.split('.')
    let value = texts

    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) break
    }

    return value || key
  }

  // 컴포넌트 마운트 시 저장된 언어 불러오기
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage')
    if (savedLanguage && savedLanguage !== 'ko') {
      changeLanguage(savedLanguage)
    }
  }, [])

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    isLoading,
    supportedLanguages: SUPPORTED_LANGUAGES
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}