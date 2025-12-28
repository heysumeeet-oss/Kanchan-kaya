import { CheckCircle2, Leaf, Heart, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-4 md:px-6">

        {/* Main Heading and Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-green-950 leading-tight">
              About Kanchankaya - Lucknow&apos;s Premier Naturopathy & Natural Healing Center
            </h2>
            <div className="w-20 h-1.5 bg-green-500 rounded-full"></div>

            <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                Kanchankaya Naturopathy Center stands as Lucknow&apos;s oldest and most respected naturopathy treatment center, established in 1996 by Dr. Vandana Mishra. Located in Krishna Nagar, Alambagh, we have been serving the people of Lucknow for nearly three decades with authentic, evidence-based naturopathy treatments that address the root causes of illness rather than just symptoms.
              </p>
              <p>
                Our naturopathy center in Lucknow specializes in treating chronic health conditions including arthritis, diabetes, obesity, hypertension, cervical and lumbar spondylitis, digestive disorders, stress-related ailments, hormonal imbalances, and lifestyle diseases through completely natural, drug-free healing modalities. We integrate ancient naturopathy principles with modern wellness science to deliver personalized treatment plans tailored to each patient&apos;s unique health needs.
              </p>
            </div>

            <div className="pt-6">
               <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                 <Leaf className="h-5 w-5 text-green-600" />
                 What Sets Kanchankaya Naturopathy Lucknow Apart:
               </h3>
               <p className="text-gray-700 mb-4">
                 At our Lucknow naturopathy clinic, we practice authentic five-element therapy (Panchmahabhuta Chikitsa) utilizing the healing powers of earth, water, fire, air, and space. Our treatments are rooted in the fundamental naturopathy principle that the human body possesses inherent self-healing capabilities when provided with the right natural environment and stimuli.
               </p>
               <p className="text-gray-700">
                 Unlike conventional medical approaches that often mask symptoms with medications, naturopathy treatment at Kanchankaya addresses the underlying causes of disease. We employ therapeutic fasting, hydrotherapy, mud therapy, chromotherapy (color therapy), magnetotherapy, acupressure therapy, yoga therapy, dietary counseling, and lifestyle modification programs to restore the body&apos;s natural balance.
               </p>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="space-y-8">
             {/* Dr. Vandana Mishra Card */}
            <div className="bg-green-50 p-6 md:p-8 rounded-2xl border border-green-100 shadow-sm relative">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Award className="h-24 w-24 text-green-800" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-4">
                Dr. Vandana Mishra <br />
                <span className="text-base font-medium text-green-700">Leading Naturopathy Expert in Lucknow</span>
              </h3>
              <p className="text-gray-700 mb-4 relative z-10">
                Dr. Vandana Mishra brings 29+ years of dedicated experience in naturopathy and yogic sciences to every patient consultation. Holding qualifications in BSc, Post Diploma in Naturopathy & Yogic Sciences (PDNYSc), and Fellowship in Naturopathy & Clinical Yoga (FNC), Dr. Mishra has successfully treated thousands of patients in Lucknow and beyond. Her compassionate, patient-centric approach combined with deep knowledge of natural healing therapies has earned Kanchankaya its reputation as the best naturopathy center in Lucknow.
              </p>
              <div className="inline-flex items-center gap-2 font-semibold text-green-800">
                <CheckCircle2 className="h-5 w-5" />
                <span>Founder & Chief Practitioner</span>
              </div>
            </div>

            {/* Holistic Philosophy Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-green-600" />
                Our Holistic Treatment Philosophy:
              </h3>
              <p className="text-gray-600 mb-6">
                We believe in treating the whole person - body, mind, and spirit - not just isolated symptoms. Our integrated approach combines multiple natural healing modalities including naturopathy treatments, therapeutic yoga sessions, acupressure therapy, magnet therapy, physiotherapy rehabilitation, and personalized nutrition counseling. This comprehensive methodology delivers sustainable, long-term health improvements without dependency on pharmaceutical medications or invasive procedures.
              </p>

              <div className="border-t border-gray-100 pt-6 mt-6">
                <h4 className="font-bold text-gray-900 mb-3">Proven Results & Patient Success:</h4>
                 <p className="text-sm text-gray-600">
                   With over 10,000 successful treatments and a consistent 4.7-star rating across 260+ patient reviews, Kanchankaya Naturopathy Center has established itself as the go-to naturopathy clinic for Lucknow residents seeking genuine natural healing solutions. Our patients report significant improvements in chronic pain conditions, complete recovery from lifestyle diseases, successful weight management, enhanced energy levels, better stress management, and overall quality of life improvements.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
