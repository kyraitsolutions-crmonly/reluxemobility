import { FleetCategoryData } from "@/@types/fleetPageType";
import {
  LuBatteryCharging,
  LuBriefcase,
  LuGauge,
  LuUsers,
  LuWifi,
} from "react-icons/lu";

const bookHref = "/contact-us#contact";

// shared across every fleet category page
export const fleetCategorySharedData = {
  modelShowcase: {
    eyebrow: "Available Models",
    title: "Select Your Vehicle",
  },

  signatureEvent: {
    title: "Every Journey is",
    highlight: "A Signature Event",
    image: "/home/psu.png",
    points: [
      "Real-time GPS tracking for guests",
      "Complimentary bottled water & morning newspapers",
      "Flight delay monitoring & adjustments",
    ],
    button: {
      label: "Inquire About Corporate Rates",
      href: "/contact-us#contact",
    },
  },

  discoverMore: {
    title: "Discover More Mobility",
    description: "Explore our diverse fleet tailored for every travel need.",
  },
};

export const fleetCategoryPageData: FleetCategoryData[] = [
  {
    slug: "compact-sedans",
    metaData: {
      title: "Compact Sedans",
      description:
        "Reliable, cost-effective compact sedans with professional chauffeurs for daily city travel — Maruti Suzuki Dzire, Honda Amaze and more.",
      keyWords: ["compact sedan rental", "chauffeur driven sedan", "city car rental", "Dzire rental", "Amaze rental"],
    },
    hero: {
      title: "The",
      highlight: "Compact Collection",
      description:
        "Smart, efficient and always dependable. Our compact sedans deliver the Reluxe standard of service for everyday city commutes and budget-conscious business travel.",
      image: "/home/hero.jpg",
    },
    card: {
      title: "Compact Sedans",
      tagline: "Smart & Efficient",
      image: "/home/economy.png",
    },
    highlights: [
      {
        id: "everyday-value",
        title: "Everyday Value",
        description:
          "Transparent, cost-effective pricing designed for frequent city travel, staff movement and short business hops.",
      },
      {
        id: "city-ready",
        title: "City Ready",
        description:
          "Compact footprints make light work of dense traffic and tight parking, so you reach meetings on time.",
      },
      {
        id: "velvet-touch",
        title: "Velvet Touch",
        description:
          "The same spotless cabins and uniformed, courteous chauffeurs that define every Reluxe journey.",
      },
    ],
    models: [
      {
        id: "maruti-dzire",
        name: "Maruti Suzuki Dzire",
        badge: "Most Booked",
        description:
          "India's favourite compact sedan. A comfortable rear bench, efficient engine and smooth ride make it ideal for daily city travel.",
        image: "/home/economy.png",
        specs: [
          { label: "Capacity", value: "4 Passengers", icon: <LuUsers /> },
          { label: "Luggage", value: "2 Medium", icon: <LuBriefcase /> },
          { label: "Efficiency", value: "Petrol / CNG", icon: <LuGauge /> },
        ],
        tags: ["Climate Control", "Charging Ports", "Bottled Water"],
        specifications: [
          "Automatic climate control",
          "USB charging for rear passengers",
          "Sanitized after every trip",
          "GPS-tracked with live trip sharing",
        ],
        bookLabel: "Book Dzire",
        bookHref,
      },
      {
        id: "honda-amaze",
        name: "Honda Amaze",
        description:
          "Refined and roomy for its class, the Amaze pairs Honda reliability with a quiet cabin for relaxed short-distance journeys.",
        image: "/home/economy.png",
        specs: [
          { label: "Capacity", value: "4 Passengers", icon: <LuUsers /> },
          { label: "Luggage", value: "2 Medium", icon: <LuBriefcase /> },
          { label: "Efficiency", value: "Petrol", icon: <LuGauge /> },
        ],
        tags: ["Climate Control", "Charging Ports", "Quiet Cabin"],
        specifications: [
          "Spacious rear legroom",
          "USB charging for rear passengers",
          "Sanitized after every trip",
          "GPS-tracked with live trip sharing",
        ],
        bookLabel: "Book Amaze",
        bookHref,
      },
    ],
    signatureDescription:
      'Even our most accessible category comes with the Velvet Service protocol as standard. Your chauffeur will arrive 15 minutes early, impeccably attired, and briefed on your itinerary.',
  },

  {
    slug: "premium-sedans",
    metaData: {
      title: "Premium Sedans",
      description:
        "Chauffeur-driven premium sedans for business travel and airport transfers — Honda City and Maruti Suzuki Ciaz with the Reluxe Velvet Service.",
      keyWords: ["premium sedan rental", "executive car hire", "Honda City rental", "Ciaz rental", "corporate car rental"],
    },
    hero: {
      title: "The",
      highlight: "Premium Sedans",
      description:
        "The standard of corporate efficiency and comfort. Spacious, refined sedans that keep executives productive between meetings and airport runs.",
      image: "/home/hero.jpg",
    },
    card: {
      title: "Premium Sedans",
      tagline: "Everyday Excellence",
      image: "/home/premium.png",
    },
    highlights: [
      {
        id: "executive-comfort",
        title: "Executive Comfort",
        description:
          "Generous rear legroom, plush seating and a calm cabin — the ideal setting for calls and last-minute preparation.",
      },
      {
        id: "corporate-ready",
        title: "Corporate Ready",
        description:
          "The preferred choice for daily business travel, with standardized invoicing and monthly billing for partners.",
      },
      {
        id: "airport-specialist",
        title: "Airport Specialist",
        description:
          "Large boots and flight-tracked scheduling make these sedans our most requested choice for airport transfers.",
      },
    ],
    models: [
      {
        id: "honda-city",
        name: "Honda City",
        badge: "Most Requested",
        description:
          "An executive favourite. The City combines a long wheelbase, premium interiors and a whisper-quiet ride for relaxed business travel.",
        image: "/home/premium.png",
        specs: [
          { label: "Capacity", value: "4 Passengers", icon: <LuUsers /> },
          { label: "Luggage", value: "2 Large", icon: <LuBriefcase /> },
          { label: "Wi-Fi", value: "4G Hotspot", icon: <LuWifi /> },
        ],
        tags: ["Sunroof", "Rear AC Vents", "Refreshments"],
        specifications: [
          "Rear AC vents and reading lamps",
          "In-car Wi-Fi hotspot",
          "Complimentary water and newspapers",
          "Flight-tracked airport pickups",
        ],
        bookLabel: "Book City",
        bookHref,
      },
      {
        id: "maruti-ciaz",
        name: "Maruti Suzuki Ciaz",
        description:
          "Class-leading rear space and a smooth, efficient drivetrain. The Ciaz is built for long city days and comfortable intercity hops.",
        image: "/home/premium.png",
        specs: [
          { label: "Capacity", value: "4 Passengers", icon: <LuUsers /> },
          { label: "Luggage", value: "2 Large", icon: <LuBriefcase /> },
          { label: "Efficiency", value: "Smart Hybrid", icon: <LuGauge /> },
        ],
        tags: ["Rear AC Vents", "Charging Ports", "Daily Press"],
        specifications: [
          "Best-in-class rear legroom",
          "USB charging for all passengers",
          "Complimentary water and newspapers",
          "GPS-tracked with live trip sharing",
        ],
        bookLabel: "Book Ciaz",
        bookHref,
      },
    ],
    signatureDescription:
      'Booking from our Premium Sedans guarantees the "Velvet Service" protocol as standard. Your chauffeur will arrive 15 minutes early, impeccably attired, and briefed on your specific itinerary and preferences.',
  },

  {
    slug: "premium-suvs",
    metaData: {
      title: "Premium SUVs & MUVs",
      description:
        "Spacious chauffeur-driven SUVs and MUVs for teams, families and outstation travel — Toyota Innova Hycross and Maruti Suzuki Invicto.",
      keyWords: ["SUV rental", "MUV rental", "Innova Hycross rental", "Invicto rental", "group travel car hire"],
    },
    hero: {
      title: "The",
      highlight: "Executive SUVs",
      description:
        "Spacious and commanding. Our premium SUVs and MUVs carry teams, families and luggage in comfort — in the city or on the highway.",
      image: "/home/hero.jpg",
    },
    card: {
      title: "Executive SUVs",
      tagline: "Spacious & Commanding",
      image: "/home/psu.png",
    },
    highlights: [
      {
        id: "room-for-everyone",
        title: "Room for Everyone",
        description:
          "Up to six passengers with captain seats and space for full-size luggage — ideal for delegations and family travel.",
      },
      {
        id: "highway-capable",
        title: "Highway Capable",
        description:
          "Strong, stable and refined at speed, with chauffeurs specially trained for long-distance and outstation routes.",
      },
      {
        id: "hybrid-efficiency",
        title: "Hybrid Efficiency",
        description:
          "Our strong-hybrid MUVs cut fuel use and emissions while keeping the cabin noticeably quieter.",
      },
    ],
    models: [
      {
        id: "toyota-innova-hycross",
        name: "Toyota Innova Hycross",
        badge: "Most Requested",
        description:
          "The benchmark for premium group travel. Ottoman-style captain seats, a panoramic roof and Toyota's strong-hybrid powertrain.",
        image: "/home/psu.png",
        specs: [
          { label: "Capacity", value: "6 Passengers", icon: <LuUsers /> },
          { label: "Luggage", value: "4 Large", icon: <LuBriefcase /> },
          { label: "Powertrain", value: "Strong Hybrid", icon: <LuGauge /> },
        ],
        tags: ["Captain Seats", "Panoramic Roof", "Rear AC"],
        specifications: [
          "Ottoman captain seats with leg rests",
          "Multi-zone rear air-conditioning",
          "USB charging in every row",
          "Ideal for outstation and group travel",
        ],
        bookLabel: "Book Hycross",
        bookHref,
      },
      {
        id: "maruti-invicto",
        name: "Maruti Suzuki Invicto",
        badge: "Hybrid Available",
        description:
          "Premium comfort for every row. The Invicto offers generous space, a hushed hybrid drive and a feature-rich cabin.",
        image: "/home/psu.png",
        specs: [
          { label: "Capacity", value: "6 Passengers", icon: <LuUsers /> },
          { label: "Luggage", value: "4 Large", icon: <LuBriefcase /> },
          { label: "Powertrain", value: "Strong Hybrid", icon: <LuGauge /> },
        ],
        tags: ["Captain Seats", "Ambient Lighting", "Quiet Drive"],
        specifications: [
          "Captain seats in the second row",
          "Ambient cabin lighting",
          "USB charging in every row",
          "GPS-tracked with live trip sharing",
        ],
        bookLabel: "Book Invicto",
        bookHref,
      },
    ],
    signatureDescription:
      'Booking from our Executive SUVs guarantees the "Velvet Service" protocol as standard. Your chauffeur will arrive 15 minutes early, assist with luggage, and be fully briefed on your route and stops.',
  },

  {
    slug: "green-fleet",
    metaData: {
      title: "Green Fleet (EVs)",
      description:
        "Zero-emission premium electric SUVs with professional chauffeurs. Sustainable corporate mobility that supports your ESG goals.",
      keyWords: ["electric car rental", "EV chauffeur service", "green fleet", "zero emission corporate travel", "ESG mobility"],
    },
    hero: {
      title: "The",
      highlight: "Green Fleet",
      description:
        "Sustainable luxury without compromise. Silent, zero-emission premium electric SUVs that help your organization travel responsibly.",
      image: "/home/hero.jpg",
    },
    card: {
      title: "Green Fleet",
      tagline: "Zero-Emission EV",
      image: "/home/premium.png",
    },
    highlights: [
      {
        id: "zero-emissions",
        title: "Zero Emissions",
        description:
          "A pure electric drivetrain with no tailpipe emissions — cleaner air for the cities we serve.",
      },
      {
        id: "silent-cabins",
        title: "Silent Cabins",
        description:
          "Near-silent running gives you enhanced acoustic privacy for confidential calls and executive meetings.",
      },
      {
        id: "esg-goals",
        title: "ESG Ready",
        description:
          "Zero-emission luxury transport that helps corporate partners meet their ESG and sustainability goals.",
      },
    ],
    models: [
      {
        id: "premium-electric-suv",
        name: "Premium Electric SUV",
        badge: "Zero Emission",
        description:
          "Spacious premium electric SUVs with calm, modern cabins and near-silent running — sustainable luxury for full city days and executive travel.",
        image: "/home/premium.png",
        specs: [
          { label: "Capacity", value: "4 Passengers", icon: <LuUsers /> },
          { label: "Luggage", value: "2 Large", icon: <LuBriefcase /> },
          { label: "Drivetrain", value: "100% Electric", icon: <LuBatteryCharging /> },
        ],
        tags: ["Silent Cabin", "Zero Emission", "ESG Friendly"],
        specifications: [
          "100% electric, zero tailpipe emissions",
          "Near-silent cabin for confidential calls",
          "Charging planned around your itinerary",
          "Supports corporate ESG goals",
        ],
        bookLabel: "Book an EV",
        bookHref,
      },
    ],
    signatureDescription:
      'Booking from our Green Fleet guarantees the "Velvet Service" protocol as standard — with every charge planned in advance, so your journey is never interrupted.',
  },

  {
    slug: "luxury-fleet",
    metaData: {
      title: "Luxury Series",
      description:
        "Ultra-luxury chauffeur-driven sedans from Mercedes-Benz, BMW and Audi — signature Velvet Service for VIPs, dignitaries and corporate leaders.",
      keyWords: ["luxury car rental", "Mercedes-Benz rental", "BMW rental", "Audi rental", "VIP chauffeur service", "luxury chauffeur"],
    },
    hero: {
      title: "The",
      highlight: "Luxury Series",
      description:
        "Uncompromising sophistication for those who demand the finest. Our Luxury Series features flagship sedans from the world's most prestigious automotive houses.",
      image: "/home/hero.jpg",
    },
    card: {
      title: "Luxury Series",
      tagline: "Flagship Sedans",
      image: "/home/luxury.png",
    },
    highlights: [
      {
        id: "refined-experience",
        title: "Refined Experience",
        description:
          "Every vehicle in our Luxury Series is selected for its superior ride quality, acoustic insulation, and rear-cabin amenities. Designed specifically for corporate heads and VIP guests.",
      },
      {
        id: "sustainable-power",
        title: "Sustainable Power",
        description:
          "Our luxury fleet includes the latest Euro 6 compliant and Hybrid models, ensuring your premium travel footprint is as light as possible without sacrificing performance.",
      },
      {
        id: "velvet-protection",
        title: "Velvet Protection",
        description:
          "Includes specialized chauffeur training in security protocols, privacy management, and white-glove hospitality standards unique to Reluxe Mobility.",
      },
    ],
    models: [
      {
        id: "mercedes-benz",
        name: "Mercedes-Benz",
        code: "Luxury Sedan",
        badge: "Most Requested",
        description:
          "The undisputed benchmark of luxury mobility. A whisper-quiet rear cabin, premium leather seating and effortless ride comfort for corporate heads and VIP guests.",
        image: "/home/luxury.png",
        specs: [
          { label: "Capacity", value: "3 Passengers", icon: <LuUsers /> },
          { label: "Luggage", value: "2 Large + 1 Small", icon: <LuBriefcase /> },
          { label: "Wi-Fi", value: "Onboard", icon: <LuWifi /> },
        ],
        tags: ["Rear Comfort", "Privacy", "Refreshments"],
        specifications: [
          "Premium leather rear seating",
          "Rear climate control",
          "Complimentary refreshments",
          "Security-trained, uniformed chauffeur",
        ],
        bookLabel: "Book Mercedes-Benz",
        bookHref,
      },
      {
        id: "bmw",
        name: "BMW",
        code: "Executive Luxury",
        description:
          "A masterclass in technological luxury. A dynamic yet serene environment, perfect for the executive who values modern design and connectivity.",
        image: "/home/luxury.png",
        specs: [
          { label: "Capacity", value: "3 Passengers", icon: <LuUsers /> },
          { label: "Luggage", value: "2 Large + 1 Small", icon: <LuBriefcase /> },
          { label: "Wi-Fi", value: "Onboard", icon: <LuWifi /> },
        ],
        tags: ["Connectivity", "Quiet Drive", "Refreshments"],
        specifications: [
          "Premium leather rear seating",
          "Charging for all passengers",
          "Complimentary refreshments",
          "Security-trained, uniformed chauffeur",
        ],
        bookLabel: "Book BMW",
        bookHref,
      },
      {
        id: "audi",
        name: "Audi",
        code: "Luxury Sedan",
        description:
          "Understated, progressive luxury. A calm, beautifully finished cabin and composed ride for discreet executive and VIP travel.",
        image: "/home/luxury.png",
        specs: [
          { label: "Capacity", value: "3 Passengers", icon: <LuUsers /> },
          { label: "Luggage", value: "2 Large + 1 Small", icon: <LuBriefcase /> },
          { label: "Wi-Fi", value: "Onboard", icon: <LuWifi /> },
        ],
        tags: ["Rear Comfort", "Discreet", "Refreshments"],
        specifications: [
          "Premium leather rear seating",
          "Rear climate control",
          "Complimentary refreshments",
          "Security-trained, uniformed chauffeur",
        ],
        bookLabel: "Book Audi",
        bookHref,
      },
    ],
    signatureDescription:
      'Booking from the Luxury Series guarantees our "Velvet Service" protocol as standard. Your chauffeur will arrive 15 minutes early, impeccably attired, and briefed on your specific itinerary and preferences.',
  },
];
