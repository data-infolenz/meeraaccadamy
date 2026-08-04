'use client';

import { Quote, Star } from 'lucide-react';
import { TiltCard } from '@/components/site/tilt-card';

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initials: string;
  accent: 'primary' | 'accent';
};

const testimonials: Testimonial[] = [
  {
    name: 'Student Name',
    role: 'NEET UG Aspirant',
    quote:
      'Sample testimonial placeholder. Replace this with a real student story about structured tests, mentoring, accuracy, and confidence.',
    initials: 'SN',
    accent: 'accent',
  },
  {
    name: 'Parent Name',
    role: 'Parent of JEE Student',
    quote:
      'Sample testimonial placeholder. Replace this with a real parent note about progress updates, doubt-clearing support, and visible improvement.',
    initials: 'PN',
    accent: 'primary',
  },
  {
    name: 'Student Name',
    role: 'JEE Advanced Aspirant',
    quote:
      'Sample testimonial placeholder. Replace this with a real student experience from advanced problem-solving and exam strategy sessions.',
    initials: 'SN',
    accent: 'accent',
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-secondary/70 py-20 lg:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="absolute inset-0 -z-10 bg-dots opacity-40" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-accent">
            Testimonials
          </span>
          <h2
            id="testimonials-heading"
            className="mt-3 font-display text-3xl font-extrabold tracking-normal text-primary text-balance sm:text-4xl lg:text-[2.75rem]"
          >
            In their words
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground text-pretty lg:text-lg">
            The cards below are clearly marked sample content. Swap in real
            stories from students and parents to build trust with new families.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {testimonials.map((t) => {
            const isPrimary = t.accent === 'primary';
            return (
              <TiltCard key={t.name + t.role} max={8} className="reveal glass relative flex h-full flex-col rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35">
                <Quote className={`h-8 w-8 ${isPrimary ? 'text-primary/35' : 'text-accent/45'}`} aria-hidden="true" />
                <blockquote className="mt-3 flex-1 text-sm text-primary/80 text-pretty lg:text-base">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-5 flex items-center gap-1 text-accent" aria-label="5 out of 5 rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <figcaption className="mt-4 flex items-center gap-3 border-t border-primary/10 pt-4">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white ${
                      isPrimary ? 'bg-primary' : 'bg-accent'
                    }`}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-bold text-primary">{t.name}</span>
                    <span className="text-xs text-muted-foreground">{t.role}</span>
                  </span>
                  <span className="ml-auto rounded-full bg-white/70 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                    Sample
                  </span>
                </figcaption>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
