"use client";

import { useSearchParams } from "next/navigation";
import { getTemplateBySlug } from "@/data/templates";
import { getServiceBySlug } from "@/data/services";
import { getIndustryBySlug } from "@/data/industries";
import { getProjectBySlug } from "@/data/projects";
import { INTENT_LABELS } from "@/data/contact";
import { ContactForm } from "@/components/contact/ContactForm";

function resolveSubject(params: URLSearchParams): string | null {
  const template = params.get("template");
  const service = params.get("service");
  const industry = params.get("industry");
  const project = params.get("project");

  if (template) return getTemplateBySlug(template)?.name ?? null;
  if (service) return getServiceBySlug(service)?.title ?? null;
  if (industry) return getIndustryBySlug(industry)?.name ?? null;
  if (project) return getProjectBySlug(project)?.name ?? null;
  return null;
}

function resolveProjectType(params: URLSearchParams): "template" | "custom" | "not-sure" {
  if (params.get("template")) return "template";
  if (params.get("service") || params.get("industry") || params.get("project")) return "custom";
  return "not-sure";
}

export function ContactPageContent() {
  const params = useSearchParams();
  const intent = params.get("intent");
  const subject = resolveSubject(params);
  const projectType = resolveProjectType(params);

  const intentLabel = intent ? INTENT_LABELS[intent] : null;
  const contextLine =
    subject && intentLabel ? `Hi, I'm interested in ${intentLabel} ${subject}.` : "";

  return (
    <div>
      {subject && (
        <p className="mb-6 rounded-lg border border-accent-ink/25 bg-accent-400/5 px-4 py-3 text-sm text-secondary-200">
          Reaching out about <span className="font-semibold text-secondary-0">{subject}</span>. We&rsquo;ve
          started your message below, feel free to change it.
        </p>
      )}
      <ContactForm defaultMessage={contextLine} defaultProjectType={projectType} />
    </div>
  );
}
