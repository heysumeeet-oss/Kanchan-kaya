import { MapPin, Droplets, BedDouble, Dumbbell, Flower2, CircleOff, Sparkles } from "lucide-react";

export function Facility() {
  const facilities = [
    { name: "Hydrotherapy Unit", icon: Droplets, desc: "Equipped with facilities for various water therapy treatments including hot and cold baths, steam baths, sitz baths, immersion baths, and specialized hydrotherapy applications." },
    { name: "Mud Therapy Area", icon: CircleOff, desc: "Dedicated space for therapeutic mud treatments using clean, mineral-rich mud applications. Our mud therapy facilities allow for full body mud baths and localized packs." },
    { name: "Yoga & Meditation Hall", icon: Flower2, desc: "Spacious, well-ventilated yoga hall with natural lighting and peaceful ambiance ideal for therapeutic yoga sessions, meditation practices, and pranayama exercises." },
    { name: "Physiotherapy Department", icon: Dumbbell, desc: "Modern physiotherapy unit equipped with ultrasound therapy machines, interferential therapy (IFT), TENS units, traction equipment, and manual therapy tables." },
    { name: "Acupressure Treatment Rooms", icon: BedDouble, desc: "Private treatment rooms designed for acupressure and magnet therapy sessions, ensuring patient comfort and privacy during treatments." },
    { name: "Hygienic & Safe Environment", icon: Sparkles, desc: "We maintain the highest standards of cleanliness. All equipment is regularly sanitized, fresh linens provided, and safety protocols strictly followed." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl mb-4">
                World-Class Naturopathy Facility in Krishna Nagar, Lucknow
              </h2>
              <div className="w-20 h-1.5 bg-green-500 rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kanchankaya Naturopathy Center is Lucknow&apos;s premier natural healing facility, thoughtfully designed to provide a peaceful, healing environment that supports your wellness journey. Located in the convenient Krishna Nagar area of Alambagh, our center combines traditional naturopathy wisdom with modern comfort and hygiene standards.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
              {facilities.map((facility, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0 mt-1">
                    <facility.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{facility.name}</h4>
                    <p className="text-xs text-gray-600 leading-snug">{facility.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-center gap-3">
               <MapPin className="h-6 w-6 text-green-600 shrink-0" />
               <p className="text-sm text-green-800 font-medium">
                 Easily accessible from Gomti Nagar, Indira Nagar, Hazratganj, and all parts of Lucknow. Ample parking available.
               </p>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[600px] bg-green-50 rounded-3xl overflow-hidden border border-green-100 shadow-xl">
             {/* Placeholder for Facility Image */}
             <div className="absolute inset-0 flex items-center justify-center text-center p-8 text-green-800/20 text-4xl font-bold bg-gradient-to-br from-green-50 to-green-100">
               Peaceful Healing Environment <br />
               <span className="text-xl mt-4 opacity-70">Designed for Relaxation & Wellness</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
