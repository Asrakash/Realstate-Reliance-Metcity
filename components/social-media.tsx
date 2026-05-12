"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const videos = [
  { id: "dQw4w9WgXcQ", title: "MET City | India's Integrated Smart City in Delhi NCR" },
  { id: "dQw4w9WgXcQ", title: "Reliance MET City: A Vision of Progress" },
  { id: "dQw4w9WgXcQ", title: "Building the Future | Reliance MET City Construction Update" },
]

export function SocialMedia() {
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
            SOCIAL MEDIA
          </h2>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-video"
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          ))}
        </div>

        {/* View YouTube Channel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="https://www.youtube.com/@RelianceMETCity"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-black text-black text-sm tracking-wider hover:bg-black hover:text-white transition-all"
          >
            VIEW YOUTUBE CHANNEL
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
