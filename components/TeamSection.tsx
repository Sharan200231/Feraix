"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn } from "@/constants/animations";

const team = [
  {
    name: "David Chen",
    role: "Lead Architect",
    image: "/person1.jpeg",
  },
  {
    name: "Sarah Jenkins",
    role: "Art Director",
    image: "/person2.jpeg",
  },
  {
    name: "Omar Al-Fayed",
    role: "Cloud Engineer",
    image: "/person3.jpeg",
  },
  {
    name: "Elena Rodriguez",
    role: "UX Researcher",
    image: "/person4.jpeg",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 sm:py-32 relative overflow-hidden">
      {/* Background Image Design */}
      <motion.div 
        initial="initial"
        animate="animate"
        variants={fadeIn}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/bgDesign.jpg"
          alt="Background Design"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-12 sm:mb-20 max-w-3xl mx-auto"
        >
          <motion.p variants={fadeInUp} className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4">Our Team</motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">Global Collaborative Excellence</motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Our success is driven by a diverse team of international professionals bringing unique perspectives and world-class expertise to every project.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.4 }
              }}
              className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0B0F1A]/80 backdrop-blur-md border border-white/5 hover:border-primary/30 hover:bg-[#0B0F1A] transition-colors duration-500"
            >
              <div className="relative w-24 h-24 mx-auto mb-6">
                 {/* Decorative Ring */}
                 <div className="absolute inset-0 rounded-full border-2 border-primary/20 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500"></div>
                 
                 <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                 >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                 </motion.div>
              </div>
              
              <div className="text-center">
                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-primary text-[10px] uppercase font-bold tracking-widest">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
