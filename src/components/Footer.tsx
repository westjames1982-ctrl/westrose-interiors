'use client'

import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo/westrose-logo.png"
                alt="Westrose Interiors Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <h3 className="text-lg font-bold">Westrose Interiors</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium commercial interior systems and solutions in Calgary. Delivering excellence since 1998.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-teal-400">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#services" className="hover:text-teal-400 transition">Acoustical Ceilings</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Specialty Ceilings</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Vision Executed</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Installation</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Consultation</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-teal-400">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-teal-400 transition">Home</a></li>
              <li><a href="#portfolio" className="hover:text-teal-400 transition">Portfolio</a></li>
              <li><a href="#why-us" className="hover:text-teal-400 transition">Why Us</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-teal-400">Contact</h4>
            <div className="text-sm text-slate-400 space-y-3">
              <div>
                <p className="font-semibold text-white">Address</p>
                <p>Unit #5, 3716 56th Avenue S.E<br />Calgary, Alberta T2C 2B5</p>
              </div>
              <div>
                <p className="font-semibold text-white">Hours</p>
                <p>Mon - Fri: 8:00 AM - 5:00 PM<br />Sat - Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              &copy; {currentYear} Westrose Interiors. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-teal-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-teal-400 transition">Terms of Service</a>
              <a href="#contact" className="hover:text-teal-400 transition">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
