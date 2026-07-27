import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { FeaturedTemplates } from "@/components/sections/FeaturedTemplates";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { WhyOA7 } from "@/components/sections/WhyOA7";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Premium Websites, Mobile Apps & Enterprise Software",
  description:
    "OA7 designs and builds premium websites, mobile applications, enterprise software, and AI solutions for startups, SMEs, and enterprise clients.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <FeaturedTemplates />
      <FeaturedProjects />
      <WhyOA7 />
      <Industries />
      <Process />
      <Stats />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
