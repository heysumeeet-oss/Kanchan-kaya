import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowRight, Clock } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-900 font-sans">
      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16">

        {/* Mobile: Stacked with spacing | Desktop: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">Kanchankaya</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Lucknow&apos;s trusted naturopathy center since 1996. Holistic healing for mind, body, and spirit.
            </p>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.facebook} aria-label="Facebook" className="bg-gray-900 p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={SOCIAL_LINKS.instagram} aria-label="Instagram" className="bg-gray-900 p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-pink-600 transition-all">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Explore</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-green-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-green-500 transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm leading-snug">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-500 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-sm hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-green-500 shrink-0" />
                <span className="text-sm">Open 7 Days a Week</span>
              </li>
            </ul>
          </div>

          {/* Book Now (Mobile prominence) */}
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
            <h4 className="text-white font-bold mb-2">Ready to heal?</h4>
            <p className="text-xs text-gray-500 mb-4">Book your appointment today.</p>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="block w-full text-center bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-green-900/20 active:scale-95"
            >
              Book Appointment
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-900 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
          <p>&copy; {new Date().getFullYear()} Kanchankaya Naturopathy Center.</p>
          <div className="flex gap-6">
             <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy</Link>
             <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
