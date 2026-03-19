import { MapPin, Wrench, List } from '@phosphor-icons/react'

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-12 h-12 bg-[#0A0A0A] rounded-lg border-2 border-[#0A0A0A] group-hover:bg-[#121212] transition-colors overflow-hidden">
              <div className="absolute left-0 top-2 w-full h-px bg-[#D49A3B]/30" />
              <div className="absolute left-0 top-4 w-full h-px bg-[#D49A3B]/30" />
              <div className="absolute left-0 top-6 w-full h-px bg-[#D49A3B]/30" />
              <span className="text-[#D49A3B] font-black text-3xl font-[Outfit] relative z-10 pt-1">T</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[28px] font-black tracking-tight leading-none text-[#0A0A0A] font-[Outfit]">ECH99</span>
              <span className="text-[0.6rem] tracking-[0.2em] text-[#D49A3B] font-bold uppercase mt-1">Tech Repair &amp; Sales</span>
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-semibold text-gray-600 hover:text-[#D49A3B] transition-colors">Services</a>
            <a href="#shop" className="text-sm font-semibold text-gray-600 hover:text-[#D49A3B] transition-colors">Preowned Shop</a>
            <a href="#about" className="text-sm font-semibold text-gray-600 hover:text-[#D49A3B] transition-colors">About Us</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600 border-r border-gray-200 pr-4">
              <MapPin weight="fill" className="text-[#D49A3B] text-lg" />
              Davao City
            </div>
            <a
              href="#contact"
              className="bg-[#0A0A0A] text-white px-6 py-2.5 rounded-md text-sm font-bold hover:bg-[#D49A3B] transition-colors duration-300 flex items-center gap-2"
            >
              <Wrench weight="bold" />
              Book Repair
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button className="text-[#0A0A0A] hover:text-[#D49A3B]">
              <List size={30} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
