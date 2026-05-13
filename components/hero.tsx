"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    title: "A Platinum Rated",
    subtitle: "Integrated Smart City of India",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop",
  },
  {
    title: "World-Class",
    subtitle: "Industrial Infrastructure",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop",
  },
  {
    title: "Sustainable",
    subtitle: "Future-Ready Township",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2940&auto=format&fit=crop",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section id="home" className="relative h-screen bg-black overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-20">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
                {slides[currentSlide].title}
              </h1>
              {/* Subtitle */}
              <p className="mt-2 text-xl sm:text-2xl lg:text-3xl font-medium text-white">
                {slides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "w-8 h-2 bg-white rounded-full"
                : "w-2 h-2 bg-white/40 rounded-full hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  )
}
