"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const paragraphs = [
  "At Reliance MET City, we are shaping the future of urban India through a world-class smart city project located near Gurgaon in Jhajjar, Haryana. Developed by Model Economic Township Limited, a 100% subsidiary of Reliance Industries Limited, MET City is a next-generation integrated township that brings together industrial growth, Planet-first approach, and global investment.",
  "Planned across 8,250 acres, it offers industrial plots, residential properties, and commercial spaces within a thoughtfully master planned, IGBC Platinum certified smart city.",
  "Our vision is to build a future-ready smart city where progress meets purpose, and our mission is to create a technology-driven ecosystem anchored in sustainability, and inclusivity.",
  "As home to Haryana\u2019s Japanese Industrial Township (JIT) and over 600 leading companies, Reliance MET City is not just among the best smart cities in India, it is a powerful symbol of what tomorrow\u2019s India can be.",
]

// Cityscape SVG silhouette matching the reference
function CityscapeSilhouette() {
  return (
    <div className="relative w-full h-32 mt-8 overflow-hidden pointer-events-none select-none">
      <svg
        viewBox="0 0 1400 130"
        preserveAspectRatio="xMidYMax slice"
        className="absolute bottom-0 w-full"
        fill="#c9a962"
        opacity="0.18"
      >
        {/* Left cluster */}
        <rect x="0" y="80" width="18" height="50" />
        <rect x="20" y="60" width="22" height="70" />
        <rect x="44" y="40" width="16" height="90" />
        <rect x="62" y="70" width="12" height="60" />
        <rect x="76" y="50" width="20" height="80" />
        <rect x="98" y="30" width="14" height="100" />
        <rect x="114" y="55" width="18" height="75" />
        <rect x="134" y="65" width="10" height="65" />
        <rect x="146" y="45" width="22" height="85" />
        <rect x="170" y="75" width="14" height="55" />
        <rect x="186" y="55" width="16" height="75" />
        {/* antenna on tall building */}
        <rect x="101" y="18" width="2" height="12" />

        {/* Mid-left */}
        <rect x="210" y="85" width="20" height="45" />
        <rect x="232" y="60" width="28" height="70" />
        <rect x="262" y="40" width="18" height="90" />
        <rect x="282" y="70" width="14" height="60" />
        <rect x="298" y="50" width="24" height="80" />
        <rect x="324" y="35" width="16" height="95" />
        <rect x="342" y="65" width="20" height="65" />
        <rect x="364" y="55" width="12" height="75" />
        {/* antenna */}
        <rect x="327" y="22" width="2" height="13" />

        {/* Center gap / lower buildings */}
        <rect x="390" y="90" width="30" height="40" />
        <rect x="422" y="75" width="20" height="55" />
        <rect x="444" y="85" width="16" height="45" />
        <rect x="462" y="70" width="22" height="60" />
        <rect x="486" y="80" width="18" height="50" />
        <rect x="506" y="90" width="14" height="40" />

        {/* Right-center tall cluster */}
        <rect x="530" y="50" width="20" height="80" />
        <rect x="552" y="30" width="16" height="100" />
        <rect x="570" y="55" width="24" height="75" />
        <rect x="596" y="40" width="18" height="90" />
        <rect x="616" y="65" width="14" height="65" />
        <rect x="632" y="45" width="22" height="85" />
        <rect x="656" y="70" width="16" height="60" />
        {/* antenna */}
        <rect x="555" y="17" width="2" height="13" />
        <rect x="599" y="27" width="2" height="13" />

        {/* Right cluster */}
        <rect x="680" y="60" width="20" height="70" />
        <rect x="702" y="40" width="18" height="90" />
        <rect x="722" y="70" width="14" height="60" />
        <rect x="738" y="50" width="22" height="80" />
        <rect x="762" y="35" width="16" height="95" />
        <rect x="780" y="65" width="20" height="65" />
        <rect x="802" y="55" width="12" height="75" />
        <rect x="816" y="75" width="18" height="55" />
        <rect x="836" y="45" width="24" height="85" />
        {/* antenna */}
        <rect x="765" y="22" width="2" height="13" />

        {/* Far right */}
        <rect x="870" y="80" width="16" height="50" />
        <rect x="888" y="55" width="20" height="75" />
        <rect x="910" y="40" width="18" height="90" />
        <rect x="930" y="65" width="14" height="65" />
        <rect x="946" y="50" width="22" height="80" />
        <rect x="970" y="30" width="16" height="100" />
        <rect x="988" y="60" width="20" height="70" />
        <rect x="1010" y="70" width="12" height="60" />
        <rect x="1024" y="45" width="18" height="85" />
        <rect x="1044" y="75" width="14" height="55" />
        <rect x="1060" y="55" width="20" height="75" />
        <rect x="1082" y="40" width="16" height="90" />
        <rect x="1100" y="65" width="22" height="65" />
        <rect x="1124" y="50" width="18" height="80" />
        <rect x="1144" y="35" width="14" height="95" />
        <rect x="1160" y="70" width="20" height="60" />
        <rect x="1182" y="55" width="16" height="75" />
        <rect x="1200" y="80" width="12" height="50" />
        <rect x="1214" y="45" width="22" height="85" />
        <rect x="1238" y="60" width="18" height="70" />
        <rect x="1258" y="40" width="16" height="90" />
        <rect x="1276" y="70" width="14" height="60" />
        <rect x="1292" y="50" width="20" height="80" />
        <rect x="1314" y="35" width="18" height="95" />
        <rect x="1334" y="65" width="14" height="65" />
        <rect x="1350" y="55" width="22" height="75" />
        <rect x="1374" y="75" width="16" height="55" />
        <rect x="1392" y="85" width="8" height="45" />
        {/* antennas */}
        <rect x="973" y="17" width="2" height="13" />
        <rect x="1147" y="22" width="2" height="13" />
        <rect x="1317" y="22" width="2" height="13" />

        {/* Ground line */}
        <rect x="0" y="128" width="1400" height="2" />
      </svg>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="pt-24 pb-0 bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-[#c9a962] text-xs tracking-[0.3em] font-medium uppercase">About Us</span>
        </motion.div>

        {/* Main Heading — letter-by-letter reveal */}
        <div className="max-w-4xl mx-auto text-center mb-12 overflow-hidden">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-[0.15em] leading-relaxed"
          >
            A VISION. A CITY. A NEW TOMORROW
          </motion.h3>
          {/* Gold underline that draws in */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0.5 }}
            className="h-px bg-[#c9a962] w-24 mx-auto mt-6"
          />
        </div>

        {/* Paragraphs — staggered fade-up */}
        <div className="max-w-4xl mx-auto space-y-6">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              className="text-gray-400 text-base leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Know More */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[#c9a962] text-sm tracking-[0.2em] hover:gap-4 transition-all duration-300 group border-l border-r border-[#c9a962]/40 px-4 py-1"
          >
            | KNOW MORE |
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </motion.div>
      </div>

      {/* Cityscape silhouette — fades in as a whole */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <CityscapeSilhouette />
      </motion.div>
    </section>
  )
}
