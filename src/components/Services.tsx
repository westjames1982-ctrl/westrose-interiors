'use client'

export default function Services() {
  const services = [
    {
      title: 'Acoustical Ceilings',
      description: 'High-performance acoustical ceiling systems designed for sound control and aesthetic appeal in commercial spaces.',
      icon: '🎵',
    },
    {
      title: 'Specialty Ceilings',
      description: 'Custom ceiling solutions tailored to your project specifications and architectural vision.',
      icon: '🏗️',
    },
    {
      title: 'Vision Executed',
      description: 'We bring your architectural concepts to life with precision engineering and expert installation.',
      icon: '✨',
    },
    {
      title: 'Professional Installation',
      description: 'Expert installation teams with decades of combined experience in commercial interior systems.',
      icon: '🔧',
    },
    {
      title: 'Design Consultation',
      description: 'Collaborate with our specialists to create the perfect interior environment for your space.',
      icon: '🎨',
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance services to keep your systems in peak condition.',
      icon: '🛠️',
    },
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-teal-600">Services</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive commercial interior solutions designed for modern corporate environments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-shadow p-8 rounded-lg bg-slate-50 border-l-4 border-teal-600 hover:border-teal-500"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
