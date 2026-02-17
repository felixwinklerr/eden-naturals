'use client'

import { useState } from 'react'
import { useTranslations } from '@/contexts/LocaleContext'

export default function KontaktPage() {
  const t = useTranslations()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to email service or form handler
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6 md:mb-8 text-center">
          {t('pages.contact.title')}
        </h1>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-text mb-4 md:mb-6">{t('pages.contact.contactInfo')}</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-text mb-2">{t('pages.contact.company')}</h3>
                <p className="text-text-light">
                  {t('pages.contact.address')}<br />
                  {t('pages.contact.addressZip')}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-2">{t('pages.contact.email')}</h3>
                <a href={`mailto:${t('pages.contact.emailAddress')}`} className="text-accent hover:underline">
                  {t('pages.contact.emailAddress')}
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-2">{t('pages.contact.phone')}</h3>
                <a href={`tel:${t('pages.contact.phoneNumber').replace(/\s/g, '')}`} className="text-accent hover:underline">
                  {t('pages.contact.phoneNumber')}
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-2">{t('pages.contact.openingHours')}</h3>
                <p className="text-text-light">
                  {t('pages.contact.openingWeek')}<br />
                  {t('pages.contact.openingSat')}<br />
                  {t('pages.contact.openingSun')}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-text mb-4 md:mb-6">{t('pages.contact.sendMessage')}</h2>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <p className="text-green-800 font-semibold">
                  {t('pages.contact.successTitle')}
                </p>
                <p className="text-green-700 text-sm mt-2">
                  {t('pages.contact.successText')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-text mb-2">
                    {t('pages.contact.labelName')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    style={{ minHeight: '44px' }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-text mb-2">
                    {t('pages.contact.labelEmail')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    style={{ minHeight: '44px' }}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-text mb-2">
                    {t('pages.contact.labelSubject')}
                  </label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    style={{ minHeight: '44px' }}
                  >
                    <option value="">{t('pages.contact.subjectPlaceholder')}</option>
                    <option value="bestellung">{t('pages.contact.subjectOrder')}</option>
                    <option value="produkt">{t('pages.contact.subjectProduct')}</option>
                    <option value="versand">{t('pages.contact.subjectShipping')}</option>
                    <option value="rückgabe">{t('pages.contact.subjectReturn')}</option>
                    <option value="sonstiges">{t('pages.contact.subjectOther')}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-text mb-2">
                    {t('pages.contact.labelMessage')}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full text-base">
                  {t('pages.contact.submit')}
                </button>
                <p className="text-xs text-text-light">
                  {t('pages.contact.requiredNote')}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
