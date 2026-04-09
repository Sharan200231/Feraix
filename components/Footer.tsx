import { MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-xl italic leading-none">F</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white uppercase">
                Feraix
              </span>
            </Link>
            <p className="text-gray-500 leading-relaxed text-sm">
              Empowering businesses through cutting-edge technology and intelligent digital solutions. We transform visions into reality with precision and expertise.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all"
              >
                <span className="sr-only">X</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M18.244 2H21.5l-7.5 8.57L22 22h-6.828l-5.35-6.91L3.5 22H.243l8.02-9.16L2 2h6.828l4.84 6.29L18.244 2zm-2.4 18h1.9L8.16 4h-2l9.684 16z"/>
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all"
              >
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="#0A66C2">
                  <path d="M20.45 20.45h-3.55v-5.56c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.66H9.37V9h3.41v1.56h.05c.47-.89 1.61-1.85 3.31-1.85 3.54 0 4.2 2.33 4.2 5.36v6.38zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM6.92 20.45H3.75V9h3.17v11.45z"/>
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all"
              >
                <span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M12 .5C5.65.5.75 5.4.75 11.75c0 5.09 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.57.24 2.73.12 3.02.74.81 1.18 1.83 1.18 3.09 0 4.44-2.69 5.41-5.25 5.7.41.35.77 1.04.77 2.1 0 1.52-.01 2.75-.01 3.12 0 .3.2.67.8.55a11.27 11.27 0 0 0 7.85-10.91C23.25 5.4 18.35.5 12 .5z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Our Projects", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4">
              {["Web Development", "Software Development", "IT Consulting", "Cloud Solutions"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-4 text-sm">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-500">123 Tech Avenue, Silicon Valley, CA 94025</span>
              </li>
              <li className="flex gap-4 text-sm">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-500">contact@feraix.tech</span>
              </li>
              <li className="flex gap-4 text-sm">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-500">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs">
            © 2026 Feraix Technologies. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-gray-600 hover:text-white transition-colors text-xs">Privacy Policy</Link>
            <Link href="#" className="text-gray-600 hover:text-white transition-colors text-xs">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
