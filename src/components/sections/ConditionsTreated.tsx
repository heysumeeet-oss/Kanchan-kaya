import { Check } from "lucide-react";

export function ConditionsTreated() {
  const conditions = [
    {
      category: "Musculoskeletal & Pain Disorders",
      items: [
        "Arthritis (Osteoarthritis, Rheumatoid, Gout)",
        "Cervical Spondylitis and Neck Pain",
        "Lumbar Spondylitis and Lower Back Pain",
        "Frozen Shoulder and Joint Stiffness",
        "Sciatica and Nerve Pain",
        "Fibromyalgia and Chronic Pain Syndrome",
        "Sports Injuries and Muscle Strains",
      ],
    },
    {
      category: "Metabolic & Lifestyle Diseases",
      items: [
        "Type 2 Diabetes Mellitus",
        "Obesity and Weight Management",
        "Hypertension (High Blood Pressure)",
        "High Cholesterol and Triglycerides",
        "Metabolic Syndrome",
        "Fatty Liver Disease",
        "Thyroid Disorders (Hypo/Hyper)",
      ],
    },
    {
      category: "Digestive System Disorders",
      items: [
        "Chronic Constipation",
        "Acidity, GERD, and Acid Reflux",
        "Irritable Bowel Syndrome (IBS)",
        "Ulcerative Colitis (IBD)",
        "Piles (Hemorrhoids)",
        "Indigestion and Bloating",
        "Liver Detoxification",
      ],
    },
    {
      category: "Respiratory Conditions",
      items: [
        "Asthma and Breathing Difficulties",
        "Chronic Bronchitis",
        "Sinusitis and Nasal Congestion",
        "Allergic Rhinitis",
        "Recurrent Respiratory Infections",
      ],
    },
    {
      category: "Skin Disorders",
      items: [
        "Psoriasis and Eczema",
        "Acne and Pimples",
        "Skin Allergies and Rashes",
        "Pigmentation and Dark Spots",
        "Hair Fall and Premature Graying",
      ],
    },
    {
      category: "Stress & Mental Health",
      items: [
        "Chronic Stress and Anxiety",
        "Depression and Mood Disorders",
        "Insomnia and Sleep Disturbances",
        "Migraine and Tension Headaches",
        "Chronic Fatigue Syndrome",
      ],
    },
    {
      category: "Women's Health Issues",
      items: [
        "PCOD/PCOS and Hormonal Imbalances",
        "Irregular or Painful Periods",
        "Menopausal Symptoms",
        "Infertility and Reproductive Health",
        "Pregnancy Wellness & Postnatal Care",
      ],
    },
    {
      category: "Other Conditions",
      items: [
        "Kidney Stones Prevention",
        "Varicose Veins",
        "Recurrent Urinary Tract Infections",
        "Weak Immunity",
        "General Health & Preventive Care",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white" id="conditions">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl mb-6">
            Health Conditions We Treat
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our naturopathy treatments in Lucknow successfully address a wide spectrum of acute and chronic health conditions using completely natural, drug-free healing methods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {conditions.map((group, index) => (
            <div
              key={index}
              className="bg-green-50/50 p-6 rounded-xl border border-green-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold text-green-900 mb-4 border-b border-green-200 pb-2">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
