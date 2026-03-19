import { Star } from '@phosphor-icons/react'

export default function Stats() {
  return (
    <div className="bg-[#D49A3B] text-[#0A0A0A] py-8 border-b-[6px] border-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-[#0A0A0A]/10">
          <div className="px-4">
            <p className="text-3xl font-black font-[Outfit] mb-1">5,000+</p>
            <p className="text-sm font-bold uppercase tracking-wider opacity-80">Devices Fixed</p>
          </div>
          <div className="px-4">
            <p className="text-3xl font-black font-[Outfit] mb-1">2018</p>
            <p className="text-sm font-bold uppercase tracking-wider opacity-80">Year Established</p>
          </div>
          <div className="px-4">
            <div className="flex justify-center gap-1 mb-2 text-xl">
              {[...Array(5)].map((_, i) => (
                <Star key={i} weight="fill" />
              ))}
            </div>
            <p className="text-sm font-bold uppercase tracking-wider opacity-80">Quality Guaranteed</p>
          </div>
          <div className="px-4">
            <p className="text-3xl font-black font-[Outfit] mb-1">Davao</p>
            <p className="text-sm font-bold uppercase tracking-wider opacity-80">Local Tech Hub</p>
          </div>
        </div>
      </div>
    </div>
  )
}
