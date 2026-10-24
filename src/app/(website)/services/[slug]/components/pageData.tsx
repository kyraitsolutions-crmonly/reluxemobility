import { ServiceDetailData } from "@/@types/servicesPageType";
import {
  LuCalendarClock,
  LuClock,
  LuHeadset,
  LuMapPinned,
  LuPlane,
  LuRoute,
  LuShieldCheck,
  LuShieldHalf,
  LuUsers,
  LuWifi
} from "react-icons/lu";

export const serviceDetailSharedData = {
  howItWorks: {
    eyebrow: "The Reluxe Experience",
    title: "How It Works",
    steps: [
      {
        id: "reservation",
        title: "Reservation",
        description:
          "Book online or via our 24/7 concierge. Specify your service level and any specific requirements for the day.",
      },
      {
        id: "arrival",
        title: "Arrival",
        description:
          "Receive your chauffeur's details 30 minutes prior. Your vehicle arrives 15 minutes early, groomed to perfection.",
      },
      {
        id: "journey",
        title: "The Journey",
        description:
          'Experience the "Velvet Touch." Whether you need silence for a call or local insights, your chauffeur adapts to your mood.',
      },
      {
        id: "completion",
        title: "Completion",
        description:
          "Automated billing ensures a seamless exit. Receive a detailed trip report and tax-compliant invoice instantly.",
      },
    ],
  },

  booking: {
    id: "book",
    title: "Ready to Book Your Journey?",
    description:
      "Experience mobility that matches your standard. Complete the brief form, and our concierge will confirm your chauffeur within 15 minutes.",
    assurances: [
      {
        id: "priority-assistance",
        title: "Priority Assistance",
        description: "Dedicated support for institutional bookings.",
        icon: <LuHeadset />,
      },
      {
        id: "secure-protocol",
        title: "Secure Protocol",
        description: "Fully vetted chauffeurs and encrypted data.",
        icon: <LuShieldHalf />,
      },
    ],
    vehicleClasses: [
      "Luxury Fleet (Mercedes-Benz, BMW, Audi)",
      "Premium Sedans (Honda City, Maruti Suzuki Ciaz)",
      "Premium SUVs / MUVs (Innova Hycross, Invicto)",
      "Green Fleet (Premium Electric SUVs)",
      "Compact / Sedans (Dzire, Amaze)",
    ],
    submitLabel: "Confirm Inquiry",
  },

  otherServices: {
    title: "Other Mobility Solutions",
    description: "Explore our range of bespoke services for every professional need.",
    linkLabel: "View Service",
  },
};

