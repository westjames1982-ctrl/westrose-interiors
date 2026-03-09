'use client'

import Image from 'next/image'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="pt-20 pb-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center py-24 md:py-40">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">
              Transform Your <span className="text-teal-600">Commercial Space</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Premium interior systems and solutions for corporate, institutional, and commercial environments. 
              Bold design meets professional excellence.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={scrollToContact}
                className="cta-button px-8 py-4 rounded-lg text-white font-bold text-lg hover:shadow-2xl"
              >
                Get Your Quote
              </button>
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-lg border-2 border-teal-600 text-teal-600 font-bold hover:bg-teal-600 hover:text-white transition"
              >
                View Portfolio
              </button>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/58021682-1b91-44b1-a95f-e9caedbfc78f.jpg"
                alt="Premium Commercial Interior Project"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-sm font-semibold text-teal-300">FEATURED PROJECT</p>
                <p className="text-2xl font-bold mt-2">Premium Interior Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">23+</div>
              <p className="text-slate-300 text-lg">Completed Projects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">23+</div>
              <p className="text-slate-300 text-lg">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">100%</div>
              <p className="text-slate-300 text-lg">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
