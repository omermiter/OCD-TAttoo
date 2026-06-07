import Navbar from "@/components/landing/navbar"
import Hero from "@/components/landing/hero"
import About from "@/components/landing/about"
import Work from "@/components/landing/work"
import Process from "@/components/landing/process"
import FAQ from "@/components/landing/faq"
import InquiryForm from "@/components/landing/inquiry-form"
import BookingCard from "@/components/landing/booking-card"
import FooterColumn from "@/components/ui/footer-column"

export default function Home() {
  return (
    <main className="bg-[#07050a]">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Process />
      <FAQ />
      <InquiryForm />
      <BookingCard />
      <FooterColumn />
    </main>
  )
}
