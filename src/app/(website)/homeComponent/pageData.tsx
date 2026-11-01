import {
  AccountManagerIcon,
  CallIcon,
  ConciergeIcon,
  CustmizedBillingIcon,
  HeadPhoneIcon,
  MailIcon,
  TickIcon,
} from "@/utils/icons";
import { contact } from "@/utils/constent";
import { LuMapPin, LuShieldCheck } from "react-icons/lu";

export const homePageData = {
  hero: {
    eyebrow: "PREMIUM CAR RENTAL & CHAUFFEUR MOBILITY SOLUTIONS",
    title: "Reluxe Mobility: Crafting Excellence in Every Mile",
    description:
      "Immaculate cars, trained chauffeurs and a team that stays with every trip. Mobility for corporates, institutions and discerning travellers.",
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
        description: "Detailed cars, uniformed chauffeurs, live-tracked trips",
      },
      {
        title: "Trusted Partner",
        description: "70+ PSUs, corporates & government bodies",
      },
    ],
    // Banner slides (16:9, subject on the right). A slide only appears once its file is in /public.
    images: ["/home/hero.jpg", "/hero-2.png", "/hero-3.png", "/hero-4.png", "/hero-5.png"],
  },

  journeySection: {
    title: "Plan Your Journey",
    description:
      "Tell us where you need to travel and how you want to move. We tailor the vehicle, service level, and support to your trip.",
    benefits: [
      {
        title: "Get Best Price",
        description: "Share your trip and we'll come back with the best price.",
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
    title: "Car Rental Services",
    description:
      "Chauffeur-driven cars for every kind of trip. Pick a service and we'll open the booking form for you.",

    items: [
      {
        id: "round-trip",
        number: "01",
        title: "Outstation Round Trip",
        description:
          "There and back with the same car and chauffeur, with up to 5 stops along the way.",
        href: "/?trip=round-trip#booking",
      },
      {
        id: "one-way",
        number: "02",
        title: "One Way Drop",
        description:
          "City-to-city drops anywhere in India. Pay for one way, not the return.",
        href: "/?trip=one-way#booking",
      },
      {
        id: "local",
        number: "03",
        title: "Hourly Rental",
        description:
          "A car and chauffeur at your disposal: 4 hrs / 40 km, 8 hrs / 80 km or 12 hrs / 120 km.",
        href: "/?trip=local#booking",
      },
      {
        id: "airport",
        number: "04",
        title: "Airport Transfer",
        description:
          "Pickups and drops at major airports, straight to or from your exact address.",
        href: "/?trip=airport#booking",
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
        title: "Essential Sedans",
        vehicles: ["Maruti Suzuki Dzire", "Honda Amaze"],
      },
      {
        id: "premium-sedans",
        title: "Executive Sedans",
        vehicles: ["Honda City", "Maruti Suzuki Ciaz"],
      },
      {
        id: "premium-suvs",
        title: "Premium SUVs & MUVs",
        vehicles: ["Toyota Innova Hycross", "Maruti Suzuki Invicto"],
      },
      {
        id: "green-fleet",
        title: "Green Fleet (EVs)",
        vehicles: ["Premium Electric SUVs"],
      },
      {
        id: "luxury-fleet",
        title: "Luxury Series",
        vehicles: ["Mercedes-Benz", "BMW", "Audi"],
      },
    ],
  },

  browseFleet: {
    id: "fleet",
    title: "Browse Our Fleet",
    description:
      "Five classes, one standard. Every vehicle is professionally detailed and safety-checked before it reaches you.",

    viewAllLabel: "View All Models",
    viewAllHref: "#fleet",

    collections: [
      {
        id: "premium",
        category: "Executive Choice",
        title: "Executive Sedans",
        tier: "Executive",
        description:
          "Honda City, Maruti Suzuki Ciaz — the standard of corporate efficiency and comfort.",
        image: "/fleet/cars/city.jpg",
        href: "/fleet/premium-sedans",
      },
      {
        id: "luxury",
        category: "Marquee Brands",
        title: "Luxury Series",
        tier: "Luxury",
        description:
          "Mercedes-Benz, BMW, Audi — first-class experience with signature chauffeur service.",
        image: "/fleet/cars/e-class.jpg",
        href: "/fleet/luxury-fleet",
      },
      {
        id: "economy",
        category: "Reliable Utility",
        title: "Essential Sedans",
        tier: "Essential",
        description:
          "Maruti Suzuki Dzire, Honda Amaze — reliable and cost-effective daily travel solutions.",
        image: "/fleet/cars/dzire.jpg",
        href: "/fleet/compact-sedans",
      },
    ],
  },

  velvetServiceSection: {
    id: "corporate-velvet-service",
    title: "Corporate & PSU Velvet Service",
    description:
      "Velvet Corporate: a dedicated account manager, consolidated billing and protocol-ready travel for PSUs and corporates.",
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
        title: "Consolidated Billing",
        description: "Transparent reporting and invoices.",
        icon: <CustmizedBillingIcon />,
      },
      {
        id: "high-security",
        title: "High-Security",
        description: "Strict mobility protocol compliance.",
        icon: <LuShieldCheck />,
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
    title: "Trusted by 70+ PSUs, Corporates & Government Bodies",
    description: "Serving leading public sector enterprises across the nation.",

    organizations: [
      {
        id: "tribal",
        name: "Ministry of Tribal Affairs",
        logo: "/logos/tribal.png",
      },
      { id: "sai", name: "SAI", logo: "/logos/sai.png" },
      { id: "mca", name: "MCA", logo: "/logos/mca.png" },
      { id: "stpi", name: "STPI", logo: "/logos/stpi.jpeg" },
      { id: "rdso", name: "RDSO", logo: "/logos/rdso.png" },
      { id: "nsdc", name: "NSDC", logo: "/logos/nsdc.png" },
      { id: "cci", name: "CCI", logo: "/logos/cci.png" },
      { id: "dvc", name: "DVC", logo: "/logos/dvc.png" },
      { id: "dfccil", name: "DFCCIL", logo: "/logos/dfccil.png" },
      { id: "gnida", name: "GNIDA", logo: "/logos/gnida.png" },
      { id: "aai", name: "AAI", logo: "/logos/aai.png" },
      { id: "ncrtc", name: "NCRTC", logo: "/logos/ncrtc.png" },
      { id: "dopt", name: "DOPT", logo: "/logos/dopt.png" },
      { id: "eil", name: "EIL", logo: "/logos/eil.png" },
      { id: "ncpcr", name: "NCPCR", logo: "/logos/ncpcr.png" },
      { id: "nbcc", name: "NBCC", logo: "/logos/nbcc.png" },
      { id: "concor", name: "CONCOR", logo: "/logos/concor.png" },
      { id: "msme", name: "MSME", logo: "/logos/msme.png" },
      { id: "iocl", name: "IOCL", logo: "/logos/iocl.png" },
      { id: "rpf", name: "RPF", logo: "/logos/rpf.png" },
      { id: "niesbud", name: "NIESBUD", logo: "/logos/niesbud.png" },
      { id: "dahd", name: "DAHD", logo: "/logos/dahd.png" },
      { id: "irieen", name: "IRIEEN", logo: "/logos/irieen.png" },

      { id: "gail", name: "GAIL", logo: "/logos/gail.png" },
      { id: "ircon", name: "IRCON", logo: "/logos/ircon.png" },
      { id: "npcil", name: "NPCIL", logo: "/logos/npcil.png" },
      { id: "thdc", name: "THDC", logo: "/logos/thdc.png" },
      { id: "bpcl", name: "BPCL", logo: "/logos/bpcl.png" },

      { id: "cdac", name: "CDAC", logo: "/logos/cdac.png" },
    ],
  },

  finalCta: {
    title: "Ready to Experience the Velvet Standard?",
    description:
      "We are committed to creating unparalleled experiences for retail and corporate clients. Book your premium journey today.",

    contactDetails: [
      ...contact.phone.map((phone) => ({
        label: phone,
        href: contact.callCta,
        icon: <CallIcon />,
      })),
      {
        label: contact.email,
        href: contact.emailCta,
        icon: <MailIcon />,
      },
      {
        label: contact.address,
        href: contact.addressLink,
        icon: <LuMapPin />,
      },
    ],
  },
};
