'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, MessageCircle } from 'lucide-react'

// 임시 제품 데이터 (실제로는 API에서 가져올 것)
const products = [
  {
    id: '1',
    name: '프리미엄 뷰티 디바이스',
    category: '홈케어 디바이스',
    price: 299000,
    originalPrice: 350000,
    rating: 4.8,
    reviews: 124,
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=600&fit=crop&crop=center',
    ],
    badge: '베스트셀러',
    description: '최신 LED 테크놀로지를 적용한 프리미엄 홈케어 디바이스입니다. 전문 살롱 수준의 케어를 집에서도 경험할 수 있습니다.',
    features: [
      '7가지 LED 파장으로 다양한 피부 문제 해결',
      '의료용 등급의 안전한 LED 사용',
      '타이머 기능으로 자동 종료',
      '무선 사용 가능 (배터리 내장)',
      '얼굴 전체 커버 가능한 대형 사이즈'
    ],
    specifications: {
      '크기': '22cm x 18cm x 12cm',
      '무게': '450g',
      '배터리': '리튬이온 2000mAh',
      '사용시간': '연속 20분 x 10회 사용',
      '충전시간': '2시간',
      '보증기간': '1년'
    },
    inStock: true,
    stockCount: 15
  },
  {
    id: '2',
    name: '전문가용 시술 도구 세트',
    category: '시술 도구',
    price: 180000,
    rating: 4.9,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop&crop=center',
    ],
    badge: '프로용',
    description: '전문가들이 사용하는 고급 시술 도구 완벽 세트입니다. 정밀한 시술을 위한 필수 도구들이 포함되어 있습니다.',
    features: [
      '스테인리스 스틸 고급 소재',
      '멸균 처리된 위생적인 포장',
      '다양한 시술에 활용 가능',
      '전용 케이스 포함',
      '정밀 가공된 날카로운 끝단'
    ],
    specifications: {
      '구성품': '핀셋 5종, 가위 2종, 면봉, 브러시',
      '소재': 'Stainless Steel 316L',
      '케이스': '가죽 전용 케이스',
      '원산지': '독일',
      '보증기간': '6개월'
    },
    inStock: true,
    stockCount: 7
  }
]

export default function ProductDetailPage({ params }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlist, setIsWishlist] = useState(false)
  
  // URL에서 제품 ID 추출
  const productId = params.id
  const product = products.find(p => p.id === productId)
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">제품을 찾을 수 없습니다</h1>
          <Link href="/shop" className="text-primary-600 hover:text-primary-700">
            쇼핑 홈으로 돌아가기
          </Link>
        </div>
      </div>
    )
  }

  const discountPercentage = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">홈</Link>
            <span className="text-gray-400">/</span>
            <Link href="/shop" className="text-gray-500 hover:text-gray-700">쇼핑</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{product.category}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link 
          href="/shop"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          쇼핑 목록으로 돌아가기
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-primary-600' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Badge and Category */}
            <div className="flex items-center space-x-2">
              {product.badge && (
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  product.badge === '베스트셀러' ? 'bg-red-100 text-red-800' :
                  product.badge === '프로용' ? 'bg-blue-100 text-blue-800' :
                  product.badge === '할인' ? 'bg-green-100 text-green-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {product.badge}
                </span>
              )}
              <span className="text-sm text-gray-500">{product.category}</span>
            </div>

            {/* Product Name */}
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-gray-900">
                  {product.rating}
                </span>
              </div>
              <span className="text-sm text-gray-500">({product.reviews}개 후기)</span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                {product.originalPrice && (
                  <>
                    <span className="text-2xl text-gray-400 line-through">
                      {product.originalPrice.toLocaleString()}원
                    </span>
                    <span className="text-lg font-bold text-red-600">
                      {discountPercentage}% 할인
                    </span>
                  </>
                )}
              </div>
              <div className="text-4xl font-bold text-gray-900">
                {product.price.toLocaleString()}원
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              {product.inStock ? (
                <>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-600 font-medium">재고 있음</span>
                  <span className="text-gray-500">({product.stockCount}개 남음)</span>
                </>
              ) : (
                <>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-red-600 font-medium">품절</span>
                </>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <span className="font-medium">수량:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-gray-600 hover:text-gray-800"
                >
                  -
                </button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-gray-600 hover:text-gray-800"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                disabled={!product.inStock}
                className="flex-1 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                장바구니 담기
              </button>
              <button
                onClick={() => setIsWishlist(!isWishlist)}
                className={`p-4 border-2 rounded-lg transition-colors ${
                  isWishlist
                    ? 'border-red-500 text-red-500'
                    : 'border-gray-300 text-gray-600 hover:border-gray-400'
                }`}
              >
                <Heart className={`w-6 h-6 ${isWishlist ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Buy Now Button */}
            <button
              disabled={!product.inStock}
              className="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-300 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
            >
              바로 구매하기
            </button>

            {/* Benefits */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Truck className="w-5 h-5" />
                <span>전국 무료배송 (3만원 이상 주문시)</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <RotateCcw className="w-5 h-5" />
                <span>7일 내 무료 교환/반품</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Shield className="w-5 h-5" />
                <span>정품 보장 및 A/S 지원</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button className="py-4 px-1 border-b-2 border-primary-600 font-medium text-primary-600">
                상세 정보
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-700">
                후기 ({product.reviews})
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-700">
                Q&A
              </button>
            </nav>
          </div>

          <div className="py-8 space-y-8">
            {/* Features */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">주요 특징</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">제품 사양</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key}>
                      <dt className="font-medium text-gray-900">{key}</dt>
                      <dd className="text-gray-600">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}