import ProductDetailClient from './ProductDetailClient'
import { products } from '@/data/products'

// Static generation을 위한 파라미터 생성
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductDetailPage({ params }) {
  // URL에서 제품 ID 추출
  const productId = params.id
  const product = products.find(p => p.id === productId)

  return <ProductDetailClient product={product} />
}
