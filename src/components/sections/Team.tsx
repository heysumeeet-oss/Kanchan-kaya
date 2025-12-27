import { Award, GraduationCap, Clock } from "lucide-react";
// import Image from "next/image"; // Commented out until we have actual images

export function Team() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to your holistic wellness journey.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-green-100 relative min-h-[400px]">
               {/* Placeholder for Dr. Vandana's Image */}
               <div className="absolute inset-0 flex items-center justify-center text-green-800/20 text-4xl font-bold">
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
                  <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Experience</p>
                    <p className="font-semibold text-gray-900">29+ Years</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Founded</p>
                    <p className="font-semibold text-gray-900">1996</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Dr. Vandana Mishra is Lucknow&apos;s most experienced naturopathy practitioner. With qualifications in BSc, Post Diploma in Naturopathy & Yogic Sciences (PDNYSc), and Fellowship in Naturopathy & Clinical Yoga (FNC), she has personally treated over 10,000 patients.
                </p>
                <p>
                  She specializes in chronic pain, diabetes, obesity, and women&apos;s health, believing in treating the whole person—body, mind, and spirit.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-green-600" />
                  Supported By A Professional Team
                </h4>
                <div className="flex flex-wrap gap-2">
                   {["Certified Yoga Therapists", "Physiotherapists", "Acupressure Specialists", "Nutrition Counselors"].map((role, i) => (
                     <span key={i} className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
                       {role}
                     </span>
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
