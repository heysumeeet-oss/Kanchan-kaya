import { MapPin } from "lucide-react";

export function LocalSEO() {
  const areas = [
    {
      title: "Naturopathy Center in Alambagh, Lucknow",
      desc: "Located in the heart of Alambagh's Krishna Nagar area, Kanchankaya Naturopathy Center serves as the primary natural healing destination for residents of Alambagh and surrounding localities. Our convenient location at 30-A Ashutosh Nagar makes us easily accessible from all parts of South Lucknow."
    },
    {
      title: "Best Naturopathy in Gomti Nagar",
      desc: "Gomti Nagar residents seeking authentic naturopathy treatments trust Kanchankaya for expert care. Just a 20-minute drive from Gomti Nagar, our center provides comprehensive natural healing services including yoga therapy, physiotherapy, acupressure, and holistic wellness programs."
    },
    {
      title: "Naturopathy Clinic Near Indira Nagar, Lucknow",
      desc: "Patients from Indira Nagar and nearby areas choose Kanchankaya for its proven track record of 29 years and expert naturopathy treatments. We're conveniently located and easily reachable via Kanpur Road."
    },
    {
      title: "Natural Healing Center in Krishna Nagar",
      desc: "As Krishna Nagar's premier naturopathy facility, Kanchankaya has been serving local residents since 1996 with drug-free, natural treatments for diabetes, arthritis, obesity, chronic pain, and all lifestyle diseases."
    },
    {
      title: "Yoga & Naturopathy in Hazratganj Area",
      desc: "Central Lucknow residents including those from Hazratganj, Chowk, and Aminabad areas have been visiting Kanchankaya for nearly three decades for therapeutic yoga, meditation, and comprehensive naturopathy care."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Naturopathy Treatment Near You in Lucknow
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
             We are committed to making natural healing accessible to everyone in Lucknow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-green-300 hover:shadow-md transition-all">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <h3 className="font-bold text-gray-900 text-base">{area.title}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed pl-8">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
