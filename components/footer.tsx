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
    <footer id="contact" className="bg-[#1a1612] text-white">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-medium text-sm mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#c9a962] text-sm transition-colors"
                    >
                      | {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="font-medium text-sm mb-4">QUICK LINKS</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#c9a962] text-sm transition-colors"
                    >
                      | {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address */}
            <div>
              <h4 className="font-medium text-sm mb-4">ADDRESS</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                77-B, 3rd Floor, IFFCO Road, Sector 18,
                <br />
                Gurgaon Haryana - 122 015 CIN : U70109HR2006PLC036416
              </p>
              <div className="mt-4 space-y-2">
                <a
                  href="mailto:contact.met@ril.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#c9a962] text-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contact.met@ril.com
                </a>
                <a
                  href="tel:18008911800"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#c9a962] text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  1800 891 1800
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="lg:text-right">
              <div className="flex lg:justify-end gap-4 mb-6">
                <a href="#" className="text-white hover:text-[#c9a962] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-[#c9a962] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-[#c9a962] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#c9a962] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-[#c9a962] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#c9a962] transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex gap-4 text-xs text-gray-500">
              <Link href="#" className="hover:text-[#c9a962]">Privacy Policy</Link>
              <span>•</span>
              <Link href="#" className="hover:text-[#c9a962]">Legal Notice</Link>
              <span>•</span>
              <Link href="#" className="hover:text-[#c9a962]">Terms and Conditions</Link>
            </div>
            <p className="text-xs text-gray-500">
              Model Economic Township All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
