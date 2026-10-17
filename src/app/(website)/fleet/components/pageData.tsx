import {
  LuArmchair,
  LuBriefcase,
  LuGift,
  LuLeaf,
  LuNewspaper,
  LuPlug,
  LuSparkles,
  LuThermometer,
  LuUsers,
  LuWifi,
} from "react-icons/lu";

const bookingHref = "/contact-us#contact";

export const fleetPageData = {
  hero: {
    eyebrow: "The Reluxe Collection",
    title: "A Fleet for Every Journey",
    description:
      "From daily executive commutes to high-profile diplomatic arrivals, explore our curated selection of world-class vehicles maintained to the highest standards of excellence.",
    image: "/home/hero.jpg",
  },

  fleetShowcase: {
    id: "fleet-showcase",
    allLabel: "All Vehicles",
    ctaLabel: "Choose This Ride",
    ctaHref: bookingHref,

    categories: [
      {
        id: "compact-sedans",
        label: "Compact & Sedans",
        title: "Everyday Executive",
        description: "Reliable, cost-effective sedans for daily city travel.",
        vehicles: [
          {
            id: "maruti-dzire",
            name: "Maruti Suzuki Dzire",
            type: "Compact Sedan",
            image: "/home/economy.png",
            features: [
              { label: "4 Passengers", icon: <LuUsers /> },
              { label: "2 Bags", icon: <LuBriefcase /> },
              { label: "Climate Control", icon: <LuThermometer /> },
              { label: "Charging Ports", icon: <LuPlug /> },
            ],
          },
          {
            id: "honda-amaze",
            name: "Honda Amaze",
            type: "Compact Sedan",
            image: "/home/economy.png",
            features: [
              { label: "4 Passengers", icon: <LuUsers /> },
              { label: "2 Bags", icon: <LuBriefcase /> },
              { label: "Climate Control", icon: <LuThermometer /> },
              { label: "Charging Ports", icon: <LuPlug /> },
            ],
          },
        ],
      },
      {
        id: "premium-sedans",
        label: "Premium Sedans",
        title: "Premium Experience",
        description: "Perfect for daily business travel and airport transfers.",
        vehicles: [
          {
            id: "honda-city",
            name: "Honda City",
            type: "Premium Sedan",
            badge: "Popular",
            image: "/home/premium.png",
            features: [
              { label: "4 Passengers", icon: <LuUsers /> },
              { label: "2 Large Bags", icon: <LuBriefcase /> },
              { label: "Wi-Fi Enabled", icon: <LuWifi /> },
              { label: "Complimentary", icon: <LuGift /> },
            ],
          },
          {
            id: "maruti-ciaz",
            name: "Maruti Suzuki Ciaz",
            type: "Executive Sedan",
            image: "/home/premium.png",
            features: [
              { label: "4 Passengers", icon: <LuUsers /> },
              { label: "2 Large Bags", icon: <LuBriefcase /> },
              { label: "Climate Control", icon: <LuThermometer /> },
              { label: "Daily Press", icon: <LuNewspaper /> },
            ],
          },
        ],
      },
      {
        id: "premium-suvs",
        label: "Premium SUVs / MUVs",
        title: "Spacious Comfort",
        description: "Room for teams, families and extra luggage on longer trips.",
        vehicles: [
          {
            id: "toyota-innova-hycross",
            name: "Toyota Innova Hycross",
            type: "Premium MUV",
            badge: "Spacious",
            image: "/home/premium.png",
            features: [
              { label: "6 Passengers", icon: <LuUsers /> },
              { label: "4 Large Bags", icon: <LuBriefcase /> },
              { label: "Captain Seats", icon: <LuArmchair /> },
              { label: "Charging Ports", icon: <LuPlug /> },
            ],
          },
          {
            id: "maruti-invicto",
            name: "Maruti Suzuki Invicto",
            type: "Premium MUV",
            image: "/home/premium.png",
            features: [
              { label: "6 Passengers", icon: <LuUsers /> },
              { label: "4 Large Bags", icon: <LuBriefcase /> },
              { label: "Captain Seats", icon: <LuArmchair /> },
              { label: "Climate Control", icon: <LuThermometer /> },
            ],
          },
        ],
      },
      {
        id: "green-fleet",
        label: "Green Fleet (EVs)",
        title: "Green Fleet",
        description: "Silent, zero-emission journeys without compromising on comfort.",
        vehicles: [
          {
            id: "premium-electric-suv",
            name: "Premium Electric SUV",
            type: "Zero-Emission EV",
            badge: "Zero Emission",
            image: "/home/premium.png",
            features: [
              { label: "4 Passengers", icon: <LuUsers /> },
              { label: "2 Large Bags", icon: <LuBriefcase /> },
              { label: "Silent Cabin", icon: <LuSparkles /> },
              { label: "100% Electric", icon: <LuLeaf /> },
            ],
          },
        ],
      },
      {
        id: "luxury-fleet",
        label: "Luxury Fleet",
        title: "Luxury Fleet",
        description: "Ultra-luxury marquee brands with signature chauffeur service.",
        vehicles: [
          {
            id: "mercedes-benz",
            name: "Mercedes-Benz",
            type: "Luxury Sedan",
            badge: "Most Requested",
            image: "/home/luxury.png",
            features: [
              { label: "3 Passengers", icon: <LuUsers /> },
              { label: "2 Large Bags", icon: <LuBriefcase /> },
              { label: "Premium Leather", icon: <LuArmchair /> },
              { label: "Rear Climate", icon: <LuThermometer /> },
            ],
          },
          {
            id: "bmw",
            name: "BMW",
            type: "Executive Luxury",
            image: "/home/luxury.png",
            features: [
              { label: "3 Passengers", icon: <LuUsers /> },
              { label: "2 Large Bags", icon: <LuBriefcase /> },
              { label: "Quiet Cabin", icon: <LuSparkles /> },
              { label: "Wi-Fi Enabled", icon: <LuWifi /> },
            ],
          },
          {
            id: "audi",
            name: "Audi",
            type: "Luxury Sedan",
            image: "/home/luxury.png",
            features: [
              { label: "3 Passengers", icon: <LuUsers /> },
              { label: "2 Large Bags", icon: <LuBriefcase /> },
              { label: "Climate Control", icon: <LuThermometer /> },
              { label: "Charging Ports", icon: <LuPlug /> },
            ],
          },
        ],
      },
    ],
  },

  greenFleet: {
    id: "sustainability",
    eyebrow: "Sustainability First",
    title: "The Green Fleet: Future-Proof Mobility",
    description:
      "Join the revolution of sustainable luxury. Our Green Fleet features the latest in premium electric mobility, offering silent, zero-emission journeys without compromising on executive comfort or performance.",
    image: "/home/hero.jpg",
    stats: [
      {
        value: "0%",
        title: "Tailpipe Emissions",
        description: "Pure electric drivetrain for clean urban centers.",
      },
      {
        value: "Ultra",
        title: "Silent Cabins",
        description: "Enhanced acoustic privacy for executive meetings.",
      },
    ],
    button: {
      label: "Explore EV Options",
      href: "#green-fleet",
    },
  },

  marqueeCollection: {
    title: "The Marquee Collection",
    description:
      "Reserved for VIPs, Dignitaries, and milestones. Experience the absolute pinnacle of automotive engineering.",
    vehicles: [
      {
        id: "mercedes-benz",
        category: "Luxury Sedan",
        name: "Mercedes-Benz",
        image: "/home/psu.png",
        highlights: [
          { value: "Velvet", label: "Service Tier" },
          { value: "Premium", label: "Leather Interiors" },
          { value: "Rear", label: "Climate Control" },
        ],
        button: {
          label: "Request Quotation",
          href: bookingHref,
        },
      },
      {
        id: "bmw",
        category: "Executive Luxury",
        name: "BMW",
        image: "/home/hero.jpg",
        highlights: [
          { value: "Executive", label: "Concierge" },
          { value: "Privacy", label: "Tinted Glass" },
          { value: "Premium", label: "Audio System" },
        ],
        button: {
          label: "Request Quotation",
          href: bookingHref,
        },
      },
    ],
  },

  finalCta: {
    title: "Ready to start your journey?",
    description:
      "Book your preferred vehicle in minutes or contact our support team for specialized corporate arrangements.",
    buttons: [
      {
        label: "Book Your Ride Now",
        href: bookingHref,
      },
      {
        label: "Contact Corporate Sales",
        href: "/contact-us",
      },
    ],
  },
};
