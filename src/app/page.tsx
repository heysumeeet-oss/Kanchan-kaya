import { Hero } from "@/components/sections/Hero";
import { AboutSummary } from "@/components/sections/AboutSummary";
import { ServicesSummary } from "@/components/sections/ServicesSummary";
import { Testimonials } from "@/components/sections/Testimonials";
import { JSON_LD_DATA } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_DATA) }}
      />
      <Hero />
      <AboutSummary />
      <ServicesSummary />
      <Testimonials />
      {/* Other sections like Conditions Treated, FAQ, etc. can be added here */}
    </>
  );
}
