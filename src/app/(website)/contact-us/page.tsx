import CtaBanner from "@/components/common/CtaBanner";
import PageHero from "@/components/common/PageHero";
import type { Metadata } from "next";
import ContactSection from "./components/ContactSection";
import FaqSection from "./components/FaqSection";
import LocationMap from "./components/LocationMap";
import { contactUsPageData } from "./components/pageData";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Reluxe Mobility for premium chauffeur services, corporate Velvet Service and mobility enquiries.",
};

export default function ContactUs() {
  return (
    <main>
      <PageHero {...contactUsPageData.hero} />
      <ContactSection {...contactUsPageData.contactSection} />
      <LocationMap {...contactUsPageData.locationSection} />
      <FaqSection {...contactUsPageData.faqSection} />
      <CtaBanner {...contactUsPageData.finalCta} />
    </main>
  );
}
