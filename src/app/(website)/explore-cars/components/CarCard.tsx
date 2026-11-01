"use client";

import { bookingTerms, type CabSegment } from "@/utils/cabSegments";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiCheck, FiChevronDown, FiMinus } from "react-icons/fi";
import { LuBriefcase, LuBus, LuCar, LuUsers, LuZap } from "react-icons/lu";

const tabs = [
  { id: "inclusions", label: "Inclusions", items: bookingTerms.inclusions, icon: FiCheck },
  { id: "exclusions", label: "Exclusions", items: bookingTerms.exclusions, icon: FiMinus },
  { id: "terms", label: "T&C", items: bookingTerms.terms, icon: FiCheck },
] as const;

const FallbackIcon = ({ group }: { group: CabSegment["group"] }) => {
  const Icon = group === "Group Travel" ? LuBus : group === "Electric" ? LuZap : LuCar;
  return <Icon aria-hidden="true" className="size-14 text-dark/25" />;
};

interface CarCardProps {
  segment: CabSegment;
  hasPhoto: boolean;
  isPreferred: boolean;
  contactHref: (car: string) => string;
}

const CarCard: React.FC<CarCardProps> = ({ segment, hasPhoto, isPreferred, contactHref }) => {
  const [seats, setSeats] = useState(segment.seats[0]);
  const [openTab, setOpenTab] = useState<(typeof tabs)[number]["id"] | null>(null);
  const activeTab = tabs.find((tab) => tab.id === openTab);
  const carName = segment.seats.length > 1 ? `${segment.name} (${seats})` : `${segment.name} (${segment.models})`;

  return (
    <article className={`overflow-hidden rounded-3xl border bg-white transition ${isPreferred ? "border-dark ring-1 ring-dark" : "border-line"}`}>
      <div className="grid gap-5 p-5 sm:p-6 md:grid-cols-[220px_1fr_auto] md:items-center">
        <div className="relative flex aspect-16/10 max-md:aspect-auto max-md:h-40 items-center justify-center overflow-hidden rounded-2xl bg-quaternary">
          {segment.image && hasPhoto ? (
            <Image
              src={segment.image}
              alt={segment.models}
              fill
              sizes="(min-width: 768px) 220px, 100vw"
              className="object-cover mix-blend-multiply"
            />
          ) : (
            <FallbackIcon group={segment.group} />
          )}
          {isPreferred && (
            <span className="absolute left-3 top-3 rounded-full bg-dark px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
              Your choice
            </span>
          )}
        </div>

        <div className="min-w-0 space-y-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">{segment.group}</p>
            <h2 className="text-xl font-semibold text-dark">{segment.name}</h2>
            <p className="text-sm text-secondary">{segment.models}</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-dark">
            <span className="flex items-center gap-1.5">
              <LuUsers aria-hidden="true" className="size-4 text-accent" />
              {segment.seats.length > 1 ? `${segment.seats[0].split("+")[0]}–${segment.seats.at(-1)!.split("+")[0]}` : seats.split("+")[0]} seats
            </span>
            <span className="flex items-center gap-1.5">
              <LuBriefcase aria-hidden="true" className="size-4 text-accent" />
              {segment.luggage}
            </span>
          </div>

          <ul className="flex flex-wrap gap-2">
            {segment.features.map((feature) => (
              <li key={feature} className="rounded-full bg-tertiary px-3 py-1 text-xs text-dark">
                {feature}
              </li>
            ))}
          </ul>

          {segment.seats.length > 1 && (
            <div aria-label="Seating capacity" className="flex flex-wrap gap-2" role="radiogroup">
              {segment.seats.map((option) => (
                <button
                  aria-checked={seats === option}
                  className={`h-8 rounded-lg border px-3 text-xs font-semibold transition ${
                    seats === option ? "border-dark bg-dark text-white" : "border-line text-dark hover:border-dark"
                  }`}
                  key={option}
                  onClick={() => setSeats(option)}
                  role="radio"
                  type="button"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3 md:w-44 md:items-stretch">
          <p className="text-sm font-semibold text-dark md:text-center">Get Best Price</p>
          <Link
            href={contactHref(carName)}
            className="flex h-11 items-center justify-center rounded-xl bg-dark px-5 text-sm font-semibold text-white transition hover:bg-navy-deep"
          >
            Select Car
          </Link>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="flex overflow-x-auto px-3 sm:px-4">
          {tabs.map((tab) => (
            <button
              aria-expanded={openTab === tab.id}
              className={`flex h-11 shrink-0 items-center gap-1.5 border-b-2 px-3 text-xs font-semibold uppercase tracking-wider transition ${
                openTab === tab.id ? "border-dark text-dark" : "border-transparent text-secondary hover:text-dark"
              }`}
              key={tab.id}
              onClick={() => setOpenTab(openTab === tab.id ? null : tab.id)}
              type="button"
            >
              {tab.label}
              <FiChevronDown aria-hidden="true" className={`size-3.5 transition-transform ${openTab === tab.id ? "rotate-180" : ""}`} />
            </button>
          ))}
        </div>
        {activeTab && (
          <ul className="grid gap-2 bg-quaternary px-5 py-4 text-sm text-secondary sm:grid-cols-2 sm:px-6">
            {activeTab.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <activeTab.icon aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};

export default CarCard;
