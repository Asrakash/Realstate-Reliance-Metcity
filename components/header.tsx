"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"

const navItems = [
  {
    label: "About Us",
    href: "/about",
    dropdown: [
      { label: "MET City", href: "/about" },
      { label: "The Team", href: "/about" },
    ],
  },
  {
    label: "Projects",
    href: "/industrial",
    dropdown: [
      { label: "Industrial", href: "/industrial" },
      { label: "Residential", href: "/residential" },
      { label: "Commercial", href: "/commercial" },
      { label: "Japan Industrial Township", href: "/japan-industrial-township" },
    ],
  },
  {
    label: "Investor",
    href: "/investor",
    dropdown: [
      { label: "Board & Committee", href: "/investor" },
      { label: "Financial Reporting", href: "/investor" },
      { label: "Notice", href: "/investor" },
      { label: "Policies", href: "/investor" },
    ],
  },
  {
    label: "Media",
    href: "/gallery",
    dropdown: [
      { label: "Gallery", href: "/gallery" },
      { label: "Press Release", href: "/press" },
      { label: "In The News", href: "/press" },
    ],
  },
  {
    label: "CSR",
    href: "/csr",
    dropdown: [{ label: "CSR news", href: "/csr" }],
  },
  {
    label: "Partners",
    href: "/",
  },
  {
    label: "Careers",
    href: "/careers",
    dropdown: [
      { label: "Life at MET", href: "/careers" },
      { label: "Current Openings", href: "/careers" },
    ],
  },
  {
    label: "Quick links",
    href: "/contact",
    dropdown: [
      { label: "Contact Us", href: "/contact" },
      { label: "Establishing a company", href: "/" },
    ],
  },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex flex-col items-center">
              <svg width="36" height="36" viewBox="0 0 50 50" className="text-[#c9a962]">
                <circle cx="25" cy="10" r="7" fill="currentColor" />
                <path d="M12 48 L25 18 L38 48" fill="none" stroke="currentColor" strokeWidth="2.5" />
              </svg>
              <span className="text-[#c9a962] font-bold text-base tracking-wider">MET CITY</span>
              <span className="text-[#c9a962] text-[7px] tracking-[0.2em]">Growth is Life</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-[13px] text-white hover:text-[#c9a962] transition-colors">
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-3 h-3" />}
                </button>

                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 bg-black border border-[#333] min-w-[200px] py-2"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-[13px] text-white hover:text-[#c9a962] hover:bg-[#111] transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 text-white hover:text-[#c9a962] transition-colors" aria-label="Accessibility">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="4" r="2" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
                <path d="M9 20l3-4 3 4" />
              </svg>
            </button>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-transparent border border-[#c9a962] text-[#c9a962] text-[13px] font-medium tracking-wider hover:bg-[#c9a962] hover:text-black transition-all duration-300"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 border-t border-[#333] pt-4"
            >
              {navItems.map((item) => (
                <div key={item.label} className="py-2">
                  <button
                    className="flex items-center justify-between w-full text-white text-sm"
                    onClick={() =>
                      item.dropdown &&
                      setActiveDropdown(activeDropdown === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="mt-2 pl-4 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block text-sm text-gray-400 hover:text-[#c9a962]"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="block mt-4 px-6 py-2.5 bg-transparent border border-[#c9a962] text-[#c9a962] text-sm font-medium text-center hover:bg-[#c9a962] hover:text-black transition-all"
              >
                CONTACT US
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
