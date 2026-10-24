import {
  LuBuilding2,
  LuCar,
  LuFileText,
  LuHeadset,
  LuShieldCheck,
  LuUserCheck,
} from "react-icons/lu";

export const corporatePageData = {
  metaData: {
    title: "Corporate Car Rental",
    description:
      "Corporate car rental and chauffeur services for companies, PSUs and government bodies — dedicated account managers, customized billing and Velvet Service standards.",
    keyWords: [
      "corporate car rental",
      "corporate cab service",
      "PSU car rental",
      "government vehicle hire",
      "employee transportation",
      "corporate chauffeur service",
    ],
  },

  hero: {
    eyebrow: "Corporate & PSU Velvet Service",
    title: "Corporate Car Rental,",
    highlight: "Done the Velvet Way",
    description:
      "One trusted mobility partner for your executives, employees and guests. Reliable chauffeur-driven travel with dedicated account management, customized billing and white-glove hospitality.",
    image: "/fleet/8.png",
    points: [
      "Dedicated account manager for your organization",
      "Customized billing with consolidated monthly invoices",
      "High-security protocol compliance for VIP movement",
    ],
    stats: [
      { value: "59", label: "PSUs & Government Bodies" },
      { value: "5", label: "Fleet Categories" },
      { value: "24/7", label: "Real-Time Support" },
    ],
    form: {
      title: "Help Us With Your Requirements",
      description:
        "Share a few details and our corporate desk will set up your account.",
      businessVolumes: [
        "Less than ₹50,000",
        "₹50,000 to ₹1,00,000",
        "₹1,00,000 to ₹5,00,000",
        "More than ₹5,00,000",
      ],
      submitLabel: "Request Corporate Account",
    },
  },

  trustedOrganizations: {
    title: "Trusted by Major PSUs & Government Bodies",
    description:
      "A proven track record serving leading public sector enterprises across the nation.",
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

  benefits: {
    eyebrow: "Why Reluxe for Business",
    title: "Built for Corporate Travel",
    description:
      "Everything your travel desk needs to move people reliably, securely and within policy.",
    items: [
      {
        id: "account-manager",
        title: "Dedicated Account Manager",
        description:
          "A single point of contact for bookings, special requests and escalations across all your locations.",
        icon: <LuUserCheck />,
      },
      {
        id: "customized-billing",
        title: "Customized Billing",
        description:
          "Consolidated monthly invoices, cost-center tagging and transparent trip-level reporting.",
        icon: <LuFileText />,
      },
      {
        id: "high-security",
        title: "High-Security Compliance",
        description:
          "Background-verified chauffeurs, GPS-tracked vehicles and strict protocols for senior officials.",
        icon: <LuShieldCheck />,
      },
      {
        id: "concierge-hospitality",
        title: "Concierge-Level Hospitality",
        description:
          "Uniformed, trained chauffeurs and spotless, sanitized cars — the Velvet Service standard on every trip.",
        icon: <LuBuilding2 />,
      },
      {
        id: "fleet-breadth",
        title: "Complete Fleet Range",
        description:
          "From everyday executive sedans and spacious MUVs to zero-emission EVs and ultra-luxury marquee brands.",
        icon: <LuCar />,
      },
      {
        id: "real-time-support",
        title: "Real-Time Support",
        description:
          "A dedicated operations desk monitoring every trip, with live tracking links for your travellers.",
        icon: <LuHeadset />,
      },
    ],
  },

  solutions: {
    title: "Corporate Mobility Solutions",
    description:
      "Flexible services that cover every way your organization travels.",
    linkLabel: "View Service",
    items: [
      {
        id: "executive-travel",
        title: "Executive & Daily Travel",
        description:
          "Hourly and full-day chauffeur packages for meetings, site visits and city travel.",
        image: "/fleet/cars/city.jpg",
        href: "/services/hourly-rental",
      },
      {
        id: "airport-transfers",
        title: "Airport Transfers",
        description:
          "Guaranteed on-time pickups and drops with live flight tracking.",
        image: "/fleet/6.png",
        href: "/services/airport-transfers",
      },
      {
        id: "outstation",
        title: "Intercity & Outstation",
        description:
          "One-way and round trips with experienced highway chauffeurs.",
        image: "/fleet/cars/innova-hycross.jpg",
        href: "/services/outstation-travel",
      },
      {
        id: "vip-movement",
        title: "VIP & Delegation Movement",
        description:
          "Secure, discreet mobility for senior officials and visiting delegations.",
        image: "/fleet/cars/e-class.jpg",
        href: "/services/corporate-psu",
      },
    ],
  },

  onboarding: {
    title: "Getting Started is Simple",
    description:
      "From first enquiry to your first ride, our corporate desk handles the details.",
    steps: [
      {
        id: "share-requirements",
        title: "Step 1: Share Requirements",
        description:
          "Tell us about your locations, travel volume and the vehicle categories your teams need.",
      },
      {
        id: "account-setup",
        title: "Step 2: Account Setup",
        description:
          "We agree rates and billing terms, assign your account manager and onboard your travel desk.",
      },
      {
        id: "book-and-ride",
        title: "Step 3: Book & Ride",
        description:
          "Book through your account manager or our concierge, with monthly invoices and trip reports.",
      },
    ],
  },

  faqSection: {
    title: "Corporate Rental FAQs",
    description:
      "Answers to common questions from travel desks and admin teams.",
    items: [
      {
        id: "who-can-apply",
        question: "Who can open a corporate account?",
        answer:
          "Companies, PSUs, government bodies and institutions with regular travel needs. Share your requirements using the form and our corporate desk will get in touch.",
      },
      {
        id: "billing",
        question: "How does corporate billing work?",
        answer:
          "Corporate accounts receive consolidated monthly invoices with trip-level details, and billing can be customized to match your approval and cost-center structure.",
      },
      {
        id: "security",
        question: "Do you support high-security travel for officials?",
        answer:
          "Yes. Our Velvet Service includes background-verified chauffeurs, GPS-tracked vehicles and protocol-compliant movement for senior officials and VIP guests.",
      },
      {
        id: "ev-options",
        question: "Can we choose electric vehicles?",
        answer:
          "Yes. Our Green Fleet of premium electric SUVs helps organizations meet their sustainability and ESG goals without compromising on comfort.",
      },
    ],
  },

  finalCta: {
    title:
      'Move Your Organization the <span class="text-accent">Velvet Way</span>',
    description:
      "Partner with Reluxe Mobility for reliable, secure and luxury-first corporate travel.",
    buttons: [
      {
        label: "Request Corporate Account",
        href: "#corporate-enquiry",
      },
      {
        label: "Talk to Our Team",
        href: "/contact-us",
      },
    ],
  },
};
