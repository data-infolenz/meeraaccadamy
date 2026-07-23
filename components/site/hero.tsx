'use client';

import { ArrowRight, Phone, BadgeCheck, CalendarDays, ClipboardList, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig, whatsappLink } from '@/lib/site';

const badges = [
  { icon: BadgeCheck, label: 'Admissions Open' },
  { icon: ClipboardList, label: 'Daily Practice' },
  { icon: CalendarDays, label: 'Weekly Tests' },
  { icon: Users, label: 'Personal Mentoring' },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 lg:pt-36"
      aria-labelledby="hero-heading"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/70 via-background to-background" />
      <div className="absolute inset-0 -z-10 bg-dots opacity-60" aria-hidden="true" />
      <div
        className="absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 top-40 -z-10 h-96 w-96 rounded-full bg-primary/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-28">
        {/* Copy */}
        <div className="reveal max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Admissions Open 2026
          </span>

          <h1
            id="hero-heading"
            className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl"
          >
            Dream Big. <span className="text-primary">Crack NEET &amp; JEE.</span>
          </h1>

          <p className="mt-5 text-base text-muted-foreground text-pretty sm:text-lg lg:mt-6">
            Expert faculty, regular testing, and one-on-one mentoring that turns
            ambition into results. Structured coaching for NEET UG, JEE Main,
            JEE Advanced and Foundation — built to help every student perform
            their best.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-8">
            <Button asChild size="lg" className="shadow-glow-accent">
              <a href="#courses">
                Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={whatsappLink()}>
                <Phone className="mr-2 h-4 w-4 text-accent" /> Book Free Counselling
              </a>
            </Button>
          </div>

          {/* Badges */}
          <ul className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {badges.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-xl border border-border bg-background/80 px-3 py-2.5 text-xs font-semibold text-foreground/80 shadow-soft backdrop-blur sm:text-sm"
              >
                <Icon className="h-4 w-4 shrink-0 text-accent" />
                <span className="leading-tight">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="reveal relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/15 to-accent/20 blur-2xl" aria-hidden="true" />
            <div className="overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-card">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop"
                alt="Students focused on NEET and JEE exam preparation in a modern coaching classroom at Meera Academy"
                className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[480px]"
                loading="eager"
                width={1200}
                height={900}
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-card backdrop-blur sm:block lg:-left-6">
              <p className="font-display text-2xl font-extrabold text-primary">100%</p>
              <p className="text-xs font-medium text-muted-foreground">NCERT-focused syllabus</p>
            </div>
            <div className="absolute -right-3 top-6 hidden rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-card backdrop-blur sm:block lg:-right-6">
              <p className="font-display text-2xl font-extrabold text-accent">1:1</p>
              <p className="text-xs font-medium text-muted-foreground">Personal mentoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
