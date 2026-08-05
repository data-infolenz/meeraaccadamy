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
        <div className="reveal relative overflow-hidden rounded-lg bg-[linear-gradient(135deg,#F51B2B_0%,#213F72_100%)] px-6 py-14 text-center text-primary-foreground shadow-glow sm:px-12 lg:py-20">
          {/* decorative */}
          <div className="absolute inset-0 -z-10 opacity-25" aria-hidden="true">
            <div className="absolute inset-0 bg-grid opacity-30" />
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-white" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Admissions Open 2026-2027
          </span>

          <h2
            id="cta-heading"
            className="mx-auto mt-5 max-w-3x2 font-display text-3xl font-extrabold  tracking-tight text-balance sm:text-10xl lg:text-[2.75rem]"
          >
            Secure Your Seat Today 
             <br/> Start Your Preparation with  Meera Academy
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/85 text-pretty lg:text-lg">
            Connect with our counsellor today for a free personalized plan and discover the right course to begin your success journey.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="shadow-card">
              <a href="#contact">
                Enquire Now <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary shadow-card hover:bg-secondary">
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
