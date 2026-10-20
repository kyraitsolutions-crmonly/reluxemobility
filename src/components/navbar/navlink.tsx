/**
 * To hide a page, set its href to "#". It disappears from the menu and the sitemap,
 * while its sub links (and their pages) keep working. Put the real path back to show it again.
 */
export const isPageLink = (href: string) => href.startsWith("/");

/** True when the current page belongs to this nav link (ignores the #section part) */
export const isActiveLink = (pathname: string, href: string) => {
  const path = href.split("#")[0];
  return isPageLink(path) && path !== "/" && pathname.startsWith(path);
};

export const NavLink = {
  logo: "/logo/reluxe-horizontal-navy.svg",
  links: [
    {
      label: "About",
      href: "/about-us",
    },
    {
      label: "Services",
      href: "#",
      subLinks: [
        {
          label: "Hourly & City Rentals",
          href: "/services/hourly-rental",
        },
        {
          label: "Airport Transfers",
          href: "/services/airport-transfers",
        },
        {
          label: "Outstation Travel",
          href: "/services/outstation-travel",
        },
        // {
        //   label: "Corporate & PSU Velvet Service",
        //   href: "/services/corporate-psu",
        // },
      ],
    },
    {
      label: "Fleet",
      href: "#",
      subLinks: [
        {
          label: "Compact / Sedans",
          href: "/fleet/compact-sedans",
        },
        {
          label: "Premium Sedans",
          href: "/fleet/premium-sedans",
        },
        {
          label: "Premium SUVs / MUVs",
          href: "/fleet/premium-suvs",
        },
        {
          label: "Green Fleet (EVs)",
          href: "/fleet/green-fleet",
        },
        {
          label: "Luxury Fleet",
          href: "/fleet/luxury-fleet",
        },
      ],
    },

    {
      label: "Contact",
      href: "/contact-us",
    },
    {
      label: "Corporate Rental",
      href: "/corporate-car-rental",
    },
    {
      label: "Book Now",
      href: "/contact-us#contact",
    },
  ],
};
