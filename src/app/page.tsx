import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ConditionsTreated } from "@/components/sections/ConditionsTreated";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { TreatmentProcess } from "@/components/sections/TreatmentProcess";
import { Team } from "@/components/sections/Team";
import { Facility } from "@/components/sections/Facility";
import { GallerySection } from "@/components/sections/GallerySection";
import { LocalSEO } from "@/components/sections/LocalSEO";
import { BlogTeasers } from "@/components/sections/BlogTeasers";
import { Contact } from "@/components/sections/Contact";
import { FloatingElements } from "@/components/ui/FloatingElements";
import { JSON_LD_DATA } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_DATA) }}
      />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ConditionsTreated />
      <WhyChooseUs />
      <TreatmentProcess />
      <Testimonials />
      <Team />
      <Facility />
      <GallerySection />
      <FAQ />
      <BlogTeasers />
      <LocalSEO />
      <Contact />
      <FloatingElements />
    </>
  );
}
