/**
 * Central place for academy details and navigation.
 * Replace placeholder values with real academy information.
 */
export const siteConfig = {
  name: 'Meera Academy',
  tagline: 'Learn. Practice. Perform. Succeed.',
  phone: '+91 90000 00000',
  phoneHref: 'tel:+919000000000',
  whatsapp: '919000000000',
  whatsappText:
    "Hello Meera Academy, I'd like to know more about admissions for NEET/JEE coaching.",
  email: 'admissions@meeraacademy.in',
  emailHref: 'mailto:admissions@meeraacademy.in',
  address: 'Meera Academy, Education Hub, Your City, India',
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
