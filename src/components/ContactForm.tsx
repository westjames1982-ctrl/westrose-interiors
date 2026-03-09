'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', projectDetails: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Request a <span className="text-teal-600">Quote</span>
          </h2>
          <p className="text-lg text-slate-600">
            Fill out the form below and our team will contact you with a custom proposal
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-lg card-shadow">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
              <p className="text-slate-600">
                We've received your inquiry. Our team will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Project Details *
                </label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your project: size, location, timeline, specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full cta-button py-4 rounded-lg text-white font-bold text-lg hover:shadow-2xl"
              >
                Request Quote
              </button>
            </form>
          )}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Visit Us</h3>
            <p className="text-slate-600">
              Unit #5, 3716 56th Avenue S.E
              <br />
              Calgary, Alberta T2C 2B5
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Call Us</h3>
            <p className="text-teal-600 font-semibold">
              Available Monday - Friday<br />
              8:00 AM - 5:00 PM
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Email Us</h3>
            <p className="text-slate-600">
              Professional quotes<br />
              and consultations
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
