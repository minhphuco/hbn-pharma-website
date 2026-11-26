import {useTranslations} from 'next-intl'
import {Link} from '@/navigation'

export default function Footer() {
  const t = useTranslations('footer')
  const tn = useTranslations('nav')

  const quickLinks = [
    {href: '/',             label: tn('home')},
    {href: '/about',        label: tn('about')},
    {href: '/products',     label: tn('products')},
    {href: '/news',         label: tn('news')},
    {href: '/certificates', label: tn('certificates')},
    {href: '/contact',      label: tn('contact')},
  ]

  return (
    <footer className="bg-primary-800 text-primary-100">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0">
                <span className="text-primary-700 font-heading font-bold text-sm">HBN</span>
              </div>
              <div>
                <p className="font-heading font-bold text-white">HBN PHARMA</p>
                <p className="text-xs text-primary-200 italic">Together for long life</p>
              </div>
            </div>
            <p className="text-sm text-primary-200 leading-relaxed mb-4">
              {t('company_name')}
            </p>

            {/* Office HCM */}
            <div className="mb-3">
              <p className="text-xs font-heading font-semibold text-primary-100 uppercase tracking-wider mb-1">
                {t('address_hcm')}
              </p>
              <p className="text-sm text-primary-200">
                123 Nguyễn Thị Minh Khai, Phường 6, Quận 3, TP. Hồ Chí Minh
              </p>
            </div>

            {/* Office HN */}
            <div>
              <p className="text-xs font-heading font-semibold text-primary-100 uppercase tracking-wider mb-1">
                {t('address_hn')}
              </p>
              <p className="text-sm text-primary-200">
                456 Trần Duy Hưng, Phường Trung Hòa, Quận Cầu Giấy, Hà Nội
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">{t('quick_links')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href as '/'}
                    className="text-sm text-primary-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">{t('contact_info')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-200">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>1800 1234 (Miễn phí)</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-200">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@hbnpharma.com.vn</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-200">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>www.hbnpharma.com.vn</span>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-6">
              <p className="text-xs font-heading font-semibold text-primary-100 uppercase tracking-wider mb-3">{t('follow_us')}</p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-primary-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-primary-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-primary-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-300 text-center md:text-left">
            {t('copyright')}
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-primary-300 hover:text-white transition-colors">
              Chính sách bảo mật
            </a>
            <a href="#" className="text-xs text-primary-300 hover:text-white transition-colors">
              Điều khoản sử dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
