import Navbar from "@/components/Navbar";
import ContactHero from "@/components/ContactHero";
import ContactFormSection from "@/components/ContactFormSection";
import ScheduleSection from "@/components/ScheduleSection";
import ContactMap from "@/components/ContactMap";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us | Feraix",
  description: "Get in touch with Feraix for innovative digital solutions and expert consultation.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-primary selection:text-white">
      <Navbar />
      <ContactHero />
      <ContactFormSection />
      <ScheduleSection />
      <ContactMap />
      <ContactCTA />
      <Footer />
    </main>
  );
}
