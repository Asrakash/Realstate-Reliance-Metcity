'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { Target, Rocket, Star } from "lucide-react"

const teamMembers = [
  { name: "Rajesh Mittal", position: "Executive Chairman", initial: "R", bio: "Visionary leader with 30+ years in real estate development" },
  { name: "Priya Sharma", position: "Managing Director", initial: "P", bio: "Strategic innovator driving sustainable urban development" },
  { name: "Vikram Singh", position: "Director, Industrial Projects", initial: "V", bio: "Expert in industrial park development and management" },
  { name: "Anika Gupta", position: "Director, Residential", initial: "A", bio: "Specialized in premium residential community planning" },
  { name: "Arjun Kumar", position: "Director, Commercial", initial: "A", bio: "Commercial real estate specialist and advisor" },
  { name: "Deepika Nair", position: "Chief Technology Officer", initial: "D", bio: "Smart city technology and digital infrastructure expert" },
]

const milestones = [
  { year: "2008", title: "Founded", description: "MET City established with vision for sustainable development" },
  { year: "2012", title: "First Industrial Park", description: "Launched flagship industrial development in Jhajjar" },
  { year: "2015", title: "Japanese Companies", description: "Welcomed 6 leading Japanese corporations to JIT" },
  { year: "2018", title: "Residential Launch", description: "Premium villa plots introduced with smart features" },
  { year: "2021", title: "Commercial Hub", description: "State-of-the-art commercial spaces commissioned" },
  { year: "2024", title: "Expansion Phase", description: "New projects and partnerships announced for growth" },
]

const visionItems = [
  { icon: Target, title: "Vision", content: "To create world-class integrated townships that foster sustainable growth, innovation, and prosperity" },
  { icon: Rocket, title: "Mission", content: "Develop strategic projects combining industrial, residential, and commercial spaces with cutting-edge infrastructure" },
  { icon: Star, title: "Values", content: "Excellence, Sustainability, Innovation, Partnership, and Community-first approach in all our endeavors" },
]

export default function About() {
  return (
    <main className="min-h-screen bg-black">
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
            <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide">
              About <span className="text-[#c9a962]">MET City</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl font-light">
              Building sustainable, integrated communities that drive economic growth and improve quality of life across India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6 lg:px-12 bg-black border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[#c9a962] text-2xl sm:text-3xl tracking-wider font-light">OUR PURPOSE</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visionItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#111] border border-[#333] p-8 hover:border-[#c9a962] transition-colors"
                >
                  <IconComponent className="w-10 h-10 text-[#c9a962] mb-4" />
                  <h3 className="text-xl font-bold text-[#c9a962] mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{item.content}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">OUR JOURNEY</h2>
          </motion.div>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-8 items-start"
              >
                <div className="min-w-[100px]">
                  <div className="text-3xl font-bold text-[#c9a962]">{milestone.year}</div>
                </div>
                <div className="flex-1 bg-[#111] border border-[#333] p-6 hover:border-[#c9a962] transition-colors">
                  <h3 className="text-lg font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-400 text-sm">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-6 lg:px-12 bg-black border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">LEADERSHIP TEAM</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#111] border border-[#333] overflow-hidden hover:border-[#c9a962] transition-colors"
              >
                <div className="aspect-square bg-gradient-to-br from-[#c9a962] to-[#9d7d4c] flex items-center justify-center text-5xl font-bold text-black">
                  {member.initial}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#c9a962] text-sm font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: "16+", label: "Years of Excellence" },
              { stat: "50+", label: "Projects Delivered" },
              { stat: "10,000+", label: "Happy Residents" },
              { stat: "500+", label: "Corporate Partners" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#111] border border-[#c9a962]/30 p-6 text-center hover:border-[#c9a962] transition-colors"
              >
                <div className="text-3xl lg:text-4xl font-bold text-[#c9a962] mb-2">{item.stat}</div>
                <div className="text-sm text-gray-300">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 lg:px-12 bg-black border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#111] border border-[#c9a962]/30 p-12 text-center hover:border-[#c9a962] transition-colors"
          >
            <h2 className="text-3xl font-light text-white mb-6 tracking-wide">Ready to be part of our growth story?</h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/careers" className="px-8 py-3 bg-[#c9a962] text-black font-semibold hover:bg-[#b8975a] transition-all">
                Join Our Team
              </Link>
              <Link href="/contact" className="px-8 py-3 border border-[#c9a962] text-[#c9a962] font-semibold hover:bg-[#c9a962] hover:text-black transition-all">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
