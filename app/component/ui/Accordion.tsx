'use client';

import React, { useId, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Plus } from 'lucide-react';

export interface AccordionItem {
  key: string;
  title: React.ReactNode;
  content: React.ReactNode;
}

// Single-open accordion with animated height and a rotating plus icon.
export default function Accordion({ items, defaultOpen = 0 }: { items: AccordionItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div
            key={item.key}
            className={`rounded-2xl border transition-colors duration-300 ${
              isOpen ? 'border-brand-bright/50 bg-surface-2/80' : 'border-line bg-surface/60 hover:border-line-strong'
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex min-h-14 w-full items-center gap-4 px-5 py-4 text-left md:px-6"
            >
              <div className="flex-1 font-display text-base font-semibold md:text-lg">{item.title}</div>
              <span
                className={`grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                  isOpen ? 'rotate-45 border-transparent bg-brand-bright text-white' : 'border-line-strong text-muted'
                }`}
              >
                <Plus className="size-4" aria-hidden />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-6 text-muted md:px-6">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
