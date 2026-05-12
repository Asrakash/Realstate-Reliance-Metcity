'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Award, Building2, Globe, Zap, Users, TrendingUp } from "lucide-react"

const companies = [
  { name: "Panasonic", role: "Electronics & Home Appliances", employees: "500+" },
  { name: "Denso", role: "Automotive Components", employees: "300+" },
  { name: "Nihon Kohden", role: "Medical Devices", employees: "200+" },
  { name: "Tsuzuki India", role: "Precision Engineering", employees: "150+" },
  { name: "Sanko Gosei", role: "Auto Components", employees: "100+" },
  { name: "Svam Toyal", role: "Packaging Solutions", employees: "80+" },
]

const features = [
  { icon: Award, title: "Only JIT in Haryana", description: "The only Japanese Industrial Township in Haryana, representing global manufacturing excellence" },
  { icon: Building2, title: "Ready Infrastructure", description: "Plug-and-play industrial infrastructure with all utilities and clearances in place" },
  { icon: Users, title: "Dedicated Support", description: "Government liaison and regulatory support specifically for Japanese companies" },
  { icon: Globe, title: "Global Standards", description: "World-class facilities meeting Japanese quality and sustainability standards" },
  { icon: Zap, title: "Fast Operations", description: "Expedited clearances and faster time-to-production for Japanese enterprises" },
  { icon: TrendingUp, title: "Growth Ecosystem", description: "Access to suppliers, logistics, and skilled workforce specific to Japanese manufacturing" },
]

export default function JapanIndustrialTownshipPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-[#0a0a0a] px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-wide">Japan Industrial Township at <span className="text-[#c9a962]">MET City</span></h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-8 font-light">Haryana&apos;s premier destination for Japanese manufacturing, hosting 6 leading companies in a dedicated industrial zone with world-class infrastructure and government support.</p>
            <button className="px-8 py-3 bg-[#c9a962] text-black font-bold hover:bg-[#d4b376] transition-colors tracking-wider">EXPLORE OPPORTUNITIES</button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-black border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">WHY JIT AT MET CITY?</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const IconComponent = feature.icon
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="bg-[#111] border border-[#333] p-8 hover:border-[#c9a962] transition-colors text-center">
                  <IconComponent className="w-10 h-10 text-[#c9a962] mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">OUR JAPANESE COMPANIES</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="bg-[#111] border border-[#333] p-8 hover:border-[#c9a962] transition-colors">
                <h3 className="text-xl font-bold mb-3 text-[#c9a962]">{company.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{company.role}</p>
                <p className="text-xs text-gray-500 tracking-wider">EMPLOYEES: {company.employees}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-black border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">INDO-JAPANESE PARTNERSHIP</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Make in India Initiative", points: ["Direct foreign investment from Japan", "Transfer of advanced manufacturing technology", "Global quality standards in India", "Export-oriented production hubs"] },
              { title: "Economic Impact", points: ["1,300+ direct employment opportunities", "Advanced skill development programs", "Supply chain integration with local industries", "Strengthened Indo-Japanese trade relations"] },
            ].map((section, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-[#111] border border-[#333] p-8 hover:border-[#c9a962] transition-colors">
                <h3 className="text-lg font-bold mb-6 text-[#c9a962] tracking-wider">{section.title}</h3>
                <ul className="space-y-3">
                  {section.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-start gap-3 text-sm">
                      <span className="w-1.5 h-1.5 bg-[#c9a962] mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">INVESTMENT INCENTIVES</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Government Support", items: ["Dedicated liaison officer", "Expedited approvals", "Haryana incentives", "GST benefits"] },
              { title: "Infrastructure Benefits", items: ["24/7 power supply", "Water management systems", "Logistics support", "Utility corridors"] },
            ].map((section, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="bg-[#111] border border-[#333] p-8 hover:border-[#c9a962] transition-colors">
                <h3 className="text-lg font-bold mb-6 text-[#c9a962] tracking-wider">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-3 text-sm">
                      <span className="w-1.5 h-1.5 bg-[#c9a962] flex-shrink-0"></span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-black border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[{ number: "6", label: "Japanese Companies" }, { number: "1,300+", label: "Direct Jobs Created" }, { number: "100%", label: "Japanese Ownership" }].map((stat, idx) => (
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
