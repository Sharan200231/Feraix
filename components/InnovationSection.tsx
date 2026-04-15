"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn, slideInLeft } from "@/constants/animations";

export default function InnovationSection() {
  return (
    <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Background patterns */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"
      ></motion.div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-16 lg:gap-20">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[24px] sm:rounded-[40px] overflow-hidden border border-white/5 shadow-2xl">
              <Image
                src="/assets/Innovation.png"
                alt="Innovation"
                width={600}
                height={600}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent mix-blend-overlay"></div>
            </div>
            {/* Decorative elements */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10"
            ></motion.div>
          </motion.div>

          <div className="lg:w-1/2">
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeInUp} className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-6">Innovation at Core</motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">Driving Digital Transformation</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
                We leverage cutting-edge technologies including advanced AI systems, robust digital platforms, and scalable cloud infrastructure to build solutions that are not just for today, but ready for tomorrow.
              </motion.p>

              <motion.ul variants={staggerContainer} className="space-y-6">
                {[
                  "Advanced AI & Machine Learning Integration",
                  "Scalable Cloud Architecture",
                  "Secure Digital Platforms"
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    variants={fadeInUp}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white" />
                    </div>
                    <span className="text-white font-medium group-hover:text-primary transition-colors">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
