/**
 * ============================================================
 *  HOME HERO — 3D ORBIT POSITION SETTINGS
 *  Edit the numbers below and save; the dev server updates live.
 * ============================================================
 *
 *  UNITS (3D "world" units, not pixels):
 *    x      → left / right.  0 = centre of screen. Positive = move RIGHT, negative = LEFT.
 *             The screen is roughly 9 units wide at 1280px and 13 units wide at 1920px,
 *             so +0.5 moves the orbit about 4–5% of the screen width.
 *    y      → up / down.     0 = vertical centre.  Positive = UP, negative = DOWN.
 *    scale  → size.          1 = full size, 0.8 = 80%, 1.2 = 120%.
 *
 *  BREAKPOINTS:
 *    desktop  → screens 1024px and wider
 *    tablet   → 768px – 1023px
 *    mobile   → below 768px
 */
export const ORBIT_LAYOUT = {
  /**
   * 'auto'   → desktop position is calculated so the orbit always sits just right of the
   *            headline text (no overlap), using the `auto` settings below.
   * 'manual' → desktop uses your exact `desktop` numbers below.
   * Tablet and mobile always use their own numbers.
   */
  mode: 'auto' as 'auto' | 'manual',

  /** Used when mode = 'manual' (screens 1024px and wider). */
  desktop: { x: 3.2, y: 0, scale: 1 },

  /** Screens 768px – 1023px. */
  tablet: { x: 1.5, y: 0, scale: 0.8 },

  /** Screens below 768px (sits in the top-right corner behind the text). */
  mobile: { x: 0.7, y: 1.9, scale: 0.5 },

  /** Fine-tuning for mode = 'auto' (desktop only). */
  auto: {
    /** Space between the end of the headline and the orbit's left edge. Bigger = further right. */
    gap: -1,
    /** Extra shift applied after the automatic calculation. +0.3 = a little right, -0.3 = a little left. */
    offsetX: 0,
    /** Vertical position. */
    y: -0.3,
    /** Smallest / largest size the orbit is allowed to shrink or grow to. */
    minScale: 0.55,
    maxScale: 1,
    /** How far the sphere may run past the right edge of the screen before it shrinks. */
    rightBleed: 0.5,
  },
};
