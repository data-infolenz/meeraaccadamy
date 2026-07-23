import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { PageLoader } from '@/components/site/page-loader';
import { CustomCursor } from '@/components/site/custom-cursor';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const SITE_URL = 'https://meeraacademy.in';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Meera Academy | NEET & JEE Coaching — Learn. Practice. Perform. Succeed.',
    template: '%s | Meera Academy',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#1f6b43',
  description:
    'Meera Academy is a premium coaching institute for NEET UG, JEE Main, JEE Advanced and Foundation (Class 8–10). Expert faculty, regular mock tests, personal mentoring and performance tracking. Admissions open.',
  keywords: [
    'NEET coaching',
    'JEE Main coaching',
    'JEE Advanced coaching',
    'foundation course',
    'medical entrance coaching',
    'engineering entrance coaching',
    'Meera Academy',
    'best coaching institute',
    'NEET UG preparation',
    'IIT JEE preparation',
    'Class 8 9 10 foundation',
    'mock tests',
    'doubt clearing',
  ],
  authors: [{ name: 'Meera Academy' }],
  creator: 'Meera Academy',
  publisher: 'Meera Academy',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Meera Academy',
    title: 'Meera Academy | NEET & JEE Coaching — Learn. Practice. Perform. Succeed.',
    description:
      'Premium coaching for NEET UG, JEE Main, JEE Advanced & Foundation. Expert faculty, regular tests, personal mentoring. Admissions open.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Meera Academy — NEET & JEE coaching, admissions open',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meera Academy | NEET & JEE Coaching',
    description:
      'Premium coaching for NEET UG, JEE Main, JEE Advanced & Foundation. Expert faculty, regular tests, personal mentoring. Admissions open.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'education',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Meera Academy',
    description:
      'Coaching institute for NEET UG, JEE Main, JEE Advanced and Foundation courses.',
    slogan: 'Learn. Practice. Perform. Succeed.',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: '',
      addressLocality: '',
      streetAddress: '',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'admissions',
      telephone: '',
      email: '',
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans">
        <PageLoader />
        <CustomCursor />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
