import React from 'react';
import SplitText from './SplitText';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: React.ReactNode;
  align?: 'split' | 'center' | 'left';
  className?: string;
}

// Eyebrow + split-word title + supporting copy, used to open most sections.
export default function SectionHeading({ eyebrow, title, description, align = 'split', className = '' }: SectionHeadingProps) {
  const titleCls = 'font-display text-[clamp(2rem,4.6vw,3.6rem)] font-semibold text-fg';

  if (align === 'split') {
    return (
      <div className={`grid gap-6 lg:grid-cols-12 lg:items-end ${className}`}>
        <div className="lg:col-span-7">
          {eyebrow && (
            <Reveal blur={false} distance={16}>
              <span className="eyebrow mb-5">
                <span className="h-px w-8 bg-cyan" />
                {eyebrow}
              </span>
            </Reveal>
          )}
          <SplitText text={title} className={titleCls} />
        </div>
        {description && (
          <Reveal delay={0.15} className="text-base leading-relaxed text-muted md:text-lg lg:col-span-5 lg:pb-2">
            {description}
          </Reveal>
        )}
      </div>
    );
  }

  return (
    <div className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <Reveal blur={false} distance={16}>
          <span className={`eyebrow mb-5 ${align === 'center' ? 'justify-center' : ''}`}>
            <span className="h-px w-8 bg-cyan" />
            {eyebrow}
            {align === 'center' && <span className="h-px w-8 bg-cyan" />}
          </span>
        </Reveal>
      )}
      <SplitText text={title} className={titleCls} />
      {description && (
        <Reveal delay={0.15} className="mt-5 text-base leading-relaxed text-muted md:text-lg">
          {description}
        </Reveal>
      )}
    </div>
  );
}
