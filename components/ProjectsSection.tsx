"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn, scaleUp } from "@/constants/animations";
import { ArrowRight, Play, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "FINTECH ANALYTICS",
    subtitle: "PLATFORM",
    category: "Dashboard",
    tag: "SaaS",
    description: "A comprehensive financial dashboard providing real-time analytics, predictive modeling, and secure transaction monitoring for global banking enterprises.",
    image: "/assets/hero.png",
    accent: "text-primary"
  },
  {
    id: "02",
    title: "HEALTHSYNC",
    subtitle: "MOBILE APP",
    category: "Healthcare",
    tag: "Flutter",
    description: "An AI-powered telemedicine application connecting patients with healthcare providers, featuring secure video consultations and real-time health tracking.",
    image: "/assets/aboutV1.png",
    accent: "text-accent-blue"
  },
  {
    id: "03",
    title: "GLOBAL LOGISTICS",
    subtitle: "PORTAL",
    category: "Logistics",
    tag: "Next.js",
    description: "A high-performance corporate website and client portal for an international logistics firm, optimizing supply chain visibility and automated operations.",
    image: "/assets/whyus.png",
    accent: "text-accent-purple"
  },
  {
    id: "04",
    title: "HR MANAGEMENT",
    subtitle: "SYSTEM",
    category: "Business Platform",
    tag: "Design",
    description: "A cloud-based HR platform streamlining recruitment, onboarding, and employee performance tracking with integrated AI analytics and reporting.",
    image: "/assets/hero.png",
    accent: "text-primary"
  },
];

const categories = [
  "All Projects",
  "Dashboard",
  "Healthcare",
  "Logistics",
  "Business Platform",
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredProjects = activeCategory === "All Projects" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  // Reset selected index when category changes to avoid index out of bounds
  const currentProject = filteredProjects[Math.min(selectedIndex, filteredProjects.length - 1)] || filteredProjects[0];

  return (
    <section className="py-4 bg-[#020617] relative overflow-hidden min-h-screen flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-blue/5 blur-[120px] rounded-full z-0" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Filters */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12 sm:mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveCategory(category);
                setSelectedIndex(0); // Reset to first item in new category
              }}
              className={`px-5 sm:px-8 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-primary border-primary text-black shadow-[0_0_20px_rgba(251,221,8,0.2)]"
                  : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {category.toUpperCase()}
            </motion.button>
          ))}
        </motion.div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 mb-8">
          
          {/* Left Side: Featured Image Showcases */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentProject?.id}-${activeCategory}`}
                initial={{ opacity: 0, x: -180, y: -40, rotate: 15 }}
                animate={{ 
                  opacity: 1, 
                  x: [-180, -70, 0],
                  y: [-40, 50, 0],
                  rotate: [15, -5, 0],
                }}
                exit={{ 
                  opacity: 0, 
                  x: 150, 
                  y: 40, 
                  rotate: -15 
                }}
                transition={{ 
                  duration: 0.9, 
                  ease: "easeInOut",
                  times: [0, 0.6, 1]
                }}
                className="relative w-full aspect-[4/3] sm:max-w-[600px]"
              >
                {/* Decorative Frame */}
                <div className="absolute -inset-4 border border-white/5 rounded-[48px] pointer-events-none hidden sm:block" />
                
                <div className="w-full h-full rounded-[32px] sm:rounded-[40px] overflow-hidden border-2 border-white/5 relative shadow-2xl group">
                  {currentProject && (
                    <Image
                      src={currentProject.image}
                      alt={currentProject.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#020617]/80 to-transparent" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Project Details */}
          <div className="w-full lg:w-1/2 text-center lg:text-left min-h-[450px] sm:min-h-[550px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {currentProject && (
                <motion.div
                  key={`${currentProject.id}-${activeCategory}`}
                  variants={{
                    initial: { opacity: 0, x: 150 },
                    animate: { 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        duration: 0.9, 
                        ease: "easeOut",
                        staggerChildren: 0.1,
                        delayChildren: 0.2
                      }
                    },
                    exit: { opacity: 0, x: -100, transition: { duration: 0.5 } }
                  }}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="max-w-xl mx-auto lg:mx-0"
                >
                  <motion.span 
                    variants={fadeInUp}
                    className="text-primary font-bold tracking-[0.3em] text-xs sm:text-sm mb-4 sm:mb-6 block"
                  >
                    {currentProject.category.toUpperCase()}
                  </motion.span>
                  
                  <motion.h2 
                    variants={fadeInUp}
                    className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-none mb-2"
                  >
                    {currentProject.title}
                  </motion.h2>
                  
                  <motion.h2 
                    variants={fadeInUp}
                    className={`text-4xl sm:text-6xl md:text-7xl font-black italic opacity-50 mb-6 sm:mb-8 ${currentProject.accent}`}
                  >
                    {currentProject.subtitle}
                  </motion.h2>
                  
                  <motion.p 
                    variants={fadeInUp}
                    className="text-gray-400 text-sm sm:text-lg mb-8 sm:mb-12 leading-relaxed min-h-[3em] sm:min-h-[4.5em]"
                  >
                    {currentProject.description}
                  </motion.p>
                  
                  <motion.div 
                    variants={fadeInUp}
                    className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6"
                  >
                    <Link href="#">
                      <motion.button 
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 sm:px-10 py-3 sm:py-4 bg-primary text-black font-bold rounded-xl transition-all flex items-center gap-2 text-xs sm:text-sm shadow-[0_0_20px_rgba(251,221,8,0.3)]"
                      >
                        <Play className="w-4 h-4 fill-current" />
                        VIEW DEMO
                      </motion.button>
                    </Link>
                    <Link href="#">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 sm:px-10 py-3 sm:py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl transition-all flex items-center gap-2 text-xs sm:text-sm hover:bg-white/10"
                      >
                        <ExternalLink className="w-4 h-4" />
                        CASE STUDY
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>  
          </div>
        </div>

        {/* Bottom Switcher: Project Thumbnails */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 mt-8">
            <button 
                onClick={() => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredProjects.length - 1))}
                className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-primary hover:text-black transition-all group"
            >
                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto py-6 px-4 sm:px-10 no-scrollbar max-w-full">
                {filteredProjects.map((project, idx) => (
                    <motion.button
                        key={project.id}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        onClick={() => setSelectedIndex(idx)}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative w-16 h-12 sm:w-28 sm:h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0
                            ${selectedIndex === idx 
                                ? "border-primary shadow-[0_0_20px_rgba(251,221,8,0.3)]" 
                                : "border-white/10 opacity-60 hover:opacity-100"
                            }
                        `}
                    >
                        <Image 
                            src={project.image} 
                            alt={project.title} 
                            fill 
                            className="object-cover "
                        />
                        <div className={`absolute inset-0 bg-primary/20 transition-opacity ${selectedIndex === idx ? "opacity-100" : "opacity-0"}`} />
                    </motion.button>
                ))}
            </div>

            <button 
                onClick={() => setSelectedIndex((prev) => (prev < filteredProjects.length - 1 ? prev + 1 : 0))}
                className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-primary hover:text-black transition-all group"
            >
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    </section>
  );
}
