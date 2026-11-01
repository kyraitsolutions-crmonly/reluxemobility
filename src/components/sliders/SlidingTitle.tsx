import Image from "next/image";
import type { CSSProperties } from "react";
import "./sliding.title.scss";

interface SlidingTitleProps {
  items: { id: string; name: string; logo: string }[];
  ariaHidden?: boolean;
  // Seconds each logo takes to cross, so the speed stays the same however many logos there are.
  secondsPerItem?: number;
}

// Infinite logo marquee. The list is rendered twice and the strip slides by exactly one copy,
// so the loop has no jump or gap. It's pure CSS (GPU transform), pauses on hover and
// stops for visitors who prefer reduced motion.
export default function SlidingTitle({ items, ariaHidden = false, secondsPerItem = 2.5 }: SlidingTitleProps) {
  const style = { "--marquee-duration": `${items.length * secondsPerItem}s` } as CSSProperties;

  return (
    <div className="marquee max_screen_width" aria-hidden={ariaHidden} style={style}>
      <div className="marquee-strip">
        {[0, 1].map((copy) => (
          <ul className="marquee-track" key={copy} aria-hidden={copy === 1 || undefined}>
            {items.map((item) => (
              <li className="marquee-item" key={item.id}>
                <div className="flex h-full flex-col items-center justify-between gap-3 rounded-2xl border border-line bg-white px-4 pt-5 pb-4 transition-shadow hover:shadow-md">
                  <div className="relative h-20 w-full">
                    <Image
                      src={item.logo}
                      // The name is printed right under the logo, so the image itself needs no alt text.
                      alt=""
                      fill
                      sizes="140px"
                      className="object-contain"
                    />
                  </div>
                  <span className="w-full truncate text-center text-sm font-semibold tracking-widest text-dark">
                    {item.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
