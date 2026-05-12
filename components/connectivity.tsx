"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    title: "STRATEGIC CONNECTIVITY",
    content:
      "Reliance MET City is strategically located in the heart of Delhi NCR, adjoining Gurgaon and Delhi, offering unmatched multimodal connectivity. With direct access to NH-8, the KMP Expressway, and the upcoming Dwarka Expressway, it enables seamless movement across North India. The nearby Farukh Nagar Railway Station, Private Freight Terminal (PFT), and proximity to IGI Airport make MET City a vital link in the Dedicated Freight Corridor (DFC) and Delhi-Mumbai Industrial Corridor (DMIC), ideal for investors seeking industrial plots in Haryana.",
    image: "/strategic-connetivity.jpg",
  },
  {
    title: "SOCIO-ECONOMIC LANDSCAPE",
    content:
      "Spanning 22 villages and a population of over 40,000, MET City embraces inclusive growth by empowering local communities through skill training, job creation, and sustainable development. The region is evolving from an agrarian base into a vibrant industrial ecosystem, with rising employment in FMCG, automotive, electronics, and garment sectors. Surrounded by neighbouring industrial parks, it draws from a large pool of skilled manpower, ideal for industries seeking a smart city in Haryana that combines opportunity with community development.",
    image: "/socio-economic-landscape.jpg",
  },
  {
    title: "FUTURE-READY INFRASTRUCTURE",
    content:
      "From SCADA-controlled water supply and smart meters to 220/33/11 kV substations and dual-grid power systems, MET City ensures 24x7 operational readiness. Its infrastructure is tailored for energy-intensive industries, smart homes, and sustainable living. Advanced rainwater harvesting, STPs, and CETPs support its mission to be among the most sustainably planned smart cities in India.",
    image: "/future-ready-infrastructure.jpg",
  },
  {
    title: "COMPETITIVE BLEND",
    content:
      "MET City offers a unique mix of industrial, commercial, and residential plots for sale within a world-class smart township. Whether you're investing in freehold industrial land, building a commercial property in Gurgaon, or seeking residential plots near Delhi, MET City provides a holistic environment. With healthcare, education, retail, and a thriving Japanese Industrial Township (JIT), it's more than a city, it's a growth engine.",
    image: "/competitive-blend.jpg",
  },
]

export function Connectivity() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)

  const go = (next: number) => {
    setDir(next > current ? 1 : -1)
    setCurrent(next)
  }
  const prev = () => go((current - 1 + slides.length) % slides.length)
  const next = () => go((current + 1) % slides.length)

  const slide = slides[current]

  return (
    <section id="connectivity" className="bg-[#c9a962] py-14 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">

        {/* Section label */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-black text-2xl sm:text-3xl tracking-[0.2em] font-light mb-10"
        >
          HIGHLIGHTS
        </motion.h2>

        {/* Card */}
        <div className="bg-[#c9a962] grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">

          {/* ── Left: image ── */}
          <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={current}
                custom={dir}
                variants={{
                  enter: (d: number) => ({ opacity: 0, x: d * 40 }),
                  center: { opacity: 1, x: 0 },
                  exit: (d: number) => ({ opacity: 0, x: d * -40 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Right: text ── */}
          <div className="flex flex-col justify-between p-8 lg:p-12">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={current}
                custom={dir}
                variants={{
                  enter: (d: number) => ({ opacity: 0, y: d * 20 }),
                  center: { opacity: 1, y: 0 },
                  exit: (d: number) => ({ opacity: 0, y: d * -20 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeInOut" }}
              >
                {/* Title */}
                <h3 className="text-black text-xl sm:text-2xl tracking-[0.15em] font-light mb-6">
                  {slide.title}
                </h3>

                {/* Body — justified like the reference */}
                <p className="text-black/75 text-sm leading-[1.9] text-justify">
                  {slide.content}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Nav row — circular arrows + counter */}
            <div className="flex items-center gap-4 mt-10">
              {/* Prev */}
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-9 h-9 rounded-full border border-black/40 flex items-center justify-center hover:bg-black/10 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-black" />
              </button>

              {/* Counter */}
              <span className="text-black text-sm font-light tracking-widest tabular-nums">
                {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>

              {/* Next */}
              <button
                onClick={next}
                aria-label="Next"
                className="w-9 h-9 rounded-full border border-black/40 flex items-center justify-center hover:bg-black/10 transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
