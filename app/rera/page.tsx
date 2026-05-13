import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'

const sections = [
  {
    title: 'Haryana RERA Registration',
    content: [
      'Industrial Colony measuring 703.031 Acres (Total area), Sector 1 to 3',
      'No. & Date of License :',
      '19 of 2011 dated 14.03.2011 (138.825 acres)',
      'of 2012 dated 01.02.2012 (62.281 acres)',
      '08 of 2016 dated 26.07.2016 (74.9 acres)',
      '107 of 2017 dated 22.12.2017 (8.125 acres)',
      '71 of 2019 dated 02.07.2019 (418.9 acres)',
      'License : Model Economic Township Limited',
      'No. & Date of the approved layout plan:',
      'Drawing No: DGTCP-6953 dated 08-05-2019 for 703.031 acres',
    ],
  },
  {
    title: 'HRERA 243.456 Acs Registration for Sector 3',
    content: [
      'HRERA 243.456 Acs Registration',
      'Part of 703.031 acres layout plan.',
      'HRERA registered area on the approved layout',
      'Sale Plan of 243.456',
      'RERA Registration Number:',
      '110 (a) of 2017 dt. 02.11.2017 for 276.006 acres',
      'HRERA-PKL-JJR-1-2018 dt. 28.03.2018 for 8.125 acres & corrigendum HRERA-112-2020 dated 20.03.2020 (Final Area 243.456 acres)',
    ],
  },
  {
    title: 'Registration Certificate Updates',
    content: [
      'Quarterly Compliances of registered project',
      'HRERA 243.456 Acs Registration',
      'Industrial colony of 284.131 acres',
      '(Updates for quarter ending September 2019)',
      'HRERA Registration no. 110 (a) of 2017 dated 02.11.2017 for 276.006 acres and',
      'HRERA Registration no. HRERA-PKL-JJR-1-2018 dated 28.03.2018 for 8.125 acres',
      'Industrial colony of 284.131 acres',
      '(data for quarter ending on 30th June, 2019)',
      'HRERA Registration no. 110 (a) of 2017 dated 02.11.2017 for 276.006 acres and',
      'HRERA Registration no. HRERA-PKL-JJR-1-2018 dated 28.03.2018 for 8.125 acres',
      'Industrial colony of 284.131 acres',
      '(Updates for quarter ending March 2019)',
      'HRERA Registration no. 110 (a) of 2017 dated 02.11.2017 for 276.006 acres and',
      'HRERA Registration no. HRERA-PKL-JJR-1-2018 dated 28.03.2018 for 8.125 acres',
      'Industrial colony of 284.131 acres',
      '(Updates for quarter ending December 2018)',
      'HRERA Registration no. 110 (a) of 2017 dated 02.11.2017 for 276.006 acres and',
      'HRERA Registration no. HRERA-PKL-JJR-1-2018 dated 28.03.2018 for 8.125 acres',
    ],
  },
  {
    title: 'Industrial Colony Registration – Sector 4, 5, 7A, 7B, 8 & 10',
    content: [
      'Industrial Colony measuring 1000.77875 Acres (Total area), Sector 4, 5, 7A, 7B, 8 & 10',
      'No. & Date of License :',
      '06 of 2012 dated 01.02.2012 (88.725 acres)',
      '16 of 2018 dated 23.02.2018 (818.525 acres)',
      '129 of 2019 dated 04-12-2019 (105.86875 acres)',
      'License : Model Economic Township Limited',
      'No. & Date of the approved layout plan:',
      'Drawing No: DTCP-7234 dated 04-12-2019',
      'HRERA 560.38 Acs Registration (Sector 5, 7A & 7B)',
      'Part of 1000.7785 acres layout plan.',
      'HRERA registered area on the approved layout',
      'Sale Plan of 560.38',
      'RERA Registration Number:',
      '135 of 2017 dt. 28.08.2017 for 88.725 acres',
      'HRERA-PKL-JJR-6-2018 dt. 27.04.2018 for 472.3875 acres and corrigendum HRERA-95-2020 dated 13.03.2020 (Final Area 560.38 Acs)',
    ],
  },
  {
    title: 'HRERA 66.081 Acs Registration (Sector 4)',
    content: [
      'HRERA 66.081 Acs Registration (Sector 4)',
      'Part of 1000.7785 acres layout plan',
      'HRERA registered area on the approved layout',
      'Sale Plan of 66.081',
      'RERA Registration Number:',
      'HRERA-PKL-JJR-195-2020 dated 19.03.2020 (66.081 acres)',
      'Registration Certificate Updates',
      'Quarterly Compliances of registered project',
      'HRERA 560.38 Acs Registration',
      'Industrial colony of 561.1125 acres',
      '(Updates for quarter ending September 2019)',
      'HRERA registration 135 of 2017 dated 28.08.2017 for 88.725 acres and',
      'HRERA-PKL-JJR-6-2018 dated 27.04.2018 for 472.3875 acres',
      'Industrial colony of 561.1125 acres',
      '(Updates for quarter ending June 2019)',
      'HRERA registration 135 of 2017 dated 28.08.2017 for 88.725 acres and',
      'HRERA-PKL-JJR-6-2018 dated 27.04.2018 for 472.3875 acres',
      'Industrial colony of 561.1125 acres',
      '(Updates for quarter ending March 2019)',
      'HRERA registration 135 of 2017 dated 28.08.2017 for 88.725 acres and',
      'HRERA-PKL-JJR-6-2018 dated 27.04.2018 for 472.3875 acres',
      'Industrial colony of 561.1125 acres',
      '(Updates for quarter ending December 2018)',
      'HRERA registration 135 of 2017 dated 28.08.2017 for 88.725 acres and',
      'HRERA-PKL-JJR-6-2018 dated 27.04.2018 for 472.3875 acres',
    ],
  },
]

export default function ReraPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      <section className="bg-black text-white py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[#c9a962] mb-4">Quick Links</p>
          <h1 className="text-4xl md:text-5xl font-light tracking-wide">Haryana RERA Registration</h1>
          <p className="mt-4 max-w-3xl text-gray-300">Industrial Colony measuring 703.031 Acres (Total area), Sector 1 to 3</p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto space-y-10">
          {sections.map((section) => (
            <div key={section.title} className="rounded-[28px] border border-[#e2dfd5]/30 bg-[#f9f8f4] p-8 shadow-xl shadow-black/5">
              <h2 className="text-2xl font-semibold text-black mb-4">{section.title}</h2>
              <div className="space-y-3 text-sm text-gray-700 leading-7">
                {section.content.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#111] text-white py-12 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.3em] text-[#c9a962]">Note</p>
          <p className="text-sm leading-7 text-gray-300">This page contains the Haryana RERA registration details for MET City. Use the navigation above to return to other sections of the website.</p>
          <Link href="/" className="inline-block rounded-full border border-[#c9a962] px-6 py-3 text-sm font-semibold text-[#c9a962] hover:bg-[#c9a962] hover:text-black transition-all">
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
