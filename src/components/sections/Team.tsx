import { Award, GraduationCap, Clock } from "lucide-react";
// import Image from "next/image"; // Commented out until we have actual images

export function Team() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl mb-4">
            Meet Dr. Vandana Mishra & Our Expert Naturopathy Team in Lucknow
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to your holistic wellness journey.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-green-100 relative min-h-[400px]">
               {/* Placeholder for Dr. Vandana's Image */}
               <div className="absolute inset-0 flex items-center justify-center text-green-800/20 text-4xl font-bold p-4 text-center">
                 Dr. Vandana Mishra
               </div>
               {/* <Image src="/path/to/image.jpg" alt="Dr. Vandana Mishra" fill className="object-cover" /> */}
            </div>

            <div className="md:col-span-3 p-8 md:p-12 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-green-900 mb-2">Dr. Vandana Mishra</h3>
                <p className="text-lg text-green-700 font-medium">Founder & Chief Naturopathy Practitioner</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Experience</p>
                    <p className="font-semibold text-gray-900">29+ Years (Since 1996)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Qualifications</p>
                    <p className="font-semibold text-gray-900 text-sm">BSc, PDNYSc, FNC</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  Dr. Vandana Mishra is Lucknow&apos;s most experienced and respected naturopathy practitioner, bringing 29+ years of dedicated service to natural healing and holistic wellness. As the founder of Kanchankaya Naturopathy Center established in 1996, Dr. Mishra has personally treated over 10,000 patients and transformed countless lives through authentic, evidence-based naturopathy treatments.
                </p>
                <p>
                  She specializes in treating chronic pain management and arthritis, diabetes and metabolic disorders, obesity and weight management, stress and mental wellness, women&apos;s health issues including PCOD/PCOS, digestive system disorders, cardiovascular health, and lifestyle disease management.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-green-600" />
                  Supported By A Professional Team
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                   {[
                     {role: "Certified Yoga Therapists", desc: "Specialized in healing yoga"},
                     {role: "Trained Physiotherapists", desc: "Expert manual therapy"},
                     {role: "Acupressure Specialists", desc: "Traditional pressure point therapy"},
                     {role: "Nutrition Counselors", desc: "Personalized diet plans"}
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-2">
                       <div className="h-2 w-2 rounded-full bg-green-400"></div>
                       <div>
                         <span className="font-semibold text-gray-800 text-sm block">{item.role}</span>
                       </div>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
