import Link from 'next/link'
import { Calendar, User, Eye, Lock, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: '2024년 눈썹 트렌드: 자연스러운 아치형이 대세',
    excerpt: '올해 가장 인기 있는 눈썹 스타일과 관리 방법을 전문가가 직접 알려드립니다. 자연스럽고 또렷한 눈썹을 만드는 비법을 공개합니다.',
    author: '김미영 원장',
    date: '2024-01-15',
    category: '트렌드 정보',
    views: 1234,
    thumbnail: '/api/placeholder/400/250',
    featured: true
  },
  {
    id: 2,
    title: '시술 후 관리법: 완벽한 회복을 위한 7일 가이드',
    excerpt: '시술 후 올바른 관리 방법으로 더 오래, 더 아름다운 결과를 유지하세요. 전문가가 알려주는 실전 노하우입니다.',
    author: '박선영 실장',
    date: '2024-01-12',
    category: '시술 전/후 관리법',
    views: 892,
    thumbnail: '/api/placeholder/400/250'
  },
  {
    id: 3,
    title: '홈케어 디바이스 활용법: 집에서도 전문가 수준의 관리',
    excerpt: '2ndBrush에서 판매하는 프리미엄 디바이스들의 올바른 사용법과 효과를 극대화하는 팁을 공유합니다.',
    author: '이준호 팀장',
    date: '2024-01-10',
    category: '전문가 칼럼',
    views: 567,
    thumbnail: '/api/placeholder/400/250'
  },
  {
    id: 4,
    title: '고객 후기: 두피 문신으로 되찾은 자신감',
    excerpt: '실제 고객의 생생한 경험담과 before & after 사진을 통해 두피 문신의 놀라운 변화를 확인해보세요.',
    author: '2ndBrush',
    date: '2024-01-08',
    category: '고객 후기',
    views: 1456,
    thumbnail: '/api/placeholder/400/250'
  },
  {
    id: 5,
    title: '신제품 런칭: LED 테라피 마스크 출시',
    excerpt: '집에서도 전문적인 LED 테라피를 받을 수 있는 신제품이 출시되었습니다. 특별 론칭 이벤트도 함께 진행됩니다.',
    author: '2ndBrush',
    date: '2024-01-05',
    category: '이벤트/프로모션',
    views: 2103,
    thumbnail: '/api/placeholder/400/250'
  },
  {
    id: 6,
    title: '피부 타입별 맞춤 관리: 당신에게 맞는 케어 찾기',
    excerpt: '건성, 지성, 복합성, 민감성 피부별로 다른 관리법과 추천 제품을 전문가가 상세히 설명드립니다.',
    author: '최은지 원장',
    date: '2024-01-03',
    category: '전문가 칼럼',
    views: 734,
    thumbnail: '/api/placeholder/400/250'
  }
]

const categories = [
  { name: '전체', count: 45 },
  { name: '시술 전/후 관리법', count: 12 },
  { name: '트렌드 정보', count: 8 },
  { name: '전문가 칼럼', count: 15 },
  { name: '고객 후기', count: 7 },
  { name: '이벤트/프로모션', count: 3 }
]

// 회원 전용 페이지 컴포넌트
function MemberOnlyContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              뷰티 전문 블로그
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              전문가가 직접 작성한 뷰티 팁과 트렌드 정보를 
              회원들에게만 특별히 공개합니다.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-4">카테고리</h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button className="flex items-center justify-between w-full text-left hover:text-primary-600 transition-colors">
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500">({category.count})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-lg p-6 shadow-sm mt-6">
              <h3 className="font-semibold text-lg mb-4">인기 포스트</h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => (
                  <div key={post.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"></div>
                    <div>
                      <h4 className="text-sm font-medium line-clamp-2 mb-1">{post.title}</h4>
                      <p className="text-xs text-gray-500 flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {post.views}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Featured Post */}
            {blogPosts[0] && (
              <article className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="aspect-video md:aspect-square bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Featured 이미지</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-3">
                      <span className="bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-1 rounded">
                        {blogPosts[0].category}
                      </span>
                      <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded ml-2">
                        추천
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-4">{blogPosts[0].author}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{blogPosts[0].date}</span>
                      <Eye className="w-4 h-4 mr-1" />
                      <span>{blogPosts[0].views}</span>
                    </div>
                    <Link 
                      href={`/blog/post/${blogPosts[0].id}`}
                      className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                    >
                      자세히 읽기
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            )}

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.slice(1).map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">포스트 이미지</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{post.date}</span>
                      <Eye className="w-4 h-4 mr-1" />
                      <span>{post.views}</span>
                    </div>
                    <Link 
                      href={`/blog/post/${post.id}`}
                      className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                    >
                      더 읽기
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">이전</button>
                <button className="px-3 py-2 bg-primary-600 text-white rounded">1</button>
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">2</button>
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">3</button>
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">다음</button>
              </nav>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

// 비회원용 로그인 유도 컴포넌트
function LoginPrompt() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">회원 전용 콘텐츠</h2>
          <p className="text-gray-600 mb-8">
            전문가가 작성한 뷰티 팁과 트렌드 정보는 
            회원에게만 공개됩니다.
          </p>
          <div className="space-y-4">
            <Link 
              href="/auth/login"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors block"
            >
              로그인
            </Link>
            <Link 
              href="/auth/signup"
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-4 rounded-lg transition-colors block"
            >
              회원가입
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            회원가입은 무료이며, Instagram 팔로워라면 
            추가 혜택도 받으실 수 있습니다!
          </p>
        </div>
      </div>
    </div>
  )
}

export default function BlogPage() {
  // 실제로는 사용자 인증 상태를 확인해야 합니다
  const isLoggedIn = false // 임시로 false로 설정
  
  if (!isLoggedIn) {
    return <LoginPrompt />
  }
  
  return <MemberOnlyContent />
}