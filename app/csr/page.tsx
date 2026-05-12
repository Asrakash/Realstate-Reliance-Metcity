'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { BookOpen, Heart, Leaf, Home, Users, AlertCircle } from "lucide-react"

const initiatives = [
  { icon: BookOpen, title: "Education & Skill Development", description: "Empowering youth with quality education and vocational training", impact: "5,000+ students trained", programs: ["Scholarship programs", "Digital literacy initiatives", "STEM education support", "Vocational training centers"] },
  { icon: Heart, title: "Healthcare & Wellness", description: "Providing accessible healthcare services to communities", impact: "50,000+ lives impacted", programs: ["Free medical camps", "Health awareness programs", "Hospital partnerships", "Mental health support"] },
  { icon: Leaf, title: "Environmental Conservation", description: "Building a sustainable future through green initiatives", impact: "100,000+ trees planted", programs: ["Afforestation drives", "Water conservation projects", "Renewable energy adoption", "Waste management systems"] },
  { icon: Home, title: "Community Development", description: "Supporting local communities with infrastructure and services", impact: "25 villages supported", programs: ["Community centers", "Water supply projects", "Road infrastructure", "Rural development"] },
  { icon: Users, title: "Women Empowerment", description: "Creating opportunities for women entrepreneurs and professionals", impact: "3,000+ women empowered", programs: ["Women's self-help groups", "Entrepreneurship programs", "Skills training", "Equal opportunity initiatives"] },
  { icon: AlertCircle, title: "Disaster Relief", description: "Supporting communities affected by natural disasters", impact: "10,000+ families aided", programs: ["Emergency response", "Rehabilitation support", "Financial assistance", "Reconstruction projects"] },
]

const goals = [
  { year: 2025, targets: ["10,000 students in education programs", "100,000+ healthcare beneficiaries", "200,000 trees planted", "50 villages impacted"] },
  { year: 2030, targets: ["Carbon neutral operations", "1 million community members served", "500,000 trees in MET ecosystems", "100% sustainable practices"] },
]

export default function CSR() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-[#0a0a0a] px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide">Corporate Social <span className="text-[#c9a962]">Responsibility</span></h1>
            <p className="text-xl text-gray-300 max-w-3xl font-light">Creating positive impact through sustainable initiatives, community development, and environmental stewardship</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-black border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#111] border border-[#c9a962]/30 p-12 hover:border-[#c9a962] transition-colors">
            <h2 className="text-lg font-bold text-[#c9a962] mb-6 tracking-wider">OUR CSR PHILOSOPHY</h2>
            <p className="text-gray-300 leading-relaxed mb-8 text-sm">
              At MET City, we believe that sustainable business success is intrinsically linked to positive social impact. Our CSR initiatives are designed to create lasting change in education, healthcare, environment, and community development across the regions we operate in.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#333]">
              {["Sustainability", "Inclusivity", "Transparency", "Impact"].map((value) => (
                <div key={value} className="text-center">
                  <div className="text-[#c9a962] font-bold tracking-wider text-sm">{value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">OUR INITIATIVES</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => {
              const IconComponent = initiative.icon
              return (
                <motion.div key={initiative.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-[#111] border border-[#333] overflow-hidden hover:border-[#c9a962] transition-colors">
                  <div className="bg-[#c9a962]/10 p-6 flex items-center justify-center border-b border-[#333]">
                    <IconComponent className="w-10 h-10 text-[#c9a962]" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-bold text-white mb-2">{initiative.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{initiative.description}</p>
                    <div className="bg-[#c9a962]/10 border border-[#c9a962]/30 px-3 py-2 mb-4">
                      <p className="text-[#c9a962] font-semibold text-sm">{initiative.impact}</p>
                    </div>
                    <div className="space-y-2">
                      {initiative.programs.map((program) => (
                        <div key={program} className="flex gap-2 text-gray-400 text-sm">
                          <span className="text-[#c9a962] flex-shrink-0">→</span>
                          {program}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-black border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">CSR IMPACT</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500K+", label: "Lives Touched" },
              { number: "₹50Cr+", label: "CSR Investment" },
              { number: "100+", label: "Active Programs" },
              { number: "25+", label: "Partner NGOs" },
            ].map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-[#111] border border-[#333] p-6 text-center hover:border-[#c9a962] transition-colors">
                <div className="text-3xl font-bold text-[#c9a962] mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">OUR GOALS</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {goals.map((goal, index) => (
              <motion.div key={goal.year} initial={{ opacity: 0, x: index === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-[#111] border border-[#c9a962]/30 p-8 hover:border-[#c9a962] transition-colors">
                <h3 className="text-2xl font-bold text-[#c9a962] mb-6">By {goal.year}</h3>
                <ul className="space-y-3">
                  {goal.targets.map((target) => (
                    <li key={target} className="flex gap-3 text-gray-300 text-sm">
                      <span className="text-[#c9a962] font-bold flex-shrink-0">→</span>
                      {target}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
