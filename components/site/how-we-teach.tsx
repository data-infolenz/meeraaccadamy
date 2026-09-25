'use client';

import {
  Lightbulb,
  PencilRuler,
  ClipboardCheck,
  ChartNoAxesCombined,
  RefreshCw,
} from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Concept Learning',
    desc: 'We start with crystal-clear concept building so every student understands the why, not just the how.',
  },
  {
    icon: PencilRuler,
    title: 'Practice',
    desc: 'Graded practice problems reinforce each concept and build the speed and accuracy exams demand.',
  },
  {
    icon: ClipboardCheck,
    title: 'Testing',
    desc: 'Regular chapter tests and full mock exams simulate real exam pressure and timing.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Performance Analysis',
    desc: 'Every test is analysed to reveal strong topics, weak areas, and the next thing to fix.',
  },
  {
    icon: RefreshCw,
    title: 'Improvement & Revision',
    desc: 'Targeted revision and mentor-guided improvement close gaps before the next cycle begins.',
  },
];

export function HowWeTeach() {
  return (
    <section
      id="how-we-teach"
      className="relative py-20 lg:py-28"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-accent/90 border border-accent/20 backdrop-blur-md px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-white shadow-sm">
            How We Teach
          </span>
          <h2
            id="how-heading"
            className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl lg:text-[2.75rem]"
          >
            A proven 5-step learning cycle
          </h2>
          <p className="mt-4 text-base text-muted-foreground text-pretty lg:text-lg">
            Every topic moves through the same disciplined cycle — so progress
            is measurable, never left to chance.
          </p>
        </div>

        {/* Desktop: connected horizontal flow */}
        <ol className="mt-14 hidden gap-6 lg:mt-16 lg:grid lg:grid-cols-5">
          {steps.map((step, i) => (
            <li key={step.title} className="reveal relative">
              {i < steps.length - 1 && (
                <span
                  className="absolute left-[60%] top-9 hidden h-0.5 w-[80%] bg-gradient-to-r from-primary/40 to-accent/30 lg:block"
                  aria-hidden="true"
                />
              )}
              <div className="relative flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-2.5 py-0.5 text-xs font-bold text-accent-foreground shadow-glow-accent">
                  {i + 1}
                </span>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <step.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground text-pretty">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Mobile: vertical timeline */}
        <ol className="mt-12 flex flex-col gap-4 lg:hidden">
          {steps.map((step, i) => (
            <li key={step.title} className="reveal relative pl-16">
              <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <step.icon className="h-5 w-5" />
              </span>
              {i < steps.length - 1 && (
                <span
                  className="absolute left-6 top-12 h-[calc(100%-1rem)] w-0.5 bg-gradient-to-b from-primary/30 to-accent/20"
                  aria-hidden="true"
                />
              )}
              <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground">
                    {i + 1}
                  </span>
                  <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground text-pretty">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
