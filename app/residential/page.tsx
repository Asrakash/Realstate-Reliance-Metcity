'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { MapPin, Leaf, Users, Home, Wifi, Shield } from "lucide-react"

const amenities = [
  { icon: Leaf, title: "Lush Green Spaces", description: "Beautifully landscaped parks, jogging trails, and community gardens" },
  { icon: Home, title: "Premium Plots", description: "Spacious villa plots designed for modern family living with privacy and comfort" },
  { icon: Users, title: "Community Living", description: "Thoughtfully designed social spaces for neighbors to connect and thrive" },
  { icon: Wifi, title: "Smart Infrastructure", description: "Latest technology integration for connectivity and convenience" },
  { icon: Shield, title: "Safety & Security", description: "24/7 surveillance and secure gated community infrastructure" },
  { icon: MapPin, title: "Walk-to-Work Planning", description: "Proximity to offices and commercial hubs for seamless commuting" },
]

const features = [
  "IGBC Platinum certified sustainable living",
  "Smart meters for electricity monitoring",
  "Rainwater harvesting systems",
  "Central sewage treatment plants",
  "Underground utility corridors",
  "EV charging infrastructure",
  "Community centers and recreation areas",
  "Quality schools and healthcare nearby",
]

export default function ResidentialPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-[#0a0a0a] px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-wide">Premium Living Redefined at <span className="text-[#c9a962]">MET City</span></h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-8 font-light">Thoughtfully designed residential township offering sustainable urban living with world-class amenities and community-centric design.</p>
            <button className="px-8 py-3 bg-[#c9a962] text-black font-bold hover:bg-[#d4b376] transition-colors tracking-wider">EXPLORE PROPERTIES</button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-black border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">LIVING EXPERIENCE</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, idx) => {
              const IconComponent = amenity.icon
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="bg-[#111] border border-[#333] p-8 hover:border-[#c9a962] transition-colors text-center">
                  <IconComponent className="w-10 h-10 text-[#c9a962] mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">{amenity.title}</h3>
                  <p className="text-gray-400 text-sm">{amenity.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">SUSTAINABLE URBAN LIVING</h2>
          </motion.div>
          <div className="bg-[#111] border border-[#333] p-12">
            <p className="text-gray-300 text-sm mb-8">MET City&apos;s residential township is designed with environmental responsibility at its core. Every element is planned to minimize carbon footprint while maximizing quality of life.</p>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h3 className="text-base font-bold mb-6 text-[#c9a962] tracking-wider">GREEN FEATURES</h3>
                <ul className="space-y-3">
                  {features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <span className="w-1.5 h-1.5 bg-[#c9a962] mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h3 className="text-base font-bold mb-6 text-[#c9a962] tracking-wider">SMART AMENITIES</h3>
                <ul className="space-y-3">
                  {features.slice(4).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <span className="w-1.5 h-1.5 bg-[#c9a962] mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-black border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">PLOT CONFIGURATIONS</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { size: "200-300 Sq.Yd", price: "Starting from ₹25 Cr" },
              { size: "300-500 Sq.Yd", price: "Starting from ₹45 Cr" },
              { size: "500-750 Sq.Yd", price: "Starting from ₹65 Cr" },
            ].map((plot, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="bg-[#111] border border-[#333] p-8 text-center hover:border-[#c9a962] transition-colors">
                <h3 className="text-xl font-bold mb-4">{plot.size}</h3>
                <p className="text-[#c9a962] font-bold mb-6 tracking-wider text-sm">{plot.price}</p>
                <button className="w-full px-6 py-2 bg-[#c9a962] text-black font-bold hover:bg-[#d4b376] transition-colors text-sm tracking-wider">LEARN MORE</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">WHAT OUR RESIDENTS SAY</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { quote: "Living here has transformed our quality of life. The green spaces and community feel are unmatched.", author: "Priya Sharma", role: "Resident, Villa Community" },
              { quote: "The smart infrastructure and sustainability features align perfectly with our family values.", author: "Rajesh Kumar", role: "Investor & Resident" },
            ].map((testimonial, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="bg-[#111] border border-[#333] p-8 hover:border-[#c9a962] transition-colors">
                <p className="text-gray-300 italic mb-6 text-sm">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-sm">{testimonial.author}</p>
                  <p className="text-xs text-gray-500 tracking-wider">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
