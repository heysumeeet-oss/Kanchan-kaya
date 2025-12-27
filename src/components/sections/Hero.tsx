import { Phone, Star, Users, MapPin, Building, CheckCircle, GraduationCap } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-green-50 to-white py-12 md:py-20 lg:py-28 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-10 pointer-events-none"></div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">

            {/* Location Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 border border-green-200">
              <MapPin className="h-3.5 w-3.5" />
              <span>Krishna Nagar, Alambagh, Lucknow | Open 7 Days</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-green-950 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-tight">
              Best Naturopathy Treatment Center in Lucknow <br className="hidden lg:inline" />
              <span className="text-green-600 block mt-2">Natural Healing Since 1996</span>
            </h1>

            <div className="space-y-4">
              <h2 className="text-lg md:text-xl font-medium text-green-800">
                Transform Your Health Through Nature&apos;s Wisdom - Expert Drug-Free Treatments for Chronic Pain, Diabetes, Obesity & Stress Relief in Lucknow
              </h2>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Welcome to Kanchankaya Naturopathy Center, Lucknow&apos;s most trusted naturopathy clinic since 1996. Led by Dr. Vandana Mishra with 29+ years of experience, we provide comprehensive natural healing solutions combining naturopathy, yoga therapy, acupressure, physiotherapy, and holistic wellness treatments.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 md:gap-4">
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-100">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-semibold text-gray-700">4.7/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-100">
                <Users className="h-4 w-4 text-green-600" />
                <span className="text-sm font-semibold text-gray-700">10,000+ Patients</span>
              </div>
               <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-100">
                <Building className="h-4 w-4 text-green-600" />
                <span className="text-sm font-semibold text-gray-700">Est. 1996</span>
              </div>
               <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-100">
                <GraduationCap className="h-4 w-4 text-green-600" />
                <span className="text-sm font-semibold text-gray-700">29+ Yrs Expert</span>
              </div>
            </div>

             {/* Additional Trust Badge row for smaller screens if needed, or wrap above */}
             <div className="flex items-center gap-2 text-sm text-green-700 font-medium">
               <CheckCircle className="h-4 w-4" /> 100% Natural & Drug-Free Treatments
             </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center justify-center rounded-lg bg-green-700 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-green-800 hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 w-full sm:w-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Free Consultation
              </a>
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-green-50 px-8 py-4 text-base font-bold text-green-700 shadow-sm transition-all hover:bg-green-100 border-2 border-green-200 hover:border-green-300 w-full sm:w-auto"
              >
                WhatsApp Now
              </a>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
             {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-200 aspect-[4/3] lg:aspect-[5/6]">
               {/* Placeholder for actual image - replace with Next.js Image component when assets are available */}
               <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-300 flex items-center justify-center">
                   <div className="text-center p-8">
                       <span className="block text-6xl mb-4">🌿</span>
                       <p className="text-green-800 font-medium text-lg">Healing Mind, Body & Spirit</p>
                   </div>
               </div>
            </div>

            {/* Floating Card Element */}
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-12 bg-white p-4 md:p-6 rounded-xl shadow-xl border border-green-50 max-w-[280px] hidden md:block animate-in fade-in slide-in-from-bottom-4 duration-1000">
               <div className="flex items-center gap-3 mb-2">
                 <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Star className="h-5 w-5 text-green-600 fill-green-600" />
                 </div>
                 <div>
                   <p className="font-bold text-gray-900">Top Rated</p>
                   <p className="text-xs text-gray-500">Center in Lucknow</p>
                 </div>
               </div>
               <p className="text-sm text-gray-600">
                 &quot;Best naturopathy center in Lucknow. Dr. Vandana Mishra is excellent.&quot;
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
