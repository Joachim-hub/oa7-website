import type { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { PortfolioExplorer } from "@/components/portfolio/PortfolioExplorer";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Case studies from projects OA7 has built from the ground up, including the challenge, the approach, and what shipped.",
};

export default function PortfolioPage() {
  return (
    <div className="pb-24 pt-36 md:pb-30 md:pt-44">
      <div className="container-oa7">
        <SectionHeader
          as="h1"
          eyebrow="Portfolio"
          title="Work we've built, start to finish."
          description="Each case study covers the actual problem, the approach we took, and what shipped. Not just a screenshot gallery."
        />

        <div className="mt-8 md:mt-12">
          <PortfolioExplorer projects={PROJECTS} />
        </div>
      </div>
    </div>
  );
}
