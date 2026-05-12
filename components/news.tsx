"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const newsItems = [
  {
    id: 1,
    title: "Korean firm Boditech Med sets up manufacturing unit at...",
    excerpt: "MET City is now home to more than 600 companies from 10 countries...",
    date: "April 04, 2025",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Swedish Defence Company Saab To Establish...",
    excerpt: "Swedish defence manufacturer, Saab to establish the first manufacturing...",
    date: "Mar 04, 2024",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Hamdard signs agreement with Reliance MET city...",
    excerpt: "The project includes a honey processing plant and similar...",
    date: "Mar 05, 2024",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2940&auto=format&fit=crop",
  },
]

export function News() {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-black text-2xl sm:text-3xl tracking-wider font-light"
          >
            EXCLUSIVE NEWS
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-4">
              <button className="px-4 py-2 text-sm text-black border-b-2 border-[#c9a962]">
                Project News
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="#news"
              className="inline-flex items-center gap-2 text-[#c9a962] text-sm tracking-wider hover:gap-3 transition-all"
            >
              EXPLORE MORE
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Date */}
              <p className="text-gray-500 text-xs mb-2">{item.date}</p>

              {/* Title */}
              <h3 className="text-black font-medium text-lg mb-2 group-hover:text-[#c9a962] transition-colors">
                {item.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>

              {/* More Link */}
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-[#c9a962] text-sm tracking-wider hover:gap-3 transition-all"
              >
                MORE
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
