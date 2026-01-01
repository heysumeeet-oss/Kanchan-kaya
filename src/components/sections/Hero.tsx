import { Phone, Star, Users, MapPin, Building, CheckCircle, GraduationCap, MessageCircle, ArrowRight } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-green-50/50 via-white to-white pt-6 pb-12 md:py-20 lg:py-28 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-[0.03] pointer-events-none mix-blend-multiply"></div>

      {/* Abstract decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-yellow-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">

          <div className="space-y-6 md:space-y-8 text-center lg:text-left pt-4 md:pt-0">

            {/* Location Badge - Mobile Optimized */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs md:text-sm font-medium text-green-800 shadow-sm border border-green-100 mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <MapPin className="h-3.5 w-3.5 text-green-600" />
              <span>Krishna Nagar, Alambagh | Open 7 Days</span>
            </div>

            <h1 className="text-[2.5rem] leading-[1.1] font-extrabold tracking-tight text-green-950 sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Naturopathy Center in Lucknow <br className="hidden lg:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 block mt-2 text-2xl md:text-5xl font-bold">Natural Healing Since 1996</span>
            </h1>

            <div className="space-y-4 max-w-2xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              <h2 className="text-lg md:text-xl font-medium text-green-900/80">
                Transform Your Health Through Nature&apos;s Wisdom - Expert Drug-Free Treatments for Chronic Pain, Diabetes, Obesity & Stress Relief.
              </h2>
            </div>

            {/* Trust Badges - Mobile Grid */}
            <div className="grid grid-cols-2 sm:flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2.5 rounded-xl shadow-sm border border-green-50">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="text-xs md:text-sm font-semibold text-gray-700">4.7/5 Rated (260+)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2.5 rounded-xl shadow-sm border border-green-50">
                <Users className="h-4 w-4 text-green-600" />
                <span className="text-xs md:text-sm font-semibold text-gray-700">10k+ Patients</span>
              </div>
               <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2.5 rounded-xl shadow-sm border border-green-50">
                <Building className="h-4 w-4 text-green-600" />
                <span className="text-xs md:text-sm font-semibold text-gray-700">Since 1996</span>
              </div>
               <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2.5 rounded-xl shadow-sm border border-green-50">
                <GraduationCap className="h-4 w-4 text-green-600" />
                <span className="text-xs md:text-sm font-semibold text-gray-700">29+ Yrs Expert</span>
              </div>
            </div>

            {/* CTAs - Mobile Stacked */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center justify-center rounded-xl bg-green-700 px-8 py-4 text-base font-bold text-white shadow-lg shadow-green-900/20 transition-all hover:bg-green-800 hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 w-full sm:w-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Consultation
              </a>
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-bold text-green-700 shadow-sm transition-all hover:bg-green-50 border border-green-200 hover:border-green-300 w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0 px-4 md:px-0 animate-in fade-in slide-in-from-right-8 duration-1000">
             {/* Main Image Container */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-green-900/20 aspect-[4/3] lg:aspect-[5/6] transform rotate-1 lg:rotate-2 hover:rotate-0 transition-transform duration-500">
               <Image
                 src="/images/kanchankaya-clinic-exterior.jpg"
                 alt="Kanchankaya Naturopathy Center Exterior View - Best Naturopathy Center in Lucknow"
                 title="Kanchankaya Naturopathy Center - Natural Healing Clinic"
                 fill
                 className="object-cover"
                 priority
                 sizes="(max-width: 1024px) 90vw, 50vw"
               />

               {/* Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-transparent"></div>
            </div>

            {/* Floating Card - Mobile Hidden or simplified */}
            <div className="absolute -bottom-6 -left-4 md:bottom-8 md:-left-12 bg-white/95 backdrop-blur p-4 md:p-6 rounded-2xl shadow-xl border border-white max-w-[260px] md:max-w-[280px] hidden sm:block animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
               <div className="flex items-center gap-3 mb-2">
                 <div className="h-10 w-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Star className="h-5 w-5 text-yellow-600 fill-yellow-600" />
                 </div>
                 <div>
                   <p className="font-bold text-gray-900 text-sm">Top Rated Center</p>
                   <p className="text-xs text-gray-500">Lucknow</p>
                 </div>
               </div>
               <p className="text-xs md:text-sm text-gray-600 italic">
                 &quot;Best naturopathy center in Lucknow. Dr. Vandana Mishra is excellent.&quot;
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
