"use client";

import { TripDetails } from "@/@types/leadType";
import { cabGroups, cabSegments, type CabGroup } from "@/utils/cabSegments";
import { tripFromSearchParams, tripToSearchParams } from "@/utils/tripParams";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FiCalendar, FiClock, FiEdit2, FiMapPin } from "react-icons/fi";
import CarCard from "./CarCard";

type Filter = "All" | CabGroup;

const tripSlug = (serviceType: string) =>
  serviceType.startsWith("Round Trip")
    ? "round-trip"
    : serviceType.startsWith("Local")
      ? "local"
      : serviceType.startsWith("Airport")
        ? "airport"
        : "one-way";

const routeOf = (trip: TripDetails) =>
  [trip.from, ...(trip.stop ? trip.stop.split(", ") : []), trip.to].filter(Boolean).join(" → ");

const ExploreCars: React.FC<{ segmentsWithPhoto: string[] }> = ({ segmentsWithPhoto }) => {
  const trip = tripFromSearchParams(useSearchParams());
  const preferred = cabSegments.find((segment) => segment.id === trip?.category);
  const [filter, setFilter] = useState<Filter>(preferred?.group ?? "All");

  if (!trip) {
    return (
      <div className="mx-auto max-w-lg space-y-4 rounded-3xl border border-line bg-white p-8 text-center">
        <h1 className="text-2xl font-semibold text-dark">Plan your journey first</h1>
        <p className="text-secondary">Tell us where and when you&apos;re travelling, and we&apos;ll show the cars available for your trip.</p>
        <Link href="/#booking" className="inline-flex h-12 items-center rounded-xl bg-dark px-6 text-sm font-semibold text-white transition hover:bg-navy-deep">
          Plan Your Journey
        </Link>
      </div>
    );
  }

  const visible = cabSegments
    .filter((segment) => filter === "All" || segment.group === filter)
    // The category picked in the booking form comes first.
    .sort((a, b) => Number(b.id === preferred?.id) - Number(a.id === preferred?.id));

  const contactHref = (car: string) => `/contact-us?${tripToSearchParams({ ...trip, category: "", car })}#contact`;

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-5 rounded-3xl border border-line bg-white p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0 space-y-3">
          <p className="w-fit rounded-full bg-tertiary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-dark">{trip.serviceType}</p>
          <p className="flex items-start gap-2 text-lg font-semibold text-dark">
            <FiMapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
            <span className="min-w-0 break-words">
              {routeOf(trip)}
              {trip.package && <span className="font-normal text-secondary"> · {trip.package}</span>}
            </span>
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-secondary">
            <span className="flex items-center gap-2">
              <FiCalendar aria-hidden="true" className="size-4 text-accent" />
              {trip.date}
              {trip.returnDate && ` – ${trip.returnDate}`}
            </span>
            <span className="flex items-center gap-2">
              <FiClock aria-hidden="true" className="size-4 text-accent" />
              {trip.time}
            </span>
          </div>
        </div>
        <Link
          href={`/?trip=${tripSlug(trip.serviceType)}#booking`}
          className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-dark px-5 text-sm font-semibold text-dark transition hover:bg-dark hover:text-white"
        >
          <FiEdit2 aria-hidden="true" className="size-4" />
          Modify Trip
        </Link>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-dark md:text-3xl">Choose Your Car</h1>
          <p className="text-sm text-secondary">Select a car and our desk will get back to you with the best price.</p>
        </div>
        <div aria-label="Filter by category" className="flex gap-2 overflow-x-auto pb-1" role="group">
          {(["All", ...cabGroups] as Filter[]).map((group) => (
            <button
              aria-pressed={filter === group}
              className={`h-9 shrink-0 rounded-full border px-4 text-xs font-semibold uppercase tracking-wider transition ${
                filter === group ? "border-dark bg-dark text-white" : "border-line bg-white text-secondary hover:border-dark hover:text-dark"
              }`}
              key={group}
              onClick={() => setFilter(group)}
              type="button"
            >
              {group}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5">
        {visible.map((segment) => (
          <CarCard
            key={segment.id}
            segment={segment}
            hasPhoto={segmentsWithPhoto.includes(segment.id)}
            isPreferred={segment.id === preferred?.id}
            contactHref={contactHref}
          />
        ))}
      </div>

      <p className="text-center text-xs text-secondary">Models shown are indicative. We guarantee the category and confirm your exact vehicle before pickup.</p>
    </div>
  );
};

export default ExploreCars;
