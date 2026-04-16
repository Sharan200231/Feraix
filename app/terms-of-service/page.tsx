import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | Feraix",
  description: "Terms of service and usage conditions for Feraix.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-primary selection:text-white pt-32 pb-0">
      <Navbar />
      <div className="container mx-auto px-6 max-w-4xl relative z-10 flex-col flex-1 pb-20">
        <div className="bg-[#0B0F1A]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 sm:p-12 shadow-2xl">
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-8">Terms of Service</h1>
          <div className="text-gray-300 space-y-6 text-sm sm:text-base leading-relaxed">
            <p>Last updated: April 2026</p>
            <p>These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Feraix ("Company", “we”, “us”, or “our”), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.</p>
            
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4">Intellectual Property Rights</h2>
            <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us.</p>

            <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4">User Representations</h2>
            <p>By using the Site, you represent and warrant that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All registration information you submit will be true, accurate, current, and complete.</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
              <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
              <li>You are not a minor in the jurisdiction in which you reside.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4">Prohibited Activities</h2>
            <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>

            <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4">Modifications and Interruptions</h2>
            <p>We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site.</p>

            <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4">Contact Us</h2>
            <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
            <p>Email: <a href="mailto:contact@feraix.tech" className="text-primary hover:underline transition-colors">contact@feraix.tech</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
