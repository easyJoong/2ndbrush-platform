// 임시 제품 데이터 (실제로는 API에서 가져올 것)
export const products = [
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
