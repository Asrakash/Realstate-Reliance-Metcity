"use client"

import Link from 'next/link'

export function ReraBadge() {
  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      <Link
        href="/rera"
        className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-black border-2 border-white text-white transition hover:border-[#c9a962] hover:text-[#c9a962]"
        aria-label="Open RERA registration page"
      >
        RERA
      </Link>
    </div>
  )
}
