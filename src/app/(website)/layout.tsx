import WebSiteFooter from "@/components/footer/WebSiteFooter";
import SamePageHashLinks from "@/components/common/SamePageHashLinks";
import TravelExpertPopup from "@/components/common/TravelExpertPopup";
import WebsiteNav from "@/components/navbar/WebsiteNav";
import type { Metadata } from "next";
import { baseOpenGraph } from "@/utils/seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://reluxemobility.com"),
  title: {
    default: "Reluxe Mobility",
    template: "%s | Reluxe Mobility",
  },
  description:
    "Chauffeur-driven sedans, SUVs, EVs and luxury cars for corporates, institutions and discerning travellers. Punctual, discreet, and run to the Velvet Service standard.",
  keywords: [
    "Reluxe Mobility",
    "premium car rental",
    "chauffeur service",
    "corporate car rental",
    "PSU transport services",
    "airport transfers",
    "outstation cabs",
    "luxury car hire",
  ],
  applicationName: "Reluxe Mobility",
  openGraph: {
    title: "Reluxe Mobility",
    description:
      "Premium car rental & chauffeur mobility solutions — reliable, seamless and luxury-first, anchored by our signature Velvet Services.",
    url: "https://reluxemobility.com",
    ...baseOpenGraph,
  },
  twitter: {
    card: "summary_large_image",
    title: "Reluxe Mobility",
    description:
      "Premium car rental & chauffeur mobility solutions — reliable, seamless and luxury-first, anchored by our signature Velvet Services.",
  },
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <WebsiteNav />
      {children}
      <WebSiteFooter />
      <SamePageHashLinks />
      <TravelExpertPopup />
    </>
  );
}
