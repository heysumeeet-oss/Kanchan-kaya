import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Naturopathy Services & Treatments in Lucknow | Kanchankaya",
  description: "Comprehensive natural healing services including naturopathy, yoga therapy, acupressure, physiotherapy, and diet counseling in Lucknow.",
};

const SERVICES_LIST = [
  {
    id: "naturopathy",
    title: "Naturopathy Healing Therapies",
    description: "Complete body detoxification using hydrotherapy, mud therapy, fasting, and massage.",
    image: "/images/services/naturopathy.jpg",
    details: [
      "Hydrotherapy (Water Therapy)",
      "Mud Therapy (Detoxification)",
      "Chromotherapy (Color Healing)",
      "Therapeutic Fasting",
      "Massage Therapy"
    ]
  },
  {
    id: "pain-management",
    title: "Chronic Pain Management",
    description: "Drug-free solutions for arthritis, back pain, cervical spondylitis, and migraines.",
    image: "/images/services/pain-management.jpg",
    details: [
      "Hot/Cold Fomentation",
      "Therapeutic Massage",
      "Acupressure Points",
      "Postural Correction",
      "Anti-inflammatory Diet"
    ]
  },
  {
    id: "yoga",
    title: "Therapeutic Yoga & Meditation",
    description: "Personalized medical yoga programs for specific health conditions and rehabilitation.",
    image: "/images/services/yoga.jpg",
    details: [
      "Yoga for Arthritis",
      "Diabetes Management Yoga",
      "Prenatal & Postnatal Yoga",
      "Pranayama & Breathing",
      "Guided Meditation"
    ]
  },
  {
    id: "acupressure",
    title: "Acupressure & Magnet Therapy",
    description: "Stimulating specific pressure points to activate the body's natural healing mechanisms.",
    image: "/images/services/acupressure.jpg",
    details: [
      "Pain Relief Points",
      "Digestive Health Points",
      "Magnet Therapy",
      "Energy Flow Balancing",
      "Stress Reduction"
    ]
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy & Rehabilitation",
    description: "Expert physical therapy for musculoskeletal conditions and post-injury recovery.",
    image: "/images/services/physiotherapy.jpg",
    details: [
      "Manual Therapy",
      "Therapeutic Exercises",
      "Ultrasound Therapy",
      "TENS & IFT",
      "Post-Stroke Rehab"
    ]
  },
  {
    id: "diet",
    title: "Diet & Nutrition Counseling",
    description: "Personalized diet plans for diabetes, weight loss, and overall wellness.",
    image: "/images/services/diet.jpg",
    details: [
      "Diabetes Diet Plans",
      "Weight Loss Programs",
      "Detox Diets",
      "Therapeutic Nutrition",
      "Lifestyle Coaching"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="bg-green-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-extrabold text-green-900 sm:text-5xl mb-6">
            Our Treatments & Services
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Lucknow&apos;s most comprehensive range of natural healing treatments. Each program is personalized to your specific health condition.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:gap-16">
            {SERVICES_LIST.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span className="text-gray-700 font-medium">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center font-semibold text-green-700 hover:text-green-800 transition-colors"
                  >
                    Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                <div className={`relative h-[300px] rounded-2xl overflow-hidden shadow-lg ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    title={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
