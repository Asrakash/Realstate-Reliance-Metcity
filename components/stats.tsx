"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const stats = [
  {
    value: 8250,
    label: "ACRES PLANNED",
    sublabel: "DEVELOPMENT AREA",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 mx-auto mb-4" stroke="currentColor" strokeWidth="1.5">
        {/* Map with pin */}
        <path d="M8 52 L20 36 L32 44 L44 28 L56 40" strokeLinejoin="round" strokeLinecap="round"/>
        <circle cx="44" cy="20" r="6" />
        <path d="M44 26 L44 32" strokeLinecap="round"/>
        <rect x="6" y="48" width="52" height="4" rx="1"/>
        <path d="M6 48 L6 20 M58 48 L58 20" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    value: 650,
    suffix: "+",
    label: "COMPANIES IN",
    sublabel: "10+ COUNTRIES",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 mx-auto mb-4" stroke="currentColor" strokeWidth="1.5">
        {/* Building grid */}
        <rect x="8" y="20" width="20" height="36" rx="1"/>
        <rect x="36" y="12" width="20" height="44" rx="1"/>
        <rect x="12" y="28" width="4" height="4"/>
        <rect x="20" y="28" width="4" height="4"/>
        <rect x="12" y="36" width="4" height="4"/>
        <rect x="20" y="36" width="4" height="4"/>
        <rect x="40" y="20" width="4" height="4"/>
        <rect x="48" y="20" width="4" height="4"/>
        <rect x="40" y="28" width="4" height="4"/>
        <rect x="48" y="28" width="4" height="4"/>
        <rect x="40" y="36" width="4" height="4"/>
        <rect x="48" y="36" width="4" height="4"/>
        <line x1="4" y1="56" x2="60" y2="56" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    value: 40000,
    suffix: "+",
    label: "JOBS CREATED",
    sublabel: "AND GROWING",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 mx-auto mb-4" stroke="currentColor" strokeWidth="1.5">
        {/* Briefcase */}
        <rect x="8" y="24" width="48" height="32" rx="2"/>
        <path d="M22 24 L22 18 Q22 14 26 14 L38 14 Q42 14 42 18 L42 24"/>
        <line x1="8" y1="38" x2="56" y2="38"/>
        <line x1="28" y1="34" x2="36" y2="34"/>
        {/* checkmark badge */}
        <circle cx="48" cy="20" r="8" fill="currentColor" fillOpacity="0.15"/>
        <path d="M44 20 L47 23 L52 17" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    value: 3000,
    suffix: "+",
    label: "RESIDENTIAL CUSTOMERS",
    sublabel: "PART OF THE MET ECOSYSTEM",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 mx-auto mb-4" stroke="currentColor" strokeWidth="1.5">
        {/* House */}
        <path d="M8 30 L32 10 L56 30" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 26 L14 54 L50 54 L50 26"/>
        <rect x="24" y="38" width="16" height="16"/>
        <rect x="18" y="30" width="8" height="8"/>
        <rect x="38" y="30" width="8" height="8"/>
        {/* small house beside */}
        <path d="M52 36 L60 28 L68 36" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"/>
      </svg>
    ),
  },
]

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, value])

  const formatNumber = (num: number) => num >= 1000 ? num.toLocaleString() : num

  return <span ref={ref}>{formatNumber(count)}{suffix}</span>
}

export function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Title — black on white, matches reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-black text-2xl sm:text-3xl tracking-widest font-light">
            TAKE A LOOK AT OUR NUMBERS
          </h2>
        </motion.div>

        {/* Gold container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#c9a962]"
        >
          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`text-center p-8 text-black ${
                  index < stats.length - 1 ? "border-r border-black/20" : ""
                } border-b border-black/20`}
              >
                {/* Icon */}
                <div className="text-black opacity-80">
                  {stat.icon}
                </div>
                {/* Number */}
                <div className="text-4xl sm:text-5xl font-bold text-black mb-2 leading-none">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                {/* Labels */}
                <div className="text-[11px] font-bold tracking-widest text-black/80 mt-2 leading-tight">
                  {stat.label}
                  <br />
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications row */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* IGBC */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6 p-8 border-r border-black/20"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-black/20 bg-white flex items-center justify-center">
                <svg viewBox="0 0 60 60" className="w-12 h-12">
                  <circle cx="30" cy="30" r="28" fill="#2d6a2d" />
                  <circle cx="30" cy="30" r="20" fill="#4a9e4a" />
                  <path d="M20 30 l7 7 l13-14" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="30" y="54" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">PLATINUM</text>
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-black leading-tight">IGBC</div>
                <div className="text-2xl font-bold text-black leading-tight">Platinum Certified</div>
                <div className="text-[10px] font-bold tracking-widest text-black/70 mt-1">SMART, SUSTAINABLE & FUTURE READY</div>
              </div>
            </motion.div>

            {/* Japan Industrial Township */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 p-8"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-black/20">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png"
                  alt="Japan Flag"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <div className="text-2xl font-bold text-black leading-tight">Only Japan</div>
                <div className="text-2xl font-bold text-black leading-tight">Industrial Township</div>
                <div className="text-[10px] font-bold tracking-widest text-black/70 mt-1">IN HARYANA - 6 LEADING JAPANESE COMPANIES</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
