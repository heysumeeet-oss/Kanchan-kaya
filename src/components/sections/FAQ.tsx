import { FAQS } from "@/lib/constants";
import { Plus, Minus } from "lucide-react";
// In a real implementation, we would use state to toggle FAQs.
// Since this is a server component or I'm keeping it simple, I might use a client component wrapper or just standard details/summary tags.
// Let's use details/summary for simplicity and SEO accessibility.

export function FAQ() {
  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Common questions about Naturopathy Treatment in Lucknow
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <details
              key={index}
              className="group bg-gray-50 p-6 rounded-xl border border-gray-100 open:bg-green-50/50 open:border-green-200 transition-all duration-300"
            >
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 list-none [&::-webkit-details-marker]:hidden">
                <span className="text-lg">{faq.question}</span>
                <span className="transition group-open:rotate-180">
                  <Plus className="h-5 w-5 text-green-600 group-open:hidden" />
                  <Minus className="h-5 w-5 text-green-600 hidden group-open:block" />
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed animate-in slide-in-from-top-2">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
