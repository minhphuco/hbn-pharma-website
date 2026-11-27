'use client'

import {useTranslations} from 'next-intl'
import {useForm} from 'react-hook-form'
import {useState} from 'react'

type ContactForm = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

function ContactFormSection() {
  const t = useTranslations('contact')
  const {register, handleSubmit, formState: {errors}, reset} = useForm<ContactForm>()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const onSubmit = async (data: ContactForm) => {
    setStatus('sending')
    try {
      // POST to Next.js API route (Quoc Huy sẽ implement)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="section-title">{t('title')}</h1>
          <p className="section-subtitle mx-auto text-neutral-500">{t('subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-card p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-heading font-medium text-neutral-700 mb-1.5">
                    {t('name')} <span className="text-error">*</span>
                  </label>
                  <input
                    {...register('name', {required: true})}
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow ${
                      errors.name ? 'border-error' : 'border-neutral-200'
                    }`}
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div>
                  <label className="block text-sm font-heading font-medium text-neutral-700 mb-1.5">
                    {t('phone')}
                  </label>
                  <input
                    {...register('phone')}
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow"
                    placeholder="0901 234 567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-heading font-medium text-neutral-700 mb-1.5">
                  {t('email')} <span className="text-error">*</span>
                </label>
                <input
                  {...register('email', {required: true, pattern: /^\S+@\S+$/i})}
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow ${
                    errors.email ? 'border-error' : 'border-neutral-200'
                  }`}
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-heading font-medium text-neutral-700 mb-1.5">
                  {t('subject')}
                </label>
                <input
                  {...register('subject')}
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow"
                  placeholder="Hợp tác phân phối"
                />
              </div>

              <div>
                <label className="block text-sm font-heading font-medium text-neutral-700 mb-1.5">
                  {t('message')} <span className="text-error">*</span>
                </label>
                <textarea
                  {...register('message', {required: true})}
                  rows={5}
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow resize-none ${
                    errors.message ? 'border-error' : 'border-neutral-200'
                  }`}
                  placeholder="Nội dung tin nhắn của bạn..."
                />
              </div>

              {status === 'success' && (
                <div className="bg-green-50 text-green-700 rounded-lg px-4 py-3 text-sm font-heading">
                  {t('success')}
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-50 text-red-700 rounded-lg px-4 py-3 text-sm font-heading">
                  {t('error')}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center"
              >
                {status === 'sending' ? t('sending') : t('send')}
              </button>
            </form>
          </div>

          {/* Office Info + Map */}
          <div className="space-y-6">
            {/* Office HCM */}
            <div className="bg-neutral-50 rounded-2xl p-6">
              <h3 className="font-heading font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <div className="w-6 h-6 bg-primary-500 rounded flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                {t('office_hcm')}
              </h3>
              <p className="text-sm text-neutral-600 mb-2">123 Nguyễn Thị Minh Khai, P.6, Q.3, TP. Hồ Chí Minh</p>
              <p className="text-sm text-neutral-500">Tel: (028) 3123 4567</p>
            </div>

            {/* Office HN */}
            <div className="bg-neutral-50 rounded-2xl p-6">
              <h3 className="font-heading font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <div className="w-6 h-6 bg-primary-500 rounded flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                {t('office_hn')}
              </h3>
              <p className="text-sm text-neutral-600 mb-2">456 Trần Duy Hưng, P. Trung Hòa, Q. Cầu Giấy, Hà Nội</p>
              <p className="text-sm text-neutral-500">Tel: (024) 3987 6543</p>
            </div>

            {/* Map placeholder */}
            <div className="bg-primary-50 rounded-2xl h-48 flex items-center justify-center border border-primary-100">
              <div className="text-center text-primary-500">
                <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-sm font-heading font-medium">Google Maps Embed</p>
                <p className="text-xs text-primary-400 mt-1">Quốc Huy sẽ tích hợp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ContactPage() {
  return (
    <main className="pt-20">
      <ContactFormSection />
    </main>
  )
}
