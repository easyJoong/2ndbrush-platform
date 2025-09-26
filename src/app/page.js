import Link from 'next/link'
import { ArrowRight, Star, Users, Calendar, ShoppingBag } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              아름다운 당신을 위한
              <br />
              <span className="text-primary-600">프리미엄 뷰티</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              전문적인 시술 서비스, 체계적인 교육 프로그램, 그리고 고품질 뷰티 디바이스까지.
              2ndBrush에서 모든 뷰티 솔루션을 만나보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/auth/signup"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                무료 회원가입
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/services"
                className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                서비스 둘러보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              전문 시술 서비스
            </h2>
            <p className="text-xl text-gray-600">
              숙련된 전문가가 제공하는 프리미엄 뷰티 서비스
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="service-card bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">눈썹 시술</h3>
              <p className="text-gray-600 mb-6">
                반영구 문신부터 리터치, 제거까지 완벽한 눈썹 라인을 만들어드립니다.
              </p>
              <Link 
                href="/services/eyebrow"
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
              >
                자세히 보기
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="service-card bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">피부 관리</h3>
              <p className="text-gray-600 mb-6">
                기본 관리부터 문제성 피부 집중 케어까지 맞춤형 피부 관리 서비스.
              </p>
              <Link 
                href="/services/skincare"
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
              >
                자세히 보기
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="service-card bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💇</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">두피 문신</h3>
              <p className="text-gray-600 mb-6">
                헤어라인 교정과 밀도 보강으로 자연스럽고 완벽한 헤어라인을 완성.
              </p>
              <Link 
                href="/services/scalp"
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
              >
                자세히 보기
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1,500+</div>
              <div className="text-gray-600">만족한 고객</div>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Calendar className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">3,000+</div>
              <div className="text-gray-600">완료된 시술</div>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Star className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600">평균 만족도</div>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <ShoppingBag className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">프리미엄 제품</div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Instagram에서 더 많은 소식을
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              @2ndbrush_official을 팔로우하고 특별 혜택을 받아보세요
            </p>
            <a 
              href="https://instagram.com/2ndbrush_official"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center"
            >
              팔로우하기
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Instagram Grid Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div 
                key={item}
                className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center"
              >
                <span className="text-primary-600 text-sm">Instagram Post</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              고객 후기
            </h2>
            <p className="text-xl text-gray-600">
              2ndBrush와 함께한 고객들의 생생한 후기
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &quot;눈썹 시술을 받았는데 정말 만족스러워요. 자연스러우면서도 또렷한 라인이 완성되었어요!&quot;
              </p>
              <div className="font-semibold text-gray-900">김○○ 님</div>
              <div className="text-gray-500 text-sm">눈썹 반영구 시술</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &quot;교육 프로그램이 체계적이고 실무에 바로 적용할 수 있는 내용들이 많아서 도움이 되었어요.&quot;
              </p>
              <div className="font-semibold text-gray-900">이○○ 님</div>
              <div className="text-gray-500 text-sm">심화 교육 과정</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &quot;온라인 예약이 편리하고, 구매한 디바이스도 품질이 정말 좋아요. 추천합니다!&quot;
              </p>
              <div className="font-semibold text-gray-900">박○○ 님</div>
              <div className="text-gray-500 text-sm">홈케어 디바이스 구매</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            지금 회원가입하고 특별 혜택을 받아보세요
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Instagram 팔로워라면 추가 10% 할인!
          </p>
          <Link 
            href="/auth/signup"
            className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
          >
            무료 회원가입
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}