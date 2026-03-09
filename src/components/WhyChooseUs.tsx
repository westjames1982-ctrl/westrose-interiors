'use client'

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Safety First',
      description: 'Rigorous safety protocols and certified installation teams ensure every project meets highest standards.',
      stats: '100% Safety Record',
    },
    {
      title: 'Architect Friendly',
      description: 'We work seamlessly with architects and designers to bring complex visions to reality.',
      stats: '500+ Architects Partner',
    },
    {
      title: 'On-Time Delivery',
      description: 'Proven track record of delivering projects on schedule without compromising quality.',
      stats: '98% On-Time',
    },
    {
      title: 'Strong Relationships',
      description: 'Building long-term partnerships with clients based on trust, quality, and exceptional service.',
      stats: '23+ Years Experience',
    },
  ]

  return (
    <section id="why-us" className="py-24 hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-teal-300">Westrose</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Decades of excellence in commercial interior systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-slate-800 bg-opacity-50 p-8 rounded-lg border border-teal-500 border-opacity-30 hover:border-opacity-100 transition"
            >
              <div className="text-4xl font-bold text-teal-400 mb-3">{reason.stats}</div>
              <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
              <p className="text-slate-300 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-800 bg-opacity-50 p-12 rounded-lg text-center border border-teal-500 border-opacity-30">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h3>
          <p className="text-lg text-slate-300 mb-8">
            Contact us today for a consultation and custom quote
          </p>
          <a
            href="#contact"
            className="inline-block cta-button px-8 py-4 rounded-lg text-white font-bold text-lg"
          >
            Get Your Quote
          </a>
        </div>
      </div>
    </section>
  )
}
