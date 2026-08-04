'use client';

import { Award, Cpu, Star, Stethoscope, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TiltCard } from '@/components/site/tilt-card';

const stats = [
  {
    icon: Stethoscope,
    value: '-',
    label: 'NEET Selections',
    note: 'Add your verified selection count here',
    accent: 'accent' as const,
  },
  {
    icon: Cpu,
    value: '-',
    label: 'JEE Selections',
    note: 'Add your verified selection count here',
    accent: 'primary' as const,
  },
  {
    icon: Star,
    value: '-',
    label: 'Top Scores',
    note: 'Add your top scorer percentile or marks',
    accent: 'accent' as const,
  },
  {
    icon: Award,
    value: '-',
    label: 'Mock Test Improvement',
    note: 'Add verified improvement data when available',
    accent: 'primary' as const,
  },
];

export function Results() {
  return (
    <section
      id="results"
      className="relative overflow-hidden bg-[#10264A] py-20 text-white lg:py-28"
      aria-labelledby="results-heading"
    >
      <div className="absolute inset-0 bg-grid opacity-10" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-accent">
            Our Results
          </span>
          <h2
            id="results-heading"
            className="mt-3 font-display text-3xl font-extrabold tracking-normal text-white text-balance sm:text-4xl lg:text-[2.75rem]"
          >
            Outcomes we&apos;re proud of
          </h2>
          <p className="mt-4 text-base leading-8 text-white/70 text-pretty lg:text-lg">
            Every selection is the result of consistent effort and honest
            mentorship. The figures below are placeholders; replace them with
            your academy&apos;s verified results.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label, note, accent }) => {
            const isPrimary = accent === 'primary';
            return (
              <TiltCard key={label} max={10} className="reveal glass-dark relative rounded-lg p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/45">
                <div
                  className={`mx-auto flex h-14 w-14 items-center justify-center rounded-lg ${
                    isPrimary ? 'bg-white/10 text-white' : 'bg-accent/15 text-accent'
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <p
                  className={`mt-4 font-display text-4xl font-extrabold ${
                    isPrimary ? 'text-white' : 'text-accent'
                  }`}
                >
                  {value}
                </p>
                <p className="mt-1 text-sm font-bold text-white">{label}</p>
                <p className="mt-2 text-xs text-white/65 text-pretty">{note}</p>
                <span className="absolute right-3 top-3 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/60">
                  Placeholder
                </span>
              </TiltCard>
            );
          })}
        </div>

        <div className="reveal mt-12 flex flex-col items-center justify-between gap-6 rounded-lg border border-white/15 bg-white/10 p-6 text-center backdrop-blur sm:flex-row sm:p-8 sm:text-left">
          <div className="flex items-center gap-4">
            <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground shadow-glow-accent sm:flex">
              <Trophy className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                Want to see your name on our results wall?
              </h3>
              <p className="mt-1 text-sm text-white/70 text-pretty">
                Join the next batch and start your journey with structured
                coaching and personal mentoring.
              </p>
            </div>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <a href="#contact">Start Your Journey</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
