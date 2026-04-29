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

          </div>
          
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/40 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
