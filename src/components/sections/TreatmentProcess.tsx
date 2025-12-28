import { ClipboardList, FileText, Activity, LineChart, HeartHandshake } from "lucide-react";

export function TreatmentProcess() {
  const steps = [
    {
      title: "Initial Consultation & Assessment",
      description: "When you first visit Kanchankaya Naturopathy Center in Lucknow, Dr. Vandana Mishra personally conducts a comprehensive health assessment. This includes detailed medical history review, lifestyle evaluation, and physical examination. This typically takes 30-45 minutes to understand the root causes of your health concerns.",
      icon: ClipboardList,
    },
    {
      title: "Personalized Treatment Plan Creation",
      description: "Based on your assessment, we create a completely customized treatment protocol tailored to your specific condition. Your plan will clearly outline prescribed naturopathy therapies, treatment schedule, diet plan, lifestyle modifications, expected timeline, and transparent costs.",
      icon: FileText,
    },
    {
      title: "Treatment Implementation",
      description: "Your healing journey begins with guided sessions at our Lucknow center. Each session includes prescribed therapies administered by trained therapists under supervision, therapeutic yoga, progress monitoring, and dietary guidance. Most patients find the experience deeply relaxing.",
      icon: Activity,
    },
    {
      title: "Regular Progress Monitoring",
      description: "We continuously monitor your progress through regular check-ins with Dr. Vandana Mishra, symptom tracking, and periodic health assessments. This attentive monitoring ensures optimal results and allows us to fine-tune your treatment for maximum effectiveness.",
      icon: LineChart,
    },
    {
      title: "Sustainable Wellness & Maintenance",
      description: "Once you've achieved your initial health goals, we help you maintain long-term wellness through maintenance protocols, home care guidance, and lifestyle coaching. Our goal is sustainable health improvements that enhance your quality of life for years to come.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-20 bg-green-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl mb-6">
            How Naturopathy Treatment Works at Kanchankaya Lucknow - Your Healing Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Understanding your treatment journey helps you feel comfortable and confident. Here&apos;s what to expect when you choose Kanchankaya Naturopathy Center.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-green-200 -translate-x-1/2 hidden md:block"></div>
          {/* Connecting Line (Mobile) */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-200 md:hidden"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex items-center gap-8 md:justify-between flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Number Bubble (Desktop Center) */}
                <div className="absolute left-[50%] top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-green-600 border-4 border-green-100 flex items-center justify-center text-white font-bold z-10 hidden md:flex shadow-lg">
                  {index + 1}
                </div>

                 {/* Number Bubble (Mobile Left) */}
                <div className="absolute left-8 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-green-600 border-4 border-green-100 flex items-center justify-center text-white font-bold z-10 md:hidden shadow-lg">
                  {index + 1}
                </div>

                {/* Content Side */}
                <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`bg-white p-6 rounded-2xl shadow-sm border border-green-100 inline-block w-full hover:shadow-md transition-shadow`}>
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'flex-row'}`}>
                       <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                         <step.icon className="h-6 w-6" />
                       </div>
                       <h3 className="text-xl font-bold text-gray-900 text-left md:text-inherit">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm text-left md:text-inherit">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Empty Side for Spacing */}
                <div className="w-full md:w-[45%] hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
