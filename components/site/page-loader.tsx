'use client';

import { useEffect, useState } from 'react';
import { GraduationCap } from 'lucide-react';

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
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[hsl(152_56%_18%)] transition-opacity duration-700 ${
        hidden ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      {/* animated mesh backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/30 blur-[120px] animate-float" />
        <div
          className="absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-primary/40 blur-[120px] animate-float"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      <div className="relative flex flex-col items-center">
        <div className="relative">
          {/* rotating ring */}
          <span className="absolute inset-0 -m-4 rounded-full border-2 border-white/15" />
          <span className="absolute inset-0 -m-4 rounded-full border-2 border-transparent border-t-accent border-r-accent/60 [animation:spin_1s_linear_infinite]" />
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white shadow-glow backdrop-blur">
            <GraduationCap className="h-8 w-8" />
          </span>
        </div>

        <p className="mt-7 font-display text-xl font-extrabold tracking-tight text-white">
          Meera Academy
        </p>
        <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
          Learn · Practice · Perform · Succeed
        </p>

        {/* loading bar */}
        <div className="mt-6 h-1 w-40 overflow-hidden rounded-full bg-white/15">
          <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-accent to-white [animation:loaderbar_1.2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes loaderbar {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(320%); }
        }
      `}</style>
    </div>
  );
}
