export function AboutSummary() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl mb-4">
            About Kanchankaya - Lucknow&apos;s Premier Naturopathy Center
          </h2>
          <p className="text-lg text-gray-600">
            Providing holistic healing through natural therapies since 1996.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Kanchankaya Naturopathy Center stands as Lucknow&apos;s oldest and most respected naturopathy treatment center, established in 1996 by Dr. Vandana Mishra. Located in Krishna Nagar, Alambagh, we have been serving the people of Lucknow for nearly three decades.
            </p>
            <p>
              We specialize in treating chronic health conditions including arthritis, diabetes, obesity, hypertension, cervical spondylitis, and lifestyle diseases through completely natural, drug-free healing modalities.
            </p>
            <p className="font-semibold text-green-800">
              Unlike conventional medical approaches that often mask symptoms, our treatments address the underlying causes of disease to restore your body&apos;s natural balance.
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-2xl border border-green-100 shadow-sm">
            <h3 className="text-xl font-bold text-green-900 mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              {[
                "Lucknow's Oldest Naturopathy Center (Since 1996)",
                "Led by Dr. Vandana Mishra (29+ Years Exp)",
                "100% Natural & Drug-Free Treatments",
                "Proven Results with 10,000+ Patients",
                "Comprehensive Multi-Therapy Approach"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-200 flex items-center justify-center text-green-700 text-sm font-bold">✓</div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
