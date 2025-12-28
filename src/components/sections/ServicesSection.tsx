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
                  Experience authentic naturopathy healing at Lucknow&apos;s premier natural treatment center. Our naturopathy therapies include hydrotherapy (water therapy using hot/cold applications), mud therapy (detoxifying clay applications), chromotherapy (healing through color), fasting therapy (therapeutic detoxification), massage therapy (natural oil-based treatments), steam baths, and enema therapy.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li className="flex items-center gap-2">✓ Complete body detoxification without chemicals</li>
                  <li className="flex items-center gap-2">✓ Enhanced natural immunity</li>
                  <li className="flex items-center gap-2">✓ Improved digestive function and metabolism</li>
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
                  Chronic Pain Management & Stress Relief
                </h3>
                <h4 className="text-sm font-semibold text-green-600 mb-3 uppercase tracking-wide">
                  Natural Pain Relief Treatment in Lucknow - Drug-Free Solutions
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Suffering from chronic pain? Our specialized naturopathy pain management program in Lucknow provides effective, lasting relief without painkillers or medications. We treat back pain, neck pain, shoulder pain, knee pain, joint pain, arthritis pain, sciatica, migraine headaches, and fibromyalgia using natural therapeutic modalities.
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
                  Yoga Therapy Classes in Lucknow - Personalized Healing Yoga
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Kanchankaya offers Lucknow&apos;s most comprehensive therapeutic yoga programs designed specifically for healing and rehabilitation, not just fitness. Our medical yoga therapy is supervised by Dr. Vandana Mishra, certified yoga therapist with 29+ years experience.
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
                  Acupressure Treatment in Lucknow - Ancient Healing Technique
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Acupressure therapy at Kanchankaya Naturopathy Lucknow stimulates specific pressure points to activate the body&apos;s natural healing mechanisms. This painless, non-invasive therapy improves energy flow, reduces pain, enhances organ function, and promotes overall wellness.
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
                  Physiotherapy Treatment in Lucknow - Expert Physical Rehabilitation
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Our physiotherapy department at Kanchankaya Naturopathy Center Lucknow provides comprehensive physical therapy and rehabilitation services for musculoskeletal conditions, post-injury recovery, post-surgical rehabilitation, and neurological disorders.
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
                  Personalized Diet & Nutrition Counseling
                </h3>
                <h4 className="text-sm font-semibold text-green-600 mb-3 uppercase tracking-wide">
                  Naturopathy Dietitian in Lucknow - Natural Nutrition Plans
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Nutrition is fundamental to naturopathy healing. Our nutrition counseling at Kanchankaya Lucknow provides personalized, scientifically designed diet plans that support your healing journey and promote long-term wellness.
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
                  Lifestyle Management & Wellness Programs
                </h3>
                <h4 className="text-sm font-semibold text-green-600 mb-3 uppercase tracking-wide">
                  Holistic Lifestyle Disease Management in Lucknow
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Modern lifestyle diseases require comprehensive lifestyle modifications beyond just medical treatment. Our lifestyle management programs at Kanchankaya address diabetes, hypertension, obesity, cholesterol issues, PCOD/PCOS, thyroid disorders, fatty liver, and metabolic syndrome through integrated natural approaches.
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
                  Naturopathy for Women&apos;s Health Issues in Lucknow
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Kanchankaya provides specialized naturopathy treatments for women&apos;s health conditions including PCOD/PCOS, irregular periods, menstrual pain, hormonal imbalances, menopausal symptoms, infertility support, pregnancy wellness, postnatal recovery, and reproductive health issues.
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
