import { MapPin } from "lucide-react";

export function LocalSEO() {
  const areas = [
    { title: "Naturopathy in Alambagh", desc: "Primary natural healing destination for Alambagh residents." },
    { title: "Best Naturopathy in Gomti Nagar", desc: "Trusted by Gomti Nagar residents for expert care." },
    { title: "Clinic Near Indira Nagar", desc: "Easy access via Kanpur Road for Indira Nagar patients." },
    { title: "Center in Krishna Nagar", desc: "Premier facility serving local residents since 1996." },
  ];

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Naturopathy Treatment Near You in Lucknow</h2>
          <p className="text-gray-600">Conveniently serving patients from all major areas.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, i) => (
            <div key={i} className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:border-green-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-green-600" />
                <h3 className="font-bold text-gray-900 text-sm">{area.title}</h3>
              </div>
              <p className="text-sm text-gray-500">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
