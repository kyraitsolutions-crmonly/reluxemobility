"use client";

import { useEffect, useRef, useState } from "react";

// Google Maps pulls in ~400 KB of scripts, even with loading="lazy" on the iframe, so it's only
// added once the page has loaded and the visitor scrolls near the map.
const MapEmbed: React.FC<{ src: string; title: string }> = ({ src, title }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let observer: IntersectionObserver | undefined;
    const watch = () => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          setShow(true);
          observer?.disconnect();
        },
        { rootMargin: "300px" },
      );
      observer.observe(element);
    };
    if (document.readyState === "complete") watch();
    else window.addEventListener("load", watch, { once: true });
    return () => {
      window.removeEventListener("load", watch);
      observer?.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="absolute inset-0">
      {show && (
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default MapEmbed;
