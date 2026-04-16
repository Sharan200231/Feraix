import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/ServicesHero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseServices from "@/components/WhyChooseServices";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Services | Feraix",
  description: "Explore Feraix's range of digital solutions, from web development to cloud infrastructure.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-primary selection:text-black">
      <Navbar />
      <ServicesHero />
      <ServicesGrid />
      <WhyChooseServices />
      <Footer />
    </main>
  );
}
