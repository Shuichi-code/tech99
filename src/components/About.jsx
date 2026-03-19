import { CheckCircle, Tag, Users } from '@phosphor-icons/react'

const reasons = [
  {
    icon: CheckCircle,
    title: 'Quality Service Guaranteed 👍',
    description: "We don't cut corners. Every repair is done with precision and tested thoroughly before returning it to you.",
  },
  {
    icon: Tag,
    title: 'Unbeatable Prices',
    description: 'Honest pricing on repairs and the best deals on preowned laptops and desktops in Davao City.',
  },
  {
    icon: Users,
    title: 'Expert Technicians',
    description: 'Our team specializes in complex board-level repairs, saving devices others might consider dead.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#F9FAFB] border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Text side */}
          <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-black font-[Outfit] text-[#0A0A0A] mb-6">Why Choose Tech99?</h3>
            <ul className="space-y-6">
              {reasons.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D49A3B]/10 flex items-center justify-center shrink-0 mt-1">
                    <Icon weight="fill" className="text-[#D49A3B] text-xl" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#0A0A0A]">{title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Image side */}
          <div className="md:w-1/2 bg-[#0A0A0A] relative min-h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
              alt="Tech Repair"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <p className="text-white text-xl font-bold font-[Outfit] italic">
                "Davao's trusted Go-To Tech Repair &amp; Sales Hub Since 2018!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
