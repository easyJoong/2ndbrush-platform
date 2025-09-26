import Link from 'next/link'
import { ArrowRight, Clock, Award, Users, CheckCircle } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              전문 시술 서비스
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              숙련된 전문가가 제공하는 프리미엄 뷰티 서비스로 
              당신만의 아름다움을 완성해보세요.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Eyebrow Services */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">👁️</span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">눈썹 시술</h2>
              <p className="text-gray-600 mb-6">
                자연스럽고 완벽한 눈썹 라인을 만들어드립니다. 반영구 문신부터 리터치까지 전문적인 서비스를 제공합니다.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  눈썹 반영구 문신
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  눈썹 리터치
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  눈썹 제거
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-2xl font-bold text-primary-600">150,000원</span>
                  <span className="text-gray-500 ml-1">부터</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  2-3시간
                </div>
              </div>

              <Link 
                href="/services/eyebrow"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                자세히 보기
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Skincare Services */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">✨</span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">피부 관리</h2>
              <p className="text-gray-600 mb-6">
                개인 맞춤형 피부 분석을 통한 전문 피부 관리 서비스. 기본 관리부터 문제성 피부 집중 케어까지 제공합니다.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  기본 피부 관리
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  스페셜 케어
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  문제성 피부 집중 케어
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-2xl font-bold text-primary-600">80,000원</span>
                  <span className="text-gray-500 ml-1">부터</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  1-2시간
                </div>
              </div>

              <Link 
                href="/services/skincare"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                자세히 보기
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Scalp Services */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">💇</span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">두피 문신</h2>
              <p className="text-gray-600 mb-6">
                자연스러운 헤어라인 교정과 밀도 보강으로 완벽한 헤어라인을 만들어드립니다.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  헤어라인 교정
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  밀도 보강
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  상처 커버
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-2xl font-bold text-primary-600">200,000원</span>
                  <span className="text-gray-500 ml-1">부터</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  3-4시간
                </div>
              </div>

              <Link 
                href="/services/scalp"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                자세히 보기
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              왜 2ndBrush를 선택해야 할까요?
            </h2>
            <p className="text-xl text-gray-600">
              전문성과 신뢰성을 바탕으로 한 프리미엄 서비스
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">전문 자격증 보유</h3>
              <p className="text-gray-600">
                모든 시술자는 관련 자격증을 보유하고 지속적인 교육을 받은 전문가입니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">개인 맞춤 상담</h3>
              <p className="text-gray-600">
                개인의 얼굴형과 스타일에 맞는 맞춤형 상담과 시술을 제공합니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">사후 관리 서비스</h3>
              <p className="text-gray-600">
                시술 후에도 지속적인 관리와 필요시 무료 터치업을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            지금 예약하고 전문 시술을 받아보세요
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            온라인 예약으로 편리하게, 전문가와의 상담으로 안전하게
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services/booking"
              className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              온라인 예약하기
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/auth/signup"
              className="bg-primary-700 hover:bg-primary-800 text-white border border-primary-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              회원가입 (예약 필수)
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}