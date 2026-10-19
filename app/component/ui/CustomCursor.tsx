'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'motion/react';

type Mode = 'default' | 'link' | 'label' | 'text' | 'hidden';

const INTERACTIVE = 'a, button, [role="button"], label, select, summary, input[type="radio"], input[type="checkbox"], input[type="submit"]';
const TEXT_FIELD = 'input:not([type="radio"]):not([type="checkbox"]):not([type="submit"]), textarea, [contenteditable="true"]';

// Dot that tracks the pointer exactly + a ring that springs behind it.
// The ring grows over interactive elements and shows a label for [data-cursor="..."].
// Mouse/trackpad only; touch devices and reduced-motion users keep the native cursor.
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<Mode>('hidden');
  const [label, setLabel] = useState('');
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 380, damping: 32, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 380, damping: 32, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.documentElement.classList.add('custom-cursor');

    const resolve = (target: EventTarget | null) => {
      const el = target instanceof Element ? target : null;
      if (!el) return;
      const labelled = el.closest<HTMLElement>('[data-cursor]');
      if (labelled) {
        setLabel(labelled.dataset.cursor ?? '');
        setMode('label');
      } else if (el.closest(TEXT_FIELD)) {
        setMode('text');
      } else if (el.closest(INTERACTIVE)) {
        setMode('link');
      } else {
        setMode('default');
      }
    };

    const move = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: PointerEvent) => e.pointerType === 'mouse' && resolve(e.target);
    const leave = () => setMode('hidden');
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerover', over);
    document.documentElement.addEventListener('pointerleave', leave);
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    window.addEventListener('blur', leave);

    return () => {
      document.documentElement.classList.remove('custom-cursor');
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerover', over);
      document.documentElement.removeEventListener('pointerleave', leave);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('blur', leave);
    };
  }, [x, y]);

  if (!enabled) return null;

  const ringSize = mode === 'label' ? 88 : mode === 'link' ? 56 : 34;
  const showRing = mode !== 'hidden' && mode !== 'text';
  const showDot = mode === 'default' || mode === 'link';

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed top-0 left-0 z-[100]"
      >
        <motion.div
          animate={{
            width: ringSize,
            height: ringSize,
            opacity: showRing ? 1 : 0,
            scale: pressed ? 0.82 : 1,
          }}
          transition={{ type: 'spring', stiffness: 420, damping: 30 }}
          className={`-translate-x-1/2 -translate-y-1/2 grid place-items-center rounded-full border transition-colors duration-300 ${
            mode === 'label'
              ? 'border-transparent bg-gradient-to-br from-brand-bright to-cyan shadow-[0_10px_40px_-8px_rgba(45,212,255,0.6)]'
              : mode === 'link'
                ? 'border-cyan/80'
                : 'border-white/40'
          }`}
        >
          <AnimatePresence>
            {mode === 'label' && (
              <motion.span
                key={label}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.2 }}
                className="text-xs font-semibold tracking-wider text-white uppercase"
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Precise dot */}
      <motion.div aria-hidden style={{ x, y }} className="pointer-events-none fixed top-0 left-0 z-[101]">
        <motion.div
          animate={{ scale: showDot ? (mode === 'link' ? 0.5 : 1) : 0, opacity: showDot ? 1 : 0 }}
          transition={{ duration: 0.15 }}
          className="-translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-cyan shadow-[0_0_12px_rgba(45,212,255,0.9)]"
        />
      </motion.div>
    </>
  );
}
