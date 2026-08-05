'use client';

import Image from 'next/image';
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from 'lucide-react';
import { navLinks, siteConfig, whatsappLink } from '@/lib/site';

const courseLinks = [
  { label: 'NEET UG', href: '#courses' },
  { label: 'JEE Main', href: '#courses' },
  { label: 'JEE Advanced', href: '#courses' },
  { label: 'Foundation (8-10)', href: '#courses' },
];

const socials = [
  { icon: Facebook, label: 'Facebook', href: siteConfig.social.facebook },
  { icon: Instagram, label: 'Instagram', href: siteConfig.social.instagram },
  { icon: Youtube, label: 'YouTube', href: siteConfig.social.youtube },
  { icon: Twitter, label: 'Twitter', href: siteConfig.social.twitter },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#10264A] text-white">
      <div className="absolute inset-x-0 top-0 h-px brand-gradient" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                <Image
                  src="/images/meera-academy-logo.png"
                  alt=""
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold text-white">Meera Academy</span>
                <span className="text-[11px] text-white/60">Dream High.Aim High.Achieve High.</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm text-white/70 text-pretty">
              Meera Academy, Puliyangudi is committed to guiding students toward success in NEET UG, JEE Main, JEE Advanced, and Foundation courses with simple, effective, and result-focused teaching. 
              We believe in building strong concepts from the basics and helping every student understand each topic clearly. With expert faculty, regular tests, and personal mentoring, we ensure that every learner gets the right support at the right time. 
              Our teaching is designed to improve confidence, strengthen problem-solving skills, and prepare students to perform their best in competitive exams. At Meera Academy, we do not just teach—we inspire, guide, and help students move steadily from concept to result. 
              Our goal is to create achievers through discipline, dedication, and continuous improvement.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white/80 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">Courses</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {courseLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/70 transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h2>
            <ul className="mt-4 flex flex-col gap-3.5">
              <li>
                <a href={siteConfig.phoneHref} className="flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-accent">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={siteConfig.emailHref} className="flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-accent">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapsQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-accent"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {siteConfig.address}
                </a>
              </li>
            </ul>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-[0_12px_28px_rgba(245,27,43,0.22)] transition-all hover:-translate-y-0.5 hover:bg-accent/90"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/60">
            NEET &amp; JEE coaching. Admissions open. Dream High.Aim High.Achieve High.
          </p>
        </div>
      </div>
    </footer>
  );
}
