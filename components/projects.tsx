"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: "industrial",
    num: "01",
    title: "INDUSTRIAL",
    href: "/industrial",
    description:
      "A robust industrial ecosystem powered by dual-grid electricity, SCADA-controlled water infrastructure, NB-IoT technology, integrated command and control unit and direct access to the KMP expressway. Home to 600+ companies from 10+ countries, MET City offers industrial plots in Haryana, proximity to Farukh Nagar Railway Station, and ready-to-build plots suited for Footwear, Auto & Auto Components, Skincare, Metal Products, Medical Devices, Electronics, Defence Industrial & GI Tech and more.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2942&auto=format&fit=crop",
    tag: "600+ Companies",
  },
  {
    id: "residential",
    num: "02",
    title: "RESIDENTIAL",
    href: "/residential",
    description:
      "A thoughtfully designed residential township that redefines sustainable urban living. Offering premium villa plots for sale in Jhajjar, the township features lush landscaped parks, jogging trails, and community-centric open spaces. Designed for modern families and professionals, this residential township blends comfort, connectivity, and convenience. With walk-to-work planning and smart city infrastructure, it's not just where you live, it's how you thrive.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2874&auto=format&fit=crop",
    tag: "Premium Villa Plots",
  },
  {
    id: "commercial",
    num: "03",
    title: "COMMERCIAL",
    href: "/commercial",
    description:
      "From office hubs to retail zones, MET City offers strategically positioned Highway Mart and SuperMart, a modern commercial plaza offering banking, daily essentials, food outlets, and more. These commercial plots in Jhajjar, near Gurgaon offer high footfall, excellent visibility, and unmatched accessibility via NH-48 and KMP Expressway.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop",
    tag: "Prime Location",
  },
  {
    id: "jit",
    num: "04",
    title: "JAPAN INDUSTRIAL TOWNSHIP",
    href: "/japan-industrial-township",
    description:
      "The Japanese Industrial Township in North India at MET City is home to six leading companies: Panasonic, Denso, Nihon Kohden, Tsuzuki India, Sanko Gosei, and Svam Toyal. With ready infrastructure, faster clearances, and a dedicated zone, Haryana's JIT is a landmark of Indo-Japanese industrial collaboration and innovation.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2940&auto=format&fit=crop",
    tag: "6 Japanese Companies",
  },
]

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = projects[activeIndex]

  useEffect(() => {
    const t = setTimeout(() => setActiveIndex((i) => (i + 1) % projects.length), 6000)
    return () => clearTimeout(t)
  }, [activeIndex])

  return (
    <section id="projects" className="relative min-h-[700px] overflow-hidden">

      {/* ── Full-bleed background image ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={active.image}
            alt={active.title}
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Layered overlays ── */}
      {/* Left dark panel */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/92 via-black/75 to-transparent" />
      {/* Top vignette */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
      {/* Subtle gold tint at very bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-[#c9a962]/10 to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-20 flex flex-col h-full min-h-[700px]">

        {/* Top bar */}
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 pt-12 pb-2 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            {/* Gold vertical rule */}
            <span className="w-px h-6 bg-[#c9a962]" />
            <p className="text-white/60 text-[10px] tracking-[0.4em] uppercase font-light">
              Iconic Projects
            </p>
          </motion.div>

          {/* Counter top-right */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden sm:flex items-center gap-2"
          >
            <span className="text-[#c9a962] text-sm font-light tabular-nums">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="w-8 h-px bg-white/20" />
            <span className="text-white/30 text-sm font-light tabular-nums">
              {String(projects.length).padStart(2, "0")}
            </span>
          </motion.div>
        </div>

        {/* Accordion */}
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 flex-1 flex flex-col justify-center py-8">
          <div className="w-full lg:w-[50%] xl:w-[44%]">
            {projects.map((project, i) => {
              const isActive = activeIndex === i
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  {/* Divider */}
                  <div className={`h-px w-full transition-colors duration-500 ${isActive ? "bg-[#c9a962]/60" : "bg-white/15"}`} />

                  <button
                    onClick={() => setActiveIndex(i)}
                    className="w-full py-5 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-4">
                      {/* Number */}
                      <span className={`text-[11px] tabular-nums font-light tracking-widest transition-colors duration-300 ${isActive ? "text-[#c9a962]" : "text-white/25 group-hover:text-white/50"}`}>
                        {project.num}
                      </span>
                      {/* Title */}
                      <h3 className={`text-base sm:text-lg tracking-[0.18em] font-light transition-colors duration-300 ${isActive ? "text-white" : "text-white/50 group-hover:text-white/80"}`}>
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 flex-shrink-0">
                      {/* Tag pill — only when active */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.span
                            initial={{ opacity: 0, x: 8 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 8 }}
                            transition={{ duration: 0.2 }}
                            className="hidden sm:block text-[10px] tracking-widest text-[#c9a962] border border-[#c9a962]/40 px-2.5 py-0.5 font-light"
                          >
                            {project.tag}
                          </motion.span>
                        )}
                      </AnimatePresence>
                      {/* Chevron */}
                      <motion.span
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`text-lg leading-none transition-colors duration-300 ${isActive ? "text-[#c9a962]" : "text-white/30"}`}
                      >
                        ‹
                      </motion.span>
                    </div>
                  </button>

                  {/* Expanded body */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <motion.p
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.12 }}
                          className="text-white/65 text-sm leading-[1.85] pb-5 pr-6 max-w-[480px]"
                        >
                          {project.description}
                        </motion.p>
                        <motion.div
                          initial={{ y: 6, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.25, delay: 0.2 }}
                          className="pb-6"
                        >
                          <Link
                            href={project.href}
                            className="inline-flex items-center gap-2.5 text-white text-[11px] tracking-[0.25em] uppercase hover:text-[#c9a962] transition-colors duration-200 group/link"
                          >
                            <span className="text-[#c9a962]">|</span>
                            Know More
                            <span className="text-[#c9a962]">|</span>
                            <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-200" />
                          </Link>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
            {/* Bottom divider */}
            <div className="h-px w-full bg-white/15" />
          </div>
        </div>

        {/* Bottom bar — dot nav */}
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 pb-8 flex items-center gap-3">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Project ${i + 1}`}
              className="relative h-px overflow-hidden transition-all duration-300"
              style={{ width: activeIndex === i ? 40 : 16 }}
            >
              <span className="absolute inset-0 bg-white/25" />
              {activeIndex === i && (
                <motion.span
                  key={activeIndex}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 6, ease: "linear" }}
                  style={{ originX: 0 }}
                  className="absolute inset-0 bg-[#c9a962]"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
