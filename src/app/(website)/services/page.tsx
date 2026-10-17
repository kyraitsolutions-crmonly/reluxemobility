import CtaBanner from "@/components/common/CtaBanner";
import PageHero from "@/components/common/PageHero";
import type { Metadata } from "next";
import BookingProcess from "./components/BookingProcess";
import { servicesPageData } from "./components/pageData";
import ServiceDetails from "./components/ServiceDetails";
import VelvetStandards from "./components/VelvetStandards";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Hourly city rentals, airport transfers, outstation travel and corporate & PSU mobility — premium chauffeur services from Reluxe Mobility.",
};

export default function Services() {
  return (
    <main>
      <PageHero {...servicesPageData.hero} accent />
      <ServiceDetails {...servicesPageData.serviceDetails} />
      <VelvetStandards {...servicesPageData.velvetStandards} />
      <BookingProcess {...servicesPageData.bookingProcess} />
      <CtaBanner {...servicesPageData.finalCta} accent />
    </main>
  );
}
