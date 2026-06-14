import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  title: string;
  meta: string;
  className?: string;
  /** Parallax speed factor (0 = none, 0.2 = subtle, 0.5 = strong) */
  speed?: number;
  width: number;
  height: number;
  onClick?: () => void;
}

export function PortfolioItem({
  src,
  title,
  meta,
  className = "",
  speed = 0.12,
  width,
  height,
  onClick,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [hover, setHover] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setShown(true)),
      { threshold: 0.1 },
    );
    io.observe(el);

    let lastScrollY = window.scrollY;
    let targetWobble = 0;
    let currentWobble = 0;
    let active = false;
    let raf = 0;

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
        // Jelly border radius morphing
        const borderVal = `${baseRadius + currentWobble * 2.0}px ${baseRadius - currentWobble * 1.5}px ${baseRadius + currentWobble * 1.8}px ${baseRadius - currentWobble * 1.0}px / ${baseRadius - currentWobble * 1.0}px ${baseRadius + currentWobble * 2.0}px ${baseRadius - currentWobble * 1.5}px ${baseRadius + currentWobble * 1.8}px`;
        ref.current.style.borderRadius = borderVal;
        
        // Fluid tilt/skew
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

      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        if (!ref.current || !imgRef.current) return;
        const rect = ref.current.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
        const offset = -progress * speed * 100;
        imgRef.current.style.transform = `translate3d(0, ${offset}px, 0) scale(${hover ? 1.08 : 1.06})`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed, hover]);

  return (
    <figure
      ref={ref}
      data-cursor="hover"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`group relative overflow-hidden bg-charcoal cursor-pointer rounded-[12px] md:rounded-2xl ${
        shown ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000 ${className}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imgRef}
          src={src}
          alt={title}
          loading="lazy"
          width={width}
          height={height}
          className={hover ? "port-img port-img-hover h-full w-full object-cover" : "port-img h-full w-full object-cover"}
        />
      </div>

      {/* gradient veil */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-100 md:opacity-80 transition-opacity duration-700 md:group-hover:opacity-100" />

      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 md:p-7">
        <div className="overflow-hidden min-w-0 flex-1">
          <span
            className={`block text-[10px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.3em] text-foreground/70 transition-transform duration-700 whitespace-nowrap ${
              hover ? "translate-y-0" : "translate-y-0 md:translate-y-6"
            }`}
          >
            {meta}
          </span>
          <span
            className={`mt-1 block text-[13px] md:text-xl font-medium text-foreground transition-transform duration-700 md:text-2xl break-words leading-tight ${
              hover ? "translate-y-0" : "translate-y-0 md:translate-y-10"
            }`}
            style={{ transitionDelay: hover ? "80ms" : "0ms" }}
          >
            {title}
          </span>
        </div>
        <span
          className={`shrink-0 text-[10px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.3em] text-foreground/70 transition-all duration-700 ${
            hover ? "translate-x-0 opacity-100" : "translate-x-0 opacity-100 md:translate-x-3 md:opacity-0"
          }`}
        >
          View →
        </span>
      </figcaption>
    </figure>
  );
}
