'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { useState } from "react"
import { Factory, Building2, Home, Trees, ShoppingBag, Mic, Handshake, Leaf } from "lucide-react"

const galleryItems = [
  { category: "Industrial", title: "Jhajjar Industrial Park", description: "State-of-the-art industrial infrastructure", icon: Factory },
  { category: "Industrial", title: "Japanese Industrial Township", description: "Modern manufacturing hub", icon: Building2 },
  { category: "Residential", title: "Premium Villa Plots", description: "Luxury residential community", icon: Home },
  { category: "Residential", title: "Green Spaces", description: "Eco-friendly landscape design", icon: Trees },
  { category: "Commercial", title: "Office Hubs", description: "Modern corporate spaces", icon: Building2 },
  { category: "Commercial", title: "Retail Zones", description: "Premium shopping experience", icon: ShoppingBag },
  { category: "Events", title: "Investor Summit 2024", description: "Annual networking event", icon: Mic },
  { category: "Events", title: "Community Engagement", description: "CSR initiatives and programs", icon: Handshake },
]

const categories = ["All", "Industrial", "Residential", "Commercial", "Events"]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <main className="min-h-screen bg-black">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-[#0a0a0a] px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide">Gallery & <span className="text-[#c9a962]">Media</span></h1>
            <p className="text-xl text-gray-300 max-w-3xl font-light">Explore our world-class infrastructure, facilities, and memorable moments from MET City</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-12 bg-black border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 text-sm font-semibold tracking-wider transition-all ${
                  activeCategory === category
                    ? "bg-[#c9a962] text-black"
                    : "bg-transparent border border-[#c9a962] text-[#c9a962] hover:bg-[#c9a962]/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-20 bg-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#111] border border-[#333] overflow-hidden hover:border-[#c9a962] transition-colors cursor-pointer group"
                >
                  <div className="aspect-square bg-[#c9a962]/10 flex items-center justify-center border-b border-[#333]">
                    <IconComponent className="w-16 h-16 text-[#c9a962] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-[#c9a962]/20 text-[#c9a962] text-xs font-semibold tracking-wider mb-3">{item.category}</span>
                    <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">FEATURED CAMPAIGNS</h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              { title: "Sustainable Development", description: "Our commitment to environmental excellence and green spaces", items: ["Carbon Neutral Operations", "Water Management", "Renewable Energy"] },
              { title: "Community First", description: "Building spaces that bring people together", items: ["Recreation Centers", "Community Events", "Social Programs"] },
            ].map((campaign, index) => (
              <motion.div
                key={campaign.title}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#111] border border-[#c9a962]/30 p-8 hover:border-[#c9a962] transition-colors"
              >
                <h3 className="text-lg font-bold text-[#c9a962] mb-3 tracking-wider">{campaign.title}</h3>
                <p className="text-gray-300 mb-6 text-sm">{campaign.description}</p>
                <ul className="space-y-2">
                  {campaign.items.map((item) => (
                    <li key={item} className="flex gap-3 text-gray-400 text-sm">
                      <span className="text-[#c9a962]">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
