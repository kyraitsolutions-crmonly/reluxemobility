"use client";

import { FleetShowcaseProps, FleetVehicle } from "@/@types/fleetPageType";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ALL = "all";

const FleetShowcase: React.FC<FleetShowcaseProps> = ({
  id,
  allLabel,
  ctaLabel,
  ctaHref,
  categories,
}) => {
  const [activeId, setActiveId] = useState(ALL);

  const tabs = [{ id: ALL, label: allLabel }, ...categories];
  const visibleCategories =
    activeId === ALL
      ? categories
      : categories.filter((category) => category.id === activeId);

  return (
    <Section id={id} defaultPadding={false} className="pb-12 md:pb-16">
      <div className="border-b border-line py-5">
        <Container>
          <div
            role="tablist"
            aria-label="Fleet categories"
            className="hide-scroll flex gap-1 overflow-x-auto rounded-xl bg-tertiary/70 p-1"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={activeId === tab.id}
                onClick={() => setActiveId(tab.id)}
                className={`shrink-0 grow rounded-lg px-4 py-2.5 text-xs md:text-sm transition ${
                  activeId === tab.id
                    ? "bg-white font-semibold text-dark shadow-sm"
                    : "text-secondary hover:text-dark"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Container>
      </div>

      <Container className="space-y-14 pt-10 md:pt-14">
        {visibleCategories.map((category) => (
          <div key={category.id} id={category.id} className="scroll-mt-24 space-y-6">
            <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-dark">
                  {category.title}
                </h2>
                <p className="text-sm text-secondary">{category.description}</p>
              </div>
              <div className="hidden md:block h-px flex-1 bg-line mb-2" />
              <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider">
                <p className="text-secondary">
                  {category.vehicles.length} Models Available
                </p>
                <Link href={`/fleet/${category.id}`} className="text-accent hover:underline">
                  View Category
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.vehicles.map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  {...vehicle}
                  ctaLabel={ctaLabel}
                  ctaHref={ctaHref}
                />
              ))}
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
};

export default FleetShowcase;

export const VehicleCard: React.FC<
  FleetVehicle & { ctaLabel: string; ctaHref: string }
> = ({ name, type, badge, image, features, ctaLabel, ctaHref }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-line/60 bg-white shadow-sm">
      <div className="relative aspect-16/10 bg-quaternary">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-contain p-4 mix-blend-multiply"
        />
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-dark">
              {name} <span className="text-sm font-normal italic text-secondary">or similar</span>
            </h3>
            <p className="text-sm text-secondary">{type}</p>
          </div>
          {badge && (
            <span className="shrink-0 rounded-full bg-dark px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
              {badge}
            </span>
          )}
        </div>

        <ul className="grid grid-cols-2 gap-3">
          {features.map((feature) => (
            <li key={feature.label} className="flex items-center gap-2 text-xs text-secondary">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-tertiary text-dark">
                {feature.icon}
              </span>
              {feature.label}
            </li>
          ))}
        </ul>

        <LinkButton
          href={ctaHref}
          label={ctaLabel}
          className="mt-auto w-full justify-center rounded-xl border-line bg-quaternary text-sm text-dark tracking-normal! hover:bg-tertiary"
        />
      </div>
    </div>
  );
};
