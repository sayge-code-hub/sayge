import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/blog";
import { siteUrl } from "@/lib/site";
import { caseStudyPath, getWorkDocuments, workPath } from "@/lib/work";

export const dynamic = "force-static";

type IndexedRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const routes: IndexedRoute[] = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  {
    path: "/services/custom-software-development",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  { path: workPath, changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/legal-notice", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-28");

  const pages = routes.map((route) => ({
    url: new URL(route.path, siteUrl).href,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const work = getWorkDocuments().map((doc) => ({
    url: new URL(caseStudyPath(doc.slug), siteUrl).href,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articles = getPosts().map((post) => ({
    url: new URL(`/blog/${post.slug}`, siteUrl).href,
    lastModified: new Date(post.dateModified ?? post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...pages,
    ...work,
    {
      url: new URL("/blog", siteUrl).href,
      lastModified: new Date(getPosts()[0]?.date ?? "2026-09-21"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...articles,
  ];
}
