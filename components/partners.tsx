"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const partners = [
  "Panasonic", "Denso", "Tsuzuki India", "Nihon Kohden", "SVM Toyal", "Sanko Gosei",
  "Saab", "FM Logistic", "Deerfos", "Retail", "Hamdard", "Shinkwang",
  "Iberia", "RE", "Fabcare", "Autoliv", "GreenH", "Neoperl",
  "FMS", "Dinamic", "Boditech", "Mark", "Amber", "Beumer", "Allcargo", "Indospace"
]

const testimonials = [
  { name: "Yuya Kawabata", role: "MD - Nihon Kohden India" },
  { name: "Tadashi Chiba", role: "MD & CEO - Panasonic Life Solution India" },
  { name: "Hiroshi Kubo", role: "Director & CTO - Svam Toyal Packaging Industries" },
]

export function Partners() {
  return (
    <section id="partners" className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-black text-2xl sm:text-3xl tracking-wider font-light"
          >
            OUR PARTNERS
          </motion.h2>
          <Link
            href="#partners"
            className="inline-flex items-center gap-2 text-[#c9a962] text-sm tracking-wider hover:gap-3 transition-all"
          >
            EXPLORE MORE
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Partner Logos Marquee */}
        <div className="relative mb-16">
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: [0, -2000] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-8 items-center"
            >
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-6 py-3 border border-gray-200 hover:border-[#c9a962] transition-colors"
                >
                  <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                    {partner}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 flex items-center justify-center hover:border-[#c9a962] transition-colors z-10">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 flex items-center justify-center hover:border-[#c9a962] transition-colors z-10">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Testimonials */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-black text-2xl tracking-wider font-light text-center mb-12"
        >
          TESTIMONIALS
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              {/* Play Button */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#c9a962] flex items-center justify-center cursor-pointer hover:bg-[#c9a962] hover:text-black transition-all group">
                <Play className="w-6 h-6 text-[#c9a962] group-hover:text-black fill-current" />
              </div>
              
              {/* Name */}
              <h4 className="text-black font-medium text-lg">{testimonial.name}</h4>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
