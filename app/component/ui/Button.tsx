'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

type Variant = 'primary' | 'ghost' | 'light' | 'link';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  magnetic?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
  external?: boolean;
}

const styles: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-brand to-brand-bright text-white shadow-[0_10px_40px_-10px_rgba(61,123,255,0.7)] hover:shadow-[0_14px_50px_-8px_rgba(61,123,255,0.9)]',
  ghost: 'glass text-fg hover:border-line-strong hover:bg-white/10',
  light: 'bg-white text-ink hover:bg-white/90',
  link: 'px-0! py-0! min-h-0! text-cyan hover:text-white',
};

// Pill button / link with an optional magnetic pull toward the cursor.
export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  arrow = false,
  magnetic = true,
  type = 'button',
  disabled,
  onClick,
  external,
}: ButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 15 });

  const onMove = (e: React.PointerEvent) => {
    if (!magnetic || variant === 'link' || e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const cls = `group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-[15px] font-semibold transition-[background,box-shadow,color,border-color] duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${styles[variant]} ${className}`;

  const inner = (
    <>
      {variant === 'primary' && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}
      <span className="relative">{children}</span>
      {arrow && (
        <ArrowUpRight
          aria-hidden
          className="relative size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  return (
    <motion.div ref={ref} style={{ x, y }} onPointerMove={onMove} onPointerLeave={reset} className="inline-flex">
      {href ? (
        external ? (
          <a href={href} className={cls}>
            {inner}
          </a>
        ) : (
          <Link href={href} className={cls}>
            {inner}
          </Link>
        )
      ) : (
        <button type={type} disabled={disabled} onClick={onClick} className={cls}>
          {inner}
        </button>
      )}
    </motion.div>
  );
}
