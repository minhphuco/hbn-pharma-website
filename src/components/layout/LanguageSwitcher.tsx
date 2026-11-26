'use client'

import {useLocale} from 'next-intl'
import {useRouter, usePathname} from '@/navigation'
import {useTransition} from 'react'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const switchLocale = (nextLocale: 'vi' | 'en') => {
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale})
    })
  }

  return (
    <div className="flex items-center gap-1 bg-neutral-100 rounded-lg p-1">
      <button
        onClick={() => switchLocale('vi')}
        disabled={isPending}
        className={`px-2.5 py-1 rounded-md text-xs font-heading font-semibold transition-all ${
          locale === 'vi'
            ? 'bg-white text-primary-700 shadow-sm'
            : 'text-neutral-500 hover:text-neutral-700'
        }`}
      >
        VI
      </button>
      <button
        onClick={() => switchLocale('en')}
        disabled={isPending}
        className={`px-2.5 py-1 rounded-md text-xs font-heading font-semibold transition-all ${
          locale === 'en'
            ? 'bg-white text-primary-700 shadow-sm'
            : 'text-neutral-500 hover:text-neutral-700'
        }`}
      >
        EN
      </button>
    </div>
  )
}
