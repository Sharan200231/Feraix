"use client";

import Image from "next/image";
import { ExternalLink, Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/constants/animations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const webProjects = [
  {
    title: "E-commerce Ecosystem",
    description: "A high-performance online shopping platform with advanced search, secure checkout, and real-time inventory tracking.",
    image: "/Web-development.png",
    link: "https://example.com/ecommerce",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"]
  },
  {
    title: "AI Analytics Dashboard",
    description: "Enterprise-grade data visualization tool providing predictive insights using machine learning models.",
    image: "/AI Technology.png",
    link: "https://example.com/analytics",
    tech: ["React", "Node.js", "Python", "Chart.js"]
  },
  {
    title: "Global Logistics Portal",
    description: "A comprehensive supply chain management system with real-time tracking and automated documentation.",
    image: "/IoT Tech.png",
    link: "https://example.com/logistics",
    tech: ["Next.js", "PostgreSQL", "AWS", "Docker"]
  }
];

const globalTechnologies = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Postgres", "MongoDB", "AWS", "Docker", "Framer Motion", "Three.js"
];

export default function WebDevelopmentProjects() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-primary selection:text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl">
           <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
           <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-12 text-sm font-medium group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary mb-8"
            >
              <Sparkles size={16} />
              <span className="text-xs font-bold tracking-[0.2em] uppercase">Web Showcase</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-7xl font-black text-white mb-8 leading-tight uppercase"
            >
              Web Development <br />
              <span className="text-primary italic">Portfolio</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl"
            >
              Explore our latest web applications designed for performance, scalability, and exceptional user experiences. We turn complex ideas into seamless digital realities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 mb-12 w-full max-w-4xl">
              <div className="h-px flex-1 bg-white/5" />
              <h4 className="text-[10px] font-bold tracking-[0.4em] text-gray-500 uppercase">Technologies We Use</h4>
              <div className="h-px flex-1 bg-white/5" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {globalTechnologies.map((tech, idx) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-gray-300 text-xs sm:text-sm font-bold tracking-wider hover:border-primary/50 hover:text-white hover:bg-primary/5 transition-all cursor-default shadow-xl"
                >
                  {tech.toUpperCase()}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {webProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                className="group flex flex-col h-full bg-[#0B0F1A] border border-white/5 rounded-[40px] overflow-hidden hover:border-primary/20 transition-all shadow-2xl"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent opacity-80" />
                </div>

                {/* Project Content */}
                <div className="p-8 sm:p-10 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>
                  
                  {/* Project Tech Tags */}
                 {/**  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-gray-500 uppercase tracking-widest">{t}</span>
                    ))}
                  </div> */}

                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-3 text-primary text-xs font-bold tracking-widest uppercase group/link"
                  >
                    View Live Project
                    <ExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      
      <Footer />
    </main>
  );
}
