import SeoLinks from "@/components/common/SeoLinks";
import type { Metadata } from "next";
import { baseOpenGraph } from "@/utils/seo";
import BrowseFleet from "./homeComponent/BrowseFleet";
import FleetCategories from "./homeComponent/FleetCategories";
import FormCta from "./homeComponent/FormCta";
import Hero from "./homeComponent/Hero";
import JourneySection from "./homeComponent/JourneySection";
import { homePageData } from "./homeComponent/pageData";
import ServiceOfferings from "./homeComponent/ServiceOfferings";
import TrustedOrganizations from "./homeComponent/TrustedOrganizations";
import VelvetServiceSection from "./homeComponent/VelvetServiceSection";

const pageUrl = "https://reluxemobility.com";
const title = "Premium Chauffeur-Driven Car Rental for Corporates | Reluxe Mobility";
const description =
  "Chauffeur-driven sedans, SUVs, EVs and luxury cars for corporates, institutions and discerning travellers. Punctual, discreet, and run to the Velvet Service standard.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pageUrl },
  openGraph: { ...baseOpenGraph, title, description, url: pageUrl },
  twitter: { title, description },
};

export default function Home() {
  return (
    <main className="">
      <Hero {...homePageData.hero} />
      <JourneySection {...homePageData.journeySection} />
      <ServiceOfferings {...homePageData.serviceOfferings} />
      <FleetCategories {...homePageData.fleetCategories} />
      <BrowseFleet {...homePageData.browseFleet} />
      <VelvetServiceSection {...homePageData.velvetServiceSection} />
      <TrustedOrganizations {...homePageData.trustedOrganizations} />
      <FormCta {...homePageData.finalCta} />
      <SeoLinks />
    </main>
  );
}
