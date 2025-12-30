"use client";

import { Star, Phone, Quote } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Testimonials() {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      text: "I was suffering from severe rheumatoid arthritis. After one month of naturopathy at Kanchankaya, I can walk again without side effects.",
      author: "Verified Patient",
      title: "Arthritis Relief"
    },
    {
      text: "My wife had acute spondylosis. Dr. Vandana Mishra treated her with acupressure and yoga. In just 10 days, she felt much relieved.",
      author: "Verified Patient",
      title: "Spine & Back Pain"
    },
    {
      text: "Facing asthma and cervical problems, I was in pain. Kanchankaya made me feel relaxed and happy. Thanks a lot!",
      author: "Sapna Gupta",
      title: "Asthma Relief"
    },
    {
      text: "Lost 2.5 kg and BP returned to normal in just 6 days. The center is well-equipped and staff is technically sound.",
      author: "Verified Patient",
      title: "Weight Loss"
    },
    {
      text: "Best naturopathy center in Lucknow. Life changing experience on a physical level.",
      author: "Pratima Chaudhary",
      title: "Life Changing"
    }
  ];

  return (
    <section className="py-20 bg-green-900 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-green-400 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-green-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Patient Stories
          </h2>
          <div className="flex items-center justify-center gap-2 text-yellow-400">
             <Star className="fill-current w-5 h-5" />
             <span className="text-white font-bold text-lg">4.7/5 Rating</span>
             <span className="text-green-200 text-sm">(260+ Reviews)</span>
          </div>
        </div>

        {/* Mobile Horizontal Scroll Snap */}
        <div
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:pb-0 md:mx-0 md:px-0 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="snap-center shrink-0 w-[85vw] md:w-auto bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl"
            >
              <div className="flex justify-between items-start mb-4">
                 <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, j) => (
                       <Star key={j} className="w-3.5 h-3.5 fill-current" />
                    ))}
                 </div>
                 <Quote className="h-8 w-8 text-green-400/20 fill-current" />
              </div>

              <h4 className="font-bold text-green-100 text-sm mb-2 uppercase tracking-wide">{t.title}</h4>
              <p className="text-green-50/90 mb-6 text-sm leading-relaxed min-h-[80px]">
                &quot;{t.text}&quot;
              </p>

              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                 <div className="h-8 w-8 rounded-full bg-green-800 flex items-center justify-center text-green-200 text-xs font-bold border border-green-700">
                    {t.author.charAt(0)}
                 </div>
                 <div className="font-semibold text-white text-sm">{t.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
