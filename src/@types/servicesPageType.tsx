import { JSX } from "react";
import { CtaButton, MetaData } from "./commonType";

export interface ServiceDetail {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  button: CtaButton;
  image?: string;
  stats?: {
    value: string;
    label: string;
  }[];
}

export interface ServiceDetailsProps {
  items: ServiceDetail[];
}

export interface VelvetStandardsProps {
  title: string;
  description: string;
  items: {
    id: string;
    title: string;
    description: string;
    icon: JSX.Element;
  }[];
}

export interface BookingProcessProps {
  title: string;
  description: string;
  steps: {
    id: string;
    title: string;
    description: string;
  }[];
}


export interface ServiceOverviewProps {
  title: string;
  paragraphs: string[];
  features: {
    id: string;
    title: string;
    description: string;
    icon: JSX.Element;
  }[];
  packages: ServicePackagesProps;
}

export interface ServicePackagesProps {
  title: string;
  items: {
    id: string;
    label: string;
    value: string;
  }[];
  inclusions: string[];
}

export interface HowItWorksProps {
  eyebrow: string;
  title: string;
  steps: {
    id: string;
    title: string;
    description: string;
  }[];
}

export interface InquiryFormProps {
  vehicleClasses: string[];
  durations: string[];
  submitLabel: string;
}

export interface ServiceBookingProps {
  id: string;
  title: string;
  description: string;
  assurances: {
    id: string;
    title: string;
    description: string;
    icon: JSX.Element;
  }[];
  form: InquiryFormProps;
}

export interface OtherServicesProps {
  title: string;
  description: string;
  linkLabel: string;
  items: {
    slug: string;
    title: string;
    description: string;
    image: string;
  }[];
}

export interface ServiceDetailData {
  slug: string;
  metaData: MetaData;
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    image: string;
  };
  card: {
    title: string;
    description: string;
    image: string;
  };
  overview: Omit<ServiceOverviewProps, "packages">;
  packages: ServicePackagesProps;
}
