"use client";

import { EnquiryFormProps } from "@/@types/contactPageType";
import { tripFromSearchParams } from "@/utils/tripParams";
import { useSearchParams } from "next/navigation";
import Form3 from "./Form3";

const ContactEnquiryForm: React.FC<EnquiryFormProps> = (props) => {
  const searchParams = useSearchParams();

  return <Form3 {...props} trip={tripFromSearchParams(searchParams)} />;
};

export default ContactEnquiryForm;
