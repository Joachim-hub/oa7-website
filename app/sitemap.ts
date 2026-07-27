import type { MetadataRoute } from "next";
import { SITE } from "@/constants/site";
import { TEMPLATES } from "@/data/templates";
import { PROJECTS } from "@/data/projects";
import { SERVICES_DETAIL } from "@/data/services-detail";
import { INDUSTRIES } from "@/data/industries";

const ROUTES = [
  "",
  "/about",
  "/services",
  "/portfolio",
  "/templates",
  "/industries",
  "/pricing",
  "/process",
  "/contact",
  "/legal/privacy",
  "/legal/terms",
  "/legal/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ROUTES.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const templateRoutes = TEMPLATES.map((t) => ({
    url: `${SITE.url}/templates/${t.slug}`,
    lastModified: new Date(t.releasedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const portfolioRoutes = PROJECTS.map((p) => ({
    url: `${SITE.url}/portfolio/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const serviceRoutes = SERVICES_DETAIL.map((s) => ({
    url: `${SITE.url}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const industryRoutes = INDUSTRIES.map((i) => ({
    url: `${SITE.url}/industries/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...templateRoutes, ...portfolioRoutes, ...serviceRoutes, ...industryRoutes];
}
