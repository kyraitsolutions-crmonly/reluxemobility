import CtaBanner from "@/components/common/CtaBanner";
import type { Metadata } from "next";
import FaqSection from "../contact-us/components/FaqSection";
import TrustedOrganizations from "../homeComponent/TrustedOrganizations";
import BookingProcess from "../services/components/BookingProcess";
import CorporateBenefits from "./components/CorporateBenefits";
import CorporateHero from "./components/CorporateHero";
import CorporateSolutions from "./components/CorporateSolutions";
import { corporatePageData } from "./components/pageData";

const pageUrl = "https://www.reluxemobility.com/corporate-car-rental";

export const metadata: Metadata = {
  title: corporatePageData.metaData.title,
  description: corporatePageData.metaData.description,
  keywords: corporatePageData.metaData.keyWords,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: corporatePageData.metaData.title,
    description: corporatePageData.metaData.description,
    url: pageUrl,
    images: [corporatePageData.hero.image],
  },
};

export default function CorporateCarRental() {
  return (
    <main>
      <CorporateHero {...corporatePageData.hero} />
      <TrustedOrganizations {...corporatePageData.trustedOrganizations} />
      <CorporateBenefits {...corporatePageData.benefits} />
      <CorporateSolutions {...corporatePageData.solutions} />
      <BookingProcess {...corporatePageData.onboarding} />
      <FaqSection {...corporatePageData.faqSection} />
      <CtaBanner {...corporatePageData.finalCta} accent />
    </main>
  );
}
