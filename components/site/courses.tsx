'use client';

import {
  Atom,
  Calculator,
  Dna,
  FlaskConical,
  ArrowRight,
  CheckCircle2,
  Microscope,
  SquareSigma,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { whatsappLink } from '@/lib/site';
import { TiltCard } from '@/components/site/tilt-card';

type Course = {
  name: string;
  tagline: string;
  icon: typeof Atom;
  subjects: string;
  highlights: string[];
  accent: 'primary' | 'accent';
  image: string;
  alt: string;
};

const courseData: Course[] = [
  {
    name: 'NEET UG',
    tagline: 'Your path to medical college',
    icon: Dna,
    subjects: 'Physics · Chemistry · Biology',
    highlights: [
      'NCERT-focused concept building',
      'Chapter-wise tests & full mock exams',
      'Biology mastery with diagram practice',
      'Previous-year NEET question training',
    ],
    accent: 'primary',
    image:
      'https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop',
    alt: 'Biology and chemistry study material for NEET UG preparation at Meera Academy',
  },
  {
    name: 'JEE Main',
    tagline: 'Strong fundamentals, real speed',
    icon: Atom,
    subjects: 'Physics · Chemistry · Mathematics',
    highlights: [
      'Problem-solving from basic to advanced',
      'Speed and accuracy drills',
      'Full-length JEE Main mock tests',
      'Concept clarity with worked examples',
    ],
    accent: 'accent',
    image:
      'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop',
    alt: 'Physics and mathematics problem-solving for JEE Main preparation at Meera Academy',
  },
  {
    name: 'JEE Advanced',
    tagline: 'Rank-oriented IIT preparation',
    icon: SquareSigma,
    subjects: 'Physics · Chemistry · Mathematics',
    highlights: [
      'Advanced multi-concept problem solving',
      'Concept-based, rank-oriented questions',
      'IIT-specific exam strategy training',
      'High-difficulty mock test series',
    ],
    accent: 'primary',
    image:
      'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop',
    alt: 'Advanced physics and mathematics preparation for JEE Advanced at Meera Academy',
  },
  {
    name: 'Foundation',
    tagline: 'Classes 8, 9 & 10 — built to last',
    icon: Calculator,
    subjects: 'Science · Mathematics · Olympiad basics',
    highlights: [
      'Strong fundamentals in core subjects',
      'Early competitive-exam preparation',
      'School + competitive balance',
      'Long-term readiness for NEET & JEE',
    ],
    accent: 'accent',
    image:
      'https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop',
    alt: 'Young students building strong fundamentals in the Foundation program at Meera Academy',
  },
];

export function Courses() {
  return (
    <section
      id="courses"
      className="relative overflow-hidden bg-secondary/40 py-20 lg:py-28"
      aria-labelledby="courses-heading"
    >
      <div className="absolute inset-0 -z-10 bg-dots opacity-40" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-accent">
            Our Courses
          </span>
          <h2
            id="courses-heading"
            className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl lg:text-[2.75rem]"
          >
            A program for every stage of your journey
          </h2>
          <p className="mt-4 text-base text-muted-foreground text-pretty lg:text-lg">
            From first fundamentals to final rank, choose the track that fits
            your goal. Every program includes expert teaching, regular testing
            and personal mentoring.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {courseData.map((course) => {
            const isPrimary = course.accent === 'primary';
            return (
              <TiltCard key={course.name} max={9} className="reveal">
              <article
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-[box-shadow,border-color] duration-300 hover:border-primary/30 hover:shadow-card"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={900}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                  <span
                    className={cn(
                      'absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-glow',
                      isPrimary ? 'bg-primary' : 'bg-accent'
                    )}
                  >
                    <course.icon className="h-5 w-5" />
                  </span>
                  <div className="absolute inset-x-4 bottom-3">
                    <h3 className="font-display text-xl font-extrabold text-white drop-shadow">
                      {course.name}
                    </h3>
                    <p className="text-xs font-medium text-white/85">{course.tagline}</p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {course.subjects}
                  </p>
                  <ul className="mt-4 flex flex-1 flex-col gap-2.5">
                    {course.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2
                          className={cn(
                            'mt-0.5 h-4 w-4 shrink-0',
                            isPrimary ? 'text-primary' : 'text-accent'
                          )}
                        />
                        <span className="text-pretty">{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-col gap-2">
                    <Button
                      asChild
                      size="sm"
                      className={isPrimary ? 'shadow-glow' : 'shadow-glow-accent'}
                    >
                      <a href="#contact">View Program</a>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <a href={whatsappLink(`I'd like to enquire about the ${course.name} program at Meera Academy.`)}>
                        Enquire Now <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
              </TiltCard>
            );
          })}
        </div>

        <p className="reveal mt-10 text-center text-sm text-muted-foreground">
          Not sure which program fits?{' '}
          <a
            href={whatsappLink()}
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            Talk to our counsellor
          </a>{' '}
          — it&apos;s free.
        </p>
      </div>
    </section>
  );
}
