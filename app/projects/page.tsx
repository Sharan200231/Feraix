import Navbar from "@/components/Navbar";
import ProjectsHero from "@/components/ProjectsHero";
import ProjectsSection from "@/components/ProjectsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Projects | Feraix",
  description: "Explore our portfolio of innovative digital solutions and platforms.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      <Navbar />
      <ProjectsHero />
      <ProjectsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
