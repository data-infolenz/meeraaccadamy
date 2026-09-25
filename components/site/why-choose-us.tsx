'use client';

import {
  Users,
  UserCog,
  ClipboardCheck,
  ChartNoAxesCombined,
  MessagesSquare,
  Brain,
  Mail,
  HeartHandshake,
} from 'lucide-react';
import { TiltCard } from '@/components/site/tilt-card';

const features = [
  {
    icon: UserCog,
    title: 'Experienced Faculty',
    desc: 'Teachers with years of NEET & JEE specialisation who know the exam inside out.',
  },
  {
    icon: Users,
    title: 'Small Batch Attention',
    desc: 'Limited seats per batch so every student gets noticed and guided.',
  },
  {
    icon: ClipboardCheck,
    title: 'Regular Mock Tests',
    desc: 'Exam-pattern tests that build stamina, speed and confidence.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Individual Performance Analysis',
    desc: 'Topic-level reports after each test pinpoint exactly what to fix.',
  },
  {
    icon: MessagesSquare,
    title: 'Doubt Clearing Support',
    desc: 'Dedicated sessions where no doubt is too small or too big.',
  },
  {
    icon: Brain,
    title: 'Exam Strategy Training',
    desc: 'Time management, question selection and attempt strategy coaching.',
  },
  {
    icon: Mail,
    title: 'Parent Progress Updates',
    desc: 'Regular reports keep parents informed and involved in progress.',
  },
  {
    icon: HeartHandshake,
    title: 'Personal Student Mentoring',
    desc: 'One mentor per student for motivation, planning and accountability.',
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-primary py-20 text-primary-foreground lg:py-28"
      aria-labelledby="why-heading"
    >
      <div className="absolute inset-0 -z-10 opacity-20" aria-hidden="true">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-white blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full glass-dark px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-white shadow-sm">
            Why Meera Academy
          </span>
          <h2
            id="why-heading"
            className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]"
          >
            Everything a serious aspirant needs
          </h2>
          <p className="mt-4 text-base text-primary-foreground/80 text-pretty lg:text-lg">
            We don&apos;t just teach — we coach, test, analyse and mentor. Here&apos;s
            what makes our students exam-ready.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <TiltCard key={title} max={10} glare={false} className="reveal rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur transition-[border-color,background-color] duration-300 hover:border-accent/50 hover:bg-white/15">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-accent shadow-glow-accent transition-transform group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold">{title}</h3>
              <p className="mt-1.5 text-sm text-primary-foreground/80 text-pretty">{desc}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
