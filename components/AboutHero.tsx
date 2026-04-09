import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/project-hero.png"
          alt="About Hero"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          About <span className="text-primary">Feraix</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Pioneering the future of digital innovation and technology solutions for modern enterprises globally.
        </p>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
}
