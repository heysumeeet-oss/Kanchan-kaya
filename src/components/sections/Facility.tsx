import { MapPin, Droplets, BedDouble, Dumbbell, Flower2 } from "lucide-react";

export function Facility() {
  const facilities = [
    { name: "Hydrotherapy Unit", icon: Droplets, desc: "Hot/cold baths, steam baths, sitz baths." },
    { name: "Mud Therapy Area", icon: MapPin, desc: "Hygienic space for mineral-rich mud applications." },
    { name: "Yoga & Meditation Hall", icon: Flower2, desc: "Spacious, peaceful hall for therapeutic sessions." },
    { name: "Physiotherapy Dept", icon: Dumbbell, desc: "Equipped with IFT, TENS, Ultrasound & traction." },
    { name: "Private Treatment Rooms", icon: BedDouble, desc: "Comfortable rooms for acupressure & massage." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl">
              World-Class Naturopathy Facility in Lucknow
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Located in the convenient Krishna Nagar area of Alambagh, our center combines traditional naturopathy wisdom with modern comfort and hygiene standards. We maintain the highest standards of cleanliness and safety.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {facilities.map((facility, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0 mt-1">
                    <facility.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{facility.name}</h4>
                    <p className="text-sm text-gray-600">{facility.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[400px] bg-green-50 rounded-3xl overflow-hidden border border-green-100 shadow-xl">
             {/* Placeholder for Facility Image */}
             <div className="absolute inset-0 flex items-center justify-center text-green-800/20 text-4xl font-bold bg-gradient-to-br from-green-50 to-green-100">
               Peaceful Healing Environment
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
