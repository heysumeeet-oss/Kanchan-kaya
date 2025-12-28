import { FAQS } from "@/lib/constants";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl mb-4">
            Frequently Asked Questions About Naturopathy Treatment in Lucknow
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our treatments, procedures, and philosophy.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <details
              key={index}
              className="group bg-gray-50 p-6 rounded-xl border border-gray-100 open:bg-green-50/50 open:border-green-200 transition-all duration-300"
            >
              <summary className="flex cursor-pointer items-start md:items-center justify-between font-semibold text-gray-900 list-none [&::-webkit-details-marker]:hidden">
                <span className="text-base md:text-lg pr-4">{faq.question}</span>
                <span className="transition group-open:rotate-180 shrink-0 mt-1 md:mt-0">
                  <Plus className="h-5 w-5 text-green-600 group-open:hidden" />
                  <Minus className="h-5 w-5 text-green-600 hidden group-open:block" />
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base animate-in slide-in-from-top-2">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
