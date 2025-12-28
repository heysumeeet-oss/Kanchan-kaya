import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BlogTeasers() {
  const articles = [
    {
      title: "Natural Remedies for Diabetes Management in India",
      excerpt: "Learn how to manage blood sugar levels naturally through diet, yoga, and naturopathy treatments. Discover Indian superfoods that help control diabetes...",
      slug: "#"
    },
    {
      title: "Effective Naturopathy Treatment for Arthritis & Joint Pain",
      excerpt: "Suffering from arthritis? Discover natural pain relief methods including hydrotherapy techniques for joint pain, anti-inflammatory naturopathy diet...",
      slug: "#"
    },
    {
      title: "Natural Weight Loss Through Naturopathy - Complete Guide",
      excerpt: "Achieve sustainable weight loss without crash diets or harmful supplements. Learn about naturopathy fasting protocols, metabolic detoxification...",
      slug: "#"
    },
    {
      title: "Stress Management Through Yoga & Meditation",
      excerpt: "Combat modern lifestyle stress with ancient healing practices. Discover breathing techniques for anxiety relief, meditation practices for mental peace...",
      slug: "#"
    },
    {
      title: "Naturopathy Diet for Better Digestive Health",
      excerpt: "Heal digestive disorders naturally through proper nutrition and naturopathy. Learn about foods that improve digestion, fasting therapy for gut cleansing...",
      slug: "#"
    },
    {
      title: "Women's Health: Natural Management of PCOD/PCOS",
      excerpt: "Holistic approach to hormonal balance for women. Discover naturopathy treatments for PCOD, diet modifications for hormonal health...",
      slug: "#"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-green-950 mb-2">
              Naturopathy Tips & Health Resources for Lucknow Residents
            </h2>
            <p className="text-lg text-gray-600">
              Stay informed about natural health with expert insights from Kanchankaya Naturopathy Center.
            </p>
          </div>
          <Link href="/blog" className="hidden md:flex items-center text-green-700 font-semibold hover:text-green-800 shrink-0">
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <div key={i} className="group cursor-pointer flex flex-col h-full bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gray-100 overflow-hidden relative">
                {/* Placeholder for Blog Image */}
                <div className="absolute inset-0 bg-green-50 flex items-center justify-center text-green-800/10 text-xl font-bold p-4 text-center group-hover:bg-green-100 transition-colors">
                  {article.title}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3 flex-grow">
                  {article.excerpt}
                </p>
                <span className="text-green-600 font-bold text-sm inline-flex items-center mt-auto">
                  Read Full Article <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
           <Link href="/blog" className="inline-flex items-center justify-center w-full rounded-lg border border-green-600 py-3 text-green-700 font-bold hover:bg-green-50">
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
