import Image from "next/image";

export default function ProjectsHero() {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[70vh] flex items-center justify-center pt-28 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/project-hero.png"
          alt="Project Hero"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
          Our <span className="text-primary italic">Digital</span> Projects
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Explore our portfolio of innovative digital solutions, from enterprise platforms to engaging mobile applications.
        </p>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
}
