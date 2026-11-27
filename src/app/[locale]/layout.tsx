import {NextIntlClientProvider} from 'next-intl'
import {getMessages} from 'next-intl/server'
import {notFound} from 'next/navigation'
import {routing} from '@/routing'
import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
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
  params: {locale: string} | Promise<{locale: string}>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale

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
      <body className="font-body bg-neutral-white text-neutral-700 antialiased flex flex-col min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
