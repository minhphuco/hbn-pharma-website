import {defineRouting} from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['vi', 'en'],
  defaultLocale: 'vi',
  pathnames: {
    '/': '/',
    '/about': {
      vi: '/gioi-thieu',
      en: '/about',
    },
    '/products': {
      vi: '/san-pham',
      en: '/products',
    },
    '/news': {
      vi: '/tin-tuc',
      en: '/news',
    },
    '/certificates': {
      vi: '/chung-nhan',
      en: '/certificates',
    },
    '/partners': {
      vi: '/doi-tac',
      en: '/partners',
    },
    '/contact': {
      vi: '/lien-he',
      en: '/contact',
    },
  }
})
