/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com', 'images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // 패키지 import 최적화 - lucide-react 같은 아이콘 라이브러리
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // 개발 환경에서 fetch 로깅
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

module.exports = nextConfig