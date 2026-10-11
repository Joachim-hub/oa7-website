import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { InProgress } from "@/components/sections/InProgress";
import { Skills } from "@/components/sections/Skills";
import { FounderSection } from "@/components/about/FounderSection";
import { WhyOA7 } from "@/components/sections/WhyOA7";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FOUNDER } from "@/data/about";

export const metadata: Metadata = {
  title: "Independent Software Developer, Websites & Mobile Apps",
  description:
    "OA7 Software is the independent software initiative of Joachim Osafo Amoateng, a Mathematics graduate in Ghana building websites and mobile apps with HTML, CSS, JavaScript and Flutter.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <InProgress />
      <ServicesPreview />
      <Skills />
      <FounderSection name={FOUNDER.name} role={FOUNDER.role} bio={FOUNDER.bio} />
      <WhyOA7 />
      <Process />
      <FAQ />
      <FinalCTA />
    </>
  );
}
