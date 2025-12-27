import { Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-green-50 py-20 lg:py-32 overflow-hidden">
      {/* Background pattern or image can go here */}
      <div className="absolute inset-0 bg-white/40 pointer-events-none"></div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-green-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              Best Naturopathy Treatment Center in Lucknow <br className="hidden lg:inline" />
              <span className="text-green-600">Natural Healing Since 1996</span>
            </h1>

            <p className="text-lg text-gray-700 md:text-xl max-w-[600px]">
              Transform Your Health Through Nature&apos;s Wisdom. Expert Drug-Free Treatments for Chronic Pain, Diabetes, Obesity & Stress Relief.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-green-100">
                <span className="text-yellow-500">⭐ 4.7/5</span>
                <span className="text-sm font-medium text-gray-600">(260+ Reviews)</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-green-100">
                <span className="text-green-600">👥</span>
                <span className="text-sm font-medium text-gray-600">10,000+ Patients</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919935364157"
                className="inline-flex items-center justify-center rounded-lg bg-green-700 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-800 hover:-translate-y-1"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Free Consultation
              </a>
              <a
                href="https://wa.me/919935364157"
                className="inline-flex items-center justify-center rounded-lg bg-green-100 px-8 py-4 text-base font-semibold text-green-800 shadow-sm transition-all hover:bg-green-200 border border-green-200"
              >
                WhatsApp Now
              </a>
            </div>

            <p className="text-sm text-gray-500 font-medium">
              📍 Krishna Nagar, Alambagh, Lucknow | Open 7 Days
            </p>
          </div>

          <div className="relative lg:h-full min-h-[300px] lg:min-h-[500px] rounded-2xl overflow-hidden bg-green-200 shadow-2xl">
             {/* Placeholder for Hero Image */}
             <div className="absolute inset-0 flex items-center justify-center text-green-800/20 text-6xl font-bold bg-gradient-to-br from-green-100 to-green-300">
                Nature&apos;s Healing
             </div>
             {/* Use an actual image if provided or keep placeholder */}
          </div>
        </div>
      </div>
    </section>
  );
}
