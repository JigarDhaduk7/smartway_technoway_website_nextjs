'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  reverse?: boolean;
  /** Seconds for one set of items to scroll past (kept constant however many copies are needed). */
  duration?: number;
  className?: string;
  pauseOnHover?: boolean;
}

// Seamless infinite strip. The items are repeated until one "half" is at least as wide as the
// container, then two identical halves slide by 50% — so there is never a blank gap, even with
// only one or two items.
export default function Marquee({ children, reverse, duration = 40, className = '', pauseOnHover = true }: MarqueeProps) {
  const container = useRef<HTMLDivElement>(null);
  const set = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(1);

  useLayoutEffect(() => {
    const measure = () => {
      const c = container.current;
      const s = set.current;
      if (!c || !s || s.offsetWidth === 0) return;
      setCopies(Math.max(1, Math.ceil(c.offsetWidth / s.offsetWidth)));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (container.current) ro.observe(container.current);
    if (set.current) ro.observe(set.current);
    return () => ro.disconnect();
  }, []);

  const half = (hidden: boolean) => (
    <div className="flex shrink-0 items-stretch" aria-hidden={hidden || undefined}>
      {Array.from({ length: copies }, (_, i) => (
        <div key={i} ref={!hidden && i === 0 ? set : undefined} className="flex shrink-0 items-stretch" aria-hidden={i > 0 || undefined}>
          {children}
        </div>
      ))}
    </div>
  );

  return (
    <div ref={container} className={`group flex overflow-hidden mask-fade-x ${className}`}>
      <div
        style={{ '--marquee-duration': `${duration * copies}s` } as React.CSSProperties}
        className={`flex w-max shrink-0 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
      >
        {half(false)}
        {half(true)}
      </div>
    </div>
  );
}
