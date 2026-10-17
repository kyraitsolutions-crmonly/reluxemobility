"use client";

import { EnquiryFormProps } from "@/@types/contactPageType";
import { tripFromSearchParams } from "@/utils/tripParams";
import { useSearchParams } from "next/navigation";
import Form3 from "./Form3";

// Contact page form, filled with the trip from the home page search when the link carries one.
// Render inside <Suspense>: the query string is only known on the client.
const ContactEnquiryForm: React.FC<EnquiryFormProps> = (props) => {
  const searchParams = useSearchParams();

  return <Form3 {...props} trip={tripFromSearchParams(searchParams)} />;
};

export default ContactEnquiryForm;
