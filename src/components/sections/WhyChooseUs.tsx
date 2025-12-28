import { Star, ShieldCheck, Heart, Users, Leaf, UserCheck, MapPin, BadgeIndianRupee } from "lucide-react";

const REASONS = [
  {
    title: "Lucknow's Oldest & Most Trusted",
    description: "Established in 1996, we are Lucknow's pioneer naturopathy center with an unmatched 29-year legacy of natural healing excellence. Our decades of experience translate into superior treatment outcomes and deep expertise in managing complex health conditions.",
    icon: ShieldCheck,
  },
  {
    title: "Expert-Led by Dr. Vandana Mishra",
    description: "Treatment supervised personally by Dr. Vandana Mishra (BSc, PDNYSc, FNC), one of Lucknow's most qualified and experienced naturopathy practitioners. With 29+ years of clinical experience and thousands of successful treatments, Dr. Mishra brings unparalleled expertise to your healing journey.",
    icon: UserCheck,
  },
  {
    title: "Comprehensive Multi-Therapy Approach",
    description: "Unlike single-modality centers, we integrate 8+ natural healing therapies including naturopathy, yoga, physiotherapy, acupressure, magnet therapy, nutrition counseling, meditation, and lifestyle management for complete holistic healing.",
    icon: Leaf,
  },
  {
    title: "Proven Results - 10,000+ Satisfied Patients",
    description: "Our 4.7-star rating across 260+ patient reviews and over 10,000 successful treatments demonstrate real, measurable results. Patients report significant symptom relief, reduced medication dependency, and sustained health improvements.",
    icon: Users,
  },
  {
    title: "100% Natural & Drug-Free Treatments",
    description: "Every treatment at Kanchankaya is completely natural with zero pharmaceutical medications, chemicals, or invasive procedures. We activate your body's inherent healing capabilities through natural therapeutic interventions.",
    icon: Heart,
  },
  {
    title: "Personalized Treatment Plans",
    description: "No two patients are alike. We conduct thorough health assessments and create completely customized treatment protocols tailored to your specific condition, health history, lifestyle, and wellness goals.",
    icon: Star,
  },
  {
    title: "Convenient Lucknow Location",
    description: "Centrally located in Krishna Nagar, Alambagh, easily accessible from all parts of Lucknow including Gomti Nagar, Indira Nagar, Hazratganj, Aliganj, and surrounding areas. Ample parking available.",
    icon: MapPin,
  },
  {
    title: "Affordable Natural Healthcare",
    description: "High-quality naturopathy treatments at transparent, affordable pricing. We believe everyone deserves access to natural healing. Flexible payment options and treatment packages available.",
    icon: BadgeIndianRupee,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-green-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
            Why Kanchankaya is Lucknow&apos;s #1 Choice for Naturopathy Treatment
          </h2>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Experience the difference of authentic, expert-led natural healing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {REASONS.map((reason, index) => (
            <div
              key={index}
              className="bg-green-800/50 p-6 rounded-xl border border-green-700/50 hover:bg-green-800 transition-colors"
            >
              <div className="h-12 w-12 bg-green-700 rounded-lg flex items-center justify-center text-green-100 mb-4">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-green-100 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
