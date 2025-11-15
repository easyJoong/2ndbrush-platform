'use client'

import Link from 'next/link'
import { Clock, Users, Award, CheckCircle, ArrowRight, BookOpen, Calendar } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const courses = [
  {
    id: 1,
    nameKey: 'education.basicCourse',
    duration: '4주',
    levelKey: 'education.beginner',
    students: 245,
    price: 280000,
    originalPrice: 350000,
    rating: 4.8,
    image: '/api/placeholder/400/250',
    descriptionKey: 'education.basicDesc',
    features: [
      '뷰티 기초 이론',
      '도구 사용법',
      '위생 관리',
      '고객 상담 기법',
      '실습 프로젝트'
    ],
    schedule: '주 2회, 총 8회',
    certificate: true
  },
  {
    id: 2,
    nameKey: 'education.advancedCourse',
    duration: '8주',
    levelKey: 'education.intermediate',
    students: 156,
    price: 480000,
    rating: 4.9,
    image: '/api/placeholder/400/250',
    descriptionKey: 'education.advancedDesc',
    features: [
      '고급 시술 기법',
      '색상학 이론',
      '피부 분석',
      '문제 해결 방법',
      '포트폴리오 제작'
    ],
    schedule: '주 2회, 총 16회',
    certificate: true,
    popular: true
  },
  {
    id: 3,
    nameKey: 'education.startupCourse',
    duration: '12주',
    levelKey: 'education.expert',
    students: 89,
    price: 680000,
    rating: 4.7,
    image: '/api/placeholder/400/250',
    descriptionKey: 'education.startupDesc',
    features: [
      '마스터 시술 기법',
      '샵 운영 노하우',
      '마케팅 전략',
      '고객 관리',
      '창업 컨설팅'
    ],
    schedule: '주 2회, 총 24회',
    certificate: true
  },
  {
    id: 4,
    nameKey: 'education.oneDayClass',
    duration: '1일',
    levelKey: 'education.allLevels',
    students: 324,
    price: 95000,
    rating: 4.6,
    image: '/api/placeholder/400/250',
    descriptionKey: 'education.oneDayDesc',
    features: [
      '트렌드 기법 체험',
      '기본 도구 사용법',
      '간단한 실습',
      '질의응답 시간',
      '수료증 발급'
    ],
    schedule: '6시간 집중 과정',
    certificate: true
  }
]

const benefits = [
  {
    icon: Award,
    titleKey: 'education.certificationTitle',
    descriptionKey: 'education.certificationDesc'
  },
  {
    icon: Users,
    titleKey: 'education.smallClassTitle',
    descriptionKey: 'education.smallClassDesc'
  },
  {
    icon: BookOpen,
    titleKey: 'education.practicalTitle',
    descriptionKey: 'education.practicalDesc'
  }
]

export default function EducationPage() {
  const { t } = useTranslation('common')

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('education.heroTitle')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('education.heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/education/apply"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                {t('education.applyButton')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                {t('education.consultButton')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('education.coursesTitle')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('education.coursesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                {/* Course Image */}
                <div className="relative">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">교육 과정 이미지</span>
                  </div>
                  {course.popular && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {t('education.popular')}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-semibold text-gray-900">{t(course.levelKey)}</span>
                  </div>
                </div>

                {/* Course Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{t(course.nameKey)}</h3>
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span className="text-sm font-semibold">{course.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{t(course.descriptionKey)}</p>

                  {/* Course Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      {course.students}명 {t('education.students')}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {course.schedule}
                    </div>
                    {course.certificate && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Award className="w-4 h-4 mr-2" />
                        {t('education.certificate')}
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">{t('education.curriculum')}</h4>
                    <ul className="space-y-2">
                      {course.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {course.features.length > 3 && (
                        <li className="text-sm text-gray-500">
                          +{course.features.length - 3}{t('education.more')}
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between">
                    <div>
                      {course.originalPrice && (
                        <span className="text-sm text-gray-400 line-through mr-2">
                          {course.originalPrice.toLocaleString()}{t('education.price')}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-primary-600">
                        {course.price.toLocaleString()}{t('education.price')}
                      </span>
                    </div>
                    <Link
                      href={`/education/${course.nameKey.toLowerCase()}`}
                      className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                    >
                      {t('education.detailButton')}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('education.benefitsTitle')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('education.benefitsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl text-center shadow-sm">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t(benefit.titleKey)}</h3>
                <p className="text-gray-600">{t(benefit.descriptionKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('education.successTitle')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('education.successSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <blockquote className="text-gray-600 mb-4">
                {t('education.review1')}
              </blockquote>
              <div className="text-center">
                <div className="font-semibold">{t('education.review1Author')}</div>
                <div className="text-sm text-gray-500">{t('education.review1Role')}</div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <blockquote className="text-gray-600 mb-4">
                {t('education.review2')}
              </blockquote>
              <div className="text-center">
                <div className="font-semibold">{t('education.review2Author')}</div>
                <div className="text-sm text-gray-500">{t('education.review2Role')}</div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <blockquote className="text-gray-600 mb-4">
                {t('education.review3')}
              </blockquote>
              <div className="text-center">
                <div className="font-semibold">{t('education.review3Author')}</div>
                <div className="text-sm text-gray-500">{t('education.review3Role')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('education.ctaTitle')}
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            {t('education.ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/education/apply"
              className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              {t('education.applyButton')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button className="bg-primary-700 hover:bg-primary-800 text-white border border-primary-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              {t('education.freeConsult')}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
