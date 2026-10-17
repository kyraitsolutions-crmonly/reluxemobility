import CtaBanner from "@/components/common/CtaBanner";
import PageHero from "@/components/common/PageHero";
import type { Metadata } from "next";
import CorePillars from "./components/CorePillars";
import { aboutUsPageData } from "./components/pageData";
import StorySection from "./components/StorySection";
import TrustedEntities from "./components/TrustedEntities";
import VelvetStandard from "./components/VelvetStandard";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Reluxe Mobility — premium chauffeur and corporate mobility services built on reliability, seamlessness and our signature Velvet Service standard.",
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
