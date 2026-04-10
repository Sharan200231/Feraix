import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[65vh] flex items-center justify-center pt-28 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/project-hero.png"
          alt="Contact Hero"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center max-w-4xl">
        <p className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-6">Get In Touch</p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 tracking-tight">
          Let&apos;s Build The <span className="text-primary italic">Future</span> Together
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12">
          Ready to transform your business with innovative digital solutions? Our team of experts is here to help you navigate the digital landscape.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="px-8 sm:px-10 py-3 sm:py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] text-sm sm:text-base">
            Send a Message
          </button>
          <button className="px-8 sm:px-10 py-3 sm:py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all text-sm sm:text-base">
            Schedule Consultation
          </button>
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
}
