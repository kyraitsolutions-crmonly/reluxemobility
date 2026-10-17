"use client";

import { FleetModel } from "@/@types/fleetPageType";
import LinkButton from "@/components/buttons/LinkButton";
import Image from "next/image";
import { useId, useState } from "react";
import { LuCircleCheck } from "react-icons/lu";

const ModelCard: React.FC<FleetModel> = ({
  name,
  code,
  badge,
  description,
  image,
  specs,
  tags,
  specifications,
  bookLabel,
  bookHref,
}) => {
  const specificationsId = useId();
  const [showSpecifications, setShowSpecifications] = useState(false);

  return (
    <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-5 md:p-7 shadow-sm">
      <div className="relative aspect-16/9">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-contain"
        />
        {badge && (
          <span className="absolute right-0 top-0 text-[10px] font-semibold uppercase tracking-wider text-accent">
            {badge}
          </span>
        )}
      </div>

      <div className="mt-6 flex flex-1 flex-col gap-5">
        <div className="space-y-2">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-xl md:text-2xl font-semibold text-dark">{name}</h3>
            {code && <span className="shrink-0 text-sm italic text-accent">{code}</span>}
          </div>
          <p className="text-sm text-secondary">{description}</p>
        </div>

        <dl className="grid grid-cols-3 gap-3">
          {specs.map((spec) => (
            <div key={spec.label} className="space-y-1.5">
              <dt className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                {spec.label}
              </dt>
              <dd className="flex items-center gap-1.5 text-xs md:text-sm text-dark">
                <span className="shrink-0 text-secondary">{spec.icon}</span>
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-secondary"
            >
              {tag}
            </li>
          ))}
        </ul>

        {showSpecifications && (
          <ul id={specificationsId} className="space-y-2 rounded-xl bg-quaternary p-4">
            {specifications.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-dark">
                <LuCircleCheck className="shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto grid grid-cols-[1fr_auto] gap-3">
          <LinkButton
            href={bookHref}
            label={bookLabel}
            className="w-full justify-center rounded-lg border-dark bg-dark text-xs uppercase text-white"
          />
          <button
            type="button"
            aria-expanded={showSpecifications}
            aria-controls={specificationsId}
            onClick={() => setShowSpecifications((open) => !open)}
            className="rounded-lg border border-line px-4 py-2 text-xs font-medium uppercase tracking-widest text-dark transition hover:border-dark"
          >
            {showSpecifications ? "Hide" : "Specifications"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
