"use client";

import { TripDetails } from "@/@types/leadType";
import { BOOKING_OPEN_EVENT } from "@/components/common/SamePageHashLinks";
import { airportsByCity, allAirports, indianCities, tier1CityNames, type Tier1City } from "@/utils/cities";
import { tripToSearchParams } from "@/utils/tripParams";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useId, useLayoutEffect, useRef, useState, type CSSProperties, type FormEvent, type ReactNode } from "react";
import { FiPlusCircle, FiRepeat, FiX } from "react-icons/fi";
import CitySearch from "./CitySearch";
import CustomSelect from "./CustomSelect";
import { DateInput, formatDate, formatTime, TimeInput } from "./DateTimeInputs";
import { darkSubmit, errorTextClass, labelClass, submitButtonClass } from "./formStyles";

const tripTabs = [
  { label: "One Way", service: "One Way", slug: "one-way" },
  { label: "Round Trip", service: "Round Trip", slug: "round-trip" },
  { label: "Local", service: "Local Rental", slug: "local" },
  { label: "Airport", service: "Airport Transfer", slug: "airport" },
] as const;
type TripTab = (typeof tripTabs)[number]["label"];

const maxStops = { oneWay: 1, roundTrip: 5 };

const airportTransfers = ["Drop to Airport", "Pickup from Airport"];
const localPackages = ["4 hrs | 40 km", "8 hrs | 80 km", "12 hrs | 120 km"];

// Pickups need at least this much notice; earlier slots today aren't offered.
const LEAD_MINUTES = 60;

const atTimeOf = (day: Date, time: Date) => {
  const moment = new Date(day);
  moment.setHours(time.getHours(), time.getMinutes(), 0, 0);
  return moment;
};

const isToday = (day: Date) => day.toDateString() === new Date().toDateString();

const earliestSlotToday = () => {
  const earliest = new Date(Date.now() + LEAD_MINUTES * 60_000);
  earliest.setMinutes(Math.ceil(earliest.getMinutes() / 15) * 15, 0, 0);
  return earliest;
};

