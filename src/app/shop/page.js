'use client'

import Link from 'next/link'
import { ShoppingCart, Star, Filter, Search } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const products = [
  {
    id: 1,
    name: '프리미엄 뷰티 디바이스',
    category: '홈케어 디바이스',
    price: 299000,
    originalPrice: 350000,
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center',
    badgeKey: 'shop.bestseller',
    description: '최신 LED 테크놀로지를 적용한 프리미엄 홈케어 디바이스입니다.'
  },
  {
    id: 2,
    name: '전문가용 시술 도구 세트',
    category: '시술 도구',
    price: 180000,
    rating: 4.9,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop&crop=center',
    badgeKey: 'shop.professional',
    description: '전문가들이 사용하는 고급 시술 도구 완벽 세트입니다.'
  },
  {
    id: 3,
    name: '고농축 앰플 세트',
    category: '화장품/앰플',
    price: 125000,
    originalPrice: 160000,
    rating: 4.7,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop&crop=center',
    badgeKey: 'shop.sale',
    description: '피부 깊숙이 흡수되는 고농축 앰플 3종 세트입니다.'
  },
  {
    id: 4,
    name: '교육 교재 (기초 과정)',
    category: '교육 교재',
    price: 45000,
    rating: 4.6,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&crop=center',
    description: '체계적인 뷰티 교육을 위한 전문 교재입니다.'
  },
  {
    id: 5,
    name: 'LED 마스크 테라피',
    category: '홈케어 디바이스',
    price: 189000,
    rating: 4.5,
    reviews: 91,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center',
    description: 'LED 광선 테라피로 피부를 케어하는 마스크 디바이스입니다.'
  },
  {
    id: 6,
    name: '프리미엄 세럼 컬렉션',
    category: '화장품/앰플',
    price: 95000,
    originalPrice: 120000,
    rating: 4.8,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop&crop=center',
    badgeKey: 'shop.new',
    description: '프리미엄 성분으로 제조된 세럼 컬렉션 5종 세트입니다.'
  }
]

export default function ShopPage() {
  const { t } = useTranslation('common')

  const categories = [
    { nameKey: 'shop.allProducts', count: 127 },
    { nameKey: 'shop.treatmentTools', count: 34 },
    { nameKey: 'shop.homeDevices', count: 28 },
    { nameKey: 'shop.cosmetics', count: 45 },
    { nameKey: 'shop.materials', count: 20 }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('shop.heroTitle')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('shop.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('shop.searchPlaceholder')}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            {/* Filter Button */}
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4 mr-2" />
              {t('shop.filter')}
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories */}
          <aside className="lg:w-64">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-4">{t('shop.categories')}</h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button className="flex items-center justify-between w-full text-left hover:text-primary-600 transition-colors">
                      <span>{t(category.nameKey)}</span>
                      <span className="text-sm text-gray-500">({category.count})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Range Filter */}
            <div className="bg-white rounded-lg p-6 shadow-sm mt-6">
              <h3 className="font-semibold text-lg mb-4">{t('shop.priceRange')}</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                  <span className="ml-2 text-sm">{t('shop.under50k')}</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                  <span className="ml-2 text-sm">{t('shop.range50to100k')}</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                  <span className="ml-2 text-sm">{t('shop.range100to200k')}</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                  <span className="ml-2 text-sm">{t('shop.over200k')}</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main Content - Products */}
          <main className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">{t('shop.totalProducts')} {products.length}{t('shop.productsCount')}</p>
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500">
                <option>{t('shop.recommended')}</option>
                <option>{t('shop.popular')}</option>
                <option>{t('shop.priceLow')}</option>
                <option>{t('shop.priceHigh')}</option>
                <option>{t('shop.newest')}</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  {/* Product Image */}
                  <div className="relative">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {product.badgeKey && (
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${
                          product.badgeKey === 'shop.bestseller' ? 'bg-red-100 text-red-800' :
                          product.badgeKey === 'shop.professional' ? 'bg-blue-100 text-blue-800' :
                          product.badgeKey === 'shop.sale' ? 'bg-green-100 text-green-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {t(product.badgeKey)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-1">{product.category}</div>
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>

                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      </div>
                      <span className="text-sm text-gray-400 ml-2">({product.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through mr-2">
                            {product.originalPrice.toLocaleString()}원
                          </span>
                        )}
                        <span className="text-xl font-bold text-gray-900">
                          {product.price.toLocaleString()}원
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Link
                        href={`/shop/product/${product.id}`}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors text-center"
                      >
                        {t('shop.detailButton')}
                      </Link>
                      <button className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-colors">
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">{t('shop.previous')}</button>
                <button className="px-3 py-2 bg-primary-600 text-white rounded">1</button>
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">2</button>
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">3</button>
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">{t('shop.next')}</button>
              </nav>
            </div>
          </main>
        </div>
      </div>

      {/* Member Benefits */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('shop.memberBenefitsTitle')}
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            {t('shop.memberBenefitsSubtitle')}
          </p>
          <Link
            href="/auth/signup"
            className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
          >
            {t('shop.signupButton')}
          </Link>
        </div>
      </section>
    </div>
  )
}
