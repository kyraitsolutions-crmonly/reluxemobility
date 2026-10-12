import BrowseFleet from "./homeComponent/BrowseFleet";
import FleetCategories from "./homeComponent/FleetCategories";
import FormCta from "./homeComponent/FormCta";
import Hero from "./homeComponent/Hero";
import JourneySection from "./homeComponent/JourneySection";
import { homePageData } from "./homeComponent/pageData";
import ServiceOfferings from "./homeComponent/ServiceOfferings";
import TrustedOrganizations from "./homeComponent/TrustedOrganizations";
import VelvetServiceSection from "./homeComponent/VelvetServiceSection";

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
    </main>
  );
}
