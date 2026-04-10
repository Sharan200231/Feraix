import Image from "next/image";

export default function ContactMap() {
  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative w-full h-[300px] sm:h-[500px] rounded-[24px] sm:rounded-[40px] overflow-hidden border border-white/5">
          {/* Stylized Map Placeholder */}
          <div className="absolute inset-0 bg-[#0B0A0F] z-0 overflow-hidden">
             {/* Creating a map-like grid pattern */}
             <div 
              className="absolute inset-0 opacity-20" 
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.2) 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }}
            ></div>
            
            {/* Background city/map image if available */}
            <Image
              src="/assets/DubaiCity.png"
              alt="Map Background"
              fill
              className="object-cover opacity-40 mix-blend-luminosity"
            />

            {/* Glowing Pointer */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                    <div className="w-6 h-6 bg-primary rounded-full animate-ping absolute inset-0 opacity-50"></div>
                    <div className="w-6 h-6 bg-primary rounded-full relative z-10 border-4 border-background shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>
                    
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
                        <p className="text-white font-bold text-xs">Feraix Technology HQ</p>
                    </div>
                </div>
            </div>
          </div>
          
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
