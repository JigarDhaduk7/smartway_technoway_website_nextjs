'use client';

import React from 'react';
import { motion, type Variants } from 'motion/react';

const EASE = [0.16, 1, 0.3, 1] as const;

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const offset = (direction: Direction, distance: number) => {
  switch (direction) {
    case 'up': return { y: distance };
    case 'down': return { y: -distance };
    case 'left': return { x: distance };
    case 'right': return { x: -distance };
    default: return {};
  }
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  distance?: number;
  blur?: boolean;
  scale?: boolean;
  as?: 'div' | 'li' | 'section' | 'span';
}

// Fade/slide content in once it scrolls into view.
export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 40,
  blur = true,
  scale = false,
  as = 'div',
}: RevealProps) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, ...offset(direction, distance), ...(blur ? { filter: 'blur(10px)' } : {}), ...(scale ? { scale: 0.94 } : {}) }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)', scale: 1 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </Comp>
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: (stagger: number = 0.08) => ({ transition: { staggerChildren: stagger } }),
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 36, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: EASE } },
};

// Parent that staggers its <StaggerItem> children as they enter the viewport.
export function Stagger({
  children,
  className,
  stagger = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      custom={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
