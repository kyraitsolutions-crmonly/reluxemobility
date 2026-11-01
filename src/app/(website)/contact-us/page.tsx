import CtaBanner from "@/components/common/CtaBanner";
import PageHero from "@/components/common/PageHero";
import type { Metadata } from "next";
import { baseOpenGraph } from "@/utils/seo";
import ContactSection from "./components/ContactSection";
import FaqSection from "./components/FaqSection";
import LocationMap from "./components/LocationMap";
import { contactUsPageData } from "./components/pageData";

const pageUrl = "https://reluxemobility.com/contact-us";
const title = "Contact Reluxe Mobility | Reservations & Corporate Desk";
const description =
  "Get in touch with Reluxe Mobility for premium chauffeur services, Velvet Corporate accounts and mobility enquiries.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pageUrl },
  openGraph: { ...baseOpenGraph, title, description, url: pageUrl },
  twitter: { title, description },
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
