"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const heroContent = {
  title: "A Platinum Rated",
  subtitle: "Integrated Smart City of India",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop",
  video: "/metcityvideo.mp4",
}

export function Hero() {
  const [isVideoReady, setIsVideoReady] = useState(false)
  const [hasVideoError, setHasVideoError] = useState(false)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
  const heroRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!heroRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen min-h-[720px] overflow-hidden bg-black"
    >
      <div className="absolute inset-0">
        <Image
          src={heroContent.image}
          alt={heroContent.title}
          fill
          className="object-cover"
          loading="eager"
          priority
        />
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-1000 ${
            isVideoReady ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      {shouldLoadVideo && !hasVideoError && (
        <video
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
          poster={heroContent.image}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlayThrough={() => setIsVideoReady(true)}
          onLoadedData={() => setIsVideoReady(true)}
          onError={() => setHasVideoError(true)}
        >
          <source src={heroContent.video} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/80" />

      <div className="relative z-10 flex h-full flex-col justify-center px-6 lg:px-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
              {heroContent.title}
            </h1>
            <p className="mt-4 text-xl sm:text-2xl lg:text-3xl font-medium text-white">
              {heroContent.subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
