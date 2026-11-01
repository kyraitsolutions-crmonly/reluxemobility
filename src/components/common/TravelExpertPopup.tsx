"use client";

import { contact } from "@/utils/constent";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight, FiCheck, FiPhone, FiX } from "react-icons/fi";
import { LuHeadset } from "react-icons/lu";

const DELAY_MS = 10_000;
const CLOSE_ANIMATION_MS = 250;
// Visitors already in the booking flow aren't interrupted.
const HIDDEN_ON = ["/contact-us", "/explore-cars"];

const perks = ["Best price on call", "Help choosing the right car", "Available day and night"];

// Travel-desk call prompt. It opens 10 seconds after the page loads; once closed it stays closed while
// the visitor moves around the site (this component lives in the layout), and a refresh starts over.
const TravelExpertPopup = () => {
  const pathname = usePathname();
  const [isDue, setIsDue] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const hidden = HIDDEN_ON.some((path) => pathname.startsWith(path));
  const isOpen = isDue && !isDismissed && !hidden;

  useEffect(() => {
    const timer = setTimeout(() => setIsDue(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setIsClosing(true);
    setTimeout(() => setIsDismissed(true), CLOSE_ANIMATION_MS);
  };

  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/70 p-4 backdrop-blur-sm ${
        isClosing ? "animate-[fade-out_250ms_ease-in_forwards]" : "animate-[fade-in_300ms_ease-out]"
      }`}
      onClick={close}
    >
      <div
        aria-labelledby="expert-popup-title"
        aria-modal="true"
        className={`relative w-full max-w-3xl overflow-hidden ${isClosing ? "animate-[popup-out_250ms_ease-in_forwards]" : "animate-[popup-in_450ms_cubic-bezier(0.16,1,0.3,1)]"} rounded-3xl border border-beige/20 bg-dark text-white shadow-2xl`}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-beige/15 blur-3xl" />

        <button
          ref={closeRef}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          onClick={close}
          type="button"
        >
          <FiX aria-hidden="true" className="size-5" />
        </button>

        <div className="relative grid gap-8 p-7 sm:p-10 md:grid-cols-[1.15fr_1fr] md:items-center">
          <div className="space-y-5">
            <span className="flex size-12 items-center justify-center rounded-full bg-beige/10 text-2xl text-beige ring-1 ring-beige/30">
              <LuHeadset aria-hidden="true" />
            </span>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-beige">Reluxe Travel Desk · 24×7</p>
              <h2 id="expert-popup-title" className="text-2xl font-semibold leading-snug sm:text-3xl">
                Plan your trip with an expert
              </h2>
              <p className="text-sm text-ivory/75">Tell us where you&apos;re headed. We&apos;ll suggest the right car and share the best price.</p>
            </div>
            <ul className="space-y-2">
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-2 text-sm text-ivory/85">
                  <FiCheck aria-hidden="true" className="size-4 shrink-0 text-beige" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 rounded-2xl border border-white/10 bg-navy-deep/40 p-5">
            <Link
              href={contact.callCta}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-beige px-5 py-4 text-lg font-semibold text-dark transition hover:bg-ivory"
            >
              <FiPhone aria-hidden="true" className="size-5" />
              {contact.phone[0]}
            </Link>
            <Link
              href={contact.WhatsappCta}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <FaWhatsapp aria-hidden="true" className="size-5 text-emerald-400" />
              Chat on WhatsApp
            </Link>
            <Link
              href="/#booking"
              onClick={close}
              className="flex items-center justify-center gap-1.5 pt-1 text-sm text-ivory/75 transition hover:text-beige"
            >
              Or plan it yourself online
              <FiArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelExpertPopup;
