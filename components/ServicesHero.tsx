import Image from "next/image";
import { FolderOpen } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Full Background Scene */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/serivceHero.png"
          alt="Service Background"
          fill
          className="object-cover"
          priority
        />
             </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight tracking-tight">
            Our <span className="text-primary italic">Services</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 leading-relaxed opacity-90 font-medium">
            Driving Digital Transformation for Your Business
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-stretch">
            <button className="px-8 sm:px-10 py-4 sm:py-5 bg-primary text-black font-extrabold rounded-full hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(251,221,8,0.3)] hover:scale-105 text-sm sm:text-base">
              Get a Free Consultation →
            </button>
            <button className="px-8 sm:px-10 py-4 sm:py-5 bg-white/5 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-3 border-opacity-50 text-sm sm:text-base">
              <FolderOpen className="w-5 h-5 text-white/70" />
              View Our Projects
            </button>
          </div>
        </div>
      </div>

      {/* Edge Blur */}
      <div className="absolute -bottom-10 inset-x-0 h-32 bg-gradient-to-t from-[#020617] to-transparent z-20"></div>
    </section>
  );
}
