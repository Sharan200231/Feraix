import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start md:items-center py-20 lg:py-0 overflow-hidden bg-background">
      {/* Background Image - Mobile */}
      <div className="absolute inset-0 z-0 block md:hidden">
        <Image
          src="/assets/MobileHeroV2.png"
          alt="Hero Background"
          fill
          className="object-cover object-right"
          priority
        />
      </div>

      {/* Background Image - Tablet & Desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/assets/hero.png"
          alt="Hero Background"
          fill
          className="object-cover object-right sm:object-center"
          priority
        />
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent-blue/10 blur-[120px] rounded-full z-[1]" />
      <div className="absolute bottom-1/4 -right-20 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-accent-purple/10 blur-[120px] rounded-full z-[1]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl pt-20 md:pt-0">
          <div className="text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] sm:text-xs font-bold mb-4 sm:mb-6 mt-4 sm:mt-24">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
              INNOVATIVE SOLUTIONS TODAY
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-4xl md:text-7xl font-black text-white mb-4 sm:mb-6 leading-[1.1] sm:leading-[1.1]">
              Empowering Your Business with <br className="hidden md:block" />
              <span className="text-primary">SMART DIGITAL SOLUTIONS</span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl leading-relaxed">
              We design and build scalable web, mobile, and cloud solutions that
              help businesses grow faster, operate smarter, and achieve
              measurable results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 justify-start">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-background font-bold rounded-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(251,221,8,0.3)] group flex items-center justify-center gap-2 text-xs sm:text-base">
                START FREE TRIAL
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-xs sm:text-base">
                <span className="w-2 h-2 rounded-full bg-white/20" />
                Schedule Demo
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-2 sm:gap-8 max-w-lg mt-8 sm:mt-10 pt-6 sm:pt-4 border-t border-white/5">
              <div>
                <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-1">
                  150+
                </h3>
                <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest font-bold">
                  Projects Delivered
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-1">
                  98%
                </h3>
                <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest font-bold">
                  Client Satisfaction
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-1">
                  5+
                </h3>
                <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest font-bold">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
