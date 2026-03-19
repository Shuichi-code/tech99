import { ArrowRight, AppleLogo, Laptop, DesktopTower, GameController } from '@phosphor-icons/react'

const services = [
  {
    icon: AppleLogo,
    title: 'Apple MacBooks',
    description: 'Expert logic board repair, screen replacement, battery swaps, and liquid damage recovery for all MacBook Air and Pro models.',
  },
  {
    icon: Laptop,
    title: 'Windows Laptops',
    description: 'Service for ASUS, Acer, Lenovo, Dell, HP & more. Broken hinges, keyboard issues, storage upgrades, and thermal repasting.',
  },
  {
    icon: DesktopTower,
    title: 'Desktops & PCs',
    description: 'Custom PC building, component diagnostics, hardware upgrades, deep cleaning, and operating system troubleshooting.',
  },
  {
    icon: GameController,
    title: 'Game Consoles',
    description: 'HDMI port replacement, disc drive repair, controller stick drift fixes, and cleaning for PlayStation, Xbox, and Nintendo.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#D49A3B] font-bold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl font-black font-[Outfit] text-[#0A0A0A] mb-4">Comprehensive Repair Services</h3>
          <p className="text-gray-600 text-lg">
            From routine maintenance to complex board-level repairs, our certified technicians have the tools and experience to bring your devices back to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-[#F9FAFB] rounded-xl p-8 border border-gray-100 hover:border-[#D49A3B] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#D49A3B] transition-colors">
                <Icon size={30} className="text-[#0A0A0A] group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold font-[Outfit] mb-3 text-[#0A0A0A]">{title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{description}</p>
              <a href="#contact" className="inline-flex items-center text-sm font-bold text-[#D49A3B] hover:text-[#B8832E]">
                Get a Quote <ArrowRight weight="bold" className="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
