import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-green-800">Kanchankaya</h3>
            <p className="text-sm text-gray-600">
              Lucknow&apos;s oldest and most trusted naturopathy center since 1996. Dedicated to natural healing and holistic wellness.
            </p>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.facebook} className="text-gray-500 hover:text-green-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href={SOCIAL_LINKS.instagram} className="text-gray-500 hover:text-green-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-green-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services#naturopathy" className="text-sm text-gray-600 hover:text-green-600">Naturopathy</Link></li>
              <li><Link href="/services#yoga" className="text-sm text-gray-600 hover:text-green-600">Yoga Therapy</Link></li>
              <li><Link href="/services#acupressure" className="text-sm text-gray-600 hover:text-green-600">Acupressure</Link></li>
              <li><Link href="/services#pain-management" className="text-sm text-gray-600 hover:text-green-600">Pain Management</Link></li>
              <li><Link href="/services#diet" className="text-sm text-gray-600 hover:text-green-600">Diet & Nutrition</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-600 shrink-0" />
                <span className="text-sm text-gray-600">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-600 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-sm text-gray-600 hover:text-green-600">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-600 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-gray-600 hover:text-green-600">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-xs text-center text-gray-500">
            &copy; {new Date().getFullYear()} Kanchankaya Naturopathy Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
