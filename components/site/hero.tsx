'use client';

import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  ClipboardList,
  Phone,
  Sparkles,
  Users,
} from 'lucide-react';
import type { CSSProperties } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { whatsappLink } from '@/lib/site';

const badges = [
  { icon: BadgeCheck, label: 'Admissions Open' },
  { icon: ClipboardList, label: 'Daily Practice' },
  { icon: CalendarDays, label: 'Weekly Tests' },
  { icon: Users, label: 'Personal Mentoring' },
];

const sliderImages = [
  {
    src: '/images/neet-2027-poster.png',
    alt: 'MEERA NEET ACADEMY - NEET 2027 Repeaters & Freshers Batch',
    label: 'NEET 2027',
  },
  {
    src: '/images/jee-2027-poster.png',
    alt: 'MEERA ACADEMY - JEE 2027 Your JEE Journey Starts Closer to Home',
    label: 'JEE 2027',
  },
];

const sliderLoop = [...sliderImages, sliderImages[0]];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 lg:pt-36"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:pb-28">
        <div className="max-w-xl">
          <span className="reveal glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Admissions Open 2026-2027
          </span>

          <h1
            id="hero-heading"
            className="mt-5 overflow-hidden font-display text-4xl font-extrabold leading-[1.08] tracking-normal text-primary text-balance sm:text-5xl lg:text-6xl"
          >
            <span className="block animate-fade-up [animation-delay:120ms]">
              Dream Big.
            </span>
            <span className="block animate-fade-up [animation-delay:260ms]">
              Crack{' '}
              <span className="text-brand-gradient">
                NEET , JEE , TNPSC, UPSC &amp; MRB.
              </span>
            </span>
          </h1>

          <p className="reveal mt-5 text-base leading-8 text-muted-foreground text-pretty sm:text-lg lg:mt-6 [--reveal-delay:160ms]">
            Big ambitions deserve the right guidance. At Meera Academy, expert faculty, focused coaching, regular tests, and
            personalised mentoring help you build the knowledge and
            confidence to excel in NEET, JEE, TNPSC, UPSC & MRB—turning dedicated preparation into meaningful progress.
          </p>

          <div className="reveal mt-7 flex flex-col gap-3 sm:flex-row lg:mt-8 [--reveal-delay:240ms]">
            <Button asChild size="lg">
              <a href="#courses">
                Explore Courses <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={whatsappLink()}>
                <Phone className="mr-2 h-4 w-4 text-accent" /> Book Free Counselling
              </a>
            </Button>
          </div>

          <ul className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {badges.map(({ icon: Icon, label }, index) => (
              <li
                key={label}
                className="reveal glass flex min-h-[72px] items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-bold text-primary sm:text-sm"
                style={{ '--reveal-delay': `${300 + index * 70}ms` } as CSSProperties}
              >
                <Icon className="h-4 w-4 shrink-0 text-accent" />
                <span className="leading-tight">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal relative [--reveal-delay:180ms]">
          <div className="hero-slider relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-white/60 bg-white shadow-card aspect-square lg:max-w-[480px]">
            <div className="hero-slider-track flex h-[300%] w-full flex-col animate-vertical-slide-2">
              {sliderLoop.map((image, index) => (
                <figure key={`${image.label}-${index}`} className="relative h-1/3 w-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover animate-slow-zoom"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    width={1080}
                    height={1080}
                    priority={index === 0}
                  />
                </figure>
              ))}
            </div>
          </div>

          <div className="glass absolute top-1/2 -translate-y-1/2 left-3 hidden max-w-[180px] rounded-lg px-4 py-3 sm:block lg:-left-5 z-10">
            <p className="font-display text-2xl font-extrabold text-primary">1:1</p>
            <p className="text-xs font-semibold text-primary">Personal Mentoring</p>
          </div>
          <div className="glass absolute right-3 top-5 hidden max-w-[190px] rounded-lg px-4 py-3 sm:block lg:-right-5">
            <p className="font-display text-lg font-extrabold text-accent">Admissions Open 2026-2027</p>
            <p className="text-xs font-semibold text-primary">Structured Study Plan</p>
          </div>
          <div className="glass absolute -bottom-5 right-4 hidden max-w-[180px] items-center gap-2 rounded-lg px-4 py-3 md:flex lg:-right-5 z-10">
            <Sparkles className="h-5 w-5 text-accent" />
            <p className="text-xs font-bold text-primary">Regular Mock Tests</p>
          </div>
        </div>
      </div>
    </section>
  );
}
