"use client";

import { TripDetails } from "@/@types/leadType";
import { tripToSearchParams } from "@/utils/tripParams";
import { useRouter } from "next/navigation";
import { useId, useState, type FormEvent, type ReactNode } from "react";
import { FiMinusCircle, FiPlusCircle, FiRepeat } from "react-icons/fi";
import CustomSelect from "./CustomSelect";
import { DateInput, formatDate, formatTime, TimeInput } from "./DateTimeInputs";
import { darkSubmit, errorTextClass, inputClass, labelClass, submitButtonClass } from "./formStyles";

const pickupCities = {
  Delhi: { lat: 28.6139, lon: 77.209 },
  Mumbai: { lat: 19.076, lon: 72.8777 },
  Pune: { lat: 18.5204, lon: 73.8567 },
  Bengaluru: { lat: 12.9716, lon: 77.5946 },
};
type PickupCity = keyof typeof pickupCities;
const OTHER = "Other";
const cityChoices = [...Object.keys(pickupCities), OTHER];
const isListedCity = (city: string): city is PickupCity => city in pickupCities;

type CityValue = { choice: string; other: string };
const emptyCity: CityValue = { choice: "", other: "" };
const cityName = ({ choice, other }: CityValue) => (choice === OTHER ? other.trim() : choice);
const cityError = (value: CityValue, selectMessage: string, enterMessage: string) =>
  !value.choice ? selectMessage : value.choice === OTHER && !value.other.trim() ? enterMessage : false;

const airportsByCity: Record<PickupCity, string[]> = {
  Delhi: [
    "Terminal 1, Indira Gandhi International Airport, Delhi",
    "Terminal 2, Indira Gandhi International Airport, Delhi",
    "Terminal 3, Indira Gandhi International Airport, Delhi",
  ],
  Mumbai: [
    "Terminal 1, Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    "Terminal 2, Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    "Navi Mumbai International Airport, Mumbai",
  ],
  Pune: ["Pune International Airport, Pune"],
  Bengaluru: ["Terminal 1, Kempegowda International Airport, Bengaluru", "Terminal 2, Kempegowda International Airport, Bengaluru"],
};
const allAirports = Object.values(airportsByCity).flat();
const airportCity = (airport: string) =>
  (Object.keys(airportsByCity) as PickupCity[]).find((city) => airportsByCity[city].includes(airport));

const tripTabs = [
  { label: "One Way", service: "One Way" },
  { label: "Round Trip", service: "Round Trip" },
  { label: "Local", service: "Local Rental" },
  { label: "Airport", service: "Airport Transfer" },
] as const;
type TripTab = (typeof tripTabs)[number]["label"];

const airportTransfers = ["Drop to Airport", "Pickup from Airport"];
const localPackages = ["4 hrs | 40 km", "8 hrs | 80 km", "12 hrs | 120 km"];

const atTimeOf = (day: Date, time: Date) => {
  const moment = new Date(day);
  moment.setHours(time.getHours(), time.getMinutes(), 0, 0);
  return moment;
};

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  wide?: boolean;
  children: ReactNode;
}

const Field: React.FC<FieldProps> = ({ id, label, error, wide = false, children }) => (
  <div className={`flex min-w-0 flex-col gap-2 ${wide ? "md:col-span-2" : ""}`}>
    <label className={labelClass()} htmlFor={id}>
      {label}
    </label>
    {children}
    {error && <p className={errorTextClass}>{error}</p>}
  </div>
);

interface CitySelectProps {
  id: string;
  name: string;
  placeholder: string;
  value: CityValue;
  onChange: (value: CityValue) => void;
  hasError?: boolean;
  showErrors?: boolean;
}

const CitySelect: React.FC<CitySelectProps> = ({ id, name, placeholder, value, onChange, hasError = false, showErrors = false }) => (
  <>
    <CustomSelect
      id={id}
      name={name}
      options={cityChoices}
      placeholder={placeholder}
      value={value.choice}
      onChange={(choice) => onChange({ choice, other: choice === OTHER ? value.other : "" })}
      hasError={hasError && !value.choice}
    />
    {value.choice === OTHER && (
      <input
        aria-label="Enter city name"
        className={inputClass("light", showErrors && !value.other.trim())}
        name={`${name}Other`}
        onChange={(event) => onChange({ choice: OTHER, other: event.currentTarget.value })}
        placeholder="Enter city name"
        type="text"
        value={value.other}
      />
    )}
  </>
);

