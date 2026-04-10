import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.png"
          alt="Hero Background"
          fill
          className="object-cover "
          priority
        />

      </div>

      {/* Background Glows - keeping them but subtle */}
      <div className="absolute top-1/4 -left-20 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent-blue/10 blur-[120px] rounded-full z-[1]" />
      <div className="absolute bottom-1/4 -right-20 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-accent-purple/10 blur-[120px] rounded-full z-[1]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Text Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold mb-6 mt-12">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              INNOVATIVE SOLUTIONS TODAY
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
              Empowering Your Business with <br />
              <span className="text-primary text-glow-yellow">SMART DIGITAL SOLUTIONS</span>
            </h1>
            
            <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 max-w-2xl leading-relaxed">
              We design and build scalable web, mobile, and cloud solutions that help businesses grow faster, operate smarter, and achieve measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-start">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-background font-bold rounded-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(251,221,8,0.3)] group flex items-center justify-center gap-2 text-sm sm:text-base">
                START FREE TRIAL
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                <span className="w-2 h-2 rounded-full bg-white/20" />
                Schedule Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid mb-2 grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-lg pt-8 sm:pt-4 border-t border-white/5">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1">150+</h3>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Projects Delivered</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1">98%</h3>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Client Satisfaction</p>
              </div>
              <div className="hidden md:block">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1">5+</h3>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
