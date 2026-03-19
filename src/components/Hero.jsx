import { ArrowRight, ShoppingCart } from '@phosphor-icons/react'

export default function Hero() {
  return (
    <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/95 to-[#0A0A0A]/50" />
        <div className="absolute inset-0 bg-dots opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D49A3B] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D49A3B]" />
            </span>
            <span className="text-[#D49A3B] text-xs font-bold uppercase tracking-wider">Trusted in Davao Since 2018</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white font-[Outfit] leading-[1.1] mb-6">
            Revive Your Tech.<br />
            <span className="text-gradient">Upgrade Your Setup.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-light leading-relaxed">
            We are Davao's Go-To Hub for expert repairs on Apple MacBooks, Windows laptops, PCs, and game consoles.
            We also sell high-quality preowned tech at unbeatable prices. Quality service guaranteed! 👍
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="bg-[#D49A3B] text-[#0A0A0A] px-8 py-4 rounded-md text-base font-bold text-center hover:bg-[#B8832E] transition-all duration-300 flex items-center justify-center gap-2"
              style={{ boxShadow: '0 0 20px rgba(212,154,59,0.3)' }}
            >
              Explore Services
              <ArrowRight weight="bold" />
            </a>
            <a
              href="#shop"
              className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-md text-base font-bold text-center hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingCart weight="bold" />
              Shop Preowned
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
