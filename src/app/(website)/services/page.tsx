import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { serviceDetailPageData } from "./[slug]/components/pageData";

// The services overview is hidden: /services sends visitors to the first service,
// and it's kept out of search engines and AI crawlers (see also robots.ts).
export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
};

export default function Services() {
  redirect(`/services/${serviceDetailPageData[0].slug}`);
}
