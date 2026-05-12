import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'

import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: 'MET City | India\'s Premier Smart Industrial Township',
  description: 'Discover MET City - a world-class smart township spanning 8,250+ acres with sustainable infrastructure, global connectivity, and unparalleled investment opportunities in the Delhi-Mumbai Industrial Corridor.',
  keywords: ['smart city', 'industrial township', 'investment', 'real estate', 'Haryana', 'DMIC', 'manufacturing', 'logistics'],
  authors: [{ name: 'MET City' }],
  creator: 'MET City',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://metcity.in',
    siteName: 'MET City',
    title: 'MET City | A Vision. A City. A New Tomorrow.',
    description: 'Shaping the future of urban India through a world-class smart city with sustainable infrastructure and unparalleled investment opportunities.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MET City Smart Township',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MET City | India\'s Premier Smart Industrial Township',
    description: 'Discover world-class investment opportunities in India\'s most ambitious smart township project.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#000000' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}
