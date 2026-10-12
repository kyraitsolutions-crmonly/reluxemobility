import { JSX } from "react/jsx-runtime";

export const MailIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.3125 1.75C0.587891 1.75 0 2.33789 0 3.0625C0 3.47539 0.194141 3.86367 0.525 4.1125L6.475 8.575C6.78672 8.80742 7.21328 8.80742 7.525 8.575L13.475 4.1125C13.8059 3.86367 14 3.47539 14 3.0625C14 2.33789 13.4121 1.75 12.6875 1.75H1.3125ZM0 4.8125V10.5C0 11.4652 0.784766 12.25 1.75 12.25H12.25C13.2152 12.25 14 11.4652 14 10.5V4.8125L8.05 9.275C7.42656 9.74258 6.57344 9.74258 5.95 9.275L0 4.8125Z"
      fill="#CBD5E1"
    />
  </svg>
)

export const CallIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.50898 0.673273C4.29844 0.164679 3.74336 -0.106024 3.21289 0.0388978L0.806641 0.695148C0.330859 0.826398 0 1.25843 0 1.75062C0 8.51546 5.48516 14.0006 12.25 14.0006C12.7422 14.0006 13.1742 13.6698 13.3055 13.194L13.9617 10.7877C14.1066 10.2573 13.8359 9.70218 13.3273 9.49163L10.7023 8.39788C10.2566 8.21194 9.73984 8.34046 9.43633 8.71507L8.33164 10.0631C6.40664 9.15257 4.84805 7.59398 3.9375 5.66898L5.28555 4.56702C5.66016 4.26077 5.78867 3.74671 5.60273 3.30101L4.50898 0.676007V0.673273Z"
      fill="#CBD5E1"
    />
  </svg>
)

interface Link {
  label: string;
  href: string;
  icon?: JSX.Element;
}

interface ListLink {
  title: string;
  links: Link[];
}

interface FooterLinks {
  logo: string;
  description: string;
  listLinks: ListLink[];
}

export const WebsiteFooterLinks: FooterLinks = {
  logo: "/home/logo-white.png",
  description:
    'Reliable, seamless, and luxury-first travel experiences across retail and B2B segments, anchored by our signature "Velvet Services".',
  listLinks: [
    {
      title: "Quick Links",
      links: [
        {
          label: "Home",
          href: "/",
        },
        {
          label: "About",
          href: "/about-us",
        },
        {
          label: "Services",
          href: "#",
        },

        {
          label: "Contact",
          href: "/contact-us",
        },
      ],
    },
    {
      title: "Fleet Categories",
      links: [
        {
          label: "Compact / Sedans",
          href: "#",
        },
        {
          label: "Premium Sedans",
          href: "#",
        },
        {
          label: "Premium SUVs / MUVs",
          href: "#",
        },
        {
          label: "Green Fleet (EVs)",
          href: "#",
        },
        {
          label: "Luxury Fleet",
          href: "#",
        },
      ],
    },
    {
      title: "Services Offerings",
      links: [
        {
          label: "Hourly & City Rentals",
          href: "#",
        },
        {
          label: "Airport Transfers",
          href: "#",
        },
        {
          label: "Outstation Travel",
          href: "#",
        },
        {
          label: "Corporate & PSU Solutions",
          href: "#",
        },
      ],
    },
    {
      title: "Contact",
      links: [
        {
          label: "Phone details to be confirmed",
          href: "#",
          icon: <CallIcon />,
        },
        {
          label: "Email details to be confirmed",
          href: "#",
          icon: <MailIcon />,
        },
      ],
    },
  ],
};
