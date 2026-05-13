"use client"

import Link from "next/link"
import { Instagram, Facebook, Linkedin, Youtube, Mail, Phone } from "lucide-react"

const footerLinks = {
  aboutUs: {
    title: "ABOUT US",
    links: [
      { label: "MET City", href: "#about" },
      { label: "The Team", href: "#team" },
    ],
  },
  projects: {
    title: "PROJECTS",
    links: [
      { label: "Industrial", href: "#industrial" },
      { label: "Residential", href: "#residential" },
      { label: "Commercial", href: "#commercial" },
      { label: "Japan Industrial Township", href: "#jit" },
    ],
  },
  investor: {
    title: "INVESTOR",
    links: [
      { label: "Board & Committee", href: "#board" },
      { label: "Financial Reporting", href: "#financial" },
      { label: "Notice", href: "#notice" },
      { label: "Policies", href: "#policies" },
    ],
  },
  media: {
    title: "MEDIA",
    links: [
      { label: "Gallery", href: "#gallery" },
      { label: "Press Release", href: "#press" },
      { label: "Blogs", href: "#blogs" },
    ],
  },
  csr: {
    title: "CSR",
    links: [{ label: "CSR news", href: "#csr" }],
  },
  careers: {
    title: "CAREERS",
    links: [
      { label: "Life at MET", href: "#life" },
      { label: "Current Openings", href: "#openings" },
    ],
  },
  partners: {
    title: "PARTNERS",
    links: [{ label: "CONTACT US", href: "#contact" }],
  },
}

const quickLinks = [
  { label: "Investing in India", href: "#investing" },
  { label: "Establishing a company in India", href: "#establishing" },
  { label: "Establishing Manufacturing in India", href: "#manufacturing" },
  { label: "Package of Incentives for Industries", href: "#incentives" },
  { label: "Environment Compliance", href: "#environment" },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-[#100b06] text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid gap-8 lg:grid-cols-[280px_auto]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-[#c9a962]">Model Economic Township</p>
            <h2 className="text-3xl font-semibold tracking-tight">Building India’s next-generation industrial ecosystem.</h2>
            <p className="max-w-xl text-sm text-gray-400 leading-7">
              Discover premium industrial, residential and commercial destinations shaped for long-term growth, smart infrastructure, and responsible development.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-300 mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-[#c9a962] transition-colors"
                      >
                        <span className="text-[#c9a962]">|</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-300">Quick links</h4>
              <div className="grid gap-2 text-sm text-gray-400">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="inline-flex items-center gap-2 hover:text-[#c9a962] transition-colors"
                  >
                    <span className="text-[#c9a962]">|</span>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-300">Contact</h4>
              <p className="text-sm text-gray-400 leading-7">
                77-B, 3rd Floor, IFFCO Road, Sector 18,
                <br />
                Gurgaon Haryana - 122 015 CIN : U70109HR2006PLC036416
              </p>
              <div className="space-y-3 text-gray-400">
                <a
                  href="mailto:contact.met@ril.com"
                  className="inline-flex items-center gap-3 hover:text-[#c9a962] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contact.met@ril.com
                </a>
                <a
                  href="tel:18008911800"
                  className="inline-flex items-center gap-3 hover:text-[#c9a962] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  1800 891 1800
                </a>
              </div>
            </div>

            <div className="space-y-4 text-right lg:text-right">
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-300">Follow us</h4>
              <p className="text-sm text-gray-400">Stay connected for the latest updates and news.</p>
              <div className="flex justify-start gap-4 lg:justify-end">
                <a href="#" className="text-gray-300 hover:text-[#c9a962] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#c9a962] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#c9a962] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-[#c9a962] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#c9a962] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-[#c9a962] transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex flex-col gap-3 sm:flex-row justify-between items-center text-xs text-gray-500">
            <div className="flex flex-wrap items-center gap-3">
              <Link href="#" className="hover:text-[#c9a962]">Privacy Policy</Link>
              <span className="text-gray-600">•</span>
              <Link href="#" className="hover:text-[#c9a962]">Legal Notice</Link>
              <span className="text-gray-600">•</span>
              <Link href="#" className="hover:text-[#c9a962]">Terms and Conditions</Link>
            </div>
            <p>Model Economic Township All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
