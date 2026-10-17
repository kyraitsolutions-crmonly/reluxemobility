import { JSX } from "react";

export interface CorporateLeadFormProps {
  title: string;
  description: string;
  businessVolumes: string[];
  submitLabel: string;
}

export interface CorporateHeroProps {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  points: string[];
  stats: {
    value: string;
    label: string;
  }[];
  form: CorporateLeadFormProps;
}

export interface CorporateBenefitsProps {
  eyebrow: string;
  title: string;
  description: string;
  items: {
    id: string;
    title: string;
    description: string;
    icon: JSX.Element;
  }[];
}

export interface CorporateSolutionsProps {
  title: string;
  description: string;
  linkLabel: string;
  items: {
    id: string;
    title: string;
    description: string;
    image: string;
    href: string;
  }[];
}
