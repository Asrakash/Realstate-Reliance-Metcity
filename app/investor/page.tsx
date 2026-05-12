'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { FileText, TrendingUp } from "lucide-react"

const documents = [
  { title: "Annual Report 2023-24", category: "Financial", date: "March 2024", type: "PDF" },
  { title: "Quarterly Results Q4 2024", category: "Financial", date: "April 2024", type: "PDF" },
  { title: "Board Composition", category: "Governance", date: "Updated January 2024", type: "PDF" },
  { title: "Code of Conduct", category: "Policies", date: "Effective 2023", type: "PDF" },
  { title: "Dividend Policy", category: "Policies", date: "FY 2023-24", type: "PDF" },
  { title: "Risk Management Policy", category: "Governance", date: "Updated March 2024", type: "PDF" },
]

const boardMembers = [
  { name: "Rajesh Mittal", position: "Chairman", expertise: "Real Estate & Development" },
  { name: "Priya Sharma", position: "Managing Director", expertise: "Strategic Planning" },
  { name: "Vikram Desai", position: "Independent Director", expertise: "Finance & Audit" },
  { name: "Anika Reddy", position: "Independent Director", expertise: "Legal & Compliance" },
  { name: "Sameer Khan", position: "Independent Director", expertise: "Infrastructure & Projects" },
]

const investmentMetrics = [
  { label: "Market Cap", value: "$2.5B", change: "+12%" },
  { label: "Dividend Yield", value: "3.2%", change: "Stable" },
  { label: "ROE", value: "18.5%", change: "+2.1%" },
  { label: "Debt-to-Equity", value: "0.45", change: "Improved" },
]

export default function Investor() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-[#0a0a0a] px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide">Investor <span className="text-[#c9a962]">Relations</span></h1>
            <p className="text-xl text-gray-300 max-w-3xl font-light">Transparent reporting, strong governance, and sustainable growth opportunities for our investors</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-black border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">INVESTMENT METRICS</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentMetrics.map((metric, index) => (
              <motion.div key={metric.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-[#111] border border-[#c9a962]/30 p-6 hover:border-[#c9a962] transition-colors">
                <p className="text-gray-400 text-sm mb-2 tracking-wider">{metric.label}</p>
                <div className="flex items-end gap-3">
                  <div className="text-3xl font-bold text-[#c9a962]">{metric.value}</div>
                  <span className="text-green-400 text-sm font-semibold mb-1">{metric.change}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">BOARD OF DIRECTORS</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-[#111] border border-[#333] p-6 hover:border-[#c9a962] transition-colors">
                <div className="w-14 h-14 bg-gradient-to-br from-[#c9a962] to-[#9d7d4c] flex items-center justify-center text-xl font-bold text-black mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-base font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#c9a962] text-sm font-semibold mb-2 tracking-wider">{member.position}</p>
                <p className="text-gray-400 text-sm">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-black border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">DOCUMENTS & FILINGS</h2>
          </motion.div>
          <div className="space-y-4">
            {documents.map((doc, index) => (
              <motion.div key={doc.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.05 }} className="bg-[#111] border border-[#333] p-6 hover:border-[#c9a962] transition-colors cursor-pointer flex items-center justify-between group">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-[#c9a962]/20 text-[#c9a962] text-xs font-semibold tracking-wider">{doc.category}</span>
                    <span className="text-gray-500 text-xs">{doc.type}</span>
                  </div>
                  <h3 className="text-white font-semibold group-hover:text-[#c9a962] transition-colors text-sm">{doc.title}</h3>
                  <p className="text-gray-400 text-xs mt-1">{doc.date}</p>
                </div>
                <FileText className="w-5 h-5 text-gray-400 group-hover:text-[#c9a962] transition-colors ml-4" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">CORPORATE POLICIES</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Code of Conduct", items: ["Ethical business practices", "Conflict of interest policy", "Whistleblower protection", "Anti-corruption measures"] },
              { title: "Governance", items: ["Board independence standards", "Committee charters", "Executive compensation", "Risk management framework"] },
              { title: "Financial Policies", items: ["Dividend distribution", "Capital allocation", "Financial reporting", "Internal audit"] },
              { title: "Disclosure Policies", items: ["Insider trading policy", "Investor communication", "Material event disclosure", "Quarterly reporting"] },
            ].map((policy, index) => (
              <motion.div key={policy.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-[#111] border border-[#c9a962]/30 p-8 hover:border-[#c9a962] transition-colors">
                <h3 className="text-base font-bold text-[#c9a962] mb-6 tracking-wider">{policy.title}</h3>
                <ul className="space-y-3">
                  {policy.items.map((item) => (
                    <li key={item} className="flex gap-3 text-gray-300 text-sm">
                      <span className="text-[#c9a962] font-bold flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-black border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#111] border border-[#c9a962]/30 p-12 text-center hover:border-[#c9a962] transition-colors">
            <h2 className="text-2xl font-light text-white mb-4 tracking-wide">Investor Inquiries</h2>
            <p className="text-gray-300 mb-8 text-sm">Have questions about our investments or governance?</p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-[#c9a962] text-black font-semibold hover:bg-[#b8975a] transition-all tracking-wider text-sm">
              CONTACT INVESTOR RELATIONS
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
