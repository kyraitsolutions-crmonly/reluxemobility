import { JSX } from "react";
import { CtaButton, MetaData } from "./commonType";

export interface FleetVehicle {
  id: string;
  name: string;
  type: string;
  badge?: string;
  image: string;
  features: {
    label: string;
    icon: JSX.Element;
  }[];
}

export interface FleetShowcaseProps {
  id: string;
  allLabel: string;
  ctaLabel: string;
  ctaHref: string;
  categories: {
    id: string;
    label: string;
    title: string;
    description: string;
    vehicles: FleetVehicle[];
  }[];
}

export interface GreenFleetProps {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  stats: {
    value: string;
    title: string;
    description: string;
  }[];
  button: CtaButton;
}

export interface MarqueeCollectionProps {
  title: string;
  description: string;
  vehicles: {
    id: string;
    category: string;
    name: string;
    image: string;
    highlights: {
      value: string;
      label: string;
    }[];
    button: CtaButton;
  }[];
}

/* ---------- fleet category detail page (/fleet/[slug]) ---------- */

export interface FleetModel {
  id: string;
  name: string;
  code?: string;
  badge?: string;
  description: string;
  image: string;
  specs: {
    label: string;
    value: string;
    icon: JSX.Element;
  }[];
  tags: string[];
  specifications: string[];
  bookLabel: string;
  bookHref: string;
}

export interface CategoryHighlightsProps {
  items: {
    id: string;
    title: string;
    description: string;
  }[];
}

export interface ModelShowcaseProps {
  eyebrow: string;
  title: string;
  models: FleetModel[];
}

export interface SignatureEventProps {
  title: string;
  highlight: string;
  description: string;
  image: string;
  points: string[];
  button: CtaButton;
}

export interface DiscoverMoreProps {
  title: string;
  description: string;
  items: {
    slug: string;
    title: string;
    tagline: string;
    image: string;
  }[];
}

export interface FleetCategoryData {
  slug: string;
  metaData: MetaData;
  hero: {
    title: string;
    highlight: string;
    description: string;
    image: string;
  };
  /** Used for the "Discover More Mobility" cards on other category pages */
  card: {
    title: string;
    tagline: string;
    image: string;
  };
  highlights: CategoryHighlightsProps["items"];
  models: FleetModel[];
  signatureDescription: string;
}
