import { isPageLink, NavLink } from "@/components/navbar/navlink";
import type { MetadataRoute } from "next";

const siteUrl = "https://www.reluxemobility.com";

// Update when content changes. A fixed date is used instead of `new Date()`,
// which cacheComponents does not allow during the static build.
const lastModified = new Date("2026-10-17");

/**
 * Built from the navbar links in components/navbar/navlink.tsx, so the sitemap
 * always matches what visitors can reach. A link with href "#" is hidden from both.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries = new Map<string, MetadataRoute.Sitemap[number]>();

  const add = (href: string, priority: number) => {
    const path = href.split("#")[0];
    if (!isPageLink(path) || entries.has(path)) return;

    entries.set(path, {
      url: path === "/" ? siteUrl : `${siteUrl}${path}`,
      lastModified,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority,
    });
  };

  add("/", 1);
  NavLink.links.forEach((link) => {
    add(link.href, 0.8);
    link.subLinks?.forEach((subLink) => add(subLink.href, 0.7));
  });

  return [...entries.values()];
}
