'use client';

import { useState } from 'react';
import Link from 'next/link';

const CATEGORIES = [
  { id: 'all', vi: 'Tất cả', en: 'All' },
  { id: 'otc', vi: 'Thuốc OTC', en: 'OTC Drugs' },
  { id: 'etc', vi: 'Thuốc ETC', en: 'ETC Drugs' },
  { id: 'thucpham', vi: 'Thực phẩm chức năng', en: 'Health Supplements' },
  { id: 'thietbi', vi: 'Thiết bị y tế', en: 'Medical Devices' },
];

const PRODUCTS = [
  { id: 1, name: 'HBN Vitamin C 1000mg', category: 'otc', desc: 'Bổ sung Vitamin C, tăng cường miễn dịch', img: null, tag: 'Bán chạy' },
  { id: 2, name: 'HBN Calci D3', category: 'thucpham', desc: 'Bổ sung canxi và Vitamin D3 cho xương chắc khỏe', img: null, tag: null },
  { id: 3, name: 'HBN Paracetamol 500', category: 'otc', desc: 'Giảm đau, hạ sốt nhanh', img: null, tag: null },
  { id: 4, name: 'HBN Omega 3-6-9', category: 'thucpham', desc: 'Hỗ trợ tim mạch và não bộ', img: null, tag: 'Mới' },
  { id: 5, name: 'HBN Amoxicillin 500', category: 'etc', desc: 'Kháng sinh phổ rộng', img: null, tag: null },
  { id: 6, name: 'HBN B-Complex', category: 'thucpham', desc: 'Bổ sung vitamin nhóm B tổng hợp', img: null, tag: null },
  { id: 7, name: 'HBN Máy đo huyết áp', category: 'thietbi', desc: 'Đo huyết áp tự động, chính xác cao', img: null, tag: 'Mới' },
  { id: 8, name: 'HBN Cetirizine 10mg', category: 'otc', desc: 'Kháng histamin, điều trị dị ứng', img: null, tag: null },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = PRODUCTS.filter((p) => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-primary-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sản Phẩm</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Hơn 200 sản phẩm dược phẩm chất lượng cao được đăng ký lưu hành toàn quốc
          </p>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="py-8 bg-white border-b border-neutral-200 sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-primary-50 hover:text-primary-700'
                  }`}
                >
                  {cat.vi}
                </button>
              ))}
            </div>
            {/* Search */}
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-neutral-300 rounded-lg px-4 py-2 text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-neutral-400">
              <p className="text-xl">Không tìm thấy sản phẩm phù hợp.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                  {/* Product image placeholder */}
                  <div className="relative h-48 bg-primary-50 flex items-center justify-center">
                    <div className="text-5xl">💊</div>
                    {product.tag && (
                      <span className="absolute top-3 right-3 bg-primary-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        {product.tag}
                      </span>
                    )}
                  </div>
                  {/* Product info */}
                  <div className="p-4">
                    <h3 className="font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-neutral-500 text-sm mb-3 leading-relaxed">{product.desc}</p>
                    <Link
                      href={`/san-pham/${product.id}`}
                      className="inline-block w-full text-center bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium py-2 rounded-lg transition-colors"
                    >
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA - Become a distributor */}
      <section className="py-16 bg-primary-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Trở Thành Nhà Phân Phối</h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Chúng tôi đang tìm kiếm các đối tác phân phối trên toàn quốc. Liên hệ ngay để biết thêm thông tin ưu đãi.
          </p>
          <Link
            href="/lien-he"
            className="inline-block bg-white text-primary-700 hover:bg-primary-50 font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            Liên hệ ngay
          </Link>
        </div>
      </section>
    </main>
  );
}
