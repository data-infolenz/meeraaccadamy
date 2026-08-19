'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

/**
 * Premium branded loading screen shown on first paint.
 * Fades out once the page has mounted, with a fallback timer.
 */
export function PageLoader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delay = reduce ? 200 : 1100;

    const fade = window.setTimeout(() => setHidden(true), delay);
    const unmount = window.setTimeout(() => setRemoved(true), delay + 700);

    return () => {
      window.clearTimeout(fade);
      window.clearTimeout(unmount);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#10264A] transition-opacity duration-700 ${
        hidden ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/30 blur-[120px] animate-float" />
        <div
          className="absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-primary/40 blur-[120px] animate-float"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      <div className="relative flex flex-col items-center">
        <div className="relative">
          <span className="absolute inset-0 -m-4 rounded-full border-2 border-white/15" />
          <span className="absolute inset-0 -m-4 rounded-full border-2 border-transparent border-r-accent/60 border-t-accent [animation:spin_1s_linear_infinite]" />
          <span className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-white shadow-glow backdrop-blur">
            <Image
              src="/images/meera-academy-logo.png"
              alt=""
              width={96}
              height={96}
              className="h-full w-full object-contain"
              priority
            />
          </span>
        </div>

        <p className="mt-7 font-display text-xl font-extrabold tracking-tight text-white">
          Meera Academy
        </p>
        <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
          Dream High.Aim High.Achieve High.
        </p>

        <div className="mt-6 h-1 w-40 overflow-hidden rounded-full bg-white/15">
          <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-accent to-white [animation:loaderbar_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
