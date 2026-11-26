import { useTranslations } from 'next-intl';

export default function PartnersPage() {
  const partners = [
    { name: 'Bệnh viện Đại học Y Dược TP.HCM', category: 'Bệnh viện & Trung tâm Y tế', logo: '🏥' },
    { name: 'Bệnh viện Chợ Rẫy', category: 'Bệnh viện & Trung tâm Y tế', logo: '🏥' },
    { name: 'Bệnh viện Bạch Mai Hà Nội', category: 'Bệnh viện & Trung tâm Y tế', logo: '🏥' },
    { name: 'Chuỗi Nhà Thuốc Pharmacity', category: 'Chuỗi Bán Lẻ Dược Phẩm', logo: '💊' },
    { name: 'Chuỗi Nhà Thuốc Long Châu', category: 'Chuỗi Bán Lẻ Dược Phẩm', logo: '💊' },
    { name: 'Chuỗi Nhà Thuốc An Khang', category: 'Chuỗi Bán Lẻ Dược Phẩm', logo: '💊' },
    { name: 'Tập đoàn Dược phẩm Mega Lifesciences', category: 'Đối tác Quốc tế', logo: '🌐' },
    { name: 'Rohto-Mentholatum', category: 'Đối tác Quốc tế', logo: '🌐' },
  ];

  const stats = [
    { num: '500+', label: 'Bệnh viện & Phòng khám đối tác' },
    { num: '5.000+', label: 'Nhà thuốc phân phối toàn quốc' },
    { num: '63/63', label: 'Tỉnh thành phủ sóng chuỗi cung ứng' },
    { num: '20+', label: 'Đối tác dược phẩm quốc tế' },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-3 py-1 bg-primary-700 text-primary-200 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Mạng Lưới Hợp Tác
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Đối Tác Chiến Lược Của HBN Pharma</h1>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Hơn 20 năm đồng hành cùng các bệnh viện tuyến đầu, chuỗi nhà thuốc uy tín và các đối tác dược phẩm hàng đầu thế giới.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b border-neutral-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, idx) => (
              <div key={idx} className="p-4">
                <p className="text-3xl md:text-4xl font-bold text-primary-600 font-heading mb-1">{s.num}</p>
                <p className="text-xs md:text-sm text-neutral-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 text-center mb-12 font-heading">
            Mạng Lưới Đối Tác Tiêu Biểu
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((p, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-neutral-200 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto bg-primary-50 rounded-full flex items-center justify-center text-3xl mb-4">
                  {p.logo}
                </div>
                <h3 className="font-bold text-neutral-800 text-base mb-2 font-heading">{p.name}</h3>
                <span className="inline-block text-xs text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full font-medium">
                  {p.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
