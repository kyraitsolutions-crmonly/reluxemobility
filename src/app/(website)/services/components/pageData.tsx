import { LuHeadset, LuShieldCheck, LuSparkles, LuUserCheck } from "react-icons/lu";

const bookingHref = "/contact-us#contact";

export const servicesPageData = {
  hero: {
    eyebrow: "The Velvet Service Experience",
    title: "Our Premium Mobility Services",
    description:
      "Discover a suite of tailored transport solutions designed for excellence, whether you are a corporate executive, a government entity, or a discerning retail traveler.",
    image: "/home/hero.jpg",
    buttons: [
      {
        label: "Book Your Ride",
        href: bookingHref,
      },
      {
        label: "Download Brochure",
        href: "#",
      },
    ],
  },

  serviceDetails: {
    items: [
      {
        id: "hourly-rental",
        eyebrow: "Service 01",
        title: "Hourly & City Rental",
        description:
          "Experience ultimate flexibility with our local rental packages. Whether it's a quick business meeting across town or a full day of shopping and site visits, our chauffeurs ensure you move at your own pace without the stress of parking or navigation.",
        points: [
          "Packages starting from 4h/40km and 8h/80km",
          "Unlimited extensions available on request",
          "Spotless interiors for a fresh start every time",
        ],
        button: {
          label: "Learn More",
          href: "/services/hourly-rental",
        },
        image: "/fleet/cars/city.jpg",
      },
      {
        id: "airport-transfers",
        eyebrow: "Service 02",
        title: "Airport Transfers",
        description:
          'Punctuality is our signature. We monitor flight timings in real-time to ensure your chauffeur is waiting for you before you even land. Our "Meet & Greet" service provides a seamless transition from terminal to the comfort of your private vehicle.',
        points: [
          "Flight delay tracking & automatic adjustment",
          "Complimentary waiting time (up to 60 mins)",
          "Luggage assistance from professional chauffeurs",
        ],
        button: {
          label: "Book Transfer",
          href: "/services/airport-transfers",
        },
        image: "/fleet/cars/e-class.jpg",
      },
      {
        id: "outstation-travel",
        eyebrow: "Service 03",
        title: "Outstation Travel",
        description:
          "Travel across cities with the peace of mind that only an expert can provide. Our outstation service is designed for long-distance comfort, featuring high-spec vehicles and drivers trained for highway safety and regional navigation.",
        points: [
          "One-way and round-trip intercity options",
          "Verified and background-checked highway specialists",
          "24/7 Roadside assistance and GPS tracking",
        ],
        button: {
          label: "Plan Intercity Trip",
          href: "/services/outstation-travel",
        },
        image: "/fleet/cars/innova-hycross.jpg",
      },
      {
        id: "corporate-psu",
        eyebrow: "Service 04",
        title: "Corporate & PSU Velvet Service",
        description:
          "We specialize in serving the unique needs of Public Sector Undertakings (PSUs) and major corporations. Our Velvet Standard ensures full compliance with institutional travel policies, secure billing, and high-security protocols for high-profile officials.",
        points: [
          "Dedicated corporate portal for easy bookings",
          "Standardized invoicing and MIS reporting",
          "High-Security protocols for VIP mobility",
        ],
        button: {
          label: "Get Corporate Access",
          href: "/services/corporate-psu",
        },
        stats: [
          { value: "15+", label: "Major PSUs Served" },
          { value: "500+", label: "Corporate Partners" },
          { value: "100%", label: "Policy Compliance" },
          { value: "24/7", label: "Concierge Support" },
        ],
      },
    ],
  },

  velvetStandards: {
    title: "The Velvet Standards",
    description:
      "Our commitment to excellence is reflected in every touchpoint of your journey.",
    items: [
      {
        id: "spotless-cars",
        title: "Spotless Cars",
        description:
          "Daily professional detailing and deep sanitization protocols for a pristine environment.",
        icon: <LuSparkles />,
      },
      {
        id: "trained-chauffeurs",
        title: "Trained Chauffeurs",
        description:
          "Elite professionals trained in executive etiquette and defensive driving excellence.",
        icon: <LuUserCheck />,
      },
      {
        id: "real-time-support",
        title: "Real-time Support",
        description:
          "A dedicated operations desk monitoring every trip 24/7 to handle any situation.",
        icon: <LuHeadset />,
      },
      {
        id: "high-security",
        title: "High Security",
        description:
          "Advanced GPS tracking and vetted routes for complete safety and discretion.",
        icon: <LuShieldCheck />,
      },
    ],
  },

  bookingProcess: {
    title: "Simplicity in Motion",
    description:
      "Experience the luxury of ease. Our booking process is designed to save your time.",
    steps: [
      {
        id: "enquire",
        title: "Step 1: Enquire",
        description:
          "Share your requirements via our website portal, corporate dashboard, or a quick call to our 24/7 concierge.",
      },
      {
        id: "confirm",
        title: "Step 2: Confirm",
        description:
          "Receive instant quotations and vehicle details. Once approved, we assign your chauffeur and share the profile.",
      },
      {
        id: "ride",
        title: "Step 3: Ride",
        description:
          'Step into a sanitized vehicle, relax in the "Velvet Service" environment, and reach your destination with absolute ease.',
      },
    ],
  },

  finalCta: {
    title: 'Ready to Experience the <span class="text-accent">Velvet Standard</span>?',
    description:
      "Elevate your mobility today. Whether for business or personal travel, Reluxe Mobility is your partner in excellence.",
    buttons: [
      {
        label: "Book Your Service",
        href: bookingHref,
      },
      {
        label: "Talk to Sales",
        href: "/contact-us",
      },
    ],
  },
};
