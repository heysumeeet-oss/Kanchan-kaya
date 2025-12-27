import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Health Blog & Resources | Kanchankaya Naturopathy Lucknow",
  description: "Expert insights on naturopathy, yoga, and natural healing from Dr. Vandana Mishra and team.",
};

const BLOG_POSTS = [
  {
    title: "Natural Remedies for Diabetes Management in India",
    excerpt: "Learn how to manage blood sugar levels naturally through diet, yoga, and naturopathy treatments. Discover Indian superfoods that help control diabetes...",
    category: "Diabetes",
    date: "March 15, 2024",
    slug: "natural-remedies-diabetes"
  },
  {
    title: "Effective Naturopathy Treatment for Arthritis & Joint Pain",
    excerpt: "Suffering from arthritis? Discover natural pain relief methods including hydrotherapy techniques for joint pain, anti-inflammatory naturopathy diet...",
    category: "Pain Management",
    date: "March 10, 2024",
    slug: "arthritis-naturopathy-treatment"
  },
  {
    title: "Natural Weight Loss Through Naturopathy - Complete Guide",
    excerpt: "Achieve sustainable weight loss without crash diets or harmful supplements. Learn about naturopathy fasting protocols, metabolic detoxification...",
    category: "Weight Loss",
    date: "March 5, 2024",
    slug: "natural-weight-loss-guide"
  },
  {
    title: "Stress Management Through Yoga & Meditation",
    excerpt: "Combat modern lifestyle stress with ancient healing practices. Discover breathing techniques for anxiety relief, meditation practices for mental peace...",
    category: "Mental Wellness",
    date: "February 28, 2024",
    slug: "stress-management-yoga"
  },
  {
    title: "Naturopathy Diet for Better Digestive Health",
    excerpt: "Heal digestive disorders naturally through proper nutrition and naturopathy. Learn about foods that improve digestion, fasting therapy for gut cleansing...",
    category: "Digestion",
    date: "February 20, 2024",
    slug: "digestive-health-diet"
  },
  {
    title: "Women's Health: Natural Management of PCOD/PCOS",
    excerpt: "Holistic approach to hormonal balance for women. Discover naturopathy treatments for PCOD, diet modifications for hormonal health...",
    category: "Women's Health",
    date: "February 15, 2024",
    slug: "pcod-pcos-natural-management"
  }
];

export default function BlogPage() {
  return (
    <div className="bg-white">
      <section className="bg-green-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-extrabold text-green-900 sm:text-5xl mb-6">
            Health Blog & Resources
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Stay informed about natural health with expert insights from Kanchankaya Naturopathy Center.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <div key={index} className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400">
                  <span className="text-sm">Blog Image Placeholder</span>
                </div>
                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm flex-1">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-green-700 hover:text-green-800 transition-colors mt-auto"
                  >
                    Read Full Article <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