export const serviceDetailPageData: ServiceDetailData[] = [
  {
    slug: "hourly-rental",
    metaData: {
      title: "Hourly & City Rentals",
      description:
        "Chauffeur-driven hourly car rentals with 4h/40km, 8h/80km and full-day packages. Flexible, as-directed city travel with the Reluxe Velvet Service.",
      keyWords: ["hourly car rental", "city car rental with driver", "chauffeur on hourly basis", "4 hours 40 km cab", "8 hours 80 km car rental"],
    },
    hero: {
      eyebrow: "Premium Mobility Solution",
      title: "Hourly & City",
      highlight: "Rentals",
      description:
        "Unparalleled flexibility for the discerning professional. Our city rentals provide a seamless transition between engagements with a dedicated chauffeur at your disposal.",
      image: "/im-1.jpg",
    },
    card: {
      title: "Hourly & City Rentals",
      description: "A dedicated chauffeur at your disposal, by the hour.",
      image: "/fleet/cars/city.jpg",
    },
    overview: {
      title: "Redefining Urban Flexibility",
      paragraphs: [
        'Reluxe Mobility\'s Hourly Rental service is designed for those whose schedules demand both precision and adaptability. Whether it\'s a day of high-stakes corporate meetings across the city or a personalized shopping excursion, our "As-Directed" service ensures your vehicle is always waiting, just steps away.',
        'Every journey is supported by our signature "Velvet Service" standards. This means a meticulously sanitized vehicle, a uniformed chauffeur who understands the nuances of executive etiquette, and a silent, comfortable cabin that serves as your mobile office.',
      ],
      features: [
        {
          id: "on-demand-readiness",
          title: "On-Demand Readiness",
          description:
            "No need to book multiple trips. Your chauffeur stays with you for the duration of your booking, ready to depart at a moment's notice.",
          icon: <LuClock />,
        },
        {
          id: "flexible-itineraries",
          title: "Flexible Itineraries",
          description:
            "Change your destination or add stops in real-time. Our chauffeurs are equipped with live traffic data to ensure optimal routing.",
          icon: <LuRoute />,
        },
        {
          id: "mobile-executive-suite",
          title: "Mobile Executive Suite",
          description:
            "Stay productive with high-speed Wi-Fi, charging ports, and a quiet environment designed for confidential discussions.",
          icon: <LuWifi />,
        },
        {
          id: "professional-discretion",
          title: "Professional Discretion",
          description:
            "Our chauffeurs are trained in high-security protocols and non-disclosure standards, ensuring absolute privacy for our guests.",
          icon: <LuShieldCheck />,
        },
      ],
    },
    packages: {
      title: "Service Packages",
      items: [
        { id: "half-day", label: "Business Half-Day", value: "4 Hours / 40 Kilometers" },
        { id: "executive-day", label: "Executive Day", value: "8 Hours / 80 Kilometers" },
        { id: "full-day", label: "Full-Day Package", value: "Extended Full-Day Usage" },
      ],
      inclusions: [
        "Complimentary bottled water & wipes",
        "Real-time GPS tracking link for guests",
        "Toll & Parking management included",
      ],
    },
  },

  {
    slug: "airport-transfers",
    metaData: {
      title: "Airport Transfers",
      description:
        "Punctual chauffeur-driven airport transfers with real-time flight tracking, meet & greet and complimentary waiting time.",
      keyWords: ["airport transfer", "airport pickup and drop", "airport cab with chauffeur", "meet and greet airport", "corporate airport transfer"],
    },
    hero: {
      eyebrow: "Premium Mobility Solution",
      title: "Airport",
      highlight: "Transfers",
      description:
        "Guaranteed punctuality for your critical departures and arrivals. We track your flight so your chauffeur is waiting before you land.",
      image: "/fleet/1.png",
    },
    card: {
      title: "Airport Transfers",
      description: "Guaranteed punctuality for your critical departures.",
      image: "/fleet/1.png",
    },
    overview: {
      title: "Terminal to Destination, Seamlessly",
      paragraphs: [
        "Punctuality is our signature. Our operations desk monitors flight timings in real time, automatically adjusting your pickup for early arrivals and delays, so your chauffeur is always waiting — never the other way round.",
        'Our "Meet & Greet" service provides a seamless transition from the terminal to the comfort of your private vehicle. Your chauffeur meets you at arrivals with a name board, handles your luggage, and has you on your way in minutes.',
      ],
      features: [
        {
          id: "flight-tracking",
          title: "Live Flight Tracking",
          description:
            "Pickups adjust automatically to early arrivals and delays — no calls or rebooking needed.",
          icon: <LuPlane />,
        },
        {
          id: "meet-and-greet",
          title: "Meet & Greet",
          description:
            "Your chauffeur waits at arrivals with a personalized name board and assists with all luggage.",
          icon: <LuUsers />,
        },
        {
          id: "complimentary-waiting",
          title: "Complimentary Waiting",
          description:
            "Up to 60 minutes of free waiting time on arrivals for immigration, baggage claim and customs.",
          icon: <LuClock />,
        },
        {
          id: "secure-transfers",
          title: "Secure Transfers",
          description:
            "Vetted chauffeurs and GPS-tracked vehicles, with live trip links you can share with colleagues or family.",
          icon: <LuShieldCheck />,
        },
      ],
    },
    packages: {
      title: "Transfer Options",
      items: [
        { id: "departure", label: "Airport Drop", value: "Doorstep to Departures" },
        { id: "arrival", label: "Airport Pickup", value: "Meet & Greet at Arrivals" },
        { id: "round-trip", label: "Round Trip", value: "Drop & Return Pickup" },
      ],
      inclusions: [
        "Up to 60 minutes complimentary waiting",
        "Flight delay tracking & automatic adjustment",
        "Luggage assistance from professional chauffeurs",
      ],
    },
  },

  {
    slug: "outstation-travel",
    metaData: {
      title: "Outstation Travel",
      description:
        "One-way and round-trip intercity travel with experienced highway chauffeurs, premium vehicles and 24/7 roadside support.",
      keyWords: ["outstation cab", "intercity car rental", "one way cab", "round trip car rental", "outstation chauffeur"],
    },
    hero: {
      eyebrow: "Premium Mobility Solution",
      title: "Outstation",
      highlight: "Travel",
      description:
        "Long-distance excellence with elite highway chauffeurs. Travel across cities in comfort, with the peace of mind that only an expert can provide.",
      image: "/fleet/7.png",
    },
    card: {
      title: "Outstation Travel",
      description: "Long-distance excellence with elite highway chauffeurs.",
      image: "/fleet/cars/innova-hycross.jpg",
    },
    overview: {
      title: "The Open Road, Elevated",
      paragraphs: [
        "Our outstation service is designed for long-distance comfort. Whether it's a site visit in a neighbouring city, a weekend family trip or a multi-day business tour, we pair you with a high-spec vehicle and a chauffeur trained for highway safety and regional navigation.",
        "Every route is planned in advance with scheduled rest stops, and our 24/7 command center tracks your journey from departure to arrival — so you can work, rest or simply enjoy the view.",
      ],
      features: [
        {
          id: "highway-specialists",
          title: "Highway Specialists",
          description:
            "Verified, background-checked chauffeurs with extensive intercity and defensive-driving experience.",
          icon: <LuRoute />,
        },
        {
          id: "planned-routes",
          title: "Planned Routes",
          description:
            "Optimal routing with pre-planned rest and refreshment stops for a relaxed long-distance journey.",
          icon: <LuMapPinned />,
        },
        {
          id: "roadside-support",
          title: "24/7 Roadside Support",
          description:
            "Round-the-clock assistance and a backup vehicle network for complete peace of mind.",
          icon: <LuHeadset />,
        },
        {
          id: "flexible-trips",
          title: "Flexible Trips",
          description:
            "One-way, round-trip and multi-day itineraries, with your chauffeur staying with you throughout.",
          icon: <LuCalendarClock />,
        },
      ],
    },
    packages: {
      title: "Trip Options",
      items: [
        { id: "one-way", label: "One-Way Transfer", value: "Single Intercity Drop" },
        { id: "round-trip", label: "Round Trip", value: "Same-Day Return Journey" },
        { id: "multi-day", label: "Multi-Day Tour", value: "Chauffeur Stays With You" },
      ],
      inclusions: [
        "Verified highway-specialist chauffeurs",
        "24/7 roadside assistance & GPS tracking",
        "Transparent tolls, permits & driver allowance",
      ],
    },
  },

];
