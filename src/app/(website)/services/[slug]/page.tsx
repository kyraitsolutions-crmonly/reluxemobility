import PageHero from "@/components/common/PageHero";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HowItWorks from "./components/HowItWorks";
import OtherServices from "./components/OtherServices";
import {
  serviceDetailPageData,
  serviceDetailSharedData,
} from "./components/pageData";
import ServiceBooking from "./components/ServiceBooking";
import ServiceOverview from "./components/ServiceOverview";

interface Params {
  params: Promise<{ slug: string }>;
}

const siteUrl = "https://www.reluxemobility.com";

export async function generateStaticParams() {
  return serviceDetailPageData.map((service) => ({
    slug: service.slug,
  }));
}

function getOtherServices(slug: string) {
  const index = serviceDetailPageData.findIndex((s) => s.slug === slug);

  return [
    ...serviceDetailPageData.slice(index + 1),
    ...serviceDetailPageData.slice(0, index),
  ];
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const path = await params;
  const service = serviceDetailPageData.find((s) => s.slug === path.slug);

  if (!service) {
    return {
      title: "Service not found",
    };
  } else {
    return {
      title: service.metaData.title,
      description: service.metaData.description,
      keywords: service.metaData.keyWords,
      alternates: {
        canonical: `${siteUrl}/services/${service.slug}`,
        languages: {
          "en-US": `${siteUrl}/services/${service.slug}`,
        },
      },
      openGraph: {
        title: service.metaData.title,
        description: service.metaData.description,
        images: [service.hero.image],
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  }
}

export default async function ServiceDetailPage({ params }: Params) {
  const path = await params;
  const pageData = serviceDetailPageData.find((s) => s.slug === path.slug);

  if (!pageData) return notFound();

  const otherServices = getOtherServices(pageData.slug);
  const { howItWorks, booking, otherServices: otherServicesData } =
    serviceDetailSharedData;

  return (
    <main>
      <PageHero
        {...pageData.hero}
        eyebrowVariant="line"
        buttons={[{ label: "Book This Service", href: `#${booking.id}` }]}
        accent
      />
      <ServiceOverview {...pageData.overview} packages={pageData.packages} />
      <HowItWorks {...howItWorks} />
      <ServiceBooking
        {...booking}
        form={{
          vehicleClasses: booking.vehicleClasses,
          durations: pageData.packages.items.map((item) => item.value),
          submitLabel: booking.submitLabel,
        }}
      />
      <OtherServices
        {...otherServicesData}
        items={otherServices.map((service) => ({
          slug: service.slug,
          ...service.card,
        }))}
      />
    </main>
  );
}
