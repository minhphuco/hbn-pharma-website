import Link from 'next/link';
import { notFound } from 'next/navigation';

// Placeholder data - sẽ được thay bằng Sanity CMS query sau
const PRODUCTS: Record<string, { name: string; category: string; desc: string; fullDesc: string; ingredients: string; uses: string; dosage: string; warnings: string }> = {
  '1': {
    name: 'HBN Vitamin C 1000mg',
    category: 'Thuốc OTC',
    desc: 'Bổ sung Vitamin C, tăng cường miễn dịch',
    fullDesc: 'HBN Vitamin C 1000mg là sản phẩm bổ sung vitamin C hàm lượng cao, giúp tăng cường hệ miễn dịch, chống oxy hóa và hỗ trợ hấp thu sắt. Được sản xuất theo tiêu chuẩn GMP-WHO.',
    ingredients: 'Ascorbic acid (Vitamin C) 1000mg, Tá dược vừa đủ 1 viên.',
    uses: 'Phòng và điều trị thiếu Vitamin C. Hỗ trợ tăng cường sức đề kháng.',
    dosage: 'Người lớn: 1 viên/ngày sau ăn. Trẻ em dưới 12 tuổi: theo chỉ định của bác sĩ.',
    warnings: 'Không dùng cho người mẫn cảm với thành phần của thuốc. Thận trọng khi dùng cho người sỏi thận.',
  },
};

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = PRODUCTS[params.id];

  if (!product) {
    notFound();
  }

  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-neutral-500 mb-8">
          <Link href="/" className="hover:text-primary-600">Trang chủ</Link>
          <span className="mx-2">/</span>
          <Link href="/san-pham" className="hover:text-primary-600">Sản phẩm</Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="bg-primary-50 rounded-2xl flex items-center justify-center h-80">
            <div className="text-8xl">💊</div>
          </div>

          {/* Info */}
          <div>
            <span className="inline-block bg-primary-100 text-primary-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold text-neutral-900 mb-4">{product.name}</h1>
            <p className="text-neutral-600 leading-relaxed mb-6">{product.fullDesc}</p>

            <div className="space-y-4">
              {[
                { label: 'Thành phần', value: product.ingredients },
                { label: 'Công dụng', value: product.uses },
                { label: 'Liều dùng', value: product.dosage },
                { label: 'Chú ý', value: product.warnings },
              ].map((item) => (
                <div key={item.label} className="border-l-4 border-primary-200 pl-4">
                  <div className="font-semibold text-neutral-900 mb-1">{item.label}</div>
                  <div className="text-neutral-600 text-sm">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <Link
                href="/lien-he"
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Liên hệ đặt hàng
              </Link>
              <Link
                href="/san-pham"
                className="border border-neutral-300 hover:border-primary-500 text-neutral-700 hover:text-primary-700 font-medium px-6 py-3 rounded-xl transition-colors"
              >
                Xem thêm sản phẩm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
