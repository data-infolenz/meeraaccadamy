/**
 * Central place for academy details and navigation.
 * Replace placeholder values with real academy information.
 */
export const siteConfig = {
  name: 'Meera Academy',
  tagline: 'Dream High.Aim High.Achieve High.',
  phone: '+91 7550175135',
  phoneHref: 'tel:+917550175135',
  whatsapp: '917550175135',
  whatsappText:
    "Hello Meera Academy, I'd like to know more about admissions for NEET/JEE coaching.",
  email: 'meeraacademy2021@gmail.com',
  emailHref: 'mailto:meeraacademy2021@gmail.com',
  address: 'Meera Academy, No 1 Periya Pallivasal Sannathi Street, Puliangudi: 627855',
  mapsQuery: 'Meera Academy coaching institute',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    twitter: 'https://twitter.com',
  },
} as const;

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'How We Teach', href: '#how-we-teach' },
  { label: 'Results', href: '#results' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const;

export const courses = [
  'NEET UG',
  'JEE Main',
  'JEE Advanced',
  'Foundation',
] as const;

export type CourseName = (typeof courses)[number];

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappText);
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}
