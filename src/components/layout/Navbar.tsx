'use client'

import {useTranslations} from 'next-intl'
import {Link, usePathname} from '@/navigation'
import {useParams} from 'next/navigation'
import {useState, useEffect} from 'react'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    {href: '/',             label: t('home')},
    {href: '/about',        label: t('about')},
    {href: '/products',     label: t('products')},
    {href: '/news',         label: t('news')},
    {href: '/certificates', label: t('certificates')},
    {href: '/partners',     label: t('partners')},
    {href: '/contact',      label: t('contact')},
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-card border-b border-neutral-100'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-sm">HBN</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-heading font-bold text-primary-700 text-sm leading-tight">HBN PHARMA</p>
              <p className="text-xs text-neutral-400 leading-tight">Together for long life</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href as '/'}
                  className={`px-3 py-2 rounded-lg text-sm font-heading font-medium transition-colors duration-150 ${
                    pathname === link.href
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-neutral-600 hover:bg-neutral-50 hover:text-primary-600'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="tel:+84000000000"
              className="hidden md:flex items-center gap-2 btn-primary text-sm py-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Hotline
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-100"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMobileOpen && (
          <div className="lg:hidden border-t border-neutral-100 py-3 pb-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href as '/'}
                    onClick={() => setIsMobileOpen(false)}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-heading font-medium transition-colors ${
                      pathname === link.href
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-neutral-600 hover:bg-neutral-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
