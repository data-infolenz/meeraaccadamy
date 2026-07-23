'use client';

import { useEffect, useState } from 'react';
import { GraduationCap, Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { navLinks, siteConfig } from '@/lib/site';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track which section is in view to highlight the nav item.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/90 shadow-soft backdrop-blur-md supports-[backdrop-filter]:bg-background/75'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-glow lg:h-11 lg:w-11">
            <GraduationCap className="h-6 w-6" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-extrabold tracking-tight text-primary lg:text-xl">
              Meera Academy
            </span>
            <span className="text-[11px] font-medium text-muted-foreground lg:text-xs">
              Learn. Practice. Perform. Succeed.
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
                active === link.href
                  ? 'text-primary'
                  : 'text-foreground/70 hover:text-primary'
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4 text-accent" />
            {siteConfig.phone}
          </a>
          <Button asChild size="default" className="shadow-glow-accent">
            <a href="#contact">Enroll Now</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-primary lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={cn(
          'lg:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      >
        <div
          className={cn(
            'absolute inset-0 top-16 bg-foreground/30 backdrop-blur-sm transition-opacity duration-300',
            open ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <nav
          aria-label="Mobile"
          className={cn(
            'absolute inset-x-0 top-16 origin-top bg-background px-4 pb-6 pt-2 shadow-card transition-all duration-300',
            open
              ? 'translate-y-0 opacity-100'
              : '-translate-y-4 opacity-0'
          )}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-lg px-4 py-3 text-base font-medium transition-colors',
                  active === link.href
                    ? 'bg-secondary text-primary'
                    : 'text-foreground/80 hover:bg-secondary/60'
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <Button asChild size="lg" className="shadow-glow-accent">
              <a href="#contact" onClick={() => setOpen(false)}>
                Enroll Now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={siteConfig.phoneHref} onClick={() => setOpen(false)}>
                <Phone className="mr-2 h-4 w-4" /> {siteConfig.phone}
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
