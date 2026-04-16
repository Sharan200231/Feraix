import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import CompanyStory from "@/components/CompanyStory";
import InnovationSection from "@/components/InnovationSection";
import TeamSection from "@/components/TeamSection";
import AboutCTA from "@/components/AboutCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Feraix",
  description: "Learn about Feraix's journey, vision, mission, and the expert team driving digital transformation globally.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-primary selection:text-white">
      <Navbar />
      <AboutHero />
      <div className="space-y-0">
        <CompanyStory />
        <InnovationSection />
        <TeamSection />
      </div>
      <AboutCTA />
      <Footer />
    </main>
  );
}
