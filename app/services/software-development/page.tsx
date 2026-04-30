"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn } from "@/constants/animations";
import { Cloud, Infinity, Zap, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const solutions = [
  {
    title: "SaaS Solutions",
    description: "Cloud-native Software as a Service solutions designed for scalability, security, and exceptional user experience.",
    icon: Cloud,
    features: ["Multi-tenant Architecture", "Cloud-native Scaling", "Secure Data Management", "API-first Design"]
  },
  {
    title: "DevOps Excellence",
    description: "Streamlining your software delivery lifecycle through automated CI/CD pipelines and infrastructure as code.",
    icon: Infinity,
    features: ["CI/CD Pipelines", "Infrastructure as Code", "Containerization (Docker/K8s)", "Real-time Monitoring"]
  },
  {
    title: "Agile Methodology",
    description: "Iterative development process that ensures rapid delivery, high quality, and flexibility to meet changing needs.",
    icon: Zap,
    features: ["Iterative Development", "Continuous Feedback", "Scrum & Kanban", "Adaptive Planning"]
  }
];

export default function SoftwareDevelopmentPage() {
  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-primary selection:text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative  pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/serviceBg1V2jpg.jpg"
            alt="Hero Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center pt-20">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-glow-yellow">
              Software <span className="text-primary">Development</span>
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed">
              We build custom software solutions that empower businesses to innovate and grow. 
              Our approach combines cutting-edge technology with proven methodologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-[40px] bg-[#0B0F1A]/60 backdrop-blur-xl border border-white/5 hover:border-primary/20 transition-all duration-500 flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-all duration-500 mb-8">
                  <solution.icon className="w-8 h-8 text-primary group-hover:text-black transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-8">
                  {solution.description}
                </p>
                
                <ul className="space-y-4 mt-auto">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
