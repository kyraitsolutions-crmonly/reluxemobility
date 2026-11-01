"use client";

import { InquiryFormProps } from "@/@types/servicesPageType";
import { useLeadSubmit } from "@/hooks/useLeadSubmit";
import { useId, useState, type FormEvent } from "react";
import CustomSelect from "./CustomSelect";
import { DateInput, formatDate } from "./DateTimeInputs";
import FormStatus from "./FormStatus";
import { accentSubmit, errorTextClass, inputClass, labelClass, submitButtonClass } from "./formStyles";

const Form4: React.FC<InquiryFormProps> = ({ vehicleClasses, durations, submitLabel }) => {
  const id = useId();
  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [showDateError, setShowDateError] = useState(false);
  const { submitLead, status, error, isSubmitting, resetStatus } = useLeadSubmit();
  // Editing the form again clears the last "sent" or error message.
  const clearStatus = () => status !== "submitting" && resetStatus();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!pickupDate) {
      setShowDateError(true);
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);
    const read = (key: string) => String(data.get(key) ?? "");
    const sent = await submitLead({
      formName: "Service Booking Enquiry",
      name: read("name"),
      phone: read("phone"),
      customFields: {
        vehicleClass: read("vehicleClass"),
        pickupDate: formatDate(pickupDate),
        package: read("package"),
      },
    });

    if (sent) {
      form.reset();
      setPickupDate(null);
    }
  };

  return (
    <form
      className="flex flex-col gap-5 rounded-2xl border border-white/5 bg-dark p-6 sm:p-10"
      onSubmit={handleSubmit}
      onChange={() => clearStatus()}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex min-w-0 flex-col gap-2">
          <label className={labelClass("dark")} htmlFor={`${id}-name`}>
            Full Name
          </label>
          <input className={inputClass("dark")} id={`${id}-name`} name="name" type="text" placeholder="Your name" autoComplete="name" required />
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <label className={labelClass("dark")} htmlFor={`${id}-phone`}>
            Phone Number
          </label>
          <input className={inputClass("dark")} id={`${id}-phone`} name="phone" type="tel" placeholder="Phone number" autoComplete="tel" inputMode="tel" required />
        </div>
      </div>

      <div className="flex min-w-0 flex-col gap-2">
        <label className={labelClass("dark")} htmlFor={`${id}-vehicleClass`}>
          Select Vehicle Class
        </label>
        <CustomSelect
          id={`${id}-vehicleClass`}
          name="vehicleClass"
          options={vehicleClasses}
          placeholder="Select vehicle class"
          onChange={() => clearStatus()}
          required
          variant="dark"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex min-w-0 flex-col gap-2">
          <label className={labelClass("dark")} htmlFor={`${id}-date`}>
            Pickup Date
          </label>
          <DateInput
            id={`${id}-date`}
            name="pickupDate"
            value={pickupDate}
            onChange={(date) => {
              setPickupDate(date);
              clearStatus();
              if (date) setShowDateError(false);
            }}
            hasError={showDateError}
            variant="dark"
          />
          {showDateError && <p className={errorTextClass}>Please choose a pickup date</p>}
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <label className={labelClass("dark")} htmlFor={`${id}-package`}>
            Package
          </label>
          <CustomSelect
            id={`${id}-package`}
            name="package"
            options={durations}
            placeholder="Select package"
            defaultValue={durations[0]}
            onChange={() => clearStatus()}
            variant="dark"
          />
        </div>
      </div>

      <button className={`mt-2 uppercase tracking-[0.2em] ${submitButtonClass(accentSubmit)} disabled:opacity-60`} disabled={isSubmitting} type="submit">
        {isSubmitting ? "Sending…" : submitLabel}
      </button>

      <FormStatus status={status} error={error} variant="dark" />
    </form>
  );
};

export default Form4;
