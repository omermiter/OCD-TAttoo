import Navbar from "@/components/landing/navbar"
import Hero from "@/components/landing/hero"
import Work from "@/components/landing/work"
import BookingCard from "@/components/landing/booking-card"
import FooterColumn from "@/components/ui/footer-column"

export default function Home() {
  return (
    <main className="bg-[#07050a]">
      <Navbar />
      <Hero />
      <Work />
      <BookingCard />
      <FooterColumn />
    </main>
  )
}
