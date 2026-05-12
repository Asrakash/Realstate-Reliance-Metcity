import { Header } from "@/components/header"
import { WhyInvest } from "@/components/why-invest"
import { Footer } from "@/components/footer"

export default function WhyInvestPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <WhyInvest />
      <Footer />
    </main>
  )
}
