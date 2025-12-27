import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Treated with Naturopathy in Lucknow | Kanchankaya",
  description: "Natural treatment for arthritis, diabetes, obesity, chronic pain, digestive disorders, and more in Lucknow.",
};

const CONDITIONS = [
  {
    category: "Musculoskeletal & Pain Disorders",
    items: [
      "Arthritis (Osteoarthritis, Rheumatoid Arthritis)",
      "Cervical Spondylitis and Neck Pain",
      "Lumbar Spondylitis and Lower Back Pain",
      "Frozen Shoulder and Joint Stiffness",
      "Sciatica and Nerve Pain",
      "Fibromyalgia",
      "Sports Injuries"
    ]
  },
  {
    category: "Metabolic & Lifestyle Diseases",
    items: [
      "Type 2 Diabetes Mellitus",
      "Obesity and Weight Management",
      "Hypertension (High Blood Pressure)",
      "High Cholesterol",
      "Metabolic Syndrome",
      "Fatty Liver Disease",
      "Thyroid Disorders"
    ]
  },
  {
    category: "Digestive System Disorders",
    items: [
      "Chronic Constipation",
      "Acidity, GERD, and Acid Reflux",
      "Irritable Bowel Syndrome (IBS)",
      "Ulcerative Colitis",
      "Indigestion and Bloating",
      "Liver Detoxification"
    ]
  },
  {
    category: "Stress & Mental Health",
    items: [
      "Chronic Stress and Anxiety",
      "Depression and Mood Disorders",
      "Insomnia and Sleep Disturbances",
      "Migraine and Tension Headaches",
      "Chronic Fatigue Syndrome"
    ]
  },
  {
    category: "Women's Health Issues",
    items: [
      "PCOD/PCOS",
      "Irregular Periods",
      "Menopausal Symptoms",
      "Infertility Support",
      "Pregnancy Wellness",
      "Postnatal Care"
    ]
  }
];

export default function ConditionsPage() {
  return (
    <div className="bg-white">
      <section className="bg-green-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-extrabold text-green-900 sm:text-5xl mb-6">
            Conditions We Treat
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Our naturopathy treatments successfully address a wide spectrum of acute and chronic health conditions using completely natural, drug-free healing methods.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONDITIONS.map((group, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-green-800 mb-6 pb-2 border-b border-gray-100">
                  {group.category}
                </h2>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
