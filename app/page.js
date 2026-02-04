import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import FAQ from "@/components/FAQ"
import Disclaimer from "@/components/Disclaimer"
import Feedback from "@/components/Feedback"

export default async function Home() {
  return (
    <main className="p-1 w-full">
      <Header />
      <Disclaimer />
      <Feedback />
      <Hero />
      <FAQ />
      <Footer />
    </main>
  )
}
