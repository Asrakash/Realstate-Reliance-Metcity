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
  {
    company: "Nihon Kohden",
    initials: "NK",
    role: "MD - Nihon Kohden India",
    quote: "MET City’s infrastructure is an ideal match for our medical technology operations in India.",
  },
  {
    company: "Panasonic",
    initials: "P",
    role: "MD & CEO - Panasonic Life Solution India",
    quote: "The MET City ecosystem gives us a clear path to scale smart industrial development.",
  },
  {
    company: "Svam Toyal",
    initials: "ST",
    role: "Director & CTO - Svam Toyal Packaging Industries",
    quote: "This project shows how global manufacturing partners can thrive in Haryana.",
  },
]

export function Partners() {
  return (
    <section id="partners" className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-12">
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
                  className="flex-shrink-0 rounded-3xl border border-gray-200 bg-white/80 px-6 py-3 shadow-sm shadow-black/5 hover:border-[#c9a962] transition-colors"
                >
                  <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                    {partner}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-[#c9a962] transition-colors shadow-sm z-10">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-[#c9a962] transition-colors shadow-sm z-10">
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

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-[32px] border border-[#e2dfd5] bg-[#081014] p-8 shadow-xl shadow-black/10"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#0f172a] ring-1 ring-[#c9a962]/25 text-[#c9a962] text-2xl font-black">
                {testimonial.initials}
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a962]">
                {testimonial.company}
              </p>
              <p className="mt-5 text-gray-300 text-sm leading-7">{testimonial.quote}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.24em] text-gray-400">
                {testimonial.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
