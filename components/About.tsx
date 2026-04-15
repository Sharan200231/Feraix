import Image from "next/image";

export default function About() {
  return (
    <section id="about" className=" bg-background relative overflow-hidden">
      <div className=" mx-auto ">
        <div className="relative w-full mx-auto overflow-hidden border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.15)] group min-h-[85vh] md:min-h-0 flex flex-col justify-end md:block">
          {/* Background Image - Mobile */}
          <div className="absolute inset-0 z-0 block md:hidden">
            <Image
              src="/assets/mobileAbout.png"
              alt="About Feraix"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlays for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
            <div className="absolute inset-0 bg-blue-900/10" />
          </div>

          {/* Background Image - Tablet & Desktop */}
          <div className="absolute inset-0 z-0 hidden md:block">
            <Image
              src="/assets/aboutV1.png"
              alt="About Feraix"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlays for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-blue-900/10" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 py-10 sm:px-8 sm:py-16 md:px-16 md:py-24 lg:w-2/3">
            <div className="mb-4 md:mb-8">
              <h3 className="text-white text-lg md:text-2xl font-medium flex items-center gap-2">
                <span className="relative">
                  Who
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary" />
                </span>
                <span>We Are</span>
              </h3>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-8 leading-tight">
              Empowering the <br />
              <span className="text-primary/90">digital era</span> through <br />
              intelligent solutions
            </h2>

            <p className="text-gray-200 text-sm sm:text-lg md:text-xl mb-6 sm:mb-12 max-w-xl leading-relaxed">
              We provide cutting-edge technology solutions to realize business success and innovation.
            </p>

            <button className="px-8 sm:px-10 py-3 sm:py-3.5 bg-background/20 backdrop-blur-sm border border-primary/50 text-white font-bold rounded-full hover:bg-primary hover:text-background transition-all duration-500 shadow-[0_0_20px_rgba(251,221,8,0.1)] hover:shadow-primary/40 group flex items-center gap-2 text-sm sm:text-lg">
              Learn More
            </button>
          </div>

          {/* Decorative Corner Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 blur-[100px] rounded-full -mr-32 -mt-32" />
        </div>
      </div>
    </section>
  );
}
