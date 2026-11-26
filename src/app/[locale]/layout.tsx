import {NextIntlClientProvider} from 'next-intl'
import {getMessages, getLocale} from 'next-intl/server'
import {notFound} from 'next/navigation'
import {routing} from '@/routing'
import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: {
    default: 'HBN Pharma - Dược Phẩm Hiệp Bách Niên',
    template: '%s | HBN Pharma',
  },
  description: 'Công ty Cổ Phần Dược Phẩm Hiệp Bách Niên - Hơn 20 năm nghiên cứu, sản xuất và phân phối dược phẩm chất lượng cao.',
  keywords: ['dược phẩm', 'HBN Pharma', 'Hiệp Bách Niên', 'thuốc', 'thiết bị y tế'],
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    alternateLocale: 'en_US',
    siteName: 'HBN Pharma',
  },
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{locale: string}>
}) {
  const {locale} = await params

  if (!routing.locales.includes(locale as 'vi' | 'en')) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-neutral-white text-neutral-700 antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
