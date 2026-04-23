"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/constants/animations";

export default function ContactMap() {
  return (
    <section className="py-12 sm:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="relative w-full h-[300px] sm:h-[500px] rounded-[24px] sm:rounded-[40px] overflow-hidden border border-white/5"
        >
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
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.4 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src="/DubaiCity.png"
                alt="Map Background"
                fill
                className="object-cover mix-blend-luminosity"
              />
            </motion.div>

            {/* Glowing Pointer */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6, type: "spring", stiffness: 100 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                <div className="relative">
                    <div className="w-6 h-6 bg-primary rounded-full animate-ping absolute inset-0 opacity-50"></div>
                    <div className="w-6 h-6 bg-primary rounded-full relative z-10 border-4 border-background shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>
                    
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.4 }}
                      className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl"
                    >
                        <p className="text-white font-bold text-xs uppercase tracking-widest">Feraix Technology HQ</p>
                    </motion.div>
                </div>
            </motion.div>
          </div>
          
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/40 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
