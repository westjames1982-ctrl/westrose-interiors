'use client'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="pt-20 hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 py-24 md:py-40">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your <span className="text-teal-300">Commercial Space</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
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
                className="px-8 py-4 rounded-lg border-2 border-teal-500 text-teal-400 font-bold hover:bg-teal-500 hover:text-white transition"
              >
                View Portfolio
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-teal-500 to-slate-700 rounded-lg p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">✓</div>
                <p className="text-2xl font-bold">23+ Completed Projects</p>
                <p className="text-teal-200 mt-2">Professional Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
