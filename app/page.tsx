'use client';

import { useReveal } from '@/hooks/use-reveal';
import { Header } from '@/components/site/header';
import { Hero } from '@/components/site/hero';
import { About } from '@/components/site/about';
import { Courses } from '@/components/site/courses';
import { HowWeTeach } from '@/components/site/how-we-teach';
import { WhyChooseUs } from '@/components/site/why-choose-us';
import { Results } from '@/components/site/results';
import { Testimonials } from '@/components/site/testimonials';
import { AdmissionCTA } from '@/components/site/admission-cta';
import { Contact } from '@/components/site/contact';
import { Footer } from '@/components/site/footer';
import { WhatsAppFloat } from '@/components/site/whatsapp-float';

export default function Home() {
  useReveal();

  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Courses />
        <HowWeTeach />
        <WhyChooseUs />
        <Results />
        <Testimonials />
        <AdmissionCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
