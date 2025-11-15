'use client'

import Link from 'next/link'
import { ArrowRight, Star, Users, Calendar, ShoppingBag } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation('common')
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-crimson-500/10 animate-gradient"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="font-display text-5xl md:text-8xl font-bold text-gray-900 mb-6 animate-slide-up">
              {t('home.heroTitle1')}
              <br />
              <span className="text-gradient">{t('home.heroTitle2')}</span>
            </h1>
            <p className="font-modern text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              {t('home.heroSubtitle')}
            </p>
            <div className="flex justify-center">
              <Link
                href="/services"
                className="glass-effect text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/20 backdrop-blur-sm"
              >
                {t('home.exploreServices')}
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
              {t('home.servicesTitle')}
            </h2>
            <p className="font-modern text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              {t('home.servicesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="service-card glass-effect p-8 rounded-3xl text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-subtle">
                <span className="text-3xl">👁️</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900">{t('home.eyebrowTitle')}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('home.eyebrowDesc')}
              </p>
              <Link
                href="/services/eyebrow"
                className="text-primary-600 hover:text-primary-700 font-bold inline-flex items-center transition-all duration-300 hover:scale-105"
              >
                {t('home.seeMore')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="service-card glass-effect p-8 rounded-3xl text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-subtle">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900">{t('home.skincareTitle')}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('home.skincareDesc')}
              </p>
              <Link
                href="/services/skincare"
                className="text-secondary-600 hover:text-secondary-700 font-bold inline-flex items-center transition-all duration-300 hover:scale-105"
              >
                {t('home.seeMore')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="service-card glass-effect p-8 rounded-3xl text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-mocha-400 to-mocha-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-subtle">
                <span className="text-3xl">💇</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900">{t('home.scalpTitle')}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('home.scalpDesc')}
              </p>
              <Link
                href="/services/scalp"
                className="text-mocha-600 hover:text-mocha-700 font-bold inline-flex items-center transition-all duration-300 hover:scale-105"
              >
                {t('home.seeMore')}
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
              <div className="font-modern text-gray-700 font-medium">{t('home.statsCustomers')}</div>
            </div>
            <div className="group">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-2">3,000+</div>
              <div className="font-modern text-gray-700 font-medium">{t('home.statsProcedures')}</div>
            </div>
            <div className="group">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="font-modern text-gray-700 font-medium">{t('home.statsRating')}</div>
            </div>
            <div className="group">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-br from-crimson-400 to-crimson-600 group-hover:scale-110 transition-transform duration-300">
                  <ShoppingBag className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-2">500+</div>
              <div className="font-modern text-gray-700 font-medium">{t('home.statsProducts')}</div>
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
              {t('home.instagramTitle')}
            </h2>
            <p className="font-modern text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('home.instagramSubtitle')}
            </p>
            <a
              href="https://instagram.com/2ndbrush_official"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-crimson-500 hover:from-purple-600 hover:via-pink-600 hover:to-crimson-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 inline-flex items-center neon-glow hover:scale-105 transform"
            >
              {t('home.followUs')}
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
              {t('home.testimonialsTitle')}
            </h2>
            <p className="font-modern text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              {t('home.testimonialsSubtitle')}
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
                {t('home.testimonial1')}
              </p>
              <div className="font-display font-bold text-gray-900 text-lg">{t('home.testimonial1Name')}</div>
              <div className="text-gray-600 font-medium">{t('home.testimonial1Service')}</div>
            </div>

            <div className="glass-effect p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 text-accent-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium text-lg">
                {t('home.testimonial2')}
              </p>
              <div className="font-display font-bold text-gray-900 text-lg">{t('home.testimonial2Name')}</div>
              <div className="text-gray-600 font-medium">{t('home.testimonial2Service')}</div>
            </div>

            <div className="glass-effect p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 text-accent-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium text-lg">
                {t('home.testimonial3')}
              </p>
              <div className="font-display font-bold text-gray-900 text-lg">{t('home.testimonial3Name')}</div>
              <div className="text-gray-600 font-medium">{t('home.testimonial3Service')}</div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}