import { JSX } from "react";

export interface HeroProps {
  eyebrow: string;
  title: string;
  description: string;
  buttons: {
    label: string;
    href: string;
  }[];
  highlights: {
    title: string;
    description: string;
  }[];
  img: string;
}

export interface ServiceOfferingsProps {
  title: string;
  description: string;
  items: {
    id: string;
    number: string;
    title: string;
    description: string;
  }[];
}

export interface JourneySectionProps {
  title: string;
  description: string;
  benefits: {
    title: string;
    description: string;
    icon: JSX.Element;
  }[];
}

export interface FleetCategoriesProps {
  title: string;
  description: string;
  items: {
    id: string;
    title: string;
    vehicles: string[];
  }[];
}

export interface BrowseFleetProps {
  id: string;
  title: string;
  description: string;
  viewAllLabel: string;
  viewAllHref: string;
  collections: {
    id: string;
    category: string;
    title: string;
    tier: string;
    description: string;
    image: string;
  }[];
}

export interface VelvetServiceSectionProps {
  id: string;
  title: string;
  description: string;
  image: string;
  features: {
    id: string;
    title: string;
    description: string;
    icon: JSX.Element;
  }[];
}

export interface TrustedOrganizationsProps {
  title: string;
  description: string;
  organizations: {
    id: string;
    name: string;
    logo: string;
  }[];
}

export interface FinalCtaProps {
  title: string;
  description: string;
  contactDetails: {
    label: string;
    href: string;
    icon: JSX.Element;
  }[];
}
