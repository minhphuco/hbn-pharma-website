import {useTranslations} from 'next-intl'
import {Link} from '@/navigation'

// ---- Hero Section ----
function HeroSection() {
  const t = useTranslations('hero')
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-primary-50 via-white to-primary-50 overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100 rounded-full opacity-50 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-primary-100 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-50 rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 text-xs font-heading font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse" />
              {t('tagline')}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-neutral-900 leading-tight mb-6 text-balance">
              {t('title')}
            </h1>

            <p className="text-lg text-neutral-500 leading-relaxed mb-8 max-w-lg">
              {t('subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-primary text-base">
                {t('cta_primary')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/about" className="btn-outline text-base">
                {t('cta_secondary')}
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-10">
              {['GMP', 'GDP', 'ISO 9001'].map((cert) => (
                <div key={cert} className="flex items-center gap-2 bg-white border border-neutral-200 rounded-lg px-3 py-2 shadow-sm">
                  <div className="w-6 h-6 bg-primary-500 rounded flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs font-heading font-semibold text-neutral-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full opacity-10" />
              {/* Inner image placeholder */}
              <div className="absolute inset-8 bg-white rounded-full shadow-card-hover flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-heading font-bold text-white text-2xl">HBN</span>
                  </div>
                  <p className="font-heading font-semibold text-primary-700 text-sm">PHARMA</p>
                  <p className="text-xs text-neutral-400 italic mt-1">Together for long life</p>
                </div>
              </div>
              {/* Floating cards */}
              <div className="absolute top-4 -right-4 bg-white rounded-card shadow-card p-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-heading font-bold text-neutral-900">Chứng nhận</p>
                  <p className="text-xs text-neutral-400">GMP - WHO</p>
                </div>
              </div>
              <div className="absolute bottom-8 -left-4 bg-white rounded-card shadow-card p-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-heading font-bold text-neutral-900">20+ năm</p>
                  <p className="text-xs text-neutral-400">Kinh nghiệm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---- Stats Section ----
function StatsSection() {
  const t = useTranslations('home')
  const stats = [
    {value: '20+', label: t('stats_years')},
    {value: '200+', label: t('stats_products')},
    {value: '500+', label: t('stats_partners')},
    {value: '63', label: t('stats_provinces')},
  ]
  return (
    <section className="bg-primary-500 py-10">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">{s.value}</p>
              <p className="text-sm text-primary-100">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---- Featured Products Section ----
function FeaturedProductsSection() {
  const t = useTranslations('home')
  const tp = useTranslations('products')

  // Placeholder products (sẽ được Quốc Huy fetch từ Sanity)
  const products = [
    {
      id: '1',
      name: 'Sản phẩm OTC 1',
      category: 'OTC',
      desc: 'Mô tả ngắn về sản phẩm dược phẩm chất lượng cao từ HBN Pharma.',
    },
    {
      id: '2',
      name: 'Sản phẩm ETC 1',
      category: 'ETC',
      desc: 'Mô tả ngắn về sản phẩm dược phẩm chất lượng cao từ HBN Pharma.',
    },
    {
      id: '3',
      name: 'Thực phẩm chức năng',
      category: 'Functional Food',
      desc: 'Mô tả ngắn về sản phẩm dược phẩm chất lượng cao từ HBN Pharma.',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="section-title">{t('featured_products')}</h2>
            <p className="section-subtitle text-neutral-500">{t('featured_products_desc')}</p>
          </div>
          <Link href="/products" className="btn-outline shrink-0 self-start md:self-auto">
            {t('view_all')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="card group cursor-pointer">
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <span className="text-xs text-primary-500 font-heading font-medium">{p.category}</span>
                </div>
              </div>
              <div className="p-5">
                <span className="inline-block text-xs font-heading font-semibold text-primary-600 bg-primary-50 px-2 py-0.5 rounded mb-2">
                  {p.category}
                </span>
                <h3 className="font-heading font-semibold text-neutral-900 mb-2">{p.name}</h3>
                <p className="text-sm text-neutral-500 line-clamp-2 mb-4">{p.desc}</p>
                <span className="text-sm font-heading font-medium text-primary-600 group-hover:text-primary-700 flex items-center gap-1">
                  {tp('view_detail')}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---- About Snippet Section ----
function AboutSnippetSection() {
  const t = useTranslations('home')
  const values = [
    {icon: '🔬', title: 'Nghiên cứu & Đổi mới', desc: 'Không ngừng đầu tư R&D để tạo ra giải pháp điều trị hiệu quả'},
    {icon: '✅', title: 'Chất lượng Tiêu chuẩn', desc: 'Tuân thủ nghiêm ngặt GMP-WHO, GDP và các tiêu chuẩn quốc tế'},
    {icon: '🤝', title: 'Trách nhiệm Cộng đồng', desc: 'Đồng hành cùng sức khỏe cộng đồng, ưu tiên bệnh nhân'},
  ]

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">{t('about_section_title')}</h2>
            <p className="text-neutral-500 leading-relaxed mb-8">
              {t('about_section_desc')}
            </p>
            <div className="space-y-5">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">{v.icon}</span>
                  <div>
                    <h4 className="font-heading font-semibold text-neutral-900 mb-1">{v.title}</h4>
                    <p className="text-sm text-neutral-500">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/about" className="btn-primary">
                Tìm hiểu thêm
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="bg-primary-800 rounded-2xl p-8 text-white">
            <h3 className="font-heading font-bold text-2xl mb-6 text-primary-100">Thành tựu nổi bật</h3>
            <div className="space-y-4">
              {[
                {year: '2003', text: 'Thành lập Công ty Dược Phẩm Hiệp Bách Niên'},
                {year: '2008', text: 'Đạt chứng nhận GMP-WHO đầu tiên'},
                {year: '2015', text: 'Mở rộng mạng lưới phân phối toàn quốc'},
                {year: '2020', text: 'Ra mắt dòng sản phẩm thực phẩm chức năng'},
                {year: '2024', text: '200+ sản phẩm được Bộ Y tế cấp phép'},
              ].map((item) => (
                <div key={item.year} className="flex gap-4 items-start">
                  <span className="text-xs font-heading font-bold text-primary-300 w-10 shrink-0 pt-0.5">{item.year}</span>
                  <div className="flex-1 border-l border-primary-700 pl-4">
                    <p className="text-sm text-primary-100">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---- Partners Section ----
function PartnersSection() {
  const t = useTranslations('home')
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="section-title">{t('partners_title')}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {Array.from({length: 6}).map((_, i) => (
            <div key={i} className="bg-neutral-50 rounded-card p-6 flex items-center justify-center hover:shadow-card transition-shadow">
              <div className="text-center">
                <div className="w-12 h-12 bg-neutral-200 rounded-full mx-auto mb-2" />
                <p className="text-xs text-neutral-400 font-heading">Đối tác {i + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---- Page Assembly ----
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <FeaturedProductsSection />
      <AboutSnippetSection />
      <PartnersSection />
    </main>
  )
}
