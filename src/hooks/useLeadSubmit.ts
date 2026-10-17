"use client";

import { LeadInput, LeadPayload } from "@/@types/leadType";
import { useState } from "react";

type LeadStatus = "idle" | "submitting" | "success" | "error";

/**
 * Shared submit logic for every enquiry form on the site.
 * Builds the webhook payload and posts it to /api/lead, which adds the secret token.
 *
 *   const { submitLead, status, error } = useLeadSubmit();
 *   const sent = await submitLead({ formName: "Contact Page Enquiry", name, phone, ... });
 */
export const useLeadSubmit = () => {
  const [status, setStatus] = useState<LeadStatus>("idle");
  const [error, setError] = useState("");

  const submitLead = async (input: LeadInput) => {
    const payload: LeadPayload = {
      name: input.name.trim(),
      email: input.email?.trim() ?? "",
      phone: input.phone.trim(),
      message: input.message?.trim() ?? "",
      mobile: "",
      description: "",
      company: input.company?.trim() ?? "",
      title: input.formName,
      website: "",
      customFields: {
        ...input.customFields,
        form: input.formName,
        page: window.location.pathname,
      },
    };

    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result: { ok: boolean; error?: string } = await response.json();

      if (!response.ok || !result.ok) throw new Error(result.error);

      setStatus("success");
      return true;
    } catch (submitError) {
      setStatus("error");
      setError(
        submitError instanceof Error && submitError.message
          ? submitError.message
          : "Could not send your enquiry. Please try again."
      );
      return false;
    }
  };

  /** Clear the success / error message, e.g. when the visitor edits the form again */
  const resetStatus = () => {
    setStatus("idle");
    setError("");
  };

  return { submitLead, status, error, isSubmitting: status === "submitting", resetStatus };
};
