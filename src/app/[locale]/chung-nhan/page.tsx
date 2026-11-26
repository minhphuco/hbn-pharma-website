import { useTranslations } from 'next-intl';

export default function CertificatesPage() {
  const certifications = [
    {
      code: 'GMP-WHO',
      nameVi: 'Thực hành tốt sản xuất thuốc theo tiêu chuẩn WHO',
      nameEn: 'Good Manufacturing Practice - World Health Organization',
      issuerVi: 'Bộ Y Tế Việt Nam',
      issuerEn: 'Ministry of Health Vietnam',
      year: '2008 - Hiện tại',
      descVi: 'Đảm bảo toàn bộ dây chuyền sản xuất đạt tiêu chuẩn nghiêm ngặt về kiểm soát vi sinh, nhiệt độ, độ ẩm và quy trình vô trùng.',
      descEn: 'Ensures all production lines adhere to strict microbiological control, temperature, humidity, and aseptic standards.',
      icon: '🏆',
    },
    {
      code: 'GDP',
      nameVi: 'Thực hành tốt phân phối thuốc (Good Distribution Practices)',
      nameEn: 'Good Distribution Practices Certification',
      issuerVi: 'Cục Quản lý Dược',
      issuerEn: 'Drug Administration of Vietnam',
      year: '2012 - Hiện tại',
      descVi: 'Hệ thống kho bãi bảo quản đạt chuẩn GSP, chuỗi cung ứng lạnh (cold chain) đảm bảo chất lượng thuốc nguyên vẹn đến tay khách hàng.',
      descEn: 'Standardized GSP warehousing and cold chain logistics ensuring pharmaceutical integrity to end consumers.',
      icon: '📦',
    },
    {
      code: 'ISO 9001:2015',
      nameVi: 'Hệ thống Quản lý Chất lượng Tiêu chuẩn Quốc tế',
      nameEn: 'International Quality Management System ISO 9001:2015',
      issuerVi: 'Tổ chức Tiêu chuẩn hóa Quốc tế',
      issuerEn: 'International Organization for Standardization',
      year: '2016 - Hiện tại',
      descVi: 'Chuẩn hóa quy trình vận hành, quản trị chất lượng sản phẩm và dịch vụ chăm sóc khách hàng theo chuẩn quốc tế.',
      descEn: 'Standardized operations, quality management, and client support following international benchmarks.',
      icon: '🎖️',
    },
    {
      code: 'GLP',
      nameVi: 'Thực hành tốt phòng kiểm nghiệm thuốc (Good Laboratory Practices)',
      nameEn: 'Good Laboratory Practices Certification',
      issuerVi: 'Viện Kiểm Nghiệm Thuốc',
      issuerEn: 'National Institute of Drug Quality Control',
      year: '2018 - Hiện tại',
      descVi: 'Hệ thống phòng lab kiểm nghiệm phân tích hoạt chất, độ hòa tan và độ tinh khiết hiện đại hàng đầu.',
      descEn: 'State-of-the-art analytical testing lab for active pharmaceutical ingredients, dissolution, and purity.',
      icon: '🔬',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-3 py-1 bg-primary-700 text-primary-200 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Tiêu Chuẩn & Chứng Nhận
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Chứng Nhận Chất Lượng Quốc Tế</h1>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto leading-relaxed">
            HBN Pharma tự hào vận hành hệ thống sản xuất và phân phối tuân thủ nghiêm ngặt các chứng nhận y tế hàng đầu Việt Nam và Quốc tế.
          </p>
        </div>
      </section>

      {/* Certification Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-3xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary-600 bg-primary-50 px-2.5 py-1 rounded-md">
                      {item.code}
                    </span>
                    <h3 className="text-xl font-bold text-neutral-900 mt-2 font-heading">{item.nameVi}</h3>
                    <p className="text-xs text-neutral-400 mt-0.5">{item.nameEn}</p>
                  </div>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">{item.descVi}</p>
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <span>Cơ quan cấp: <strong className="text-neutral-800">{item.issuerVi}</strong></span>
                  <span>Hiệu lực: <strong className="text-primary-700">{item.year}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
