import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Feraix",
  description: "Privacy policy and data protection guidelines for Feraix.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-primary selection:text-white pt-32 pb-0">
      <Navbar />
      <div className="container mx-auto px-6 max-w-4xl relative z-10 flex-col flex-1 pb-20">
        <div className="bg-[#0B0F1A]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 sm:p-12 shadow-2xl">
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-8">Privacy Policy</h1>
          <div className="text-gray-300 space-y-6 text-sm sm:text-base leading-relaxed">
            <p>Last updated: April 2026</p>
            <p>At Feraix, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
            
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4">Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number.</li>
              <li><strong className="text-white">Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4">Use of Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. We may use information collected about you via the Site to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create and manage your account.</li>
              <li>Email you regarding your account or order.</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
              <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4">Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process.</li>
              <li><strong className="text-white">Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4">Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <p>Email: <a href="mailto:contact@feraix.tech" className="text-primary hover:underline transition-colors">contact@feraix.tech</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
