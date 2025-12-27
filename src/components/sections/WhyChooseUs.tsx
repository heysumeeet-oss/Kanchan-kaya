import { Star, ShieldCheck, Heart, Users, Leaf, UserCheck, MapPin, BadgePercent } from "lucide-react";

const REASONS = [
  {
    title: "Lucknow's Oldest & Most Trusted",
    description: "Established in 1996, we are Lucknow's pioneer naturopathy center with an unmatched 29-year legacy.",
    icon: ShieldCheck,
  },
  {
    title: "Expert-Led by Dr. Vandana Mishra",
    description: "Treatments supervised personally by Dr. Vandana Mishra (BSc, PDNYSc, FNC) with 29+ years experience.",
    icon: UserCheck,
  },
  {
    title: "Comprehensive Multi-Therapy Approach",
    description: "We integrate 8+ natural healing therapies including yoga, physiotherapy, acupressure, and nutrition.",
    icon: Leaf,
  },
  {
    title: "Proven Results - 10,000+ Patients",
    description: "4.7-star rating across 260+ reviews and thousands of successful treatments demonstrate real results.",
    icon: Users,
  },
  {
    title: "100% Natural & Drug-Free",
    description: "Every treatment is completely natural with zero pharmaceutical medications or side effects.",
    icon: Heart,
  },
  {
    title: "Personalized Treatment Plans",
    description: "We create completely customized protocols tailored to your specific condition and health history.",
    icon: Star,
  },
  {
    title: "Convenient Lucknow Location",
    description: "Centrally located in Krishna Nagar, Alambagh, easily accessible from all parts of Lucknow.",
    icon: MapPin,
  },
  {
    title: "Affordable Natural Healthcare",
    description: "High-quality treatments at transparent prices. Flexible packages available.",
    icon: BadgePercent,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-green-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
            Why Choose Kanchankaya Naturopathy
          </h2>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Lucknow&apos;s #1 Choice for Authentic Natural Healing
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
              <h3 className="text-lg font-bold text-white mb-2">
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
