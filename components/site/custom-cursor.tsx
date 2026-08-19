'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Custom cursor with a trailing follower and magnetic hover growth on
 * interactive elements. Disabled on touch devices and when the user
 * prefers reduced motion. Uses requestAnimationFrame for smooth tracking.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;

    setEnabled(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;
    let hovering = false;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        'a, button, input, textarea, select, [role="button"], [data-cursor="hover"]'
      );
      hovering = !!target;
      if (ringRef.current) {
        ringRef.current.classList.toggle('cursor-hover', hovering);
      }
    };

    const onDown = () => ringRef.current?.classList.add('cursor-down');
    const onUp = () => ringRef.current?.classList.remove('cursor-down');

    const tick = () => {
      // Ease the ring toward the dot for a trailing feel.
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] hidden md:block" aria-hidden="true">
      <div
        ref={dotRef}
        className="cursor-dot fixed left-0 top-0 h-2 w-2 rounded-full bg-accent"
      />
      <div
        ref={ringRef}
        className="cursor-ring fixed left-0 top-0 h-9 w-9 rounded-full border border-primary/60 transition-[width,height,background-color,border-color] duration-200"
      />
      <style>{`
        .cursor-ring.cursor-hover {
          width: 3rem;
          height: 3rem;
          background-color: hsl(var(--accent) / 0.12);
          border-color: hsl(var(--accent) / 0.8);
        }
        .cursor-ring.cursor-down {
          width: 1.5rem;
          height: 1.5rem;
        }
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>
    </div>
  );
}
