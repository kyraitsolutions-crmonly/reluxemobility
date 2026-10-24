import { LuCircleHelp, LuCrown, LuWandSparkles } from "react-icons/lu";

export const aboutUsPageData = {
  hero: {
    eyebrow: "Redefining Premium Mobility",
    title: "Crafting Excellence in Every Mile",
    description:
      "Reluxe Mobility is a premier luxury transportation provider, dedicated to delivering seamless, reliable, and executive-level chauffeur services for both corporate and discerning individual travelers.",

    buttons: [
      {
        label: "Our Story",
        href: "#our-story",
      },
      {
        label: "Contact Us",
        href: "/contact-us",
      },
    ],

    image: "/fleet/10.png",
  },

  storySection: {
    id: "our-story",
    eyebrow: "Our Legacy & Mission",
    title: "Elevating Expectations Through Innovation and Care",

    paragraphs: [
      "Founded on the principle that mobility should be more than just transportation, Reluxe Mobility was established to redefine premium chauffeur-driven travel through innovation, comfort, and personalized care. With the support and experience of Khaira Tourist Services, Reluxe Mobility bridges the gap between efficiency and luxury, delivering a refined travel experience that prioritizes every passenger’s comfort, safety, and peace of mind.",

      'Our mission is to provide an unmatched “Velvet Experience” — a seamless fusion of a premium fleet, highly trained professionals, efficient fleet management, and a customer-first approach. At Reluxe Mobility, we believe every journey should reflect sophistication, reliability, and exceptional service, ensuring that each ride is as memorable as the destination itself.',
    ],

    image: "/im-4.jpg",

    statistics: [
      {
        id: "corporate-trips",
        value: "10k+",
        label: "Corporate Trips Monthly",
      },
      {
        id: "premium-fleet",
        value: "500+",
        label: "Premium Fleet Vehicles",
      },
    ],
  },

  corePillars: {
    title: "Our Core Pillars",
    description:
      "At the heart of Reluxe Mobility lies a commitment to three fundamental principles that define everything we do.",

    items: [
      {
        id: "reliability",
        title: "Reliability",
        description:
          "Unwavering punctuality and consistent performance. We understand that time is your most valuable asset, and we guard it fiercely.",
        icon: <LuCircleHelp />,
      },
      {
        id: "seamlessness",
        title: "Seamlessness",
        description:
          "From booking to drop-off, every touchpoint is designed to be frictionless. Our technology integrates deeply with your travel needs.",
        icon: <LuWandSparkles />,
      },
      {
        id: "luxury-first",
        title: "Luxury-First",
        description:
          "We don't just provide cars; we provide environments. High-quality interiors, premium amenities, and a quiet sanctuary from the world.",
        icon: <LuCrown />,
      },
    ],
  },

  velvetServiceStandard: {
    id: "velvet-standard",
    eyebrow: "Signature Standard",
    title: "The Velvet Service Standard",
    description:
      "Our signature \"Velvet Service\" isn't just a name — it's a meticulously engineered protocol for excellence. We've set the benchmark for white-glove corporate mobility.",

    image: "/im-10.jpg",

    features: [
      {
        id: "sanitized-fleet",
        title: "Spotless, Sanitized Fleet",
        description:
          "Strict hygiene protocols with daily professional detailing and multi-point safety checks.",
      },
      {
        id: "chauffeur-corps",
        title: "Elite Chauffeur Corps",
        description:
          "Trained in defensive driving, executive etiquette, and local navigation for a smooth ride.",
      },
      {
        id: "command-center",
        title: "24/7 Command Center",
        description:
          "Real-time GPS tracking and dedicated support teams available around the clock.",
      },
    ],

    testimonial: {
      eyebrow: "Verified Excellence",
      quote:
        "The attention to detail in their Velvet service is unlike anything we've experienced in corporate travel.",
    },
  },

  trustedOrganizations: {
    title: "Trusted by the Nation's Leading Entities",
    description:
      "Official Mobility Partners for Major PSUs & Government Bodies",

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
      "Book your premium journey today and discover why we are the preferred choice for government and corporate leaders.",

    buttons: [
      {
        label: "Book Your Ride Now",
        href: "/contact-us#contact",
      },
      {
        label: "View Pricing",
        href: "/pricing",
      },
    ],

    backgroundImage: "/im-5.jpg",
  },
};
