import CtaBanner from "@/components/common/CtaBanner";
import PageHero from "@/components/common/PageHero";
import type { Metadata } from "next";
import { baseOpenGraph } from "@/utils/seo";
import CorePillars from "./components/CorePillars";
import { aboutUsPageData } from "./components/pageData";
import StorySection from "./components/StorySection";
import TrustedEntities from "./components/TrustedEntities";
import VelvetStandard from "./components/VelvetStandard";

const pageUrl = "https://reluxemobility.com/about-us";
const title = "About Reluxe Mobility | Premium Chauffeur & Corporate Mobility";
const description =
  "Learn about Reluxe Mobility — premium chauffeur and corporate mobility services built on reliability, seamlessness and our signature Velvet Service standard.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pageUrl },
  openGraph: { ...baseOpenGraph, title, description, url: pageUrl },
  twitter: { title, description },
};

export default function AboutUs() {
  return (
    <main>
      <PageHero {...aboutUsPageData.hero} />
      <StorySection {...aboutUsPageData.storySection} />
      <CorePillars {...aboutUsPageData.corePillars} />
      <VelvetStandard {...aboutUsPageData.velvetServiceStandard} />
      <TrustedEntities {...aboutUsPageData.trustedOrganizations} />
      <CtaBanner {...aboutUsPageData.finalCta} />
    </main>
  );
}
