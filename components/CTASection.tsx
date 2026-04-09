export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#020617]">
      {/* Background Pattern - Mesh style */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[#020617]"></div>
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Inspired by our work?
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Let&apos;s collaborate to build a similarly impactful digital solution for your business.
        </p>
        
        <button className="px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]">
          Discuss Your Project
        </button>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
}
