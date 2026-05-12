'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { useState } from "react"
import { MapPin, Phone, Mail } from "lucide-react"

const offices = [
  { name: "Corporate Headquarters", location: "Gurgaon, NCR", address: "Tower A, MET City Corporate, Gurgaon, Haryana 122001", phone: "+91-124-XXXX-XXXX", email: "info@metcity.in" },
  { name: "Industrial Division", location: "Jhajjar, Haryana", address: "Industrial Park, Jhajjar, Haryana 124105", phone: "+91-1273-XXXX-XXX", email: "industrial@metcity.in" },
  { name: "Residential Division", location: "Greater Noida, UP", address: "Residential Complex, Greater Noida, UP 201310", phone: "+91-120-XXXX-XXXX", email: "residential@metcity.in" },
]

const departments = [
  { name: "Sales & Inquiry", email: "sales@metcity.in", phone: "+91-XXXX-XXXX-XXX" },
  { name: "Investor Relations", email: "investors@metcity.in", phone: "+91-XXXX-XXXX-XXX" },
  { name: "Careers & HR", email: "careers@metcity.in", phone: "+91-XXXX-XXXX-XXX" },
  { name: "Press & Media", email: "press@metcity.in", phone: "+91-XXXX-XXXX-XXX" },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "", projectType: "industrial" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "", projectType: "industrial" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-[#0a0a0a] px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide">Get in <span className="text-[#c9a962]">Touch</span></h1>
            <p className="text-xl text-gray-300 max-w-3xl font-light">Have questions? Contact our team for inquiries, partnerships, or more information.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-black border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light">OUR OFFICES</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div key={office.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-[#111] border border-[#333] p-8 hover:border-[#c9a962] transition-colors">
                <MapPin className="w-8 h-8 text-[#c9a962] mb-4" />
                <h3 className="text-lg font-bold text-white mb-1">{office.name}</h3>
                <p className="text-[#c9a962] text-sm font-semibold mb-4 tracking-wider">{office.location}</p>
                <div className="space-y-3 text-sm">
                  <div className="text-gray-400"><p className="font-semibold text-white mb-1">Address</p><p>{office.address}</p></div>
                  <div className="text-gray-400"><p className="font-semibold text-white mb-1">Phone</p><a href={`tel:${office.phone}`} className="hover:text-[#c9a962] transition-colors">{office.phone}</a></div>
                  <div className="text-gray-400"><p className="font-semibold text-white mb-1">Email</p><a href={`mailto:${office.email}`} className="hover:text-[#c9a962] transition-colors">{office.email}</a></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light mb-8">SEND US A MESSAGE</h2>
              {submitted && <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 text-green-300 text-sm">✓ Thank you! Your message has been received.</div>}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-semibold mb-2 tracking-wider">FULL NAME</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-[#111] border border-[#333] px-4 py-3 text-white focus:border-[#c9a962] outline-none transition-all text-sm" placeholder="Your name" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2 tracking-wider">EMAIL</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-[#111] border border-[#333] px-4 py-3 text-white focus:border-[#c9a962] outline-none transition-all text-sm" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2 tracking-wider">PHONE</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-[#111] border border-[#333] px-4 py-3 text-white focus:border-[#c9a962] outline-none transition-all text-sm" placeholder="+91 XXXX XXXX XXX" />
                  </div>
                </div>
                <div>
                  <label className="block text-white text-sm font-semibold mb-2 tracking-wider">INTEREST</label>
                  <select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full bg-[#111] border border-[#333] px-4 py-3 text-white focus:border-[#c9a962] outline-none transition-all text-sm">
                    <option value="industrial">Industrial Properties</option>
                    <option value="residential">Residential Properties</option>
                    <option value="commercial">Commercial Spaces</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white text-sm font-semibold mb-2 tracking-wider">SUBJECT</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="w-full bg-[#111] border border-[#333] px-4 py-3 text-white focus:border-[#c9a962] outline-none transition-all text-sm" placeholder="Message subject" />
                </div>
                <div>
                  <label className="block text-white text-sm font-semibold mb-2 tracking-wider">MESSAGE</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full bg-[#111] border border-[#333] px-4 py-3 text-white focus:border-[#c9a962] outline-none transition-all resize-none text-sm" placeholder="Your message..."></textarea>
                </div>
                <button type="submit" className="w-full px-8 py-3 bg-[#c9a962] text-black font-bold hover:bg-[#b8975a] transition-all tracking-wider text-sm">SEND MESSAGE</button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-white text-2xl sm:text-3xl tracking-wider font-light mb-8">DEPARTMENT CONTACTS</h2>
              <div className="space-y-4 mb-8">
                {departments.map((dept) => (
                  <div key={dept.name} className="bg-[#111] border border-[#333] p-6 hover:border-[#c9a962] transition-colors">
                    <h3 className="text-base font-bold text-white mb-4">{dept.name}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-[#c9a962] flex-shrink-0" /><a href={`mailto:${dept.email}`} className="text-gray-300 hover:text-[#c9a962] transition-colors">{dept.email}</a></div>
                      <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#c9a962] flex-shrink-0" /><a href={`tel:${dept.phone}`} className="text-gray-300 hover:text-[#c9a962] transition-colors">{dept.phone}</a></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[#111] border border-[#c9a962]/30 p-6 hover:border-[#c9a962] transition-colors">
                <h3 className="text-sm font-bold text-[#c9a962] mb-4 tracking-wider">FREQUENTLY ASKED QUESTIONS</h3>
                <div className="space-y-3 text-sm text-gray-400">
                  {["How do I inquire about a property?", "What are your office hours?", "How long does it take to get a response?", "Can I schedule a site visit?"].map((q) => (
                    <p key={q} className="flex items-center gap-2"><span className="text-[#c9a962]">→</span> {q}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
