import Link from 'next/link'
import { ArrowRight, Star, Users, Calendar, ShoppingBag } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-crimson-500/10 animate-gradient"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="font-display text-5xl md:text-8xl font-bold text-gray-900 mb-6 animate-slide-up">
              아름다운 당신을 위한
              <br />
              <span className="text-gradient">프리미엄 뷰티</span>
            </h1>
            <p className="font-modern text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              전문적인 시술 서비스, 체계적인 교육 프로그램, 그리고 고품질 뷰티 디바이스까지.
              2ndBrush에서 모든 뷰티 솔루션을 만나보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/signup"
                className="animated-bg text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center neon-glow hover:scale-105 transform"
              >
                무료 회원가입
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="glass-effect text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/20 backdrop-blur-sm"
              >
                서비스 둘러보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-white to-primary-50/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              전문 시술 서비스
            </h2>
            <p className="font-modern text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              숙련된 전문가가 제공하는 프리미엄 뷰티 서비스
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="service-card glass-effect p-8 rounded-3xl text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-subtle">
                <span className="text-3xl">👁️</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900">눈썹 시술</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                반영구 문신부터 리터치, 제거까지 완벽한 눈썹 라인을 만들어드립니다.
              </p>
              <Link
                href="/services/eyebrow"
                className="text-primary-600 hover:text-primary-700 font-bold inline-flex items-center transition-all duration-300 hover:scale-105"
              >
                자세히 보기
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="service-card glass-effect p-8 rounded-3xl text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-subtle">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900">피부 관리</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                기본 관리부터 문제성 피부 집중 케어까지 맞춤형 피부 관리 서비스.
              </p>
              <Link
                href="/services/skincare"
                className="text-secondary-600 hover:text-secondary-700 font-bold inline-flex items-center transition-all duration-300 hover:scale-105"
              >
                자세히 보기
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="service-card glass-effect p-8 rounded-3xl text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-mocha-400 to-mocha-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-subtle">
                <span className="text-3xl">💇</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900">두피 문신</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                헤어라인 교정과 밀도 보강으로 자연스럽고 완벽한 헤어라인을 완성.
              </p>
              <Link
                href="/services/scalp"
                className="text-mocha-600 hover:text-mocha-700 font-bold inline-flex items-center transition-all duration-300 hover:scale-105"
              >
                자세히 보기
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 mocha-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-2">1,500+</div>
              <div className="font-modern text-gray-700 font-medium">만족한 고객</div>
            </div>
            <div className="group">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-2">3,000+</div>
              <div className="font-modern text-gray-700 font-medium">완료된 시술</div>
            </div>
            <div className="group">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="font-modern text-gray-700 font-medium">평균 만족도</div>
            </div>
            <div className="group">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-br from-crimson-400 to-crimson-600 group-hover:scale-110 transition-transform duration-300">
                  <ShoppingBag className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-2">500+</div>
              <div className="font-modern text-gray-700 font-medium">프리미엄 제품</div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-gradient-to-br from-white via-primary-50/30 to-crimson-50/30 relative overflow-hidden">
        <div className="absolute inset-0 animated-bg opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Instagram에서 더 많은 소식을
            </h2>
            <p className="font-modern text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              @2ndbrush_official을 팔로우하고 특별 혜택을 받아보세요
            </p>
            <a
              href="https://instagram.com/2ndbrush_official"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-crimson-500 hover:from-purple-600 hover:via-pink-600 hover:to-crimson-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 inline-flex items-center neon-glow hover:scale-105 transform"
            >
              팔로우하기
              <ArrowRight className="ml-3 w-6 h-6" />
            </a>
          </div>

          {/* Instagram Grid Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gradient-to-br from-primary-200 via-secondary-200 to-crimson-200 rounded-3xl flex items-center justify-center transform hover:scale-105 transition-all duration-300 glass-effect group"
              >
                <span className="text-gray-700 font-bold text-lg group-hover:text-primary-600 transition-colors">Instagram Post</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 crimson-gradient relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              고객 후기
            </h2>
            <p className="font-modern text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              2ndBrush와 함께한 고객들의 생생한 후기
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 text-accent-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium text-lg">
                &quot;눈썹 시술을 받았는데 정말 만족스러워요. 자연스러우면서도 또렷한 라인이 완성되었어요!&quot;
              </p>
              <div className="font-display font-bold text-gray-900 text-lg">김○○ 님</div>
              <div className="text-gray-600 font-medium">눈썹 반영구 시술</div>
            </div>

            <div className="glass-effect p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 text-accent-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium text-lg">
                &quot;교육 프로그램이 체계적이고 실무에 바로 적용할 수 있는 내용들이 많아서 도움이 되었어요.&quot;
              </p>
              <div className="font-display font-bold text-gray-900 text-lg">이○○ 님</div>
              <div className="text-gray-600 font-medium">심화 교육 과정</div>
            </div>

            <div className="glass-effect p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 text-accent-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium text-lg">
                &quot;온라인 예약이 편리하고, 구매한 디바이스도 품질이 정말 좋아요. 추천합니다!&quot;
              </p>
              <div className="font-display font-bold text-gray-900 text-lg">박○○ 님</div>
              <div className="text-gray-600 font-medium">홈케어 디바이스 구매</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="animated-bg absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            지금 회원가입하고 특별 혜택을 받아보세요
          </h2>
          <p className="font-modern text-xl md:text-2xl text-white/90 mb-8">
            Instagram 팔로워라면 추가 10% 할인!
          </p>
          <Link
            href="/auth/signup"
            className="glass-effect text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 inline-flex items-center neon-glow hover:scale-105 transform border border-white/20"
          >
            무료 회원가입
            <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </section>
    </>
  )
}