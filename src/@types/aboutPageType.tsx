import { JSX } from "react";

export interface StorySectionProps {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: string;
  statistics: {
    id: string;
    value: string;
    label: string;
  }[];
}

export interface CorePillarsProps {
  title: string;
  description: string;
  items: {
    id: string;
    title: string;
    description: string;
    icon: JSX.Element;
  }[];
}

export interface VelvetStandardProps {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  features: {
    id: string;
    title: string;
    description: string;
  }[];
  testimonial: {
    eyebrow: string;
    quote: string;
  };
}

export interface TrustedEntitiesProps {
  title: string;
  description: string;
  organizations: {
    id: string;
    name: string;
    fullName?: string;
  }[];
}
