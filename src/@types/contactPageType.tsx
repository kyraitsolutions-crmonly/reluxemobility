import { JSX } from "react";

export interface EnquiryFormProps {
  title: string;
  serviceTypes: string[];
}

export interface ContactSectionProps {
  id: string;
  contactInformation: {
    title: string;
    items: {
      id: string;
      title: string;
      description: string;
      icon: JSX.Element;
    }[];
  };
  trustedClients: {
    eyebrow: string;
    title: string;
    description: string;
  };
  enquiryForm: EnquiryFormProps;
}

export interface LocationMapProps {
  title: string;
  description: string;
  address: string;
  mapEmbedUrl: string;
}

export interface FaqSectionProps {
  title: string;
  description: string;
  items: {
    id: string;
    question: string;
    answer: string;
  }[];
}
