import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./style.scss";
import Call from "@/components/ContactButton/Call";
import Whatsapp from "@/components/ContactButton/WhatsApp";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export const metadata: Metadata = {
  title: "Reluxe Mobility",
  description:
    "Premium car rental and chauffeur mobility solutions for retail and corporate travellers.",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} h-full antialiased overflow-x-clip`}
        suppressHydrationWarning={true}
      >
        {children}
        <Call/>
        <Whatsapp/>
      </body>
    </html>
  );
}
