'use client';

import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Meera Academy on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow-accent transition-transform duration-300 hover:scale-110 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-[#25D366] opacity-60" aria-hidden="true" />
      <MessageCircle className="relative h-7 w-7" />
    </a>
  );
}
