'use client';

import {
  BookOpen,
  CalendarCheck2,
  LineChart,
  MessagesSquare,
  Target,
  UserCheck,
} from 'lucide-react';
import type { CSSProperties } from 'react';
import { TiltCard } from '@/components/site/tilt-card';

const highlights = [
  {
    icon: UserCheck,
    title: 'Expert Faculty',
    desc: 'Experienced teachers who specialise in NEET and JEE patterns.',
  },
  {
    icon: BookOpen,
    title: 'Complete Study Plan',
    desc: 'Structured, syllabus-complete coverage from basics to advanced.',
  },
  {
    icon: CalendarCheck2,
    title: 'Regular Tests',
    desc: 'Chapter tests and full mock exams that mirror the real exam.',
  },
  {
    icon: LineChart,
    title: 'Performance Tracking',
    desc: 'Detailed analysis after every test to find and fix weak areas.',
  },
  {
    icon: MessagesSquare,
    title: 'Doubt Clearing',
    desc: 'Dedicated doubt-solving sessions so no question goes unanswered.',
  },
  {
    icon: Target,
    title: 'Personal Mentoring',
    desc: 'One-on-one guidance that keeps every student motivated and on track.',
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 lg:py-28" aria-labelledby="about-heading">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(237,243,255,0.82),rgba(255,240,242,0.58),rgba(255,255,255,0.88))]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-5">
            <span className="inline-block rounded-full bg-accent/90 border border-accent/20 backdrop-blur-md px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-white shadow-sm">
              About Meera Academy
            </span>
            <h2
              id="about-heading"
              className="mt-3 font-display text-3xl font-extrabold tracking-normal text-primary text-balance sm:text-4xl lg:text-[2.75rem]"
            >
              Structured coaching for India&apos;s toughest entrance exams
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground text-pretty lg:text-lg">
              Meera Academy is a coaching institute built around one belief:
              every student can succeed with the right guidance, consistent
              practice, and honest feedback. We combine expert teaching,
              regular testing, and personal mentoring into a clear path from
              first concept to exam-day confidence.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground text-pretty lg:text-lg">
              Whether you are aiming for NEET, JEE Main, JEE Advanced, or
              building foundations in Class 8-10, our structured plan keeps you
              focused, measured, and always improving.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: '15+', label: 'Years of teaching' },
                { value: '4', label: 'Programs offered' },
                { value: '1:1', label: 'Mentoring support' },
              ].map((s) => (
                <div key={s.label} className="glass rounded-lg p-4 text-center">
                  <p className="font-display text-2xl font-extrabold text-primary sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid gap-4 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, title, desc }, index) => (
                <li
                  key={title}
                  className="reveal"
                  style={{ '--reveal-delay': `${index * 70}ms` } as CSSProperties}
                >
                  <TiltCard max={7} className="group h-full rounded-lg glass p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold text-primary">{title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground text-pretty">{desc}</p>
                  </TiltCard>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
