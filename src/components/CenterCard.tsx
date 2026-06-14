import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";

export function CenterCard() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let targetWobble = 0;
    let currentWobble = 0;
    let active = false;

    const loop = () => {
      if (!active) return;

      const currentScrollY = window.scrollY;
      const diff = Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;

      // Calculate frame velocity (multiplied to make it visible on trackpads/smooth mice)
      targetWobble = Math.min(diff * 1.5, 12); // clamp to max 12px wobble

      currentWobble += (targetWobble - currentWobble) * 0.15;

      if (ref.current) {
        const baseRadius = window.innerWidth <= 768 ? 12 : 16;
        const borderVal = `${baseRadius + currentWobble * 2.0}px ${baseRadius - currentWobble * 1.5}px ${baseRadius + currentWobble * 1.8}px ${baseRadius - currentWobble * 1.0}px / ${baseRadius - currentWobble * 1.0}px ${baseRadius + currentWobble * 2.0}px ${baseRadius - currentWobble * 1.5}px ${baseRadius + currentWobble * 1.8}px`;
        ref.current.style.borderRadius = borderVal;
        ref.current.style.transform = `skewY(${currentWobble * 0.12}deg)`;
      }

      // If we stopped scrolling, decay the wobble
      if (diff === 0) {
        currentWobble *= 0.82;
      }

      if (Math.abs(currentWobble) < 0.05 && diff === 0) {
        currentWobble = 0;
        active = false;
        if (ref.current) {
          ref.current.style.borderRadius = window.innerWidth <= 768 ? "12px" : "16px";
          ref.current.style.transform = "none";
        }
        return;
      }
      requestAnimationFrame(loop);
    };

    const onScroll = () => {
      if (!active) {
        active = true;
        lastScrollY = window.scrollY;
        requestAnimationFrame(loop);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div 
      ref={ref}
      className="flex flex-col items-center justify-center p-4 md:p-6 bg-charcoal text-foreground rounded-[12px] md:rounded-2xl shadow-sm aspect-[4/5] text-center border border-brand/15 paper-grain col-span-1 transition-all duration-300 hover:border-brand/40 hover:shadow-md"
    >
      <span className="text-[9px] uppercase tracking-[0.4em] text-foreground/45 mb-2">— Showcase</span>
      <h3 className="font-sans text-xl sm:text-2xl font-extrabold tracking-[0.12em] text-foreground uppercase leading-none">
        OUR WORK
      </h3>
      <span className="h-1 w-1 rounded-full bg-brand mt-3" />
      <Link
        to="/gallery"
        className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand hover:text-brand/80 transition-colors duration-300 mt-5 border-b border-brand/30 pb-0.5"
        data-cursor="hover"
      >
        view gallery
      </Link>
    </div>
  );
}
