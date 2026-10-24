import WebSiteFooter from "@/components/footer/WebSiteFooter";
import WebsiteNav from "@/components/navbar/WebsiteNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.reluxemobility.com"),
  title: {
    default: "Reluxe Mobility",
    template: "%s | Reluxe Mobility",
  },
  description:
    "Reluxe Mobility offers premium car rental and chauffeur services — reliable, seamless, luxury-first travel for retail and corporate clients, with signature white-glove Velvet Services for corporates and PSUs.",
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
    url: "https://www.reluxemobility.com",
    siteName: "Reluxe Mobility",
    locale: "en_US",
    type: "website",
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
    </>
  );
}
