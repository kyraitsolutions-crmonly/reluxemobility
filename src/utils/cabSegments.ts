// Cab segments offered in the booking flow (Plan Your Journey → Explore Cars).
// Order matters: it's the order of the cards and of the "Cab Category" dropdown.

export type CabGroup = "Sedan" | "MUV & SUV" | "Electric" | "Luxury" | "Group Travel";

export interface CabSegment {
  id: string;
  name: string;
  models: string;
  group: CabGroup;
  // Seating as "passengers + driver"; several entries mean the car comes in different sizes.
  seats: string[];
  luggage: string;
  image?: string;
  features: string[];
}

export const cabGroups: CabGroup[] = ["Sedan", "MUV & SUV", "Electric", "Luxury", "Group Travel"];

export const cabSegments: CabSegment[] = [
  {
    id: "sedan",
    name: "Sedan",
    models: "Dzire, Amaze or similar",
    group: "Sedan",
    seats: ["4+1"],
    luggage: "2 bags",
    image: "/fleet/cars/dzire.jpg",
    features: ["AC", "Charging point", "Bottled water"],
  },
  {
    id: "muv",
    name: "MUV",
    models: "Ertiga, Kia Carens or similar",
    group: "MUV & SUV",
    seats: ["6+1"],
    luggage: "3 bags",
    image: "/muv.png",
    features: ["AC", "Charging point", "Bottled water"],
  },
  {
    id: "innova-crysta",
    name: "Innova Crysta",
    models: "Toyota Innova Crysta",
    group: "MUV & SUV",
    seats: ["6+1"],
    luggage: "4 bags",
    image: "/innova-crysta.png",
    features: ["AC", "Rear AC vents", "Captain seats"],
  },
  {
    id: "premium-muv",
    name: "Premium MUV",
    models: "Suzuki Invicto, Toyota Hycross or similar",
    group: "MUV & SUV",
    seats: ["6+1"],
    luggage: "4 bags",
    image: "/fleet/cars/innova-hycross.jpg",
    features: ["Strong hybrid", "Captain seats", "Panoramic roof"],
  },
  {
    id: "premium-suv",
    name: "Premium SUV",
    models: "Toyota Fortuner Legender",
    group: "MUV & SUV",
    seats: ["6+1"],
    luggage: "3 bags",
    image: "/fortuner-legender.png",
    features: ["AC", "Leather seats", "Highway ready"],
  },
  {
    id: "budget-ev",
    name: "Budget EV",
    models: "Tata Nexon EV, Mahindra 3XO or similar",
    group: "Electric",
    seats: ["4+1"],
    luggage: "2 bags",
    image: "/budget-ev.png",
    features: ["100% electric", "Silent cabin", "Zero tailpipe emissions"],
  },
  {
    id: "budget-ev-large",
    name: "Budget EV (Large)",
    models: "Kia Carens EV, MG Windsor or similar",
    group: "Electric",
    seats: ["6+1"],
    luggage: "3 bags",
    image: "/budget-ev-large.png",
    features: ["100% electric", "Silent cabin", "Zero tailpipe emissions"],
  },
  {
    id: "premium-ev",
    name: "Premium EV",
    models: "Tata Curvv EV, MG ZS EV or similar",
    group: "Electric",
    seats: ["4+1"],
    luggage: "2 bags",
    image: "/premium-ev.png",
    features: ["100% electric", "Premium cabin", "Zero tailpipe emissions"],
  },
  {
    id: "premium-ev-large",
    name: "Premium EV (Large)",
    models: "Mahindra XEV 9e",
    group: "Electric",
    seats: ["6+1"],
    luggage: "3 bags",
    image: "/fleet/cars/xev-9e.jpg",
    features: ["100% electric", "Premium cabin", "Zero tailpipe emissions"],
  },
  {
    id: "luxury-sedan",
    name: "Luxury Sedan",
    models: "Mercedes-Benz E-Class or similar",
    group: "Luxury",
    seats: ["3+1"],
    luggage: "2 bags",
    image: "/fleet/cars/e-class.jpg",
    features: ["Leather rear seats", "Rear climate control", "Uniformed chauffeur"],
  },
  {
    id: "lexus",
    name: "Lexus",
    models: "Lexus luxury sedan",
    group: "Luxury",
    seats: ["3+1"],
    luggage: "2 bags",
    image: "/lexus.png",
    features: ["Hybrid", "Leather rear seats", "Uniformed chauffeur"],
  },
  {
    id: "tempo-traveller",
    name: "Tempo Traveller",
    models: "Force Tempo Traveller",
    group: "Group Travel",
    seats: ["12+1", "16+1"],
    luggage: "Roof carrier",
    image: "/tempo-traveller.png",
    features: ["AC", "Push-back seats", "Ideal for groups"],
  },
  {
    id: "mini-bus",
    name: "Mini Bus",
    models: "Mini bus",
    group: "Group Travel",
    seats: ["20+1", "25+1"],
    luggage: "Luggage boot",
    image: "/mini-bus.png",
    features: ["AC", "Push-back seats", "Ideal for events"],
  },
  {
    id: "bus",
    name: "Bus",
    models: "Coach bus",
    group: "Group Travel",
    seats: ["32+1", "35+1", "40+1", "45+1", "50+1"],
    luggage: "Luggage boot",
    image: "/bus.png",
    features: ["AC", "Push-back seats", "Ideal for large groups"],
  },
];

export const cabSegmentLabel = (segment: CabSegment) => `${segment.name} (${segment.models})`;

// What the Explore Cars page lists under each car. Review with operations before going live:
// these are what the customer will hold you to.
export const bookingTerms = {
  inclusions: [
    "Chauffeur-driven car of the selected category, or similar",
    "Fuel for the booked trip",
    "Driver allowance",
    "Final fare shared and confirmed by our desk before the trip",
  ],
  exclusions: [
    "Tolls, state taxes and parking, charged on actuals",
    "Extra kilometres or hours beyond the booked package",
    "Night charges for driving between 10 PM and 6 AM, where applicable",
  ],
  terms: [
    "The exact model is subject to availability; the category is guaranteed.",
    "Your chauffeur and vehicle details are shared before pickup.",
    "Free cancellation up to 4 hours before pickup.",
    "For outstation trips, the chauffeur's food and stay are covered by the driver allowance.",
  ],
};
