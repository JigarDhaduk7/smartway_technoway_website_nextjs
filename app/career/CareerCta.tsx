'use client';

import CtaBand from '../component/ui/CtaBand';
import { scrollToId } from '../component/ui/SmoothScroll';

export default function CareerCta() {
  return (
    <CtaBand
      title="Didn't spot the perfect role?"
      description="We're always looking for curious, driven people. Browse the current openings or send us your resume — we'd love to hear from you."
      cta={{ label: 'See Current Opening', onClick: () => scrollToId('SeeCurrentOpening') }}
    />
  );
}
