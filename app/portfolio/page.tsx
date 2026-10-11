import type { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { PortfolioExplorer } from "@/components/portfolio/PortfolioExplorer";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Independent projects by Joachim Osafo Amoateng: two completed portfolio projects, two mobile apps in closed testing, and two apps in development.",
};

export default function PortfolioPage() {
  return (
    <div className="pb-24 pt-36 md:pb-30 md:pt-44">
      <div className="container-oa7">
        <SectionHeader
          as="h1"
          eyebrow="Portfolio"
          title="Independent projects, with their real status."
          description="Everything here is my own work, built to develop practical skills. None of it was commissioned by a client. Each project shows exactly where it stands: completed, in closed testing, or still in development."
        />

        <div className="mt-8 md:mt-12">
          <PortfolioExplorer projects={PROJECTS} />
        </div>

        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-secondary-500">
          I also build personal website projects, and some of them are deployed on Vercel. They
          are not listed individually here.
        </p>
      </div>
    </div>
  );
}
