import Link from "next/link";
import { ArrowRight, Leaf, Activity, UserCheck, Heart } from "lucide-react";

const SERVICES = [
  {
    title: "Naturopathy Healing",
    description: "Hydrotherapy, mud therapy, and detox treatments for complete body purification.",
    icon: Leaf,
    href: "/services#naturopathy",
  },
  {
    title: "Chronic Pain Management",
    description: "Effective drug-free relief for arthritis, back pain, cervical spondylitis, and sciatica.",
    icon: Activity,
    href: "/services#pain-management",
  },
  {
    title: "Therapeutic Yoga",
    description: "Medical yoga specifically designed for disease management and rehabilitation.",
    icon: UserCheck,
    href: "/services#yoga",
  },
  {
    title: "Lifestyle Management",
    description: "Integrated programs for diabetes, obesity, hypertension, and stress disorders.",
    icon: Heart,
    href: "/services#lifestyle",
  },
];

export function ServicesSummary() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl mb-4">
            Comprehensive Naturopathy Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Natural healing for every health need. Personalized treatments combining ancient wisdom with modern science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-green-200 hover:-translate-y-1"
            >
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-700 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {service.description}
              </p>
              <span className="inline-flex items-center text-sm font-semibold text-green-600 group-hover:text-green-700">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-lg border-2 border-green-600 px-8 py-3 text-base font-semibold text-green-700 transition-colors hover:bg-green-50"
          >
            View All Treatments
          </Link>
        </div>
      </div>
    </section>
  );
}
