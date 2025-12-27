import { Star, Phone } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      text: "I was suffering from severe rheumatoid arthritis with almost my entire spine dysfunctional. After just one month of naturopathy, physiotherapy, and acupressure treatment at Kanchankaya, I can walk again and heal myself without any side effects. Dr. Vandana Mishra and her team turned my life around.",
      author: "Verified Patient",
      location: "Lucknow",
      title: "Arthritis Relief"
    },
    {
      text: "My wife had acute spondylosis and scoliosis with curved, damaged vertebrae. We tried Kerala Ayurveda treatment for 10 months in Dubai with no benefit. At Kanchankaya, Dr. Vandana and Dr. Satyendra Mishra treated her... In just 10 days, she felt much relieved. The staff is well-trained and professional.",
      author: "Verified Patient",
      location: "Lucknow",
      title: "Spine & Back Pain"
    },
    {
      text: "I was facing asthma and cervical problems and was in so much pain. After joining Kanchankaya naturopathy, I feel so relaxed and happy. Dr. Vandana ma'am did a lot to make me feel good, and the treatment is completely natural. Thanks a lot, Kanchankaya!",
      author: "Sapna Gupta",
      location: "Lucknow",
      title: "Asthma & Cervical Problem"
    },
    {
      text: "I joined Kanchankaya two months back with loss of lumbar curvature and chronic back pain. Due to natural therapy and yoga sessions, my pain is now mild. Vandana ma'am and her staff are very cooperative and understanding. This is the best naturopathy center in Lucknow.",
      author: "Verified Patient",
      location: "Krishna Nagar",
      title: "Chronic Back Pain"
    },
    {
      text: "I had severe arthritis and now it's perfectly fine after treatment at Kanchankaya. Dr. Vandana Mishra is extremely understanding, and the treatment is natural without any side effects. One must join for health issues like obesity, body pain, and bone deformity.",
      author: "Sudha Tewari",
      location: "Lucknow",
      title: "Arthritis Recovery"
    },
    {
      text: "I took a 6-day course for obesity, weight loss, and blood pressure. By the end of the course, my BP returned to normal, and I lost 2.5 kg. The center is well-equipped, staff is sincere and technically sound. Really worth it for naturopathy treatment in Lucknow.",
      author: "Verified Patient",
      location: "",
      title: "Weight Loss & BP Control"
    },
    {
      text: "I joined Kanchankaya 3 years ago, and it has been a life-changing experience on a physical level. The approach to wellness through natural methods is exceptional. Best yoga and naturopathy center in Lucknow.",
      author: "Pratima Chaudhary",
      location: "Lucknow",
      title: "Life-Changing Experience"
    },
    {
      text: "The staff is really cooperative, and the environment is so refreshing that it provides relaxation and positive vibes. Dr. Vandana is very sweet and friendly. The work done on me has been very positive. Highly recommend this naturopathy center in Lucknow.",
      author: "Verified Patient",
      location: "",
      title: "Supportive Environment"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real reviews from Lucknow residents who have experienced transformative healing.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-yellow-500">
             <Star className="fill-current w-5 h-5" />
             <Star className="fill-current w-5 h-5" />
             <Star className="fill-current w-5 h-5" />
             <Star className="fill-current w-5 h-5" />
             <Star className="fill-current w-5 h-5" />
             <span className="text-gray-900 font-bold ml-2">4.7/5 Rating</span>
          </div>
        </div>

        {/* Masonry Grid for testimonials */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <div key={i} className="break-inside-avoid bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-1 text-yellow-400 mb-3">
                 {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-current" />
                 ))}
              </div>
              <h4 className="font-bold text-green-800 text-sm mb-2 uppercase tracking-wide">{t.title}</h4>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed italic">
                &quot;{t.text}&quot;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                 <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs font-bold">
                    {t.author.charAt(0)}
                 </div>
                 <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.author}</div>
                    {t.location && <div className="text-xs text-gray-500">{t.location}</div>}
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-white.svg')] opacity-5"></div>
           <div className="relative z-10">
             <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Healing Journey?</h3>
             <p className="text-green-100 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied patients who have transformed their health naturally.
             </p>
             <a
               href="tel:+919935364157"
               className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-bold text-green-900 shadow-xl transition-transform hover:scale-105 hover:bg-green-50"
             >
               <Phone className="w-5 h-5 mr-2" />
               Book Your Consultation Today
             </a>
           </div>
        </div>
      </div>
    </section>
  );
}
