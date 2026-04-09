const services = [
  {
    title: "Web Development",
    description: "Modern, high-performance websites and web apps that engage and convert visitors into customers.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "bg-blue-500/10",
  },
  {
    title: "Software Development",
    description: "Custom software solutions that streamline operations and drive growth through automation.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: "bg-purple-500/10",
  },
  {
    title: "IT Consulting",
    description: "Strategic technology guidance to optimize your IT infrastructure and digital transformation.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: "bg-yellow-500/10",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and seamless migration to corporate-ready cloud environments.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    color: "bg-cyan-500/10",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            How We Can Help Your Business Grow
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-[#0a0a0c] border border-white/10 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col items-center text-center h-full"
            >
              {/* Top and Bottom Light Effects */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-primary/60 blur-[1px] shadow-[0_0_15px_5px_rgba(251,221,8,0.3)] transition-all duration-500 group-hover:w-32 group-hover:bg-primary" />
              
              <div className="relative mb-8">
                {/* Icon Glow */}
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-20 h-20 rounded-full border-2 border-primary/30 flex items-center justify-center bg-background shadow-[0_0_20px_rgba(251,221,8,0.1)] group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(251,221,8,0.3)] transition-all duration-500">
                  <div className="text-primary scale-110">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary/90 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              
              <button className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all uppercase tracking-widest pt-4 mt-auto">
                Learn More
                <span className="text-xl">›</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
