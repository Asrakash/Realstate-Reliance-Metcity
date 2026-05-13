import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'

const heroItems = [
  {
    label: 'No. & Date of License :',
    details: [
      '19 of 2011 dated 14.03.2011 (138.825 acres)',
      'of 2012 dated 01.02.2012 (62.281 acres)',
      '08 of 2016 dated 26.07.2016 (74.9 acres)',
      '107 of 2017 dated 22.12.2017 (8.125 acres)',
      '71 of 2019 dated 02.07.2019 (418.9 acres)',
    ],
  },
  {
    label: 'License :',
    details: [
      'Model Economic Township Limited',
      'No.& Date of the approved layout plan:',
      'Drawing No: DGTCP-6953 dated 08-05-2019 for 703.031 acres',
    ],
  },
]

const cardItems = [
  {
    title: 'HRERA registered area on the approved layout',
    description: 'Approved layout area for Sector 3 registration, ready for sale planning.',
  },
  {
    title: 'Sale Plan of 243.456',
    description: 'Certified sale plan showing the final registered project area for Sector 3.',
  },
]

export default function ReraPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <section className="bg-black text-white py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-white/5 px-5 py-2 text-sm text-gray-300 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="opacity-60">/</span>
            <span>Quick Links</span>
            <span className="opacity-60">/</span>
            <span className="font-semibold text-white">Haryana RERA Registration</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light tracking-wide">Haryana RERA Registration</h1>
          <p className="mt-4 max-w-3xl text-gray-300">Industrial Colony measuring 703.031 Acres (Total area), Sector 1 to 3</p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto space-y-10">
          <div className="rounded-[32px] border border-[#e2dfd5]/30 bg-[#f9f8f4] p-8 shadow-xl shadow-black/5">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              {heroItems.map((item) => (
                <div key={item.label}>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a962] mb-5">{item.label}</h2>
                  <div className="space-y-3 text-sm text-gray-700 leading-7">
                    {item.details.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-[#d8d3c5] pt-8">
              <p className="text-xl font-semibold text-black">HRERA 243.456 Acs Registration for Sector 3</p>
              <p className="mt-3 text-sm text-gray-700 leading-7">HRERA 243.456 Acs Registration. Part of 703.031 acres layout plan.</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {cardItems.map((card) => (
              <div key={card.title} className="overflow-hidden rounded-[32px] border border-[#dad5c8] bg-white shadow-xl shadow-black/5">
                <div className="bg-[#111] p-8 text-center text-white">
                  <div className="mx-auto inline-flex h-28 w-full max-w-[360px] items-center justify-center rounded-3xl bg-gradient-to-br from-[#0c0c0c] via-[#1c1a1a] to-[#111111] shadow-inner shadow-black/30">
                    <div>
                      <p className="text-3xl font-semibold tracking-[0.35em]">MET CITY</p>
                      <p className="mt-2 text-sm text-gray-400 uppercase">Growth is Life</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-base font-semibold text-black">{card.title}</p>
                  <p className="mt-2 text-sm text-gray-600 leading-7">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[32px] border border-[#e2dfd5]/30 bg-[#f9f8f4] p-8 shadow-xl shadow-black/5">
            <p className="text-lg font-semibold text-black">RERA Registration Number:</p>
            <div className="mt-4 space-y-3 text-sm text-gray-700 leading-7">
              <p>110 (a) of 2017 dt. 02.11.2017 for 276.006 acres</p>
              <p>HRERA-PKL-JJR-1-2018 dt. 28.03.2018 for 8.125 acres & corrigendum HRERA-112-2020 dated 20.03.2020 (Final Area 243.456 acres)</p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[32px] border border-[#dad5c8] bg-black text-white shadow-xl shadow-black/10">
              <div className="aspect-[16/9] bg-[radial-gradient(circle_at_top_left,_rgba(201,169,98,0.3),_transparent_30%),linear-gradient(180deg,#111_0%,#080808_100%)] p-8 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-semibold tracking-[0.45em]">MET CITY</p>
                  <p className="mt-3 text-sm text-gray-300 uppercase">Growth is Life</p>
                </div>
              </div>
              <div className="p-6 bg-white text-black">
                <p className="text-base font-semibold">Registration Certificate</p>
              </div>
            </div>
            <div className="rounded-[32px] border border-[#dad5c8] bg-[#f9f8f4] p-8 shadow-xl shadow-black/5">
              <p className="text-lg font-semibold text-black">HRERA Registration no. 110 (a) of 2017</p>
              <p className="mt-3 text-sm text-gray-700 leading-7">dt. 02.11.2017 for 276.006 acres</p>
              <p className="mt-4 text-sm text-gray-700 leading-7">HRERA-PKL-JJR-1-2018 dt. 28.03.2018 for 8.125 acres & corrigendum HRERA-112-2020 dated 20.03.2020 (Final Area 243.456 acres)</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
