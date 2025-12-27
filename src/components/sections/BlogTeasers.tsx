import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BlogTeasers() {
  const articles = [
    { title: "Natural Remedies for Diabetes Management", excerpt: "Learn how to manage blood sugar levels naturally through diet and yoga." },
    { title: "Effective Naturopathy for Arthritis", excerpt: "Discover natural pain relief methods including hydrotherapy and diet." },
    { title: "Natural Weight Loss Guide", excerpt: "Achieve sustainable weight loss without crash diets or harmful supplements." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-green-950 mb-2">Health Tips & Resources</h2>
            <p className="text-gray-600">Expert insights from Kanchankaya Naturopathy Center.</p>
          </div>
          <Link href="/blog" className="hidden md:flex items-center text-green-700 font-semibold hover:text-green-800">
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="h-48 bg-gray-100 rounded-xl mb-4 overflow-hidden">
                <div className="h-full w-full bg-green-200 group-hover:scale-105 transition-transform duration-500"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-3 text-sm">
                {article.excerpt}
              </p>
              <span className="text-green-600 font-medium text-sm inline-flex items-center">
                Read Article <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
           <Link href="/blog" className="inline-flex items-center text-green-700 font-semibold hover:text-green-800">
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
