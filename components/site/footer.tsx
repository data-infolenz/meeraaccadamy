'use client';

import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { navLinks, siteConfig, whatsappLink } from '@/lib/site';

const courseLinks = [
  { label: 'NEET UG', href: '#courses' },
  { label: 'JEE Main', href: '#courses' },
  { label: 'JEE Advanced', href: '#courses' },
  { label: 'Foundation (8–10)', href: '#courses' },
];

const socials = [
  { icon: Facebook, label: 'Facebook', href: siteConfig.social.facebook },
  { icon: Instagram, label: 'Instagram', href: siteConfig.social.instagram },
  { icon: Youtube, label: 'YouTube', href: siteConfig.social.youtube },
  { icon: Twitter, label: 'Twitter', href: siteConfig.social.twitter },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <GraduationCap className="h-6 w-6" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold text-background">Meera Academy</span>
                <span className="text-[11px] text-background/60">Learn. Practice. Perform. Succeed.</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm text-background/70 text-pretty">
              A coaching institute for NEET UG, JEE Main, JEE Advanced and
              Foundation courses. Expert faculty, regular testing and personal
              mentoring — guiding every student from concept to result.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-background/15 text-background/80 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-background">Quick Links</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="lg:col-span-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-background">Courses</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {courseLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-background">Contact</h2>
            <ul className="mt-4 flex flex-col gap-3.5">
              <li>
                <a href={siteConfig.phoneHref} className="flex items-start gap-3 text-sm text-background/70 transition-colors hover:text-accent">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={siteConfig.emailHref} className="flex items-start gap-3 text-sm text-background/70 transition-colors hover:text-accent">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-background/70 transition-colors hover:text-accent"
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
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-background/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-background/60">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-background/60">
            NEET &amp; JEE coaching · Admissions open · Learn. Practice. Perform. Succeed.
          </p>
        </div>
      </div>
    </footer>
  );
}
