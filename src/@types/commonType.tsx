export interface CtaButton {
  label: string;
  href: string;
}

export interface Breadcrumb {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  eyebrow?: string;
  eyebrowVariant?: "pill" | "line";
  breadcrumbs?: Breadcrumb[];
  title: string;
  highlight?: string;
  description: string;
  image: string;
  buttons?: CtaButton[];
  className?: string;
  accent?: boolean;
}

export interface CtaBannerProps {
  title: string;
  description: string;
  buttons: CtaButton[];
  backgroundImage?: string;
  accent?: boolean;
}

export interface MetaData {
  title: string;
  description: string;
  keyWords: string[];
}
