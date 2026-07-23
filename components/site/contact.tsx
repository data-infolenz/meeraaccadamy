'use client';

import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { ContactForm } from '@/components/site/contact-form';
import { siteConfig, whatsappLink } from '@/lib/site';

const details = [
  {
    icon: Phone,
    label: 'Call Us',
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    note: 'Mon–Sat, 9am–7pm',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us',
    href: whatsappLink(),
    note: 'Quick admissions queries',
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: siteConfig.emailHref,
    note: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: siteConfig.address,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      siteConfig.mapsQuery
    )}`,
    note: 'Find us on Google Maps',
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-secondary/40 py-20 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-accent">
            Contact &amp; Admissions
          </span>
          <h2
            id="contact-heading"
            className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl lg:text-[2.75rem]"
          >
            Let&apos;s talk about your goals
          </h2>
          <p className="mt-4 text-base text-muted-foreground text-pretty lg:text-lg">
            Fill in the form and our admissions team will get back to you. Or
            reach us directly — we&apos;re happy to help.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-5">
          {/* Form */}
          <div className="reveal lg:col-span-3">
            <ContactForm />
          </div>

          {/* Details + map */}
          <div className="reveal lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {details.map(({ icon: Icon, label, value, href, note }) => (
                <a
                  key={label}
                  href={href}
                  target={label === 'Visit Us' || label === 'WhatsApp' ? '_blank' : undefined}
                  rel={label === 'Visit Us' || label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {label}
                    </span>
                    <span className="text-sm font-bold text-foreground">{value}</span>
                    <span className="mt-0.5 text-xs text-muted-foreground">{note}</span>
                  </span>
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <iframe
                title="Meera Academy location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  siteConfig.mapsQuery
                )}&output=embed`}
                className="h-56 w-full border-0 grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-accent/20 bg-accent/5 p-4">
              <Clock className="h-5 w-5 shrink-0 text-accent" />
              <p className="text-sm text-foreground/80">
                <span className="font-bold text-foreground">Office hours:</span>{' '}
                Monday to Saturday, 9:00 AM – 7:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
