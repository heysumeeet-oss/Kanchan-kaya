'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  // Placeholder data - replace with real images later
  { src: "/images/gallery-placeholder-1.jpg", alt: "Treatment Room" },
  { src: "/images/gallery-placeholder-2.jpg", alt: "Yoga Hall" },
  { src: "/images/gallery-placeholder-3.jpg", alt: "Consultation" },
  { src: "/images/gallery-placeholder-4.jpg", alt: "Therapy Session" },
  { src: "/images/gallery-placeholder-5.jpg", alt: "Entrance" },
  { src: "/images/gallery-placeholder-6.jpg", alt: "Garden" },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl mb-4">
            Our Center
          </h2>
          <div className="w-20 h-1.5 bg-green-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look inside Kanchankaya Naturopathy Center. A peaceful environment designed for your healing and relaxation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative aspect-square group cursor-pointer overflow-hidden rounded-xl shadow-md bg-white border border-green-100"
                    onClick={() => setSelectedImage(img.src)}
                >
                    {/* Placeholder content until real images are available */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 group-hover:scale-105 transition-transform duration-300">
                        {/* If real image exists: <img src={img.src} alt={img.alt} className="w-full h-full object-cover" /> */}
                        <div className="text-center p-4">
                            <span className="block mb-2 font-medium text-gray-500">{img.alt}</span>
                            <span className="text-xs text-gray-400">(Image coming soon)</span>
                        </div>
                    </div>
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="bg-white/90 p-2 rounded-full shadow-lg">
                           <ZoomIn className="w-6 h-6 text-green-600" />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        <AnimatePresence>
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <button className="absolute top-4 right-4 text-white hover:text-green-400 transition-colors bg-white/10 p-2 rounded-full">
                        <X className="w-6 h-6" />
                    </button>
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        className="relative max-w-4xl w-full max-h-[80vh] rounded-lg overflow-hidden bg-white aspect-video flex items-center justify-center shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                         {/* Placeholder for lightbox */}
                         <div className="text-center p-8">
                             <div className="text-2xl font-bold text-gray-300 mb-4">Preview Unavailable</div>
                             <div className="text-gray-400">Image Source: {selectedImage}</div>
                             <p className="mt-4 text-sm text-gray-500">Real images have not been uploaded yet.</p>
                         </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </section>
  );
}
