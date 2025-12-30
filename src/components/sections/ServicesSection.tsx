import Link from "next/link";
import { ArrowRight, Leaf, Activity, UserCheck, Heart, Stethoscope, Utensils, Smile, User } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Naturopathy Healing",
      icon: Leaf,
      description: "Hydrotherapy, mud therapy, and detox treatments.",
      bg: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      title: "Chronic Pain Relief",
      icon: Activity,
      description: "Drug-free relief for arthritis, back pain & joints.",
      bg: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Therapeutic Yoga",
      icon: UserCheck,
      description: "Medical yoga therapy for rehabilitation.",
      bg: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      title: "Acupressure",
      icon: Heart,
      description: "Stimulate healing points for pain relief.",
      bg: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      title: "Physiotherapy",
      icon: Stethoscope,
      description: "Rehabilitation for injuries and stroke recovery.",
      bg: "bg-teal-50",
      iconColor: "text-teal-600"
    },
    {
      title: "Diet Counseling",
      icon: Utensils,
      description: "Personalized nutrition for disease management.",
      bg: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      title: "Lifestyle Mgmt",
      icon: Smile,
      description: "Manage diabetes, BP, obesity naturally.",
      bg: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      title: "Women's Health",
      icon: User,
      description: "PCOD/PCOS, hormonal balance & pregnancy.",
      bg: "bg-pink-50",
      iconColor: "text-pink-600"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="services">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive natural healing therapies tailored to your needs.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll / Desktop: Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center h-full"
            >
              <div className={`h-14 w-14 rounded-full ${service.bg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                <service.icon className={`h-7 w-7 ${service.iconColor}`} />
              </div>

              <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                {service.title}
              </h3>

              <p className="text-xs md:text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
                {service.description}
              </p>

              <div className="mt-auto opacity-0 transform translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                 <span className="text-xs font-semibold text-green-700 flex items-center gap-1">
                   Learn more <ArrowRight className="h-3 w-3" />
                 </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-xl border border-green-200 bg-green-50 px-8 py-3 text-sm font-semibold text-green-800 transition-all hover:bg-green-100 hover:shadow-md"
          >
            View All Treatments <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
