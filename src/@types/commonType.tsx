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
  /** "pill" = rounded glass badge, "line" = red rule + red uppercase text */
  eyebrowVariant?: "pill" | "line";
  breadcrumbs?: Breadcrumb[];
  title: string;
  /** Shown after the title in the accent colour */
  highlight?: string;
  description: string;
  image: string;
  buttons?: CtaButton[];
  className?: string;
  /** Use the champagne accent colour for the primary button */
  accent?: boolean;
}

export interface CtaBannerProps {
  title: string;
  description: string;
  buttons: CtaButton[];
  backgroundImage?: string;
  /** Use the champagne accent colour for the primary button */
  accent?: boolean;
}

export interface MetaData {
  title: string;
  description: string;
  keyWords: string[];
}
