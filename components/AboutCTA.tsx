import Image from "next/image";

export default function AboutCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/Dubai city lights at night, futuristic architecture, professional wide angle photography.png"
          alt="CTA Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#020617]/90 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
          Ready to Transform Your Business?
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Join hands with Feraix to build scalable, secure, and futuristic digital solutions.
        </p>
        
        <button className="px-10 py-5 bg-primary text-white font-bold rounded-full hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]">
          Start Your Digital Journey →
        </button>
      </div>
    </section>
  );
}
