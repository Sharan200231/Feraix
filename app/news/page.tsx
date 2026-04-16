import Navbar from "@/components/Navbar";
import NewsHero from "@/components/NewsHero";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "News & Insights | Feraix",
  description: "Explore the latest technology insights, digital innovation trends, and company updates from Feraix.",
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-primary selection:text-white">
      <Navbar />
      <NewsHero />
      <NewsSection />
      <Footer />
    </main>
  );
}
