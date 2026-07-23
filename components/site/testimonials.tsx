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
      'Replace this with a real student testimonial. Describe how the structured tests and mentoring helped improve accuracy and confidence ahead of the exam.',
    initials: 'SN',
    accent: 'primary',
  },
  {
    name: 'Parent Name',
    role: 'Parent of JEE Student',
    quote:
      'Replace this with a real parent testimonial. Mention the regular progress updates, doubt-clearing support, and the visible improvement in their child.',
    initials: 'PN',
    accent: 'accent',
  },
  {
    name: 'Student Name',
    role: 'JEE Advanced Aspirant',
    quote:
      'Replace this with a real student testimonial about advanced problem-solving sessions, exam strategy, and rank-oriented preparation.',
    initials: 'SN',
    accent: 'primary',
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-secondary/40 py-20 lg:py-28"
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
            className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl lg:text-[2.75rem]"
          >
            In their words
          </h2>
          <p className="mt-4 text-base text-muted-foreground text-pretty lg:text-lg">
            The cards below are placeholders. Swap in real stories from students
            and parents to build trust with new families.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {testimonials.map((t) => {
            const isPrimary = t.accent === 'primary';
            return (
              <TiltCard key={t.name + t.role} max={8} className="reveal relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-[box-shadow,border-color] duration-300 hover:shadow-card">
                <Quote
                  className={`h-8 w-8 ${isPrimary ? 'text-primary/30' : 'text-accent/40'}`}
                  aria-hidden="true"
                />
                <blockquote className="mt-3 flex-1 text-sm text-foreground/80 text-pretty lg:text-base">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-5 flex items-center gap-1 text-accent" aria-label="5 out of 5 rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white ${
                      isPrimary ? 'bg-primary' : 'bg-accent'
                    }`}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">{t.name}</span>
                    <span className="text-xs text-muted-foreground">{t.role}</span>
                  </span>
                  <span className="ml-auto rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                    Placeholder
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
