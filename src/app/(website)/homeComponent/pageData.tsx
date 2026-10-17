import {
  AccountManagerIcon,
  CallIcon,
  ConciergeIcon,
  CustmizedBillingIcon,
  HeadPhoneIcon,
  HighSecurityIcon,
  MailIcon,
  TickIcon,
} from "@/utils/icons";

export const homePageData = {
  hero: {
    eyebrow: "PREMIUM CAR RENTAL & CHAUFFEUR MOBILITY SOLUTIONS",
    title: "Reluxe Mobility: Crafting Excellence in Every Mile",
    description:
      'Reliable, seamless luxury-first travel for retail and B2B — our signature white-glove "Velvet Services" for corporate clients.',
    buttons: [
      {
        label: "Book Now",
        href: "#booking",
      },
      {
        label: "View Fleet",
        href: "#fleet",
      },
    ],
    highlights: [
      {
        title: "Fleet Breadth",
        description: "Everyday executive sedans to zero-emission EVs",
      },
      {
        title: "Velvet Standard",
        description: "Spotless, sanitized cars & uniformed chauffeurs",
      },
      {
        title: "Trusted Partner",
        description: "Serving major PSUs and Government bodies",
      },
    ],
    img: "/home/hero.jpg",
  },

  journeySection: {
    title: "Plan Your Journey",
    description:
      "Tell us where you need to travel and how you want to move. We tailor the vehicle, service level, and support to your trip.",
    benefits: [
      {
        title: "Instant Confirmation",
        description: "Receive your booking details right away.",
        icon: <TickIcon />,
      },
      {
        title: "Real-Time Support",
        description: "Available whenever you need assistance.",
        icon: <HeadPhoneIcon />,
      },
    ],
  },

  serviceOfferings: {
    title: "Service Offerings",
    description:
      "Tailored mobility solutions designed for those who value time, discretion, and uncompromising comfort.",

    items: [
      {
        id: "hourly-rental",
        number: "01",
        title: "Hourly Rental",
        description:
          "Flexible city packages: 4h/40km, 8h/80km and full-day options.",
      },
      {
        id: "airport-transfers",
        number: "02",
        title: "Airport Transfers",
        description:
          "Guaranteed on-time arrivals with executive greeting services.",
      },
      {
        id: "outstation-travel",
        number: "03",
        title: "Outstation Travel",
        description:
          "One-way and round trips with our elite highway chauffeurs.",
      },
      {
        id: "velvet-service",
        number: "04",
        title: "Velvet Service",
        description:
          "Dedicated account managers, customized billing and secure travel protocols.",
      },
    ],
  },

  fleetCategories: {
    title: "Fleet Categories",
    description:
      "A curated range of vehicles for everyday executive travel, premium comfort, luxury mobility, and sustainable EV options.",

    items: [
      {
        id: "compact-sedans",
        title: "Compact / Sedans",
        vehicles: ["Maruti Suzuki Dzire", "Honda Amaze"],
      },
      {
        id: "premium-sedans",
        title: "Premium Sedans",
        vehicles: ["Honda City", "Maruti Suzuki Ciaz"],
      },
      {
        id: "premium-suvs",
        title: "Premium SUVs",
        vehicles: ["Toyota Innova Hycross", "Maruti Suzuki Invicto"],
      },
      {
        id: "green-fleet",
        title: "Green Fleet (EVs)",
        vehicles: ["Premium Electric SUVs"],
      },
      {
        id: "luxury-fleet",
        title: "Luxury Fleet",
        vehicles: ["Mercedes-Benz", "BMW", "Audi"],
      },
    ],
  },

  browseFleet: {
    id: "fleet",
    title: "Browse Our Fleet",
    description:
      "A curated collection of the world's most prestigious vehicles, maintained to the highest standards.",

    viewAllLabel: "View All Models",
    viewAllHref: "#fleet",

    collections: [
      {
        id: "premium",
        category: "Executive Choice",
        title: "Premium Collection",
        tier: "Premium",
        description:
          "Honda City, Maruti Suzuki Ciaz — the standard of corporate efficiency and comfort.",
        image: "/home/premium.png",
      },
      {
        id: "luxury",
        category: "Marquee Brands",
        title: "Luxury Series",
        tier: "Luxury",
        description:
          "Mercedes-Benz, BMW, Audi — first-class experience with signature chauffeur service.",
        image: "/home/luxury.png",
      },
      {
        id: "economy",
        category: "Reliable Utility",
        title: "Economy Plus",
        tier: "Economy",
        description:
          "Maruti Suzuki Dzire, Honda Amaze — reliable and cost-effective daily travel solutions.",
        image: "/home/economy.png",
      },
    ],
  },

  velvetServiceSection: {
    id: "corporate-velvet-service",
    title: "Corporate & PSU Velvet Service",
    description:
      "Reliable corporate mobility with customized billing, dedicated account managers and executive-level support for PSU and corporate clients.",
    image: "/home/psu.png",
    features: [
      {
        id: "account-managers",
        title: "Account Managers",
        description: "Single-point coordination for travel.",
        icon: <AccountManagerIcon />,
      },
      {
        id: "customized-billing",
        title: "Customized Billing",
        description: "Transparent reporting and invoices.",
        icon: <CustmizedBillingIcon />,
      },
      {
        id: "high-security",
        title: "High-Security",
        description: "Strict mobility protocol compliance.",
        icon: <HighSecurityIcon />,
      },
      {
        id: "concierge-level",
        title: "Concierge Level",
        description: "Hospitality-level guest support.",
        icon: <ConciergeIcon />,
      },
    ],
  },

  trustedOrganizations: {
    title: "Trusted by Major PSUs & Government Bodies",
    description: "Serving leading public sector enterprises across the nation.",

    organizations: [
      { id: "sai", name: "SAI" },
      { id: "iocl", name: "IOCL" },
      { id: "bpcl", name: "BPCL" },
      { id: "gail", name: "GAIL" },
      { id: "rdso", name: "RDSO" },
      { id: "stpi", name: "STPI" },
      { id: "ntpc", name: "NTPC" },
      { id: "npcl", name: "NPCL" },
      { id: "cci", name: "CCI" },
    ],
  },

  finalCta: {
    title: "Ready to Experience the Velvet Standard?",
    description:
      "We are committed to creating unparalleled experiences for retail and corporate clients. Book your premium journey today.",

    contactDetails: [
      {
        label: "Contact details to be confirmed",
        href: "#",
        icon: <CallIcon />,
      },
      {
        label: "Contact details to be confirmed",
        href: "#",
        icon: <MailIcon />,
      },
    ],
  },
};
