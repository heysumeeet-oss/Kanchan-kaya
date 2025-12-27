import { ClipboardList, FileText, Activity, LineChart, HeartHandshake } from "lucide-react";

export function TreatmentProcess() {
  const steps = [
    {
      title: "Initial Consultation & Assessment",
      description: "Dr. Vandana Mishra conducts a comprehensive 30-45 min health assessment including medical history, lifestyle evaluation, and physical examination.",
      icon: ClipboardList,
    },
    {
      title: "Personalized Treatment Plan",
      description: "We create a customized protocol tailored to your specific condition, including therapy schedule, diet plan, and expected timeline.",
      icon: FileText,
    },
    {
      title: "Treatment Implementation",
      description: "Begin your healing journey with guided sessions (hydrotherapy, mud therapy, yoga, etc.) under expert supervision.",
      icon: Activity,
    },
    {
      title: "Regular Progress Monitoring",
      description: "Continuous monitoring through check-ins, symptom tracking, and plan adjustments to ensure optimal results.",
      icon: LineChart,
    },
    {
      title: "Sustainable Wellness",
      description: "Maintenance protocols, home care guidance, and lifestyle coaching for lasting health improvements.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-20 bg-green-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl mb-6">
            Your Healing Journey at Kanchankaya
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Understanding your treatment process helps you feel comfortable and confident. Here&apos;s what to expect.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-green-200 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse text-right md:text-left'} md:justify-between flex-col md:flex-row text-center md:text-left`}>

                {/* Number Bubble (Desktop Center) */}
                <div className="absolute left-[50%] top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-green-600 border-4 border-green-100 flex items-center justify-center text-white font-bold z-10 hidden md:flex shadow-lg">
                  {index + 1}
                </div>

                {/* Content Side */}
                <div className={`w-full md:w-[45%] ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                  <div className={`bg-white p-6 rounded-2xl shadow-sm border border-green-100 inline-block w-full hover:shadow-md transition-shadow`}>
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} justify-center md:justify-start`}>
                       <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                         <step.icon className="h-6 w-6" />
                       </div>
                       <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
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
