import { contact } from "@/utils/constent";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";

export const contactUsPageData = {
  hero: {
    eyebrow: "Support & Inquiries",
    title: "Get in Touch",
    description:
      "Our dedicated team can assist with premium chauffeur services and corporate mobility requirements.",
    image: "/Container-1.png",
  },

  contactSection: {
    id: "contact",

    contactInformation: {
      title: "Contact Information",

      items: [
        {
          id: "headquarters",
          title: "Our Headquarters",
          description: contact.address,
          href: contact.addressLink,
          icon: <LuMapPin />,
        },
        {
          id: "real-time-support",
          title: "Real-Time Support",
          description: contact.phone.join(", "),
          href: contact.callCta,
          icon: <LuPhone />,
        },
        {
          id: "email-correspondence",
          title: "Email Correspondence",
          description: contact.email,
          href: contact.emailCta,
          icon: <LuMail />,
        },
      ],
    },

    trustedClients: {
      eyebrow: "Trusted Clients",
      title: "Trusted by 70+ PSUs, Corporates & Government Bodies",
      description:
        "Trusted by SAI, IOCL and major public sector enterprises.",
    },

    enquiryForm: {
      title: "Send an Enquiry",
    },
  },

  locationSection: {
    title: "Reluxe HQ",
    description: "Interactive Location Map",
    address: contact.address,
    addressLink: contact.addressLink,
    mapEmbedUrl: contact.mapEmbedUrl,
  },

  faqSection: {
    title: "Frequently Asked Questions",
    description:
      "Quick answers to common questions about our mobility services.",

    items: [
      {
        id: "book-velvet-service",
        question: "How do I book?",
        answer:
          "Call or WhatsApp us, or send an enquiry. Every booking is delivered to our Velvet Service standard, and organisations can open a Velvet Corporate account with a dedicated account manager.",
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
          "Yes. Our Green Fleet helps organisations meet sustainability goals with zero-tailpipe-emission travel.",
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
