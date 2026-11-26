import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');

  const milestones = [
    { year: '2003', vi: 'Thành lập Công ty Cổ Phần Dược Phẩm Hiệp Bách Niên', en: 'Founded HBN Pharma Joint Stock Company' },
    { year: '2008', vi: 'Đạt chứng nhận GMP-WHO', en: 'Achieved GMP-WHO certification' },
    { year: '2012', vi: 'Mở rộng thị trường sang các nước Đông Nam Á', en: 'Expanded to Southeast Asian markets' },
    { year: '2016', vi: 'Đạt chứng nhận ISO 9001:2015', en: 'Achieved ISO 9001:2015 certification' },
    { year: '2020', vi: 'Ra mắt dòng sản phẩm chăm sóc sức khỏe cao cấp', en: 'Launched premium healthcare product line' },
    { year: '2024', vi: 'Hơn 200 sản phẩm đăng ký lưu hành toàn quốc', en: 'Over 200 registered products nationwide' },
  ];

  const values = [
    { icon: '🌿', titleVi: 'Chất lượng', titleEn: 'Quality', descVi: 'Cam kết tiêu chuẩn GMP cao nhất trong mọi sản phẩm', descEn: 'Committed to the highest GMP standards in every product' },
    { icon: '🤝', titleVi: 'Tin cậy', titleEn: 'Trust', descVi: 'Xây dựng niềm tin với khách hàng qua từng sản phẩm', descEn: 'Building trust with customers through every product' },
    { icon: '💡', titleVi: 'Đổi mới', titleEn: 'Innovation', descVi: 'Liên tục nghiên cứu và phát triển giải pháp sức khỏe mới', descEn: 'Continuously researching new healthcare solutions' },
    { icon: '🌍', titleVi: 'Trách nhiệm', titleEn: 'Responsibility', descVi: 'Trách nhiệm với cộng đồng và môi trường', descEn: 'Responsible to community and environment' },
  ];

  const leaders = [
    { name: 'Nguyễn Văn A', roleVi: 'Chủ tịch HĐQT', roleEn: 'Chairman of the Board' },
    { name: 'Trần Thị B', roleVi: 'Tổng Giám đốc', roleEn: 'General Director' },
    { name: 'Lê Văn C', roleVi: 'Giám đốc Kỹ thuật', roleEn: 'Technical Director' },
    { name: 'Phạm Thị D', roleVi: 'Giám đốc Kinh doanh', roleEn: 'Commercial Director' },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Về Chúng Tôi</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Hơn 20 năm đồng hành cùng sức khỏe người Việt - HBN Pharma tự hào là một trong những doanh nghiệp dược phẩm hàng đầu Việt Nam.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Sứ mệnh & Tầm nhìn</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-500 pl-6">
                  <h3 className="text-xl font-semibold text-primary-700 mb-2">Sứ mệnh</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Nghiên cứu, sản xuất và cung ứng các sản phẩm dược phẩm chất lượng cao, góp phần nâng cao sức khỏe và chất lượng cuộc sống của người dân Việt Nam và khu vực.
                  </p>
                </div>
                <div className="border-l-4 border-primary-500 pl-6">
                  <h3 className="text-xl font-semibold text-primary-700 mb-2">Tầm nhìn</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Trở thành doanh nghiệp dược phẩm được tin cậy hàng đầu tại Đông Nam Á vào năm 2030, với danh mục sản phẩm đa dạng đáp ứng mọi nhu cầu chăm sóc sức khỏe.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '20+', label: 'Năm kinh nghiệm' },
                  { number: '200+', label: 'Sản phẩm đăng ký' },
                  { number: '500+', label: 'Nhà phân phối' },
                  { number: '10M+', label: 'Khách hàng tin dùng' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-1">{stat.number}</div>
                    <div className="text-sm text-neutral-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">Lịch Sử Phát Triển</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex items-center ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-5/12 ${i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-primary-100">
                      <div className="text-primary-600 font-bold text-lg mb-1">{m.year}</div>
                      <p className="text-neutral-700 text-sm">{m.vi}</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary-500 border-4 border-white shadow-md z-10"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">Giá Trị Cốt Lõi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.titleVi} className="text-center p-6 rounded-2xl bg-primary-50 hover:bg-primary-100 transition-colors">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-primary-700 mb-3">{v.titleVi}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{v.descVi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">Đội Ngũ Lãnh Đạo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((l) => (
              <div key={l.name} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-20 h-20 rounded-full bg-primary-100 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-primary-600 font-bold">{l.name.charAt(0)}</span>
                </div>
                <h3 className="font-bold text-neutral-900 mb-1">{l.name}</h3>
                <p className="text-primary-600 text-sm">{l.roleVi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
