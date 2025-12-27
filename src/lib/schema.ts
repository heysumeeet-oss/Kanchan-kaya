import { FAQS } from "./constants";

export const JSON_LD_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "MedicalBusiness"],
      "name": "Kanchankaya Naturopathy Center",
      "image": "https://mrsvandanamishra.whitecoats.com/images/logo.png", // Placeholder, adjust if real image available
      "founder": {
        "@type": "Person",
        "name": "Dr. Vandana Mishra"
      },
      "foundingDate": "1996",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "30-A, Ashutosh Nagar, Krishna Nagar, Alambagh",
        "addressLocality": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "226005",
        "addressCountry": "IN"
      },
      "telephone": "+91-9935364157",
      "email": "vandana.kaya@gmail.com",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.8467", // Approximate coordinates for Lucknow/Alambagh
        "longitude": "80.9462" // Needs exact from Google Business if available
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "261"
      },
      "priceRange": "$$",
      "medicalSpecialty": ["Naturopathy", "Alternative Medicine", "Holistic Wellness"],
      "servicesOffered": [
        "Naturopathy Healing Therapies",
        "Chronic Pain Management",
        "Therapeutic Yoga & Meditation",
        "Acupressure & Magnet Therapy",
        "Physiotherapy & Rehabilitation",
        "Diet & Nutrition Counseling",
        "Lifestyle Management",
        "Women's Health & Wellness"
      ],
      "acceptsNewPatients": true,
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "08:00",
          "closes": "20:00"
        }
      ],
      "areaServed": [
        "Lucknow",
        "Gomti Nagar",
        "Indira Nagar",
        "Alambagh",
        "Krishna Nagar"
      ]
    },
    {
      "@type": "Organization",
      "name": "Kanchankaya Naturopathy Center",
      "alternateName": ["Kanchankaya Wellness Village", "Kanchan Kaya Naturopathy"],
      "founder": {
        "@type": "Person",
        "name": "Dr. Vandana Mishra"
      },
      "foundingDate": "1996",
      "description": "Premier naturopathy center in Lucknow providing holistic healing through natural therapies since 1996",
      // "sameAs": [
      //   "https://www.facebook.com/kanchankaya",
      //   "https://www.instagram.com/kanchankaya"
      // ]
    },
    {
      "@type": ["Person", "Physician"],
      "name": "Dr. Vandana Mishra",
      "jobTitle": "Founder & Chief Naturopathy Practitioner",
      "description": "Founder of Kanchankaya Naturopathy Center with 29+ years of experience.",
      "worksFor": {
        "@type": "Organization",
        "name": "Kanchankaya Naturopathy Center"
      },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "BSc"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Post Diploma in Naturopathy & Yogic Sciences (PDNYSc)"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Fellowship in Naturopathy & Clinical Yoga (FNC)"
        }
      ],
      "knowsAbout": ["Naturopathy", "Yoga Therapy", "Acupressure"]
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]
};
