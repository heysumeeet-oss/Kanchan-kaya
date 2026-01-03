'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import Image from 'next/image';

const galleryImages = [
  { src: "/images/gallery/kanchankaya-clinic-exterior.jpg", alt: "Kanchankaya Naturopathy Clinic Exterior View" },
  { src: "/images/gallery/clinic-reception-hall.jpg", alt: "Clinic Reception and Waiting Hall" },
  { src: "/images/gallery/meditation-buddha-statue.jpg", alt: "Meditation Area with Buddha Statue" },
  { src: "/images/gallery/wellness-center-shrine.jpg", alt: "Wellness Center Spiritual Shrine" },
  { src: "/images/gallery/buddha-wall-art.jpg", alt: "Serene Buddha Wall Mural" },
  { src: "/images/gallery/yoga-hall-session.webp", alt: "Group Yoga Session in Main Hall" },
  { src: "/images/gallery/treatment-therapy-room.webp", alt: "Naturopathy Treatment and Therapy Room" },
  { src: "/images/gallery/patient-accommodation.webp", alt: "Patient Accommodation Room" },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Find the selected image object for alt text
  const activeImage = galleryImages.find(img => img.src === selectedImage);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                    <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="bg-white/90 p-2 rounded-full shadow-lg">
                           <ZoomIn className="w-6 h-6 text-green-600" />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        <AnimatePresence>
            {selectedImage && activeImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <button className="absolute top-4 right-4 text-white hover:text-green-400 transition-colors bg-white/10 p-2 rounded-full z-50">
                        <X className="w-6 h-6" />
                    </button>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative max-w-5xl w-full max-h-[90vh] rounded-lg overflow-hidden flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                         <div className="relative w-full h-full aspect-video">
                            <Image
                                src={activeImage.src}
                                alt={activeImage.alt}
                                fill
                                className="object-contain"
                                sizes="90vw"
                            />
                         </div>
                    </motion.div>
                    <div className="absolute bottom-4 left-0 right-0 text-center text-white pointer-events-none">
                        <p className="text-lg font-medium">{activeImage.alt}</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </section>
  );
}
