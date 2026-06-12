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

    let raf = 0;
    const onScroll = () => {
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
      className={`group relative overflow-hidden bg-charcoal cursor-pointer rounded-2xl ${
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
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />

      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 md:p-7">
        <div className="overflow-hidden">
          <span
            className={`block text-xs uppercase tracking-[0.3em] text-foreground/70 transition-transform duration-700 ${
              hover ? "translate-y-0" : "translate-y-6"
            }`}
          >
            {meta}
          </span>
          <span
            className={`mt-1 block text-xl font-medium text-foreground transition-transform duration-700 md:text-2xl ${
              hover ? "translate-y-0" : "translate-y-10"
            }`}
            style={{ transitionDelay: hover ? "80ms" : "0ms" }}
          >
            {title}
          </span>
        </div>
        <span
          className={`shrink-0 text-xs uppercase tracking-[0.3em] text-foreground/70 transition-all duration-700 ${
            hover ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
          }`}
        >
          View →
        </span>
      </figcaption>
    </figure>
  );
}
