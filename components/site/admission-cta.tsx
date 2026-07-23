'use client';

import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig, whatsappLink } from '@/lib/site';

export function AdmissionCTA() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-[hsl(168,45%,18%)] px-6 py-14 text-center text-primary-foreground shadow-glow sm:px-12 lg:py-20">
          {/* decorative */}
          <div className="absolute inset-0 -z-10 opacity-25" aria-hidden="true">
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-accent blur-3xl" />
            <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-white blur-3xl" />
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Admissions Open 2026
          </span>

          <h2
            id="cta-heading"
            className="mx-auto mt-5 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]"
          >
            Take the First Step Toward Your NEET or JEE Goal
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/85 text-pretty lg:text-lg">
            Talk to our counsellor today. Get a free personalised plan and find
            the program that matches your ambition.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="shadow-card">
              <a href="#contact">
                Enquire Now <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" className="bg-accent text-accent-foreground shadow-glow-accent hover:bg-accent/90">
              <a href={whatsappLink()}>
                <MessageCircle className="mr-2 h-4 w-4" /> Book Free Counselling
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
              <a href={siteConfig.phoneHref}>
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
