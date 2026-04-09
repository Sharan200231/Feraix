"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-6"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <span className="text-background font-bold text-xl italic leading-none">F</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors uppercase">
            Feraix
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <button className="hidden md:block px-6 py-2.5 bg-transparent border border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-background transition-all duration-300 text-sm">
          Get Started
        </button>

        {/* Mobile Menu Toggle (Simplified) */}
        <button className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
