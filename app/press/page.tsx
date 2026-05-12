'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

const pressReleases = [
  { id: 1, date: "May 10, 2024", title: "MET City Expands Japanese Industrial Township with 3 New Manufacturing Partners", category: "Business", excerpt: "Announced partnership with leading global manufacturers to establish state-of-the-art production facilities at JIT." },
  { id: 2, date: "April 28, 2024", title: "Record FY2024 Results: 25% Growth in Revenue and Project Completions", category: "Financial", excerpt: "Strong financial performance driven by successful project launches and operational efficiency improvements." },
  { id: 3, date: "April 15, 2024", title: "Sustainability Leadership: MET City Achieves Carbon Neutral Operations Target", category: "Sustainability", excerpt: "Became first industrial park developer in India to achieve carbon neutral certifications across operations." },
  { id: 4, date: "March 30, 2024", title: "Launch of Premium Commercial Hub in Gurgaon NCR Region", category: "Projects", excerpt: "New 500,000 sq. ft. commercial space featuring modern offices and retail outlets now open for tenants." },
  { id: 5, date: "March 15, 2024", title: "CSR Milestone: 100,000 Students Benefited from Education Programs", category: "CSR", excerpt: "Celebration of educational impact across 50+ villages and communities in Haryana and NCR regions." },
  { id: 6, date: "February 28, 2024", title: "Partnership Announced with Leading Investment Firm for Expansion Plans", category: "Business", excerpt: "Strategic partnership to accelerate growth in residential, commercial, and industrial segments." },
]

const newsItems = [
  { source: "Business Today", title: "MET City Named Among Top 10 Industrial Developers in India", date: "April 2024" },
  { source: "Economic Times", title: "Smart City Infrastructure: MET City's Digital-First Approach Pays Off", date: "March 2024" },
  { source: "Mint", title: "Real Estate Investment Insights: Why Institutional Investors Choose MET City", date: "February 2024" },
  { source: "The Hindu Business Line", title: "Haryana's Growth Story: MET City's Role in State Development", date: "January 2024" },
]

export default function Press() {
  const [activeCategory, setActiveCategory] = useState("All")
  const categories = ["All", ...Array.from(new Set(pressReleases.map((p) => p.category)))]
  const filtered = activeCategory === "All" ? pressReleases : pressReleases.filter((p) => p.category === activeCategory)

  return (
    <main className="min-h-screen bg-black">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-[#0a0a0a] px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide">Press & <span className="text-[#c9a962]">Media</span></h1>
            <p className="text-xl text-gray-300 max-w-3xl font-light">Latest news, press releases, and media coverage about MET City and our projects</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-12 bg-black border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 text-sm font-semibold tracking-wider transition-all ${
                  activeCategory === category
                    ? "bg-[#c9a962] text-black"
                    : "bg-transparent border border-[#c9a962] text-[#c9a962] hover:bg-[#c9a962]/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-12 bg-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {filtered.map((release, index) => (
                <motion.div key={release.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.05 }} className="bg-[#111] border border-[#333] p-6 hover:border-[#c9a962] transition-colors cursor-pointer group">
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#c9a962]/20 text-[#c9a962] text-xs font-semibold tracking-wider">{release.category}</span>
                    <span className="text-gray-500 text-xs">{release.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-3 group-hover:text-[#c9a962] transition-colors">{release.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{release.excerpt}</p>
                  <button className="text-[#c9a962] text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Read Full Release <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-white text-lg font-light tracking-wider mb-6">IN THE NEWS</h3>
              <div className="space-y-4">
                {newsItems.map((news, index) => (
                  <motion.div key={news.source} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-[#111] border border-[#333] p-4 hover:border-[#c9a962] transition-colors">
                    <p className="text-[#c9a962] text-xs font-semibold mb-2 tracking-wider">{news.source}</p>
                    <h4 className="text-white font-semibold text-sm mb-2">{news.title}</h4>
                    <p className="text-gray-500 text-xs">{news.date}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#111] border border-[#c9a962]/30 p-12 hover:border-[#c9a962] transition-colors">
            <h2 className="text-2xl font-light text-white mb-4 tracking-wide">Media Kit</h2>
            <p className="text-gray-300 mb-8 text-sm">Download our official media kit with company information, leadership bios, project details, and high-resolution images.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["Company Logos", "Project Images", "Leadership Bios"].map((item) => (
                <button key={item} className="px-6 py-3 bg-transparent border border-[#c9a962] text-[#c9a962] font-semibold hover:bg-[#c9a962] hover:text-black transition-all text-sm tracking-wider">{item}</button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-black border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#111] border border-[#c9a962]/30 p-12 text-center hover:border-[#c9a962] transition-colors">
            <h2 className="text-2xl font-light text-white mb-4 tracking-wide">Media Inquiries</h2>
            <p className="text-gray-300 mb-6 text-sm">Get in touch with our communications team for press inquiries and media requests</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="mailto:press@metcity.in" className="px-8 py-3 bg-[#c9a962] text-black font-semibold hover:bg-[#b8975a] transition-all text-sm tracking-wider">press@metcity.in</a>
              <button className="px-8 py-3 border border-[#c9a962] text-[#c9a962] font-semibold hover:bg-[#c9a962]/10 transition-all text-sm tracking-wider">REQUEST INTERVIEW</button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
