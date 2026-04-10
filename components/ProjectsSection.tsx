"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  "All Projects",
  "Business Platforms",
  "Mobile Apps",
  "Dashboards",
  "Corporate Sites",
];

const projects = [
  {
    title: "FinTech Analytics Platform",
    category: "Dashboard",
    tag2: "SaaS",
    description: "A comprehensive financial dashboard providing real-time analytics, predictive modeling, and secure transaction monitoring for...",
    image: "/assets/hero.png", // Placeholder image or should I generate one? 
    // The image in design shows a dark analytics dashboard.
  },
  {
    title: "HealthSync Mobile",
    category: "Healthcare",
    tag2: "Flutter",
    description: "An Al-powered telemedicine application connecting patients with healthcare providers, featuring secure video consultations and...",
    image: "/assets/aboutV1.png",
  },
  {
    title: "Global Logistics Portal",
    category: "Logistics",
    tag2: "Next.js",
    description: "A high-performance corporate website and client portal for an international logistics firm, optimizing supply chain visibility and...",
    image: "/assets/whyus.png",
  },
  {
    title: "HR Management System",
    category: "Business Platform",
    tag2: "Design",
    description: "A cloud-based HR platform streamlining recruitment, onboarding, and employee performance tracking with integrated Al analytics.",
    image: "/assets/hero.png",
  },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12 sm:mb-20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 sm:px-8 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-primary border-primary text-white"
                  : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#0B0F1A] border border-white/5 rounded-3xl overflow-hidden hover:border-primary/20 transition-all duration-500"
            >
              {/* Card Image Area */}
              <div className="relative h-[200px] sm:h-[300px] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-8 relative">
                <div className="flex gap-2 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400">
                    {project.category.toUpperCase()}
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400">
                    {project.tag2.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
                  {project.description}
                </p>

                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest group/link"
                >
                  VIEW CASE STUDY
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
