'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Building2, TrendingUp, Users, MapPin, DollarSign, Zap } from "lucide-react"

const spaces = [
  { icon: Building2, title: "Office Hubs", description: "Modern office spaces for corporate headquarters and branch operations" },
  { icon: TrendingUp, title: "Retail Zones", description: "High-traffic retail areas perfect for F&B, fashion, and lifestyle brands" },
  { icon: Users, title: "SuperMart", description: "Premium shopping destination with banking, food, and daily essentials" },
  { icon: Zap, title: "Highway Mart", description: "Strategic highway-facing commercial spaces with excellent visibility" },
  { icon: DollarSign, title: "Premium Pricing", description: "Competitive commercial rates with flexible lease terms" },
  { icon: MapPin, title: "Prime Location", description: "Access to NH-48 and KMP Expressway with massive catchment area" },
]

export default function CommercialPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-[#0a0a0a] px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-wide">
              Commercial Opportunities at <span className="text-[#c9a962]">MET City</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-8 font-light">
              Strategic commercial spaces with unmatched visibility, accessibility, and foot traffic in India&apos;s most ambitious smart township.
            </p>
            <button className="px-8 py-3 bg-[#c9a962] text-black font-bold hover:bg-[#d4b376] transition-colors tracking-wider">
              INQUIRE FOR SPACE
            </button>
          </motion.div>
        </div>
      </section>

      {/* Commercial Offerings */}
      <section className="py-20 px-6 lg:px-12 bg-black border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">OUR COMMERCIAL SOLUTIONS</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaces.map((space, idx) => {
              const IconComponent = space.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-[#111] border border-[#333] p-8 hover:border-[#c9a962] transition-colors text-center"
                >
                  <IconComponent className="w-10 h-10 text-[#c9a962] mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">{space.title}</h3>
                  <p className="text-gray-400 text-sm">{space.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose MET City */}
      <section className="py-20 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">WHY CHOOSE MET CITY?</h2>
          </motion.div>
          <div className="bg-[#111] border border-[#333] p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-bold mb-6 text-[#c9a962] tracking-wider">MARKET ADVANTAGE</h3>
                <div className="space-y-4">
                  {[
                    "Captive market of 600+ companies and 3,000+ residents",
                    "Strategic location on national highway corridors",
                    "Highest footfall in the region",
                    "Professional ecosystem with quality tenants",
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#c9a962] mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-bold mb-6 text-[#c9a962] tracking-wider">OPERATIONAL BENEFITS</h3>
                <div className="space-y-4">
                  {[
                    "Ample free parking and easy accessibility",
                    "Professional property management",
                    "Ready-to-occupy spaces",
                    "Flexible lease terms and tenure",
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#c9a962] mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Spaces */}
      <section className="py-20 px-6 lg:px-12 bg-black border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">FEATURED COMMERCIAL SPACES</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "SuperMart Plaza", area: "50,000 Sq.Ft", description: "Premium multi-level retail destination with banking, food court, and lifestyle brands", status: "Now Open" },
              { name: "Highway Mart", area: "30,000 Sq.Ft", description: "Highway-facing commercial complex with high visibility and easy access", status: "Phase 1 Open" },
            ].map((space, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#111] border border-[#333] p-8 hover:border-[#c9a962] transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold">{space.name}</h3>
                  <span className="text-xs px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30">{space.status}</span>
                </div>
                <p className="text-[#c9a962] font-bold mb-3 tracking-wider">{space.area}</p>
                <p className="text-gray-400 text-sm mb-6">{space.description}</p>
                <button className="px-6 py-2 bg-[#c9a962] text-black font-bold hover:bg-[#d4b376] transition-colors w-full tracking-wider text-sm">
                  LEARN MORE
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">SUCCESS STORIES</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { business: "Premium Restaurant Chain", success: "Opened flagship outlet; 200% growth in first year due to high footfall" },
              { business: "Corporate Services Firm", success: "Expanded headquarters; benefited from access to skilled workforce" },
            ].map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#111] border border-[#333] p-8 hover:border-[#c9a962] transition-colors"
              >
                <p className="text-[#c9a962] font-bold mb-3 tracking-wider text-sm">{story.business}</p>
                <p className="text-gray-300 italic text-sm">&ldquo;{story.success}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
