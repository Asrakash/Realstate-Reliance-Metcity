"use client"

import { motion } from "framer-motion"

export function Discover() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-black text-2xl sm:text-3xl tracking-wider font-light">
            DISCOVER MET CITY
          </h2>
        </motion.div>

        {/* Video Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative aspect-video max-w-4xl mx-auto"
        >
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Discover MET City"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  )
}
