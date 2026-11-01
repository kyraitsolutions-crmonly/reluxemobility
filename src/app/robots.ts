import type { MetadataRoute } from "next";

const siteUrl = "https://reluxemobility.com";

// "$" matches the end of the path, so only the hidden overview pages are blocked;
// the fleet and service detail pages (/fleet/..., /services/...) stay crawlable.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/fleet$", "/services$"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
