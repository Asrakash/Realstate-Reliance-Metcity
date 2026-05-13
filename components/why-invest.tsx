"use client"

import { motion } from "framer-motion"
import { ArrowRight, Award, Home, MapPin, Zap } from "lucide-react"
import Link from "next/link"

const reasons = [
  {
    icon: Home,
    label: "Home to 600+ Indian and global companies and the Japanese Industrial Township (JIT)",
  },
  {
    icon: MapPin,
    label: "Excellent connectivity via KMP Expressway, NH-8, DFC, and IGI Airport",
  },
  {
    icon: Award,
    label: "IGBC Platinum certified smart city with walk-to-work master planning",
  },
  {
    icon: Zap,
    label: "Plug-and-play industrial infrastructure with 24/7 power and water supply",
  },
]

export function WhyInvest() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-white text-2xl sm:text-3xl tracking-[0.22em] font-light">
            WHY INVEST IN MET?
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <p className="text-gray-400 text-base leading-relaxed">
            Reliance MET City is among the best integrated townships in India, offering a future-ready
            ecosystem for industries, investors, and residents alike. Located in the heart of Delhi NCR,
            this IGBC Platinum rated smart city project in Haryana blends strategic connectivity,
            plug-and-play infrastructure, and sustainable planning, making it one of the most
            sought-after smart city investments in India.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-12"
        >
          {reasons.map(({ icon: Icon, label }, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex flex-col items-center gap-4 rounded-xl border border-[#c9a962]/20 bg-transparent p-8 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#c9a962]/20 bg-transparent text-[#c9a962]">
                <Icon className="h-6 w-6" />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Know More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="#more"
            className="inline-flex items-center gap-2 text-[#c9a962] text-sm tracking-[0.2em] hover:gap-4 transition-all duration-300 group border-l border-r border-[#c9a962]/40 px-4 py-1"
          >
            | KNOW MORE |
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
