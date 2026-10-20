"use client";

import { TripDetails } from "@/@types/leadType";
import { tripToSearchParams } from "@/utils/tripParams";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useId, useState, type ComponentType, type FormEvent } from "react";
import type { DatePickerProps } from "react-datepicker";
import { FiCalendar } from "react-icons/fi";
import CustomSelect from "./CustomSelect";
import { darkSubmit, errorTextClass, inputClass, labelClass, submitButtonClass } from "./formStyles";

// react-datepicker reads the current date while rendering, which Next.js rejects during prerender,
// so it's rendered on the client only, with a matching placeholder input in the meantime.
const DatePicker = dynamic(() => import("react-datepicker").then((mod) => mod.default as unknown as ComponentType<DatePickerProps>), {
  ssr: false,
  loading: () => <input aria-hidden="true" className={`${inputClass()} pr-11`} placeholder="DD-MM-YYYY" readOnly tabIndex={-1} />,
});

// Launch cities — pickups are offered only here; the drop can be anywhere.
const pickupCities = {
  Delhi: { lat: 28.6139, lon: 77.209 },
  Mumbai: { lat: 19.076, lon: 72.8777 },
  Pune: { lat: 18.5204, lon: 73.8567 },
  Bengaluru: { lat: 12.9716, lon: 77.5946 },
};
type PickupCity = keyof typeof pickupCities;
const dropCityOptions = [...Object.keys(pickupCities), "Other"];

// 12:00 AM, 12:15 AM, 12:30 AM, 12:45 AM … 11:45 PM
const timeOptions = Array.from({ length: 96 }, (_, index) => {
  const hours = Math.floor(index / 4);
  const minutes = String((index % 4) * 15).padStart(2, "0");
  return `${hours % 12 || 12}:${minutes} ${hours < 12 ? "AM" : "PM"}`;
});

const formatDate = (date: Date) =>
  [date.getDate(), date.getMonth() + 1].map((part) => String(part).padStart(2, "0")).join("-") + `-${date.getFullYear()}`;

// Home page trip search. "Explore Cars" carries the trip to the contact page,
// where it is sent to the CRM together with the visitor's contact details.
const Form1 = () => {
  const id = useId();
  const router = useRouter();
  const [from, setFrom] = useState<PickupCity | "">("");
  const [toCity, setToCity] = useState("");
  const [otherToCity, setOtherToCity] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState("7:00 AM");
  const [showErrors, setShowErrors] = useState(false);
  // Read "today" on interaction rather than during render, so it isn't frozen into the prerendered HTML.
  const [minDate, setMinDate] = useState<Date | undefined>(undefined);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const to = toCity === "Other" ? otherToCity.trim() : toCity;

    if (!from || !to || !date || !time) {
      setShowErrors(true);
      return;
    }

    const trip: TripDetails = { from, to, date: formatDate(date), time };
    router.push(`/contact-us?${tripToSearchParams(trip)}#contact`);
  };

  return (
    <form className="rounded-3xl border border-line bg-white p-6 sm:p-10" noValidate onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-5">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2">
          <div className="flex min-w-0 flex-col gap-2">
            <label className={labelClass()} htmlFor={`${id}-from`}>
              From
            </label>
            <CustomSelect
              id={`${id}-from`}
              name="from"
              options={Object.keys(pickupCities)}
              placeholder="Select pickup city"
              value={from}
              onChange={(city) => setFrom(city as PickupCity)}
              hasError={showErrors && !from}
            />
            {showErrors && !from && <p className={errorTextClass}>Please select a pickup city</p>}
          </div>

          <div className="flex min-w-0 flex-col gap-2">
            <label className={labelClass()} htmlFor={`${id}-to`}>
              To (City)
            </label>
            <CustomSelect
              id={`${id}-to`}
              name="to"
              options={dropCityOptions}
              placeholder="Select drop city"
              value={toCity}
              onChange={(city) => {
                setToCity(city);
                if (city !== "Other") setOtherToCity("");
              }}
              hasError={showErrors && !toCity}
            />
            {toCity === "Other" && (
              <input
                aria-label="Enter drop city"
                className={inputClass("light", showErrors && !otherToCity.trim())}
                name="otherTo"
                onChange={(event) => setOtherToCity(event.currentTarget.value)}
                placeholder="Enter city name"
                type="text"
                value={otherToCity}
              />
            )}
            {showErrors && !toCity && <p className={errorTextClass}>Please select a drop city</p>}
            {showErrors && toCity === "Other" && !otherToCity.trim() && (
              <p className={errorTextClass}>Please enter a drop city</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2">
          <div className="flex min-w-0 flex-col gap-2">
            <label className={labelClass()} htmlFor={`${id}-date`}>
              Pick Up Date
            </label>
            <div className="relative">
              <DatePicker
                calendarClassName="form-datepicker-calendar"
                className={`${inputClass("light", showErrors && !date)} pr-11`}
                dateFormat="dd-MM-yyyy"
                dayClassName={() => "form-datepicker-day"}
                dropdownMode="select"
                id={`${id}-date`}
                minDate={minDate}
                name="date"
                onChange={(value: Date | null) => setDate(value)}
                onFocus={() => setMinDate(new Date())}
                placeholderText="DD-MM-YYYY"
                popperClassName="z-[9999]"
                selected={date}
                showMonthDropdown
                showPopperArrow={false}
                showYearDropdown
                wrapperClassName="relative  block w-full"
              />
              <FiCalendar aria-hidden="true" className="pointer-events-none absolute right-4 top-6 size-4 -translate-y-1/2 text-muted" />
            </div>
            {showErrors && !date && <p className={errorTextClass}>Please choose a pickup date</p>}
          </div>

          <div className="flex min-w-0 flex-col gap-2">
            <label className={labelClass()} htmlFor={`${id}-time`}>
              Pick Up Time
            </label>
            <CustomSelect id={`${id}-time`} name="time" options={timeOptions} placeholder="Select time" value={time} onChange={setTime} />
          </div>
        </div>
      </div>

      <button className={`mt-8 ${submitButtonClass(darkSubmit)}`} type="submit">
        Explore Cars
      </button>
    </form>
  );
};

export default Form1;
