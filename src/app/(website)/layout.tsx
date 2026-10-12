import WebSiteFooter from "@/components/footer/WebSiteFooter";
import WebsiteNav from "@/components/navbar/WebsiteNav";
import type { Metadata } from "next";

// cspell:ignore Reluxe
export const metadata: Metadata = {
  metadataBase: new URL("https://www.reluxemobility.com"),
  title: {
    default: "Reluxe Mobility",
    template: "%s | Reluxe Mobility",
  },
  description:
    "Discover premium mobility solutions with Reluxe Mobility. Explore innovative products designed for comfort, independence, and everyday ease.",
  keywords: [
    "mobility solutions",
    "mobility products",
    "Reluxe Mobility",
    "mobility aids",
    "independent living",
    "daily support",
  ],
  applicationName: "Reluxe Mobility",
  openGraph: {
    title: "Reluxe Mobility",
    description:
      "Premium mobility solutions designed to support comfort, independence, and confidence in everyday life.",
    url: "https://www.reluxemobility.com",
    siteName: "Reluxe Mobility",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reluxe Mobility",
    description:
      "Premium mobility solutions designed to support comfort, independence, and confidence in everyday life.",
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
