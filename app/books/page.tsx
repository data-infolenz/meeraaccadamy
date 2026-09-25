'use client';

import { useReveal } from '@/hooks/use-reveal';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { WhatsAppFloat } from '@/components/site/whatsapp-float';
import { CheckCircle2, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { whatsappLink } from '@/lib/site';
import { TiltCard } from '@/components/site/tilt-card';

const bookData = [
  {
    title: 'NEET UG Physics Complete Guide',
    tagline: 'Master physics concepts for NEET 2024-25',
    price: '₹499',
    originalPrice: '₹799',
    image: '/images/neet_book_cover.jpg',
    highlights: [
      'Comprehensive theory & concept building',
      '2000+ Practice MCQs with detailed solutions',
      'Previous 15 years solved papers',
      'Short tricks & formula charts',
    ],
    accent: 'primary' as const,
  },
  {
    title: 'JEE Advanced Mathematics Masterclass',
    tagline: 'Advanced problem solving techniques',
    price: '₹549',
    originalPrice: '₹899',
    image: '/images/jee_book_cover.jpg',
    highlights: [
      'Rank-boosting difficult problems',
      'Step-by-step strategic solutions',
      'Covers Algebra, Calculus, Trigonometry',
      'Expertly curated by top Meera Academy faculty',
    ],
    accent: 'accent' as const,
  },
];

export default function BooksPage() {
  useReveal();

  return (
    <>
      <Header />
      <main id="main" className="pt-24 lg:pt-32 pb-20">
        <section
          id="books"
          className="relative overflow-hidden"
          aria-labelledby="books-heading"
        >
          <div className="absolute inset-0 -z-10 bg-dots opacity-35" aria-hidden="true" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="reveal mx-auto max-w-2xl text-center">
              <span className="inline-block rounded-full bg-accent/90 border border-accent/20 backdrop-blur-md px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-white shadow-sm">
                Study Material
              </span>
              <h1
                id="books-heading"
                className="mt-3 font-display text-3xl font-extrabold tracking-normal text-primary text-balance sm:text-4xl lg:text-[2.75rem]"
              >
                Top Rated Books by Meera Academy
              </h1>
              <p className="mt-4 text-base leading-8 text-muted-foreground text-pretty lg:text-lg">
                Accelerate your preparation with our expertly crafted study materials. Order easily via WhatsApp, no complex checkout required.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-2 max-w-5xl mx-auto">
              {bookData.map((book) => {
                const isPrimary = book.accent === 'primary';
                return (
                  <TiltCard key={book.title} max={5} className="reveal">
                    <article className="group flex h-full flex-col overflow-hidden rounded-xl glass transition-all duration-300 hover:-translate-y-1 hover:border-accent/35">
                      <div className="flex flex-col md:flex-row h-full">
                        <div className="relative h-72 md:h-full md:w-2/5 shrink-0 overflow-hidden bg-muted">
                          <Image
                            src={book.image}
                            alt={book.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                            width={600}
                            height={800}
                          />
                        </div>

                        <div className="flex flex-1 flex-col p-6 md:p-8">
                          <div className="flex-1">
                            <span
                              className={cn(
                                'inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white mb-4',
                                isPrimary ? 'bg-primary' : 'bg-accent'
                              )}
                            >
                              Bestseller
                            </span>
                            <h3 className="font-display text-2xl font-extrabold text-primary leading-tight">
                              {book.title}
                            </h3>
                            <p className="mt-2 text-sm font-medium text-muted-foreground">
                              {book.tagline}
                            </p>
                            
                            <div className="mt-4 flex items-center gap-3">
                              <span className="text-2xl font-extrabold text-primary">{book.price}</span>
                              <span className="text-sm font-semibold text-muted-foreground line-through">{book.originalPrice}</span>
                            </div>

                            <ul className="mt-6 flex flex-col gap-3">
                              {book.highlights.map((h) => (
                                <li key={h} className="flex items-start gap-2 text-sm text-primary/80">
                                  <CheckCircle2 className={cn('mt-0.5 h-4 w-4 shrink-0', isPrimary ? 'text-primary' : 'text-accent')} />
                                  <span className="text-pretty">{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-8">
                            <Button asChild size="lg" className="w-full shadow-glow-accent bg-green-600 hover:bg-green-700 text-white border-none">
                              <a 
                                href={whatsappLink(`Hi, I'd like to purchase the book: ${book.title}. Please let me know the payment and delivery details.`)}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <ShoppingCart className="mr-2 h-5 w-5" /> Buy via WhatsApp
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </TiltCard>
                );
              })}
            </div>
            
            <div className="reveal mt-20 rounded-2xl bg-primary/5 px-6 py-8 text-center sm:px-12 sm:py-12 border border-primary/10 max-w-4xl mx-auto shadow-sm">
              <h3 className="font-display text-2xl font-extrabold text-primary">How to Order?</h3>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent font-bold text-lg mb-3">1</div>
                  <p>Click on <strong>Buy via WhatsApp</strong> to message our team directly.</p>
                </div>
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent font-bold text-lg mb-3">2</div>
                  <p>Complete the payment securely using UPI, Card or Netbanking.</p>
                </div>
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent font-bold text-lg mb-3">3</div>
                  <p>Provide your delivery address and get the book delivered in 3-5 days.</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
