"use client";

import { motion } from "framer-motion";
import { TEMPLATES } from "@/data/templates";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TemplateCard } from "@/components/ui/TemplateCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function FeaturedTemplates() {
  const featured = TEMPLATES.filter((t) => t.featured);

  return (
    <section className="py-24 md:py-30" aria-labelledby="featured-templates-heading">
      <div className="container-oa7">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Ready to launch"
            title="Featured templates"
            description="Production-grade templates you can customize and launch in days, not months."
            className="max-w-xl"
          />
          <Button href="/templates" variant="outline" iconRight={<ArrowRight className="h-4 w-4" />}>
            Browse all templates
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((template, i) => (
            <motion.div
              key={template.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <TemplateCard template={template} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
