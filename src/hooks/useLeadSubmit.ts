"use client";

import { LeadInput, LeadPayload } from "@/@types/leadType";
import { useState } from "react";

type LeadStatus = "idle" | "submitting" | "success" | "error";

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

  const resetStatus = () => {
    setStatus("idle");
    setError("");
  };

  return { submitLead, status, error, isSubmitting: status === "submitting", resetStatus };
};
