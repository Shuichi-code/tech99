import { MapPin, Phone, Clock, FacebookLogo, InstagramLogo, TiktokLogo, CaretRight, Check, ThumbsUp } from '@phosphor-icons/react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0A0A0A] text-white pt-20 pb-10 border-t-4 border-[#D49A3B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="relative flex items-center justify-center w-10 h-10 bg-white rounded-lg border-2 border-white overflow-hidden">
                <span className="text-[#0A0A0A] font-black text-2xl font-[Outfit] relative z-10 pt-1">T</span>
              </div>
              <span className="text-2xl font-black tracking-tight leading-none text-white font-[Outfit]">ECH99</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Davao's trusted Go-To Tech Repair &amp; Sales Hub Since 2018. Quality service guaranteed for all your computing and gaming needs.
            </p>
            <div className="flex space-x-3">
              {[FacebookLogo, InstagramLogo, TiktokLogo].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:bg-[#D49A3B] hover:text-[#0A0A0A] transition-colors">
                  <Icon weight="fill" size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[Outfit] font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#' },
                { label: 'Repair Services', href: '#services' },
                { label: 'Shop Preowned', href: '#shop' },
                { label: 'About Us', href: '#about' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-gray-400 hover:text-[#D49A3B] transition-colors text-sm flex items-center gap-2">
                    <CaretRight weight="bold" className="text-[#D49A3B]" size={12} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[Outfit] font-bold text-lg mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {['Apple MacBook Repair', 'Windows Laptop Repair', 'PC Build & Diagnostics', 'Game Console Fixes'].map((s) => (
                <li key={s}>
                  <a href="#" className="text-gray-400 hover:text-[#D49A3B] transition-colors text-sm flex items-center gap-2">
                    <Check weight="bold" className="text-[#D49A3B]" size={12} />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[Outfit] font-bold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin weight="fill" className="text-[#D49A3B] mt-0.5 shrink-0" size={20} />
                <div>
                  <p className="text-white font-semibold text-sm">Location</p>
                  <p className="text-gray-400 text-sm mt-1">123 Tech Avenue, Poblacion<br />Davao City, Philippines</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone weight="fill" className="text-[#D49A3B] shrink-0" size={20} />
                <p className="text-gray-400 text-sm">+63 912 345 6789</p>
              </li>
              <li className="flex items-center gap-3">
                <Clock weight="fill" className="text-[#D49A3B] shrink-0" size={20} />
                <p className="text-gray-400 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1A1A1A] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 TECH99 Davao. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <ThumbsUp weight="fill" className="text-[#D49A3B]" />
              Quality service guaranteed
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
