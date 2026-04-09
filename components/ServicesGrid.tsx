import Image from "next/image";
import { Monitor, Code2, Lightbulb, Cloud, Plus } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    description: "Modern, high-performance websites and web apps that engage and convert users.",
    icon: Monitor,
  },
  {
    title: "Software Development",
    description: "Custom software solutions that streamline workflows and drive growth.",
    icon: Code2,
  },
  {
    title: "IT Consulting",
    description: "Strategic technology guidance to optimize your IT infrastructure and security.",
    icon: Lightbulb,
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure optimized for performance and cost-efficiency.",
    icon: Cloud,
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-[#020617] relative">
      <div className=" mx-auto ">
        {/* Main Services Container */}
        <div className="relative overflow-hidden border border-white/5 shadow-2xl min-h-[600px] sm:min-h-[800px] flex flex-col justify-center p-6 sm:p-12 lg:p-20">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/serviceBg1V2jpg.jpg"
              alt="Services Background"
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#020617]/40 to-[#020617]/80"></div>
          </div>

          <div className="relative z-10 w-full">
            <div className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary uppercase tracking-[0.2em]">Our Services</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-6 sm:p-10 rounded-[24px] sm:rounded-[40px] bg-[#0B0F1A]/60 backdrop-blur-xl border border-white/5 hover:border-primary/20 hover:scale-[1.02] transition-all group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-colors duration-500 shrink-0">
                      <service.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                        {service.description}
                      </p>
                      <Link
                        href="#"
                        className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase hover:gap-4 transition-all"
                      >
                        <Plus className="w-4 h-4" />
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
