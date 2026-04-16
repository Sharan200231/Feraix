import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Footer />
    </main>
  );
}