// Opens the matching tab for links like /?trip=round-trip#booking (used by the service cards).
// Kept in its own component so only this, not the whole form, waits on the search params.
const TabFromUrl: React.FC<{ onTab: (tab: TripTab) => void }> = ({ onTab }) => {
  const trip = useSearchParams().get("trip");

  useEffect(() => {
    const match = tripTabs.find((tripTab) => tripTab.slug === trip);
    if (match) onTab(match.label);
  }, [trip]); // eslint-disable-line react-hooks/exhaustive-deps

  // Same-page links (Book Now, service cards) re-open the form every time, even with an unchanged URL.
  useEffect(() => {
    const open = (event: Event) => {
      const match = tripTabs.find((tripTab) => tripTab.slug === (event as CustomEvent<{ trip: string | null }>).detail.trip);
      if (match) onTab(match.label);
    };
    window.addEventListener(BOOKING_OPEN_EVENT, open);
    return () => window.removeEventListener(BOOKING_OPEN_EVENT, open);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
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

const Form1 = () => {
  const id = useId();
  const router = useRouter();
  const [tab, setTab] = useState<TripTab>("One Way");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [stops, setStops] = useState<string[]>([]);
  const [localCity, setLocalCity] = useState("");
  const [localPackage, setLocalPackage] = useState(localPackages[1]);
  const [airportTransfer, setAirportTransfer] = useState(airportTransfers[0]);
  // Drop to Airport: pickup city, then one of that city's airports.
  // Pickup from Airport: any airport, then a drop city anywhere in India.
  const [airportCityName, setAirportCityName] = useState("");
  const [airport, setAirport] = useState("");
  const [airportDropCity, setAirportDropCity] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [showErrors, setShowErrors] = useState(false);
  const [showStopErrors, setShowStopErrors] = useState(false);
  const tabRefs = useRef<Partial<Record<TripTab, HTMLButtonElement | null>>>({});
  const [indicator, setIndicator] = useState<CSSProperties>({ opacity: 0 });

  const isRoundTrip = tab === "Round Trip";
  const isAirport = tab === "Airport";
  const isLocal = tab === "Local";
  const needsDrop = tab === "One Way" || isRoundTrip;
  const toAirport = airportTransfer === "Drop to Airport";
  const stopLimit = isRoundTrip ? maxStops.roundTrip : maxStops.oneWay;
  const visibleStops = stops.slice(0, stopLimit);
  const airportCityKey = tier1CityNames.find((city) => city === airportCityName);
  const airportOptions = toAirport ? (airportCityKey ? airportsByCity[airportCityKey] : []) : allAirports;
  const minTime = date && isToday(date) ? earliestSlotToday() : null;

  // Every city in a One Way / Round Trip route must be different.
  const same = (a: string, b: string) => Boolean(a) && a.toLowerCase() === b.toLowerCase();
  const routeCities = [from, ...visibleStops, to];
  const otherCities = (position: number) => routeCities.filter((city, index) => city && index !== position);
  const repeatsEarlier = (position: number) => routeCities.slice(0, position).some((city) => same(city, routeCities[position]));

  const errors = {
    from: needsDrop && !from && "Please select a pickup city",
    stops:
      needsDrop &&
      visibleStops.some((stop, index) => !stop || repeatsEarlier(index + 1)) &&
      "Please choose a different city for each stop",
    to: needsDrop && (!to ? "Please select a drop city" : repeatsEarlier(routeCities.length - 1) && "Drop city must be different from the cities above"),
    localCity: isLocal && !localCity && "Please select a city",
    airportCity: isAirport && toAirport && !airportCityKey && "Please select a pickup city",
    airport: isAirport && !airport && "Please select an airport",
    airportDropCity: isAirport && !toAirport && !airportDropCity && "Please select a drop city",
    date: !date && "Please choose a pickup date",
    time: !time
      ? "Please choose a pickup time"
      : date && minTime && atTimeOf(date, time) < minTime && `Please choose a time at least ${LEAD_MINUTES} minutes from now`,
    returnDate:
      isRoundTrip &&
      (!returnDate ? "Please choose a return date" : date && returnDate < date && "Return date can't be before the pickup date"),
  };
  const errorFor = (field: keyof typeof errors) => (showErrors && errors[field]) || undefined;
  const stopError = (index: number) => {
    if (!showErrors && !showStopErrors) return undefined;
    if (!visibleStops[index]) return "Please select a stop city";
    return repeatsEarlier(index + 1) ? "This city is already in your trip" : undefined;
  };

  // Slide the highlight behind the active tab; only the tab pill animates, not the form below.
  useLayoutEffect(() => {
    const place = () => {
      const button = tabRefs.current[tab];
      if (!button) return;
      setIndicator((previous) => ({
        width: button.offsetWidth,
        height: button.offsetHeight,
        transform: `translate(${button.offsetLeft}px, ${button.offsetTop}px)`,
        // Appear in place on first paint instead of sliding in from the corner.
        ...(previous.opacity === 0 && { transition: "none" }),
      }));
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [tab]);

  const selectTab = (next: TripTab) => {
    setTab(next);
    setShowErrors(false);
    setShowStopErrors(false);
  };

  // A new stop can only be added once every stop above it is filled in.
  const addStop = () => {
    if (visibleStops.some((stop, index) => !stop || repeatsEarlier(index + 1))) {
      setShowStopErrors(true);
      return;
    }
    setShowStopErrors(false);
    setStops([...visibleStops, ""]);
  };

  const swapCities = () => {
    setFrom(to);
    setTo(from);
  };

  const updateStop = (index: number, value: string) => setStops((current) => current.map((stop, i) => (i === index ? value : stop)));
  const removeStop = (index: number) => setStops((current) => current.filter((_, i) => i !== index));

  // A new pickup city only offers its own airports (auto-selecting a city's only airport).
  const selectAirportCity = (city: string) => {
    if (city === airportCityName) return;
    setAirportCityName(city);
    const airports = airportsByCity[city as Tier1City] ?? [];
    setAirport(airports.length === 1 ? airports[0] : "");
  };

  const selectAirportTransfer = (transfer: string) => {
    setAirportTransfer(transfer);
    // Drop to Airport only allows the pickup city's airports, so an airport picked from the full list may not fit.
    setAirport("");
    setAirportCityName("");
  };

  const airportPickupCityField = (
    <Field id={`${id}-airportCity`} label="Pickup City" error={errorFor("airportCity")}>
      <CitySearch
        id={`${id}-airportCity`}
        name="airportCity"
        placeholder="Search pickup city"
        value={airportCityName}
        onChange={selectAirportCity}
        options={tier1CityNames}
        hasError={Boolean(errorFor("airportCity"))}
      />
    </Field>
  );
  const airportDropCityField = (
    <Field id={`${id}-airportDropCity`} label="Drop City" error={errorFor("airportDropCity")}>
      <CitySearch
        id={`${id}-airportDropCity`}
        name="airportDropCity"
        placeholder="Search drop city"
        value={airportDropCity}
        onChange={setAirportDropCity}
        options={indianCities}
        allowCustom
        hasError={Boolean(errorFor("airportDropCity"))}
      />
    </Field>
  );
  const airportField = (
    <Field id={`${id}-airport`} label={toAirport ? "Drop Airport" : "Pickup Airport"} error={errorFor("airport")}>
      <CustomSelect
        id={`${id}-airport`}
        name="airport"
        options={airportOptions}
        placeholder={toAirport && !airportCityKey ? "Select pickup city first" : "Select airport"}
        value={airport}
        onChange={setAirport}
        hasError={Boolean(errorFor("airport"))}
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
      from: isAirport ? (toAirport ? airportCityName : airport) : isLocal ? localCity : from,
      stop: needsDrop ? visibleStops.join(", ") : "",
      to: isAirport ? (toAirport ? airport : airportDropCity) : needsDrop ? to : "",
      package: isLocal ? localPackage : "",
      date: formatDate(date),
      returnDate: isRoundTrip && returnDate ? formatDate(returnDate) : "",
      time: formatTime(time),
    };
    router.push(`/explore-cars?${tripToSearchParams(trip)}`);
  };

  return (
    <form className="rounded-3xl border border-line bg-white p-6 sm:p-10" noValidate onSubmit={handleSubmit}>
      <Suspense fallback={null}>
        <TabFromUrl onTab={selectTab} />
      </Suspense>
      <div aria-label="Trip type" className="relative mb-6 grid grid-cols-2 gap-1 rounded-xl border border-line bg-ivory p-1 sm:grid-cols-4" role="tablist">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 rounded-lg bg-dark shadow-sm transition-[transform,width,height] duration-300 ease-out"
          style={indicator}
        />
        {tripTabs.map(({ label }) => (
          <button
            aria-selected={tab === label}
            className={`relative h-10 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark ${
              tab === label
                ? // Until the sliding highlight is measured, the active tab paints its own background.
                  `text-white ${indicator.opacity === 0 ? "bg-dark" : ""}`
                : "text-secondary hover:text-dark"
            }`}
            key={label}
            onClick={() => selectTab(label)}
            ref={(button) => {
              tabRefs.current[label] = button;
            }}
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
              <CitySearch
                id={`${id}-from`}
                name="from"
                placeholder="Search pickup city"
                value={from}
                onChange={setFrom}
                options={indianCities}
                allowCustom
                taken={otherCities(0)}
                hasError={Boolean(errorFor("from"))}
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
              <CitySearch
                id={`${id}-to`}
                name="to"
                placeholder="Search drop city"
                value={to}
                onChange={setTo}
                options={indianCities}
                allowCustom
                taken={otherCities(routeCities.length - 1)}
                hasError={Boolean(errorFor("to"))}
              />
            </Field>
          </div>
        )}

        {needsDrop && visibleStops.length > 0 && (
          <div className="grid grid-cols-2 items-start gap-3 md:col-span-2 md:grid-cols-3">
            {visibleStops.map((stop, index) => (
              <div className="flex min-w-0 flex-col gap-2" key={index}>
                <div className="flex items-center justify-between gap-2">
                  <label className={labelClass()} htmlFor={`${id}-stop-${index}`}>
                    Stop {index + 1}
                  </label>
                  <button
                    aria-label={`Remove stop ${index + 1}`}
                    className="flex size-6 items-center justify-center rounded-full text-secondary transition hover:bg-ivory hover:text-dark"
                    onClick={() => removeStop(index)}
                    title="Remove stop"
                    type="button"
                  >
                    <FiX aria-hidden="true" className="size-4" />
                  </button>
                </div>
                <CitySearch
                  id={`${id}-stop-${index}`}
                  name={`stop${index + 1}`}
                  placeholder="Search city"
                  value={stop}
                  onChange={(value) => updateStop(index, value)}
                  options={indianCities}
                  allowCustom
                  taken={otherCities(index + 1)}
                  hasError={Boolean(stopError(index))}
                />
                {stopError(index) && <p className={errorTextClass}>{stopError(index)}</p>}
              </div>
            ))}
          </div>
        )}

        {needsDrop && visibleStops.length < stopLimit && (
          <button
            className="-mt-2 flex items-center gap-2 justify-self-start text-sm font-semibold text-dark transition hover:text-secondary md:col-span-2"
            onClick={addStop}
            type="button"
          >
            <FiPlusCircle aria-hidden="true" className="size-4" />
            {visibleStops.length ? "Add another stop" : "Add a stop"}
          </button>
        )}

        {isLocal && (
          <>
            <Field id={`${id}-localCity`} label="City" error={errorFor("localCity")}>
              <CitySearch
                id={`${id}-localCity`}
                name="localCity"
                placeholder="Search city"
                value={localCity}
                onChange={setLocalCity}
                options={tier1CityNames}
                hasError={Boolean(errorFor("localCity"))}
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
                onChange={selectAirportTransfer}
              />
            </Field>
            {toAirport ? airportPickupCityField : airportField}
            {toAirport ? airportField : airportDropCityField}
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
            minTime={minTime}
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