const Form1 = () => {
  const id = useId();
  const router = useRouter();
  const [tab, setTab] = useState<TripTab>("One Way");
  const [from, setFrom] = useState<CityValue>(emptyCity);
  const [to, setTo] = useState<CityValue>(emptyCity);
  const [hasStop, setHasStop] = useState(false);
  const [stop, setStop] = useState<CityValue>(emptyCity);
  const [localPackage, setLocalPackage] = useState(localPackages[1]);
  const [airportTransfer, setAirportTransfer] = useState(airportTransfers[0]);
  const [airport, setAirport] = useState("");
  const [airportCityValue, setAirportCityValue] = useState<CityValue>(emptyCity);
  const [date, setDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [showErrors, setShowErrors] = useState(false);

  const isRoundTrip = tab === "Round Trip";
  const isAirport = tab === "Airport";
  const needsDrop = tab === "One Way" || isRoundTrip;
  const toAirport = airportTransfer === "Drop to Airport";
  const airportOptions = isListedCity(airportCityValue.choice) ? airportsByCity[airportCityValue.choice] : allAirports;

  const errors = {
    from:
      !isAirport &&
      (needsDrop
        ? cityError(from, "Please select a pickup city", "Please enter a pickup city")
        : cityError(from, "Please select a city", "Please enter a city")),
    stop: needsDrop && hasStop && cityError(stop, "Please select a stop city", "Please enter a stop city"),
    to: needsDrop && cityError(to, "Please select a drop city", "Please enter a drop city"),
    airport: isAirport && !airport && "Please select an airport",
    airportCity:
      isAirport &&
      (toAirport
        ? cityError(airportCityValue, "Please select a pickup city", "Please enter a pickup city")
        : cityError(airportCityValue, "Please select a drop city", "Please enter a drop city")),
    date: !date && "Please choose a pickup date",
    time: !time ? "Please choose a pickup time" : date && atTimeOf(date, time) <= new Date() && "Please choose a time later than now",
    returnDate:
      isRoundTrip &&
      (!returnDate ? "Please choose a return date" : date && returnDate < date && "Return date can't be before the pickup date"),
  };
  const errorFor = (field: keyof typeof errors) => (showErrors && errors[field]) || undefined;

  const selectTab = (next: TripTab) => {
    setTab(next);
    setShowErrors(false);
  };

  const swapCities = () => {
    setFrom(to);
    setTo(from);
  };

  const removeStop = () => {
    setHasStop(false);
    setStop(emptyCity);
  };

  const airportField = (
    <Field id={`${id}-airport`} label={toAirport ? "Drop Airport" : "Pickup Airport"} error={errorFor("airport")}>
      <CustomSelect
        id={`${id}-airport`}
        name="airport"
        options={airportOptions}
        placeholder="Select airport"
        value={airport}
        onChange={(choice) => {
          setAirport(choice);
          const city = airportCity(choice);
          if (city && airportCityValue.choice !== OTHER) setAirportCityValue({ choice: city, other: "" });
        }}
        hasError={Boolean(errorFor("airport"))}
      />
    </Field>
  );
  const cityField = (
    <Field id={`${id}-airportCity`} label={toAirport ? "Pickup City" : "Drop City"} error={errorFor("airportCity")}>
      <CitySelect
        id={`${id}-airportCity`}
        name="airportCity"
        placeholder="Select city"
        value={airportCityValue}
        onChange={(value) => {
          setAirportCityValue(value);
          if (value.choice !== OTHER && airportCity(airport) !== value.choice) setAirport("");
        }}
        hasError={Boolean(errorFor("airportCity"))}
        showErrors={showErrors}
      />
    </Field>
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Object.values(errors).some(Boolean) || !date || !time) {
      setShowErrors(true);
      return;
    }

    const service = tripTabs.find((tripTab) => tripTab.label === tab)!.service;
    const trip: TripDetails = {
      serviceType: isAirport ? `${service} (${airportTransfer})` : service,
      from: isAirport ? (toAirport ? cityName(airportCityValue) : airport) : cityName(from),
      stop: needsDrop && hasStop ? cityName(stop) : "",
      to: isAirport ? (toAirport ? airport : cityName(airportCityValue)) : needsDrop ? cityName(to) : "",
      package: tab === "Local" ? localPackage : "",
      date: formatDate(date),
      returnDate: isRoundTrip && returnDate ? formatDate(returnDate) : "",
      time: formatTime(time),
    };
    router.push(`/contact-us?${tripToSearchParams(trip)}#contact`);
  };

  return (
    <form className="rounded-3xl border border-line bg-white p-6 sm:p-10" noValidate onSubmit={handleSubmit}>
      <div aria-label="Trip type" className="mb-6 grid grid-cols-2 gap-1 rounded-xl border border-line bg-ivory p-1 sm:grid-cols-4" role="tablist">
        {tripTabs.map(({ label }) => (
          <button
            aria-selected={tab === label}
            className={`h-10 rounded-lg text-xs font-semibold uppercase tracking-wider transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark ${
              tab === label ? "bg-dark text-white shadow-sm" : "text-secondary hover:bg-white hover:text-dark"
            }`}
            key={label}
            onClick={() => selectTab(label)}
            role="tab"
            type="button"
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2">
        {needsDrop && (
          <div className="relative grid grid-cols-1 items-start gap-5 md:col-span-2 md:grid-cols-2">
            <Field id={`${id}-from`} label="From" error={errorFor("from")}>
              <CitySelect
                id={`${id}-from`}
                name="from"
                placeholder="Select pickup city"
                value={from}
                onChange={setFrom}
                hasError={Boolean(errorFor("from"))}
                showErrors={showErrors}
              />
            </Field>

            <button
              aria-label="Swap pickup and drop cities"
              className="absolute right-0 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-dark shadow-sm transition hover:bg-ivory md:left-1/2 md:right-auto md:top-12 md:-translate-x-1/2"
              onClick={swapCities}
              title="Swap cities"
              type="button"
            >
              <FiRepeat aria-hidden="true" className="size-4" />
            </button>

            <Field id={`${id}-to`} label="To (City)" error={errorFor("to")}>
              <CitySelect
                id={`${id}-to`}
                name="to"
                placeholder="Select drop city"
                value={to}
                onChange={setTo}
                hasError={Boolean(errorFor("to"))}
                showErrors={showErrors}
              />
            </Field>
          </div>
        )}

        {needsDrop &&
          (hasStop ? (
            <Field id={`${id}-stop`} label="Stop 1" error={errorFor("stop")} wide>
              <div className="flex items-start gap-2">
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <CitySelect
                    id={`${id}-stop`}
                    name="stop"
                    placeholder="Select stop city"
                    value={stop}
                    onChange={setStop}
                    hasError={Boolean(errorFor("stop"))}
                    showErrors={showErrors}
                  />
                </div>
                <button
                  aria-label="Remove stop"
                  className="flex size-12 shrink-0 items-center justify-center rounded-[10px] text-secondary transition hover:bg-ivory hover:text-dark"
                  onClick={removeStop}
                  title="Remove stop"
                  type="button"
                >
                  <FiMinusCircle aria-hidden="true" className="size-5" />
                </button>
              </div>
            </Field>
          ) : (
            <button
              className="-mt-2 flex items-center gap-2 justify-self-start text-sm font-semibold text-dark transition hover:text-secondary md:col-span-2"
              onClick={() => setHasStop(true)}
              type="button"
            >
              <FiPlusCircle aria-hidden="true" className="size-4" />
              Add a stop
            </button>
          ))}

        {tab === "Local" && (
          <>
            <Field id={`${id}-from`} label="City" error={errorFor("from")}>
              <CitySelect
                id={`${id}-from`}
                name="from"
                placeholder="Select city"
                value={from}
                onChange={setFrom}
                hasError={Boolean(errorFor("from"))}
                showErrors={showErrors}
              />
            </Field>
            <Field id={`${id}-package`} label="Select Package">
              <CustomSelect
                id={`${id}-package`}
                name="package"
                options={localPackages}
                placeholder="Select package"
                value={localPackage}
                onChange={setLocalPackage}
              />
            </Field>
          </>
        )}

        {isAirport && (
          <>
            <Field id={`${id}-transfer`} label="Trip" wide>
              <CustomSelect
                id={`${id}-transfer`}
                name="transfer"
                options={airportTransfers}
                placeholder="Select trip"
                value={airportTransfer}
                onChange={setAirportTransfer}
              />
            </Field>
            {toAirport ? cityField : airportField}
            {toAirport ? airportField : cityField}
          </>
        )}

        <Field id={`${id}-date`} label="Pick Up Date" error={errorFor("date")}>
          <DateInput
            id={`${id}-date`}
            name="date"
            value={date}
            onChange={setDate}
            getMinDate={() => new Date()}
            hasError={Boolean(errorFor("date"))}
          />
        </Field>

        {isRoundTrip && (
          <Field id={`${id}-returnDate`} label="Return Date" error={errorFor("returnDate")}>
            <DateInput
              id={`${id}-returnDate`}
              name="returnDate"
              value={returnDate}
              onChange={setReturnDate}
              getMinDate={() => date ?? new Date()}
              hasError={Boolean(errorFor("returnDate"))}
            />
          </Field>
        )}

        <Field id={`${id}-time`} label="Pick Up Time" error={errorFor("time")} wide={isRoundTrip}>
          <TimeInput
            id={`${id}-time`}
            name="time"
            value={time}
            onChange={setTime}
            hasError={Boolean(errorFor("time"))}
          />
        </Field>
      </div>

      <button className={`mt-8 ${submitButtonClass(darkSubmit)}`} type="submit">
        Explore Cars
      </button>
    </form>
  );
};

export default Form1;
