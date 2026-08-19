'use client';

import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Meera Academy"
      title="Chat with Meera Academy"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_34px_rgba(16,38,74,0.24)] ring-4 ring-white transition-transform duration-300 hover:scale-110 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-[#25D366] opacity-60" aria-hidden="true" />
      <MessageCircle className="relative h-7 w-7" />
      <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#10264A] px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-card transition-opacity group-hover:opacity-100 sm:block">
        Chat with Meera Academy
      </span>
    </a>
  );
}
