import { Calendar } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-primary/20">
          <Calendar className="w-8 h-8 text-primary" />
        </div>
        
        <h2 className="text-4xl font-bold text-white mb-6">Prefer to talk it out?</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Schedule a direct 30-minute discovery call with our technical experts to discuss your specific requirements.
        </p>
        
        <button className="px-10 py-4 bg-white text-background font-bold rounded-full hover:bg-gray-100 transition-all flex items-center gap-3 mx-auto">
          <Calendar className="w-5 h-5 text-background" />
          Book a Consultation
        </button>
      </div>
    </section>
  );
}
