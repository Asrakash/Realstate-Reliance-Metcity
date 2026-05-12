import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Stats } from "@/components/stats"
import { Projects } from "@/components/projects"
import { Connectivity } from "@/components/connectivity"
import { Discover } from "@/components/discover"
import { WhyInvest } from "@/components/why-invest"
import { News } from "@/components/news"
import { SocialMedia } from "@/components/social-media"
import { Partners } from "@/components/partners"
import { Blogs } from "@/components/blogs"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Stats />
      <Projects />
      <Connectivity />
      <Discover />
      <WhyInvest />
      <News />
      <SocialMedia />
      <Partners />
      <Blogs />
      <Footer />
    </main>
  )
}
