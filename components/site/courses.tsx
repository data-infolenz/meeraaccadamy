'use client';

import {
  ArrowRight,
  Atom,
  Calculator,
  CheckCircle2,
  Dna,
  BookOpen,
  Landmark,
  Stethoscope,
  SquareSigma,
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { whatsappLink } from '@/lib/site';
import { TiltCard } from '@/components/site/tilt-card';

type Course = {
  name: string;
  tagline: string;
  icon: typeof Atom;
  subjects: string;
  highlights: string[];
  accent: 'primary' | 'accent';
  image: string;
  alt: string;
};

const courseData: Course[] = [
  {
    name: 'NEET UG',
    tagline: 'Your path to medical college',
    icon: Dna,
    subjects: 'Physics / Chemistry / Biology',
    highlights: [
      'NCERT-focused concept building',
      'Chapter-wise tests and full mock exams',
      'Biology mastery with diagram practice',
      'Previous-year NEET question training',
    ],
    accent: 'accent',
    image:
      '/images/category-neet-ug.png',
    alt: 'Biology and chemistry study material for NEET UG preparation at Meera Academy',
  },
  {
    name: 'JEE Main',
    tagline: 'Strong fundamentals, real speed',
    icon: Atom,
    subjects: 'Physics / Chemistry / Mathematics',
    highlights: [
      'Problem-solving from basic to advanced',
      'Speed and accuracy drills',
      'Full-length JEE Main mock tests',
      'Concept clarity with worked examples',
    ],
    accent: 'primary',
    image:
      '/images/category-jee1.png',
    alt: 'Physics and mathematics problem-solving for JEE Main preparation at Meera Academy',
  },
  {
    name: 'JEE Advanced',
    tagline: 'Rank-oriented IIT preparation',
    icon: SquareSigma,
    subjects: 'Physics / Chemistry / Mathematics',
    highlights: [
      'Advanced multi-concept problem solving',
      'Concept-based, rank-oriented questions',
      'IIT-specific exam strategy training',
      'High-difficulty mock test series',
    ],
    accent: 'accent',
    image:
      '/images/category-jee.png',
    alt: 'Advanced physics and mathematics preparation for JEE Advanced at Meera Academy',
  },
  {
    name: 'Tuition Centre',
    tagline: 'Classes 8, 9 & 10 - built to last',
    icon: Calculator,
    subjects: 'Science / Mathematics / Olympiad basics',
    highlights: [
      'Strong fundamentals in core subjects',
      'Early competitive-exam preparation',
      'School and competitive balance',
      'Long-term readiness for NEET and JEE',
    ],
    accent: 'primary',
    image: '/images/category-tution center.png',
    alt: 'Young students building strong fundamentals in the Tution Center program at Meera Academy',
  },
  {
    name: 'TNPSC',
    tagline: 'Build your path to public service',
    icon: BookOpen,
    subjects: 'General Studies / Tamil / Aptitude',
    highlights: [
      'Structured general studies preparation',
      'Tamil language and aptitude practice',
      'Current affairs and revision sessions',
      'Previous-year questions and mock tests',
    ],
    accent: 'accent',
    image: '/images/category-tnpsc.png',
    alt: 'TNPSC Tamil Nadu Public Service Commission Preparation',
  },
  {
    name: 'UPSC',
    tagline: 'Prepare for a future in civil services',
    icon: Landmark,
    subjects: 'General Studies / CSAT / Current Affairs',
    highlights: [
      'Strong foundations in general studies',
      'Current affairs analysis and discussion',
      'Answer-writing and CSAT practice',
      'Prelims and Mains mock assessments',
    ],
    accent: 'primary',
    image: '/images/category-upsc.png',
    alt: 'UPSC Civil Services Preparation',
  },
  {
    name: 'MRB',
    tagline: 'Take the next step in healthcare',
    icon: Stethoscope,
    subjects: 'Medical Subjects / Tamil / Exam Practice',
    highlights: [
      'Subject-focused medical revision',
      'Practice tailored to your target post',
      'Tamil language preparation support',
      'Previous-year questions and mock tests',
    ],
    accent: 'accent',
    image: '/images/category-mrb.png',
    alt: 'MRB Medical Recruitment Board Preparation',
  },
];

export function Courses() {
  return (
    <section
      id="courses"
      className="relative overflow-hidden py-20 lg:py-28"
      aria-labelledby="courses-heading"
    >
      <div className="absolute inset-0 -z-10 bg-dots opacity-35" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-accent/90 border border-accent/20 backdrop-blur-md px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-white shadow-sm">
            Our Courses
          </span>
          <h2
            id="courses-heading"
            className="mt-3 font-display text-3xl font-extrabold tracking-normal text-primary text-balance sm:text-4xl lg:text-[2.75rem]"
          >
            A program for every stage of your journey
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground text-pretty lg:text-lg">
            From first fundamentals to final rank, choose the track that fits
            your goal. Every program includes expert teaching, regular testing
            and personal mentoring.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {courseData.map((course) => {
            const isPrimary = course.accent === 'primary';
            return (
              <TiltCard key={course.name} max={9} className="reveal">
                <article className="group flex h-full flex-col overflow-hidden rounded-lg glass transition-all duration-300 hover:-translate-y-1 hover:border-accent/35">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10264A]/95 via-[#10264A]/40 to-transparent" />
                    <span
                      className={cn(
                        'absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg text-white shadow-glow',
                        isPrimary ? 'bg-primary' : 'bg-accent'
                      )}
                    >
                      <course.icon className="h-5 w-5" />
                    </span>
                    <span
                      className={cn(
                        'absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white',
                        isPrimary ? 'bg-primary/90' : 'bg-accent/90'
                      )}
                    >
                      {course.name}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 bg-[#10264A]/90 px-4 py-3">
                      <h3 className="font-display text-xl font-extrabold text-white drop-shadow">
                        {course.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium leading-5 text-white">{course.tagline}</p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      {course.subjects}
                    </p>
                    <ul className="mt-4 flex flex-1 flex-col gap-2.5">
                      {course.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-primary/80">
                          <CheckCircle2 className={cn('mt-0.5 h-4 w-4 shrink-0', isPrimary ? 'text-primary' : 'text-accent')} />
                          <span className="text-pretty">{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 grid gap-2">
                      <Button asChild size="sm">
                        <a href="#contact">
                          View Program <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="outline">
                        <a href={whatsappLink(`I'd like to enquire about the ${course.name} program at Meera Academy.`)}>
                          Enquire Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              </TiltCard>
            );
          })}
        </div>

        <p className="reveal mt-20 text-center text-lg text-muted-foreground">
          Not sure which program fits?{' '}
          <a
            href={whatsappLink()}
            className="font-semibold text-accent underline-offset-4 hover:underline"
          >
            Talk to our counsellor
          </a>{' '}
          for free guidance.
        </p>
      </div>
    </section>
  );
}
