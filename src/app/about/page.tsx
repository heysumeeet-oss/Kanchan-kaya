import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Kanchankaya Naturopathy Center | Dr. Vandana Mishra",
  description: "Learn about Lucknow's oldest naturopathy center established in 1996 by Dr. Vandana Mishra. Expert natural healing team with 29+ years of experience.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-green-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-extrabold text-green-900 sm:text-5xl mb-6">
            About Kanchankaya
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Lucknow&apos;s Premier Naturopathy & Natural Healing Center. Serving the community with authentic, evidence-based treatments since 1996.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-green-900 mb-6">Our Legacy of Healing</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Kanchankaya Naturopathy Center stands as Lucknow&apos;s oldest and most respected naturopathy treatment center, established in 1996 by Dr. Vandana Mishra. Located in Krishna Nagar, Alambagh, we have been serving the people of Lucknow for nearly three decades with authentic, evidence-based naturopathy treatments that address the root causes of illness rather than just symptoms.
                </p>
                <p>
                  Our naturopathy center in Lucknow specializes in treating chronic health conditions including arthritis, diabetes, obesity, hypertension, cervical and lumbar spondylitis, digestive disorders, stress-related ailments, hormonal imbalances, and lifestyle diseases through completely natural, drug-free healing modalities.
                </p>
                <p>
                  We integrate ancient naturopathy principles with modern wellness science to deliver personalized treatment plans tailored to each patient&apos;s unique health needs.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl h-[400px] flex items-center justify-center text-gray-400">
               {/* Image Placeholder */}
               <span className="text-lg">Clinic/Facility Image</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="order-2 lg:order-1 bg-gray-100 rounded-2xl h-[400px] flex items-center justify-center text-gray-400">
               {/* Image Placeholder */}
               <span className="text-lg">Dr. Vandana Mishra Image</span>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-green-900 mb-6">Meet Dr. Vandana Mishra</h2>
              <h3 className="text-xl font-semibold text-green-700 mb-4">Founder & Chief Naturopathy Practitioner</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Dr. Vandana Mishra brings 29+ years of dedicated experience in naturopathy and yogic sciences to every patient consultation. Holding qualifications in BSc, Post Diploma in Naturopathy & Yogic Sciences (PDNYSc), and Fellowship in Naturopathy & Clinical Yoga (FNC), Dr. Mishra has successfully treated thousands of patients in Lucknow and beyond.
                </p>
                <p>
                  Her compassionate, patient-centric approach combined with deep knowledge of natural healing therapies has earned Kanchankaya its reputation as the best naturopathy center in Lucknow.
                </p>
                <ul className="grid grid-cols-2 gap-4 mt-6">
                    {["29+ Years Experience", "PDNYSc & FNC Qualified", "10,000+ Patients Treated", "Expert in Chronic Diseases"].map((item, i) => (
                         <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-800">
                            <span className="h-2 w-2 rounded-full bg-green-500" />
                            {item}
                        </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Philosophy */}
      <section className="bg-green-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
           <h2 className="text-3xl font-bold mb-8">Our Holistic Treatment Philosophy</h2>
           <p className="text-lg text-green-100 leading-relaxed mb-8">
             We believe in treating the whole person - body, mind, and spirit - not just isolated symptoms. Our integrated approach combines multiple natural healing modalities including naturopathy treatments, therapeutic yoga sessions, acupressure therapy, magnet therapy, physiotherapy rehabilitation, and personalized nutrition counseling.
           </p>
           <p className="text-lg text-green-100 leading-relaxed">
             This comprehensive methodology delivers sustainable, long-term health improvements without dependency on pharmaceutical medications or invasive procedures.
           </p>
        </div>
      </section>
    </div>
  );
}
