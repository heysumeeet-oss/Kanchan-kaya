"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, CONTACT_INFO } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full glass-nav transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 z-50">
            <Image
              src="/images/logo.jpg"
              alt="Kanchankaya Naturopathy Center"
              width={175}
              height={52}
              className="h-10 w-auto md:h-14 object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-green-700 relative py-1",
                  pathname === link.href ? "text-green-800 font-semibold" : "text-gray-600"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center justify-center rounded-full bg-green-700 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-900/10 transition-all hover:bg-green-800 hover:-translate-y-0.5"
            >
              <Phone className="mr-2 h-4 w-4" />
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-full hover:bg-gray-100 z-50 transition-colors relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
             <AnimatePresence mode="wait">
              {isOpen ? (
                 <motion.div
                   key="close"
                   initial={{ opacity: 0, rotate: -90 }}
                   animate={{ opacity: 1, rotate: 0 }}
                   exit={{ opacity: 0, rotate: 90 }}
                   transition={{ duration: 0.2 }}
                 >
                   <X className="h-6 w-6 text-gray-800" />
                 </motion.div>
              ) : (
                <motion.div
                   key="menu"
                   initial={{ opacity: 0, rotate: 90 }}
                   animate={{ opacity: 1, rotate: 0 }}
                   exit={{ opacity: 0, rotate: -90 }}
                   transition={{ duration: 0.2 }}
                 >
                   <Menu className="h-6 w-6 text-gray-800" />
                 </motion.div>
              )}
             </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-0 z-40 bg-white pt-24 pb-10 px-6 flex flex-col justify-between h-screen lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col space-y-2">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between text-2xl font-medium py-4 border-b border-gray-100",
                      pathname === link.href ? "text-green-800" : "text-gray-600"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                    <ArrowRight className={cn("h-5 w-5 opacity-0 -translate-x-2 transition-all", pathname === link.href ? "opacity-100 translate-x-0" : "")} />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               className="space-y-4 mt-8"
            >
               <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center justify-center w-full rounded-xl bg-green-700 px-6 py-4 text-lg font-bold text-white shadow-xl transition-transform active:scale-95"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
               <p className="text-center text-gray-500 text-sm">
                  {CONTACT_INFO.address}
               </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
