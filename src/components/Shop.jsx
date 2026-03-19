import { ArrowRight, ShoppingCartSimple } from '@phosphor-icons/react'

const products = [
  {
    badge: 'Preowned',
    badgeClass: 'bg-[#D49A3B] text-[#0A0A0A]',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800',
    imageAlt: 'MacBook Pro',
    brand: 'Apple',
    name: 'MacBook Pro 13" (M1, 2020)',
    description: 'M1 Chip / 8GB RAM / 256GB SSD. Excellent condition with minimal signs of wear. Comes with original charger.',
    originalPrice: '₱45,000',
    price: '₱38,000',
  },
  {
    badge: 'Hot Deal',
    badgeClass: 'bg-white text-[#0A0A0A]',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800',
    imageAlt: 'Dell XPS',
    brand: 'Dell',
    name: 'Dell XPS 15 9500',
    description: 'Intel Core i7 10th Gen / 16GB RAM / 512GB NVMe. Perfect for content creators and professionals.',
    originalPrice: '₱55,000',
    price: '₱42,500',
  },
  {
    badge: 'Custom Build',
    badgeClass: 'bg-[#8B5CF6] text-white',
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=800',
    imageAlt: 'Gaming PC',
    brand: 'Custom PC',
    name: 'Esports Gaming Rig',
    description: 'Ryzen 5 3600 / GTX 1660 Super / 16GB RGB RAM / 500GB SSD. Freshly built and tested by our experts.',
    originalPrice: null,
    price: '₱26,000',
  },
]

export default function Shop() {
  return (
    <section id="shop" className="py-24 bg-[#0A0A0A] relative">
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-dots" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[#D49A3B] font-bold tracking-widest uppercase text-sm mb-3">Premium Sales</h2>
            <h3 className="text-4xl font-black font-[Outfit] text-white mb-4">Quality Preowned Tech</h3>
            <p className="text-gray-400 text-lg">
              Looking for an upgrade? We sell rigorously tested, high-quality preowned laptops, desktops, and parts at unbeatable prices.
            </p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 px-6 py-3 border border-[#D49A3B] text-[#D49A3B] font-bold rounded-md hover:bg-[#D49A3B] hover:text-[#0A0A0A] transition-colors">
            View All Inventory <ArrowRight weight="bold" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.name}
              className="bg-[#1A1A1A] rounded-xl border border-white/10 overflow-hidden hover:border-[#D49A3B]/50 transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-64 bg-[#121212] p-6 flex justify-center items-center overflow-hidden">
                <div className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider z-10 ${p.badgeClass}`}>
                  {p.badge}
                </div>
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs text-[#D49A3B] font-bold mb-2 uppercase">{p.brand}</div>
                <h4 className="text-xl font-bold font-[Outfit] text-white mb-2">{p.name}</h4>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{p.description}</p>
                <div className="flex justify-between items-end pt-4 border-t border-white/10">
                  <div>
                    {p.originalPrice && (
                      <span className="text-xs text-gray-500 line-through block mb-1">{p.originalPrice}</span>
                    )}
                    <span className="text-2xl font-black font-[Outfit] text-white">{p.price}</span>
                  </div>
                  <button className="w-12 h-12 rounded-lg bg-[#121212] flex items-center justify-center text-white hover:bg-[#D49A3B] hover:text-[#0A0A0A] transition-colors border border-white/10 hover:border-transparent">
                    <ShoppingCartSimple size={20} weight="bold" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border border-[#D49A3B] text-[#D49A3B] font-bold rounded-md hover:bg-[#D49A3B] hover:text-[#0A0A0A] transition-colors">
            View All Inventory <ArrowRight weight="bold" />
          </a>
        </div>
      </div>
    </section>
  )
}
