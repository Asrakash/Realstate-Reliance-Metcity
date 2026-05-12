"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const blogs = [
  {
    title: "Japanese Industrial Township India: Why Japanese Companies Prefer MET City",
    href: "#",
  },
  {
    title: "Haryana Enterprises and Employment Policy, 2020 (HEEP 2020)",
    href: "#",
  },
]

export function Blogs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-black text-2xl sm:text-3xl tracking-wider font-light"
          >
            BLOGS
          </motion.h2>
          <Link
            href="#blogs"
            className="inline-flex items-center gap-2 text-[#c9a962] text-sm tracking-wider hover:gap-3 transition-all"
          >
            EXPLORE MORE
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blogs List */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-gray-200 pb-6"
            >
              <h3 className="text-black text-lg font-medium mb-4 hover:text-[#c9a962] transition-colors">
                {blog.title}
              </h3>
              <Link
                href={blog.href}
                className="inline-flex items-center gap-2 text-[#c9a962] text-sm tracking-wider hover:gap-3 transition-all"
              >
                READ MORE
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
