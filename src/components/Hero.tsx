'use client'

import Image from 'next/image'

export default function Hero() {

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative w-full overflow-hidden pt-16">
      {/* Full-Width Hero Background */}
      <div className="relative w-full h-80 sm:h-96 md:h-[600px]">
        {/* Background Image */}
        <Image
          src="/images/58021682-1b91-44b1-a95f-e9caedbfc78f.jpg"
          alt="Premium Commercial Interior"
          fill
          className="object-cover"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              <div className="mb-4 inline-block">
                <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  COMMERCIAL INTERIOR SYSTEMS
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Transform Your <span className="text-teal-400">Space</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-xl text-slate-200 mb-6 sm:mb-8 leading-relaxed max-w-xl">
                Premium interior systems and solutions for corporate, institutional, and commercial environments. 
                Bold design meets professional excellence.
              </p>
              
              <div className="flex gap-2 sm:gap-4 flex-wrap">
                <button
                  onClick={scrollToContact}
                  className="cta-button px-4 sm:px-8 py-2 sm:py-4 rounded-lg text-white font-bold text-sm sm:text-lg hover:shadow-2xl transform hover:scale-105 transition"
                >
                  Get Quote
                </button>
                <button
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-4 sm:px-8 py-2 sm:py-4 rounded-lg border-2 border-teal-400 text-teal-400 font-bold text-sm sm:text-lg hover:bg-teal-400 hover:text-slate-900 transition transform hover:scale-105"
                >
                  Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="text-white text-center">
            <p className="text-sm mb-2">Scroll to explore</p>
            <div className="text-2xl">↓</div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-900 text-white py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 sm:gap-12">
            <div className="text-center group">
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold text-teal-400 mb-1 sm:mb-3 group-hover:scale-110 transition">
                23+
              </div>
              <p className="text-slate-300 text-xs sm:text-base md:text-lg">Projects</p>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold text-teal-400 mb-1 sm:mb-3 group-hover:scale-110 transition">
                23+
              </div>
              <p className="text-slate-300 text-xs sm:text-base md:text-lg">Years</p>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold text-teal-400 mb-1 sm:mb-3 group-hover:scale-110 transition">
                100%
              </div>
              <p className="text-slate-300 text-xs sm:text-base md:text-lg">Satisfied</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
