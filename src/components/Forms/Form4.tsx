"use client";

import { InquiryFormProps } from "@/@types/servicesPageType";
import { useId, useState, type FormEvent } from "react";
import CustomSelect from "./CustomSelect";
import { DateInput } from "./DateTimeInputs";
import { accentSubmit, errorTextClass, inputClass, labelClass, submitButtonClass } from "./formStyles";

const Form4: React.FC<InquiryFormProps> = ({ vehicleClasses, durations, submitLabel }) => {
  const id = useId();
  const [submitted, setSubmitted] = useState(false);
  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [showDateError, setShowDateError] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!pickupDate) {
      setShowDateError(true);
      return;
    }
    setSubmitted(true);
  };

  return (
    <form
      className="flex flex-col gap-5 rounded-2xl border border-white/5 bg-dark p-6 sm:p-10"
      onSubmit={handleSubmit}
      onChange={() => setSubmitted(false)}
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
          defaultValue={vehicleClasses[0]}
          onChange={() => setSubmitted(false)}
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
              setSubmitted(false);
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
            onChange={() => setSubmitted(false)}
            variant="dark"
          />
        </div>
      </div>

      <button className={`mt-2 uppercase tracking-[0.2em] ${submitButtonClass(accentSubmit)}`} type="submit">
        {submitLabel}
      </button>

      {submitted && (
        <p className="text-xs text-ivory/70" role="status">
          Your details are ready. Connect the form to your enquiry API to submit them.
        </p>
      )}
    </form>
  );
};

export default Form4;
