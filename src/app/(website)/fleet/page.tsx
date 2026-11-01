import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { fleetCategoryPageData } from "./[slug]/components/pageData";

// The fleet overview is hidden: /fleet sends visitors to the first fleet category,
// and it's kept out of search engines and AI crawlers (see also robots.ts).
export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
};

export default function Fleet() {
  redirect(`/fleet/${fleetCategoryPageData[0].slug}`);
}
