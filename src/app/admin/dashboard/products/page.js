'use client'

import { useState } from 'react'
import { Search, Plus, Edit, Trash2, Package, DollarSign, Image as ImageIcon } from 'lucide-react'

export default function ProductsPage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: '프리미엄 뷰티 디바이스',
      category: '홈케어 디바이스',
      price: 299000,
      stock: 15,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400'
    },
    {
      id: 2,
      name: '전문가용 시술 도구 세트',
      category: '시술 도구',
      price: 180000,
      stock: 25,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400'
    },
    {
      id: 3,
      name: '고농축 앰플 세트',
      category: '화장품/앰플',
      price: 125000,
      stock: 0,
      status: 'inactive',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400'
    },
    {
      id: 4,
      name: '교육 교재 (기초 과정)',
      category: '교육 교재',
      price: 45000,
      stock: 50,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400'
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    status: 'active',
    image: ''
  })

  const handleAdd = () => {
    setSelectedProduct(null)
    setFormData({
      name: '',
      category: '',
      price: '',
      stock: '',
      status: 'active',
      image: ''
    })
    setShowAddModal(true)
  }

  const handleEdit = (product) => {
    setSelectedProduct(product)
    setFormData(product)
    setShowAddModal(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (selectedProduct) {
      // 수정
      setProducts(products.map(p =>
        p.id === selectedProduct.id
          ? { ...formData, id: selectedProduct.id, price: Number(formData.price), stock: Number(formData.stock) }
          : p
      ))
      alert('상품이 수정되었습니다.')
    } else {
      // 추가
      const newProduct = {
        id: Math.max(...products.map(p => p.id), 0) + 1,
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock)
      }
      setProducts([...products, newProduct])
      alert('상품이 추가되었습니다.')
    }

    setShowAddModal(false)
  }

  const handleDelete = (id) => {
    if (!confirm('정말로 이 상품을 삭제하시겠습니까?')) return

    setProducts(products.filter(p => p.id !== id))
    alert('상품이 삭제되었습니다.')
  }

  const filteredProducts = products.filter(product =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">상품 관리</h1>
        <p className="text-gray-600 mt-2">전체 상품 목록 및 관리</p>
      </div>

      {/* Search & Add Button */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="상품명 또는 카테고리로 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <button
            onClick={handleAdd}
            className="flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            상품 추가
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            {/* Product Image */}
            <div className="relative h-48 bg-gray-100">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-gray-400" />
                </div>
              )}
              <div className="absolute top-2 right-2">
                <span className={`px-2 py-1 text-xs font-semibold rounded ${
                  product.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {product.status === 'active' ? '판매중' : '품절'}
                </span>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <p className="text-xs text-gray-500 mb-1">{product.category}</p>
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center text-primary-600">
                  <DollarSign className="w-4 h-4" />
                  <span className="font-bold">{product.price.toLocaleString()}원</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Package className="w-4 h-4 mr-1" />
                  <span>{product.stock}개</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(product)}
                  className="flex-1 flex items-center justify-center px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
                >
                  <Edit className="w-4 h-4 mr-1" />
                  수정
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="flex-1 flex items-center justify-center px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium"
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  삭제
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">검색 결과가 없습니다.</p>
        </div>
      )}

      {/* Add/Edit Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={() => setShowAddModal(false)} />

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {selectedProduct ? '상품 수정' : '상품 추가'}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">상품명</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">카테고리</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">선택하세요</option>
                        <option value="시술 도구">시술 도구</option>
                        <option value="홈케어 디바이스">홈케어 디바이스</option>
                        <option value="화장품/앰플">화장품/앰플</option>
                        <option value="교육 교재">교육 교재</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">가격 (원)</label>
                        <input
                          type="number"
                          value={formData.price}
                          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                          required
                          min="0"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">재고</label>
                        <input
                          type="number"
                          value={formData.stock}
                          onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                          required
                          min="0"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">이미지 URL</label>
                      <input
                        type="url"
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        placeholder="https://example.com/image.jpg"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">상태</label>
                      <select
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="active">판매중</option>
                        <option value="inactive">품절</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse gap-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium"
                  >
                    {selectedProduct ? '수정' : '추가'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="w-full sm:w-auto px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
                  >
                    취소
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
