'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { CheckCircle, Zap, Droplet, Radio, Truck } from "lucide-react"

const features = [
  { icon: Zap, title: "Dual-Grid Electricity", description: "24/7 dedicated power supply with 220/33/11 kV substations for energy-intensive industries" },
  { icon: Droplet, title: "Smart Water Management", description: "SCADA-controlled water infrastructure with rainwater harvesting and recycling systems" },
  { icon: Radio, title: "NB-IoT Technology", description: "Advanced connectivity through NB-IoT for smart monitoring and operational efficiency" },
  { icon: Truck, title: "Seamless Logistics", description: "Direct access to KMP Expressway, nearby Farukh Nagar Railway Station, and Private Freight Terminal" },
]

const industries = [
  { name: "Footwear Manufacturing", status: "Active" },
  { name: "Auto & Auto Components", status: "Active" },
  { name: "Skincare & FMCG", status: "Active" },
  { name: "Metal Products", status: "Active" },
  { name: "Medical Devices", status: "Active" },
  { name: "Electronics", status: "Active" },
  { name: "Defence & GI Tech", status: "Active" },
  { name: "Pharmaceuticals", status: "Growth Phase" },
]

export default function IndustrialPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-[#0a0a0a] px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-wide">Industrial Excellence at <span className="text-[#c9a962]">MET City</span></h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-8 font-light">A robust industrial ecosystem powered by cutting-edge infrastructure, hosting 600+ companies from 10+ countries in a world-class smart township.</p>
            <button className="px-8 py-3 bg-[#c9a962] text-black font-bold hover:bg-[#d4b376] transition-colors tracking-wider">INQUIRE NOW</button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-black border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">INFRASTRUCTURE HIGHLIGHTS</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => {
              const IconComponent = feature.icon
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="bg-[#111] border border-[#333] p-8 hover:border-[#c9a962] transition-colors">
                  <div className="flex items-start gap-4">
                    <IconComponent className="w-8 h-8 text-[#c9a962] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">STRATEGIC CONNECTIVITY</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-gray-300 text-sm mb-6">Located at the heart of the Delhi-Mumbai Industrial Corridor (DMIC), MET City offers unparalleled multimodal connectivity:</p>
              <ul className="space-y-4">
                {["Direct access to NH-8 and KMP Expressway", "Proximity to Farukh Nagar Railway Station", "Private Freight Terminal for logistics", "Connection to Dedicated Freight Corridor (DFC)", "35 km from IGI Airport"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#c9a962] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-[#111] border border-[#333] p-8 hover:border-[#c9a962] transition-colors">
              <h3 className="text-lg font-bold mb-6 tracking-wider">WHY MET CITY?</h3>
              <div className="space-y-4 text-gray-300 text-sm">
                <p><span className="text-[#c9a962] font-bold">Time-to-Production:</span> Ready-to-build plots eliminate construction delays</p>
                <p><span className="text-[#c9a962] font-bold">Regulatory Support:</span> Faster clearances with dedicated government liaison</p>
                <p><span className="text-[#c9a962] font-bold">Skilled Workforce:</span> Access to 40,000+ trained professionals in the region</p>
                <p><span className="text-[#c9a962] font-bold">Sustainability:</span> IGBC Platinum certified infrastructure meets global standards</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-black border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">INDUSTRIES WE SERVE</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.05 }} className="bg-[#111] border border-[#333] p-6 hover:border-[#c9a962] transition-colors">
                <h3 className="font-bold text-sm mb-3">{industry.name}</h3>
                <span className={`text-xs px-3 py-1 ${industry.status === 'Active' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'}`}>{industry.status}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[{ number: "600+", label: "Companies Operating" }, { number: "40,000+", label: "Jobs Created" }, { number: "8,250", label: "Acres Planned" }].map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="text-center">
                <p className="text-5xl md:text-6xl font-bold text-[#c9a962] mb-2">{stat.number}</p>
                <p className="text-gray-400 text-sm tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
