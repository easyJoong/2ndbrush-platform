import Link from 'next/link'
import { Clock, Users, Award, CheckCircle, ArrowRight, BookOpen, Calendar } from 'lucide-react'

const courses = [
  {
    id: 1,
    name: '기초 과정',
    duration: '4주',
    level: '입문자',
    students: 245,
    price: 280000,
    originalPrice: 350000,
    rating: 4.8,
    image: '/api/placeholder/400/250',
    description: '뷰티 업계 입문자를 위한 기초 과정입니다. 이론부터 실습까지 체계적으로 배워보세요.',
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
    name: '심화 과정',
    duration: '8주',
    level: '중급자',
    students: 156,
    price: 480000,
    rating: 4.9,
    image: '/api/placeholder/400/250',
    description: '기초 과정 수료자를 위한 심화 과정입니다. 전문적인 기술과 노하우를 습득할 수 있습니다.',
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
    name: '창업 과정',
    duration: '12주',
    level: '전문가',
    students: 89,
    price: 680000,
    rating: 4.7,
    image: '/api/placeholder/400/250',
    description: '독립 창업을 목표로 하는 전문가를 위한 종합 과정입니다. 기술부터 경영까지 모든 것을 배웁니다.',
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
    name: '원데이 클래스',
    duration: '1일',
    level: '모든 레벨',
    students: 324,
    price: 95000,
    rating: 4.6,
    image: '/api/placeholder/400/250',
    description: '바쁜 일정 중에도 부담 없이 참여할 수 있는 하루 완성 클래스입니다.',
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
    title: '공인 수료증',
    description: '모든 과정 수료 시 2ndBrush 공인 수료증을 발급해드립니다.'
  },
  {
    icon: Users,
    title: '소수 정예',
    description: '강사 1명당 최대 8명의 소수 정예로 진행하여 개별 케어가 가능합니다.'
  },
  {
    icon: BookOpen,
    title: '실무 중심',
    description: '이론보다는 실제 현장에서 바로 활용 가능한 실무 중심 교육을 제공합니다.'
  }
]

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              전문가 교육 프로그램
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              체계적인 커리큘럼과 실무 중심의 교육으로 
              뷰티 전문가의 꿈을 실현해보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/education/apply"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                교육 신청하기
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                상담 예약
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
              교육 과정
            </h2>
            <p className="text-xl text-gray-600">
              초보자부터 전문가까지, 단계별 맞춤 교육
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
                        인기
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-semibold text-gray-900">{course.level}</span>
                  </div>
                </div>

                {/* Course Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{course.name}</h3>
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span className="text-sm font-semibold">{course.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{course.description}</p>

                  {/* Course Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      {course.students}명 수료
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {course.schedule}
                    </div>
                    {course.certificate && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Award className="w-4 h-4 mr-2" />
                        수료증 발급
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">주요 커리큘럼</h4>
                    <ul className="space-y-2">
                      {course.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {course.features.length > 3 && (
                        <li className="text-sm text-gray-500">
                          +{course.features.length - 3}개 더
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between">
                    <div>
                      {course.originalPrice && (
                        <span className="text-sm text-gray-400 line-through mr-2">
                          {course.originalPrice.toLocaleString()}원
                        </span>
                      )}
                      <span className="text-2xl font-bold text-primary-600">
                        {course.price.toLocaleString()}원
                      </span>
                    </div>
                    <Link 
                      href={`/education/${course.name.toLowerCase()}`}
                      className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                    >
                      자세히 보기
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
              2ndBrush 교육의 특별함
            </h2>
            <p className="text-xl text-gray-600">
              차별화된 교육 시스템으로 실력있는 전문가를 양성합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl text-center shadow-sm">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
              수료생 성공 사례
            </h2>
            <p className="text-xl text-gray-600">
              2ndBrush 교육으로 꿈을 이룬 수료생들의 이야기
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <blockquote className="text-gray-600 mb-4">
                &quot;창업 과정을 통해 체계적으로 배워서 지금은 성공적으로 샵을 운영하고 있어요. 정말 감사합니다!&quot;
              </blockquote>
              <div className="text-center">
                <div className="font-semibold">김○○ 원장</div>
                <div className="text-sm text-gray-500">창업 과정 수료 → 독립 창업</div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <blockquote className="text-gray-600 mb-4">
                &quot;기초부터 심화까지 단계별로 배워서 자신감을 갖고 고객을 응대할 수 있게 되었어요.&quot;
              </blockquote>
              <div className="text-center">
                <div className="font-semibold">이○○ 실장</div>
                <div className="text-sm text-gray-500">심화 과정 수료 → 대형샵 취업</div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <blockquote className="text-gray-600 mb-4">
                &quot;원데이 클래스로 시작해서 지금은 정규 과정까지 모두 수료했어요. 정말 알찬 교육이에요!&quot;
              </blockquote>
              <div className="text-center">
                <div className="font-semibold">박○○ 님</div>
                <div className="text-sm text-gray-500">전 과정 수료 → 프리랜서 활동</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            지금 시작하세요
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            전문가의 꿈, 2ndBrush와 함께 실현해보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/education/apply"
              className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              교육 신청하기
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button className="bg-primary-700 hover:bg-primary-800 text-white border border-primary-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              무료 상담 예약
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}