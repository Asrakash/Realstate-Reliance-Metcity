"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

const reasons = [
  "Home to 600+ Indian and global companies and the Japanese Industrial Township (JIT)",
  "Excellent connectivity via KMP Expressway, NH-8, DFC, and IGI Airport",
  "IGBC Platinum certified smart city with walk-to-work master planning",
  "Plug-and-play industrial infrastructure with 24/7 power and water supply",
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
          <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">
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

        {/* Reasons List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-4 mb-12"
        >
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-0.5" />
              <p className="text-gray-300 text-sm">{reason}</p>
            </div>
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
            className="inline-flex items-center gap-2 text-[#c9a962] text-sm tracking-wider hover:gap-4 transition-all group"
          >
            KNOW MORE
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
