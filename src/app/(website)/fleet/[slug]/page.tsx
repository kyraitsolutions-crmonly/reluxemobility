import PageHero from "@/components/common/PageHero";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryHighlights from "./components/CategoryHighlights";
import DiscoverMore from "./components/DiscoverMore";
import ModelShowcase from "./components/ModelShowcase";
import {
  fleetCategoryPageData,
  fleetCategorySharedData,
} from "./components/pageData";
import SignatureEvent from "./components/SignatureEvent";

interface Params {
  params: Promise<{ slug: string }>;
}

const siteUrl = "https://www.reluxemobility.com";

export async function generateStaticParams() {
  return fleetCategoryPageData.map((category) => ({
    slug: category.slug,
  }));
}

// the categories that follow this one (wrapping around), so every page links to the rest of the fleet
function getOtherCategories(slug: string, count = 3) {
  const index = fleetCategoryPageData.findIndex((c) => c.slug === slug);

  return Array.from(
    { length: Math.min(count, fleetCategoryPageData.length - 1) },
    (_, offset) =>
      fleetCategoryPageData[(index + offset + 1) % fleetCategoryPageData.length]
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const path = await params;
  const category = fleetCategoryPageData.find((c) => c.slug === path.slug);

  if (!category) {
    return {
      title: "Fleet category not found",
    };
  } else {
    return {
      title: category.metaData.title,
      description: category.metaData.description,
      keywords: category.metaData.keyWords,
      alternates: {
        canonical: `${siteUrl}/fleet/${category.slug}`,
        languages: {
          "en-US": `${siteUrl}/fleet/${category.slug}`,
        },
      },
      openGraph: {
        title: category.metaData.title,
        description: category.metaData.description,
        images: [category.hero.image],
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  }
}

export default async function FleetCategoryPage({ params }: Params) {
  const path = await params;
  const pageData = fleetCategoryPageData.find((c) => c.slug === path.slug);

  if (!pageData) return notFound();

  const otherCategories = getOtherCategories(pageData.slug);
  const { modelShowcase, signatureEvent, discoverMore } = fleetCategorySharedData;

  return (
    <main>
      <PageHero
        {...pageData.hero}
        breadcrumbs={[
          { label: "Fleet", href: "/fleet" },
          { label: pageData.hero.highlight },
        ]}
      />
      <CategoryHighlights items={pageData.highlights} />
      <ModelShowcase {...modelShowcase} models={pageData.models} />
      <SignatureEvent
        {...signatureEvent}
        description={pageData.signatureDescription}
      />
      <DiscoverMore
        {...discoverMore}
        items={otherCategories.map((category) => ({
          slug: category.slug,
          ...category.card,
        }))}
      />
    </main>
  );
}
