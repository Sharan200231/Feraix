import Image from "next/image";

const team = [
  {
    name: "David Chen",
    role: "Lead Architect",
    image: "/assets/Author.png",
  },
  {
    name: "Sarah Jenkins",
    role: "Art Director",
    image: "/assets/Author.png", // Using placeholder
  },
  {
    name: "Omar Al-Fayed",
    role: "Cloud Engineer",
    image: "/assets/Author.png", // Using placeholder
  },
  {
    name: "Elena Rodriguez",
    role: "UX Researcher",
    image: "/assets/Author.png", // Using placeholder
  },
];

export default function TeamSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Image Design */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/bgDesign.jpg"
          alt="Background Design"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4">Our Team</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Global Collaborative Excellence</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Our success is driven by a diverse team of international professionals bringing unique perspectives and world-class expertise to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-[#0B0F1A]/80 backdrop-blur-md border border-white/5 hover:border-primary/30 hover:bg-[#0B0F1A] transition-all duration-500">
              <div className="relative w-24 h-24 mx-auto mb-6">
                 {/* Decorative Ring */}
                 <div className="absolute inset-0 rounded-full border-2 border-primary/20 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500"></div>
                 
                 <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                 </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-primary text-[10px] uppercase font-bold tracking-widest">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
