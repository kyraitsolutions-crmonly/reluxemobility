"use client";

import { useEffect } from "react";

export const BOOKING_OPEN_EVENT = "booking:open";

// A link to "#section" on the page you're already on does nothing once the URL already ends in that hash,
// so e.g. a second "Book Now" click wouldn't scroll back to the form. This makes every same-page hash link
// scroll on every click. Links to the booking form also tell it which tab to open (?trip=...).
const SamePageHashLinks = () => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = (event.target as Element | null)?.closest?.("a[href]");
      if (!(link instanceof HTMLAnchorElement) || link.target === "_blank") return;

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return;

      const section = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!section) return;

      // Stops the router too (Next's Link skips navigation when the click is already handled).
      event.preventDefault();
      if (section.id === "booking") {
        window.dispatchEvent(new CustomEvent(BOOKING_OPEN_EVENT, { detail: { trip: url.searchParams.get("trip") } }));
      }
      // Let an open mobile menu close (and unlock page scrolling) before scrolling.
      setTimeout(() => section.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
};

export default SamePageHashLinks;
