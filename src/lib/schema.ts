export const JSON_LD_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "MedicalBusiness"],
      "name": "Kanchankaya Naturopathy Center",
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
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "261"
      },
      "priceRange": "$$",
      "medicalSpecialty": ["Naturopathy", "Alternative Medicine", "Holistic Wellness"],
      "acceptsNewPatients": true
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
      "description": "Premier naturopathy center in Lucknow providing holistic healing through natural therapies since 1996"
    },
    {
      "@type": ["Person", "Physician"],
      "name": "Dr. Vandana Mishra",
      "jobTitle": "Founder & Chief Naturopathy Practitioner",
      "description": "Founder of Kanchankaya Naturopathy Center with 29+ years of experience.",
      "worksFor": {
        "@type": "Organization",
        "name": "Kanchankaya Naturopathy Center"
      }
    }
  ]
};
