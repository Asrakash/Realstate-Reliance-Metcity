'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Briefcase, Users, Zap, Award, Globe, Heart } from "lucide-react"

const values = [
  { icon: Award, title: "Excellenceee", description: "We pursue world-class standards in everything we do" },
  { icon: Globe, title: "Global Vision", description: "We think beyond borders and build for the world" },
  { icon: Heart, title: "Sustainability", description: "We prioritize environmental and social responsibility" },
  { icon: Users, title: "Community", description: "We build inclusive ecosystems for growth" },
  { icon: Zap, title: "Innovation", description: "We embrace technology and creative problem-solving" },
  { icon: Briefcase, title: "Integrity", description: "We operate with transparency and honesty" },
]

const departments = [
  { name: "Engineering & Infrastructure", openings: 12, roles: ["Civil Engineers", "Infrastructure Planners", "Smart City Specialists", "Sustainability Engineers"] },
  { name: "Sales & Business Development", openings: 8, roles: ["Industrial Plot Sales", "Commercial Leasing Specialist", "Investor Relations", "Client Manager"] },
  { name: "Operations & Management", openings: 6, roles: ["Project Manager", "Operations Head", "Quality Assurance", "Compliance Officer"] },
  { name: "Marketing & Communications", openings: 5, roles: ["Content Strategist", "Brand Manager", "Digital Marketer", "PR Specialist"] },
  { name: "Finance & Administration", openings: 4, roles: ["Financial Analyst", "HR Manager", "Accountant", "Administrative Officer"] },
  { name: "Technology & Innovation", openings: 7, roles: ["IoT Developer", "Smart Systems Engineer", "Data Analyst", "IT Infrastructure"] },
]

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-[#0a0a0a] px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-wide">
              Shape the Future of Urban <span className="text-[#c9a962]">India</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-8 font-light">
              Join a world-class team building India&apos;s most ambitious smart township. Be part of something bigger than yourself.
            </p>
            <button className="px-8 py-3 bg-[#c9a962] text-black font-bold hover:bg-[#d4b376] transition-colors tracking-wider">
              VIEW OPEN POSITIONS
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-6 lg:px-12 bg-black border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">WHY JOIN MET CITY?</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm">
              We&apos;re building more than a township — we&apos;re creating a sustainable future for India.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Purpose-Driven Work", desc: "Build something that impacts millions of lives" },
              { title: "Career Growth", desc: "Continuous learning and development opportunities" },
              { title: "Global Standards", desc: "Work with world-class infrastructure and expertise" },
              { title: "Competitive Compensation", desc: "Industry-leading salaries and benefits" },
              { title: "Work-Life Balance", desc: "Flexible working arrangements and wellness programs" },
              { title: "Innovation Culture", desc: "Encourage creative thinking and new ideas" },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#111] border border-[#333] p-8 hover:border-[#c9a962] transition-colors"
              >
                <h3 className="text-lg font-bold mb-2 text-[#c9a962]">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">OUR VALUES</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-[#111] border border-[#333] p-8 hover:border-[#c9a962] transition-colors text-center"
                >
                  <IconComponent className="w-10 h-10 text-[#c9a962] mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6 lg:px-12 bg-black border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">CURRENT OPENINGS</h2>
          </motion.div>
          <div className="space-y-6">
            {departments.map((dept, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="bg-[#111] border border-[#333] p-8 hover:border-[#c9a962] transition-colors"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{dept.name}</h3>
                    <p className="text-[#c9a962] text-sm font-semibold tracking-wider">{dept.openings} OPEN POSITIONS</p>
                  </div>
                  <button className="px-6 py-2 bg-[#c9a962] text-black font-bold hover:bg-[#d4b376] transition-colors text-sm tracking-wider">
                    APPLY NOW
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {dept.roles.map((role, roleIdx) => (
                    <div key={roleIdx} className="text-gray-300 flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-[#c9a962] flex-shrink-0"></span>
                      {role}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at MET City */}
      <section className="py-20 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">LIFE AT MET CITY</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Learning & Development", items: ["Skill enhancement programs", "Industry certifications", "Leadership training", "Mentorship opportunities"] },
              { title: "Benefits & Wellness", items: ["Health insurance", "Fitness programs", "Mental wellness support", "Flexible working"] },
              { title: "Team Culture", items: ["Collaborative environment", "Team outings", "Internal events", "Diversity & inclusion"] },
            ].map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#111] border border-[#333] p-8 hover:border-[#c9a962] transition-colors"
              >
                <h3 className="text-lg font-bold mb-6 text-[#c9a962] tracking-wider">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-3 text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 bg-[#c9a962] flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 px-6 lg:px-12 bg-black border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">OUR HIRING PROCESS</h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Application", desc: "Submit your CV and cover letter" },
              { step: "02", title: "Screening", desc: "Initial review of your profile" },
              { step: "03", title: "Interviews", desc: "Meet our team and discuss opportunities" },
              { step: "04", title: "Offer", desc: "Receive your offer letter" },
            ].map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="bg-[#111] border border-[#333] p-8 text-center hover:border-[#c9a962] transition-colors">
                  <div className="text-3xl font-bold text-[#c9a962] mb-3">{phase.step}</div>
                  <h3 className="text-lg font-bold mb-2">{phase.title}</h3>
                  <p className="text-sm text-gray-400">{phase.desc}</p>
                </div>
                {idx < 3 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-[#c9a962]"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
