"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn } from "@/constants/animations";

export default function CompanyStory() {
  return (
    <section className="py-12 sm:py-24 overflow-hidden">
      <div className="mx-auto">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] overflow-hidden border-y border-white/5 shadow-2xl"
        >
          <Image
            src="/assets/Company Overview Sectionv1.png"  
            alt="Company Story"
            fill
            className="object-cover"
          />
          {/* Overlay with Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              variants={staggerContainer}
              className="text-center max-w-4xl px-4 sm:px-6"
            >
              <motion.p variants={fadeInUp} className="text-primary font-bold tracking-[0.2em] text-[10px] sm:text-xs uppercase mb-3 sm:mb-4">Our Story</motion.p>
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-8">A Technology-Driven Company</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-300 text-sm sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto hidden sm:block">
                Feraix is committed to delivering high-quality digital solutions that empower businesses to thrive in the modern technological landscape. We combine innovative thinking with deep technical expertise to build platforms that drive real business impact.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-20"
          >
            {/* Vision Card */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="p-8 sm:p-12 rounded-[24px] sm:rounded-[40px] bg-[#0B0F1A] border border-white/5 hover:border-primary/20 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary transition-colors duration-500">
                  <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To become a globally recognized technology solutions provider, shaping the future of digital business through continuous innovation and excellence.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="p-8 sm:p-12 rounded-[24px] sm:rounded-[40px] bg-[#0B0F1A] border border-white/5 hover:border-primary/20 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary transition-colors duration-500">
                  <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To deliver innovative digital solutions that empower businesses, streamline operations, and create sustainable competitive advantages for our clients.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
