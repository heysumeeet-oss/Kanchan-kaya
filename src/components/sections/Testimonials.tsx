export function Testimonials() {
  const testimonials = [
    {
      text: "I was suffering from severe rheumatoid arthritis... After just one month of naturopathy, physiotherapy, and acupressure treatment at Kanchankaya, I can walk again and heal myself without any side effects.",
      author: "Verified Patient",
      condition: "Arthritis Relief"
    },
    {
      text: "My wife had acute spondylosis... At Kanchankaya, Dr. Vandana and Dr. Satyendra Mishra treated her with a combination of acupressure, yoga, and naturopathy. In just 10 days, she felt much relieved.",
      author: "Verified Patient",
      condition: "Spine & Back Pain"
    },
    {
      text: "I joined Kanchankaya two months back with loss of lumbar curvature and chronic back pain. Due to natural therapy and yoga sessions, my pain is now mild. This is the best naturopathy center in Lucknow.",
      author: "Verified Patient",
      location: "Krishna Nagar",
      condition: "Chronic Back Pain"
    }
  ];

  return (
    <section className="py-20 bg-green-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Patient Success Stories
          </h2>
          <p className="text-green-100 max-w-2xl mx-auto text-lg">
            Read genuine testimonials from patients who have experienced transformative healing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-green-800/50 p-8 rounded-2xl border border-green-700 relative backdrop-blur-sm">
              <div className="text-4xl text-green-400 font-serif absolute top-4 left-6">&ldquo;</div>
              <div className="relative z-10">
                <p className="text-lg text-green-50 mb-6 italic pt-4">
                  {t.text}
                </p>
                <div>
                  <div className="font-bold text-white">{t.author}</div>
                  <div className="text-green-300 text-sm">
                    {t.location && `${t.location} • `}{t.condition}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-green-200 mb-6">
            Join thousands of satisfied patients who have transformed their health naturally.
          </p>
          <a
            href="tel:+919935364157"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-bold text-green-900 shadow-lg transition-transform hover:scale-105"
          >
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
