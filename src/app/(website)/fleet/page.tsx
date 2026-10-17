import CtaBanner from "@/components/common/CtaBanner";
import PageHero from "@/components/common/PageHero";
import type { Metadata } from "next";
import FleetShowcase from "./components/FleetShowcase";
import GreenFleet from "./components/GreenFleet";
import MarqueeCollection from "./components/MarqueeCollection";
import { fleetPageData } from "./components/pageData";

export const metadata: Metadata = {
  title: "Our Fleet",
  description:
    "Explore the Reluxe Mobility fleet — executive sedans, premium SUVs, zero-emission EVs and luxury vehicles, all maintained to the highest standards.",
};

export default function Fleet() {
  return (
    <main>
      <PageHero {...fleetPageData.hero} />
      <FleetShowcase {...fleetPageData.fleetShowcase} />
      <GreenFleet {...fleetPageData.greenFleet} />
      <MarqueeCollection {...fleetPageData.marqueeCollection} />
      <CtaBanner {...fleetPageData.finalCta} />
    </main>
  );
}
