import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";

export const contactUsPageData = {
  hero: {
    eyebrow: "Support & Inquiries",
    title: "Get in Touch",
    description:
      "Our dedicated team can assist with premium chauffeur services and corporate mobility requirements.",
    image: "/home/hero.jpg",
  },

  contactSection: {
    id: "contact",

    contactInformation: {
      title: "Contact Information",

      items: [
        {
          id: "headquarters",
          title: "Our Headquarters",
          description: "Address to be confirmed",
          icon: <LuMapPin />,
        },
        {
          id: "real-time-support",
          title: "Real-Time Support",
          description: "Phone details to be confirmed",
          icon: <LuPhone />,
        },
        {
          id: "email-correspondence",
          title: "Email Correspondence",
          description: "Email details to be confirmed",
          icon: <LuMail />,
        },
      ],
    },

    trustedClients: {
      eyebrow: "Trusted Clients",
      title: "Trusted by PSUs & Government",
      description:
        "Trusted by SAI, IOCL and major public sector enterprises.",
    },

    enquiryForm: {
      title: "Send an Enquiry",
      serviceTypes: [
        "Corporate & PSU Velvet Service",
        "Hourly / City Rental",
        "Airport Transfers",
        "Outstation Travel",
        "Other",
      ],
    },
  },

  locationSection: {
    title: "Reluxe HQ",
    description: "Interactive Location Map",
    address: "Address to be confirmed",
    mapEmbedUrl: "",
  },

  faqSection: {
    title: "Frequently Asked Questions",
    description:
      "Quick answers to common questions about our mobility services.",

    items: [
      {
        id: "book-velvet-service",
        question: "How do I book a Velvet Service?",
        answer:
          "Velvet Services are tailored for corporate clients. You can request access via the contact form or by calling our dedicated corporate desk.",
      },
      {
        id: "cancellation-policy",
        question: "What are your cancellation policies?",
        answer:
          "Cancellations made 4 hours prior to the pickup time are free of charge. Late cancellations may incur a nominal fee based on the vehicle category.",
      },
      {
        id: "chauffeur-verification",
        question: "Are your chauffeurs background checked?",
        answer:
          "Absolutely. Every Reluxe chauffeur undergoes rigorous background verification, police clearance, and specialized hospitality training.",
      },
      {
        id: "ev-options",
        question: "Do you provide EV options for B2B?",
        answer:
          'Yes, our "Green Fleet" is specifically designed to help corporate partners meet their ESG goals with zero-emission luxury transport.',
      },
    ],
  },

  finalCta: {
    title: "Experience the Velvet Standard",
    description:
      "Seamless, safe, and sophisticated mobility for you and your organization.",

    buttons: [
      {
        label: "Get Started Now",
        href: "#contact",
      },
      {
        label: "View Our Fleet",
        href: "/#fleet",
      },
    ],
  },
};
