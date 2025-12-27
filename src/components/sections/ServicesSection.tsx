import Link from "next/link";
import { ArrowRight, Leaf, Activity, UserCheck, Heart, Stethoscope, Utensils, Smile, User } from "lucide-react";

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl mb-6">
            Comprehensive Naturopathy Services in Lucknow <br className="hidden md:inline" />
            <span className="text-green-600 text-2xl md:text-3xl">Natural Healing for Every Health Need</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kanchankaya Naturopathy Center offers Lucknow&apos;s most comprehensive range of natural healing treatments and therapeutic services. Each treatment is personalized to your specific health condition, combining time-tested naturopathy practices with modern wellness techniques for optimal results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">

          {/* Service 1: Naturopathy Healing */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 shrink-0 bg-green-100 rounded-lg flex items-center justify-center text-green-700">
                <Leaf className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Naturopathy Healing Therapies
                </h3>
                <h4 className="text-sm font-semibold text-green-600 mb-3 uppercase tracking-wide">
                  Complete Naturopathy Treatment in Lucknow
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Experience authentic naturopathy healing including hydrotherapy, mud therapy, chromotherapy, fasting therapy, and massage therapy. We treat digestive disorders, skin conditions, and provide complete body detoxification.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li className="flex items-center gap-2">✓ Complete body detoxification</li>
                  <li className="flex items-center gap-2">✓ Enhanced natural immunity</li>
                  <li className="flex items-center gap-2">✓ Improved digestive function</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 2: Chronic Pain Management */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 shrink-0 bg-green-100 rounded-lg flex items-center justify-center text-green-700">
                <Activity className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Chronic Pain Management
                </h3>
                <h4 className="text-sm font-semibold text-green-600 mb-3 uppercase tracking-wide">
                  Natural Pain Relief Treatment - Drug-Free
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Specialized naturopathy pain management for back pain, neck pain, arthritis, sciatica, and migraines. We use hydrotherapy, acupressure, and therapeutic massage to address root causes like inflammation and posture.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li className="flex items-center gap-2">✓ Lasting pain reduction</li>
                  <li className="flex items-center gap-2">✓ Improved mobility</li>
                  <li className="flex items-center gap-2">✓ No painkillers required</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 3: Therapeutic Yoga */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 shrink-0 bg-green-100 rounded-lg flex items-center justify-center text-green-700">
                <UserCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Therapeutic Yoga & Meditation
                </h3>
                <h4 className="text-sm font-semibold text-green-600 mb-3 uppercase tracking-wide">
                  Yoga Therapy Classes in Lucknow
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Medical yoga therapy designed specifically for healing and rehabilitation. Programs for arthritis, diabetes, hypertension, and stress. Supervised by Dr. Vandana Mishra.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li className="flex items-center gap-2">✓ Personalized pose modifications</li>
                  <li className="flex items-center gap-2">✓ Small group or private sessions</li>
                  <li className="flex items-center gap-2">✓ Pranayama & Meditation included</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 4: Acupressure & Magnet Therapy */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
             <div className="flex items-start gap-4">
              <div className="h-12 w-12 shrink-0 bg-green-100 rounded-lg flex items-center justify-center text-green-700">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Acupressure & Magnet Therapy
                </h3>
                <h4 className="text-sm font-semibold text-green-600 mb-3 uppercase tracking-wide">
                  Ancient Healing Technique
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Stimulates specific pressure points to activate natural healing. Effective for migraines, hormonal imbalances, and stress. Combined with medical-grade magnet therapy for enhanced circulation.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li className="flex items-center gap-2">✓ Painless & non-invasive</li>
                  <li className="flex items-center gap-2">✓ Balances energy meridians</li>
                  <li className="flex items-center gap-2">✓ Accelerates healing</li>
                </ul>
              </div>
            </div>
          </div>

           {/* Service 5: Physiotherapy & Rehabilitation */}
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
             <div className="flex items-start gap-4">
              <div className="h-12 w-12 shrink-0 bg-green-100 rounded-lg flex items-center justify-center text-green-700">
                <Stethoscope className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Physiotherapy & Rehabilitation
                </h3>
                <h4 className="text-sm font-semibold text-green-600 mb-3 uppercase tracking-wide">
                  Expert Physical Rehabilitation
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Comprehensive physical therapy for musculoskeletal conditions, post-injury recovery, and neurological disorders. Integrated with naturopathy for holistic healing.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li className="flex items-center gap-2">✓ Post-stroke & fracture rehab</li>
                  <li className="flex items-center gap-2">✓ Sports injury treatment</li>
                  <li className="flex items-center gap-2">✓ Advanced equipment (IFT, TENS, US)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 6: Personalized Diet Counseling */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
             <div className="flex items-start gap-4">
              <div className="h-12 w-12 shrink-0 bg-green-100 rounded-lg flex items-center justify-center text-green-700">
                <Utensils className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Diet & Nutrition Counseling
                </h3>
                <h4 className="text-sm font-semibold text-green-600 mb-3 uppercase tracking-wide">
                  Naturopathy Dietitian in Lucknow
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Personalized, scientifically designed diet plans. Specialized programs for diabetes, weight loss, hypertension, kidney health, and digestive disorders.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li className="flex items-center gap-2">✓ Whole, natural food focus</li>
                  <li className="flex items-center gap-2">✓ Disease-specific meal plans</li>
                  <li className="flex items-center gap-2">✓ Ongoing nutritional support</li>
                </ul>
              </div>
            </div>
          </div>

           {/* Service 7: Lifestyle Management */}
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
             <div className="flex items-start gap-4">
              <div className="h-12 w-12 shrink-0 bg-green-100 rounded-lg flex items-center justify-center text-green-700">
                <Smile className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Lifestyle Management
                </h3>
                <h4 className="text-sm font-semibold text-green-600 mb-3 uppercase tracking-wide">
                  Holistic Disease Management
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Comprehensive programs for modern lifestyle diseases like diabetes, hypertension, obesity, cholesterol, and metabolic syndrome.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li className="flex items-center gap-2">✓ Complete health assessment</li>
                  <li className="flex items-center gap-2">✓ Stress management techniques</li>
                  <li className="flex items-center gap-2">✓ Measurable improvements in 30 days</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 8: Women's Health */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
             <div className="flex items-start gap-4">
              <div className="h-12 w-12 shrink-0 bg-green-100 rounded-lg flex items-center justify-center text-green-700">
                <User className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Women&apos;s Health & Wellness
                </h3>
                <h4 className="text-sm font-semibold text-green-600 mb-3 uppercase tracking-wide">
                  Natural Solutions for Women
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Specialized treatments for PCOD/PCOS, hormonal imbalances, menstrual disorders, infertility support, and prenatal/postnatal wellness.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li className="flex items-center gap-2">✓ Hormonal balancing naturally</li>
                  <li className="flex items-center gap-2">✓ Fertility enhancement programs</li>
                  <li className="flex items-center gap-2">✓ Safe pregnancy yoga</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-lg border-2 border-green-600 px-8 py-3 text-base font-bold text-green-700 transition-all hover:bg-green-600 hover:text-white hover:shadow-lg"
          >
            View Full Service Menu <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
