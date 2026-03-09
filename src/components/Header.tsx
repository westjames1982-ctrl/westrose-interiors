'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 flex-1">
          <Image
            src="/logo/westrose-logo.png"
            alt="Westrose Interiors Logo"
            width={50}
            height={50}
            className="rounded"
          />
          <div>
            <h1 className="text-sm md:text-lg font-bold text-slate-900">Westrose Interiors</h1>
            <p className="text-xs text-teal-600 hidden sm:block">Commercial Interior Systems</p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <button onClick={() => scrollToSection('home')} className="hover:text-teal-600 transition">
            Home
          </button>
          <button onClick={() => scrollToSection('portfolio')} className="hover:text-teal-600 transition">
            Portfolio
          </button>
          <button onClick={() => scrollToSection('services')} className="hover:text-teal-600 transition">
            Services
          </button>
          <button onClick={() => scrollToSection('why-us')} className="hover:text-teal-600 transition">
            Why Us
          </button>
          <button onClick={() => scrollToSection('contact')} className="cta-button px-6 py-2 rounded text-white font-semibold">
            Get Quote
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b md:hidden flex flex-col gap-4 p-4">
            <button onClick={() => scrollToSection('home')} className="text-left hover:text-teal-600 transition">
              Home
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-left hover:text-teal-600 transition">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('services')} className="text-left hover:text-teal-600 transition">
              Services
            </button>
            <button onClick={() => scrollToSection('why-us')} className="text-left hover:text-teal-600 transition">
              Why Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="cta-button px-6 py-2 rounded text-white font-semibold">
              Get Quote
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
