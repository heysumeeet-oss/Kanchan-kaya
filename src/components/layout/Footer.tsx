import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Clock, ArrowRight } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-2">Kanchankaya</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Lucknow&apos;s oldest and most trusted naturopathy center since 1996. We provide holistic healing through nature&apos;s wisdom, treating the root cause of ailments without side effects.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href={SOCIAL_LINKS.facebook} aria-label="Facebook" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-green-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={SOCIAL_LINKS.instagram} aria-label="Instagram" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-pink-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-6">Explore</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-green-400 transition-colors flex items-center gap-2">
                    <ArrowRight className="h-3 w-3 text-gray-600" /> {link.label}
                  </Link>
                </li>
              ))}
              <li>
                  <Link href="/services" className="text-sm hover:text-green-400 transition-colors flex items-center gap-2">
                    <ArrowRight className="h-3 w-3 text-gray-600" /> All Services
                  </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-500 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-sm hover:text-green-400 transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-500 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm hover:text-green-400 transition-colors break-all">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                   <span className="text-sm block">Open 7 Days a Week</span>
                   <span className="text-xs text-gray-500">Including Sundays & Holidays</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Areas Served (SEO) */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-6">Areas We Serve</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Lucknow", "Alambagh", "Krishna Nagar", "Gomti Nagar", "Indira Nagar", "Hazratganj", "Aliganj", "Kanpur Road", "Ashiana", "Vikas Nagar"].map((area, i) => (
                <span key={i} className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-400 border border-gray-700 hover:border-green-800 transition-colors cursor-default">
                  {area}
                </span>
              ))}
            </div>
            <div>
               <a
                 href={`tel:${CONTACT_INFO.phone}`}
                 className="block w-full text-center bg-green-700 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-green-900/20"
               >
                 Book Appointment
               </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Kanchankaya Naturopathy Center. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
