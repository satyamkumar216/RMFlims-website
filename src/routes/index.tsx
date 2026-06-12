import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { CustomCursor } from "@/components/CustomCursor";
import { PortfolioItem } from "@/components/PortfolioItem";
import { Reveal, MaskReveal } from "@/components/Reveal";
import { UnderlineLink } from "@/components/UnderlineLink";
import { Footer } from "@/components/Footer";

import heroImage from "@/assets/hero.png";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import logo from "@/assets/logo-removebg-preview.png";
import manifestoLeft from "@/assets/manifesto-left.png";
import manifestoRight from "@/assets/manifesto-right.png";
import manifestoBoat from "@/assets/manifesto-boat.png";
import manifestoCouple from "@/assets/manifesto-couple.png";
import heroBride from "@/assets/hero-bride.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rounakmanna Films — Wedding Cinematography & Photography" },
      {
        name: "description",
        content:
          "Rounakmanna Films crafts heirloom wedding films and bridal photography — quiet, cinematic, deeply Indian.",
      },
      { property: "og:title", content: "Rounakmanna Films" },
      {
        property: "og:description",
        content: "Heirloom wedding films & bridal photography.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main id="top" className="relative min-h-screen overflow-x-hidden bg-background text-foreground paper-grain">
      <CustomCursor />
      <TopNav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Portfolio />
      <SoulCinema />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}

/* ---------------- TOP NAV ---------------- */
function TopNav() {
  return (
    <header className="relative z-30 flex items-center justify-between gap-6 px-6 pt-6 md:px-12 md:pt-8">
      <a href="#top" className="flex items-center gap-2" data-cursor="hover">
        <img
          src={logo}
          alt="Rounakmanna Films Logo"
          className="h-20 md:h-28 w-auto object-contain"
        />
      </a>

      <nav className="hidden md:flex items-center gap-12 lg:gap-16 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {["Gallery", "Review", "Broucher"].map((l) => {
          if (l === "Gallery") {
            return (
              <Link
                key={l}
                to="/gallery"
                data-cursor="hover"
                className="font-display text-xl text-foreground/85 transition-colors hover:text-brand"
              >
                {l}
              </Link>
            );
          }
          return (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              data-cursor="hover"
              className="font-display text-xl text-foreground/85 transition-colors hover:text-brand"
            >
              {l}
            </a>
          );
        })}
      </nav>

      <div className="flex items-center">
        <a
          href="#contact"
          data-cursor="hover"
          className="font-display rounded-full bg-brand px-6 py-2 text-lg text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 md:px-7 md:text-xl"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative mx-auto mt-6 w-full max-w-[1760px] px-3 md:mt-8 md:px-8">
      <div className="relative h-[78svh] min-h-[560px] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Rounakmanna Films Hero Image"
          width={1920}
          height={1280}
          className="h-full w-full object-cover [filter:grayscale(100%)_contrast(1.05)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,oklch(0.18_0.005_60/0.35)_100%)]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="hero-breathe font-display text-[11vw] font-medium leading-[0.8] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] md:text-[8.5vw]">
            <MaskReveal delay={150}>ROUNAKMANNA</MaskReveal>
          </h1>
          <div className="relative -mt-[5vw] flex w-full items-center justify-center gap-4 md:-mt-[4vw] md:gap-8 z-10 px-4">
            <span className="h-px flex-1 max-w-[15vw] md:max-w-[25vw] bg-foreground/60" />
            <span className="films-in font-display text-[10vw] font-medium italic tracking-[0.18em] text-brand md:text-[6.5vw] drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
              FILMS
            </span>
            <span className="h-px flex-1 max-w-[15vw] md:max-w-[25vw] bg-foreground/60" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = ["Weddings", "Bridal Films", "Editorial", "Cinematography", "Post-Production", "Stills"];
  return (
    <div className="relative mt-16 overflow-hidden border-y border-foreground/15 py-6 md:mt-24">
      <div className="flex animate-[scroll_36s_linear_infinite] gap-12 whitespace-nowrap font-display text-[10vw] font-medium italic tracking-tight text-foreground/75 md:text-[5vw]">
        {Array.from({ length: 4 }).flatMap((_, k) =>
          items.map((i, idx) => (
            <span key={`${k}-${idx}`} className="inline-flex items-center gap-12">
              {i}
              <span className="text-brand">✦</span>
            </span>
          )),
        )}
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-28 md:px-16 md:py-40">
      {/* Background illustrations */}
      <Reveal delay={200} className="absolute left-0 bottom-0 z-0 w-[38%] max-w-[220px] md:w-[30%] md:max-w-[360px] lg:max-w-[420px] min-w-[140px] pointer-events-none select-none mix-blend-multiply opacity-25 md:opacity-90 transition-opacity">
        <img src={manifestoLeft} alt="" className="w-full object-contain" />
      </Reveal>
      
      <Reveal delay={300} className="absolute right-0 bottom-0 z-0 w-[38%] max-w-[220px] md:w-[30%] md:max-w-[360px] lg:max-w-[420px] min-w-[140px] pointer-events-none select-none mix-blend-multiply opacity-25 md:opacity-90 transition-opacity">
        <img src={manifestoRight} alt="" className="w-full object-contain" />
      </Reveal>

      <Reveal delay={450} className="absolute right-[5%] top-[12%] md:top-[15%] z-0 w-[12%] max-w-[100px] min-w-[50px] pointer-events-none select-none mix-blend-multiply opacity-20 md:opacity-85 transition-opacity animate-pulse">
        <img src={manifestoBoat} alt="" className="w-full object-contain" />
      </Reveal>

      <div className="mx-auto max-w-4xl relative z-10 flex flex-col items-center">
        <Reveal className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/55">— 01 / Manifesto</p>
        </Reveal>

        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5vw] font-medium leading-[1.15] tracking-[0.02em] text-foreground text-center">
          <MaskReveal>ANCIENT BENGALI SPIRIT</MaskReveal>
          <br />
          <MaskReveal delay={150}>
            <span className="font-display italic lowercase tracking-normal font-light text-3xl sm:text-5xl md:text-6xl lg:text-[4.5vw] mr-3 md:mr-4">in a</span>
            MODERN FRAME
          </MaskReveal>
        </h2>

        <Reveal delay={300} className="mt-12 max-w-2xl text-center">
          <p className="font-display text-base sm:text-lg md:text-[21px] leading-[1.6] text-foreground/80 tracking-wide font-light">
            At our studio, our theme is rooted in the delicate balance between timeless heritage and cutting-edge artistry. We are dedicated to preserving the rich, vibrant spirit of Bengali culture—its profound storytelling, emotional depth, and intricate traditions—while elevating it through modern, cinematic editing techniques. By seamlessly blending classic cultural sensibilities with contemporary visual frameworks, our goal is to craft compelling narratives where the age-old soul of Bengal is perfectly captured and celebrated within a dynamic, modern frame.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
const services = [
  { 
    n: "01", 
    id: "wedding-films",
    title: "Wedding Films", 
    body: "Cinema-first wedding storytelling. Documentary at heart, directed with vertical and landscape intent.", 
    tags: ["Feature Film", "Highlight Reel", "Stills"],
    span: "md:col-span-4"
  },
  { 
    n: "02", 
    id: "bridal-portraits",
    title: "Bridal Portraits", 
    body: "Editorial-grade portraiture capturing the grace, ornaments, and heirloom moments of brides.", 
    tags: ["Pre-wedding", "Bridal Portrait", "Fine Art"],
    span: "md:col-span-4"
  },
  { 
    n: "03", 
    id: "model-photoshoot",
    title: "Model Photoshoot", 
    body: "Magazine-grade high fashion modeling portfolios. Sculpted lighting, tailored compositions, and couture art direction.", 
    tags: ["Fashion", "Portfolio", "Editorial"],
    span: "md:col-span-4"
  },
  { 
    n: "04", 
    id: "reel-shoot",
    title: "Reel Shoot", 
    body: "Vertical cinematic storytelling optimized for social impact. Crisp transitions and highly engaging vertical narratives.", 
    tags: ["Vertical Cinema", "Reels", "Commercial"],
    span: "md:col-span-6"
  },
  { 
    n: "05", 
    id: "edit-color",
    title: "Edit & Color", 
    body: "Retouching, editorial grade, and beauty finishing. Precise frame-by-frame craft that elevates the original take.", 
    tags: ["Color Grading", "Post Production", "Beauty Edit"],
    span: "md:col-span-6"
  },
];

function Services() {
  return (
    <section id="services" className="relative bg-charcoal/60 px-6 py-28 md:px-16 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/55">— 02 / Practice</p>
            <h2 className="mt-4 font-display text-5xl font-medium leading-[0.95] tracking-tight md:text-8xl">
              <MaskReveal>What</MaskReveal>{" "}
              <MaskReveal delay={120}><span className="italic font-medium text-brand">we do.</span></MaskReveal>
            </h2>
          </Reveal>
          <Reveal delay={200} className="max-w-sm text-sm text-foreground/65">
            Five disciplines, one obsession with frame, light, and time.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          {services.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 120}
              className={`group relative flex flex-col gap-8 bg-background/55 border border-foreground/10 rounded-2xl p-8 md:p-10 transition-all duration-500 hover:bg-background hover:border-brand/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5 ${s.span} min-h-[320px] md:min-h-[350px]`}
            >
              <div className="flex items-center justify-between">
                <span className="font-display italic text-4xl text-brand/25 group-hover:text-brand/80 transition-colors duration-500">{s.n}</span>
                <span className="font-display text-2xl text-brand transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-medium leading-tight tracking-tight md:text-3xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65">{s.body}</p>
                <div className="mt-5">
                  <Link
                    to="/packages"
                    search={{ service: s.id }}
                    className="text-xs uppercase tracking-[0.2em] text-brand hover:text-brand/80 transition-all duration-300 border-b border-brand/20 pb-0.5 hover:border-brand font-medium inline-flex items-center gap-1.5"
                  >
                    See Packages ⟶
                  </Link>
                </div>
              </div>
              <ul className="mt-auto flex flex-wrap gap-2 text-[9px] uppercase tracking-[0.25em] text-foreground/55">
                {s.tags.map((t) => (
                  <li key={t} className="rounded-full border border-foreground/15 bg-foreground/5 px-3 py-1 transition-colors duration-500 group-hover:border-brand/35 group-hover:text-brand">{t}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PORTFOLIO ---------------- */
const works = [
  { src: p1, title: "Silver Halide", meta: "Editorial · 2025", w: 1024, h: 1280 },
  { src: p2, title: "Anika & Rohan", meta: "Wedding Film · 2025", w: 1600, h: 1024 },
  { src: p3, title: "Behind the Set", meta: "Documentary · 2024", w: 1024, h: 1024 },
  { src: p4, title: "Crimson Veil", meta: "Bridal · 2025", w: 1024, h: 1400 },
  { src: p5, title: "Weightless", meta: "Fashion Film · 2024", w: 1400, h: 1024 },
  { src: p6, title: "Last Light", meta: "Wedding · 2024", w: 1024, h: 1280 },
  { src: heroBride, title: "Golden Hour Bride", meta: "Bridal · 2025", w: 1024, h: 1350 },
  { src: manifestoCouple, title: "Sacred Tapestry", meta: "Weddings · 2025", w: 1600, h: 1024 }
];

function Portfolio() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    if (activeIdx === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIdx(null);
      if (e.key === "ArrowLeft") setActiveIdx((prev) => (prev === null ? null : (prev - 1 + works.length) % works.length));
      if (e.key === "ArrowRight") setActiveIdx((prev) => (prev === null ? null : (prev + 1) % works.length));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIdx]);

  const gridItems = [
    { type: "image", ...works[0], originalIndex: 0 },
    { type: "image", ...works[1], originalIndex: 1 },
    { type: "image", ...works[2], originalIndex: 2 },
    { type: "image", ...works[3], originalIndex: 3 },
    { type: "center-card" },
    { type: "image", ...works[4], originalIndex: 4 },
    { type: "image", ...works[5], originalIndex: 5 },
    { type: "image", ...works[6], originalIndex: 6 },
    { type: "image", ...works[7], originalIndex: 7 },
  ];

  return (
    <section id="gallery" className="relative px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {gridItems.map((item, i) => {
            if (item.type === "center-card") {
              return (
                <div 
                  key="center-card" 
                  className="flex flex-col items-center justify-center p-8 bg-ink text-cream rounded-2xl shadow-lg aspect-[4/5] text-center border border-foreground/10 paper-grain col-span-1 sm:col-span-2 md:col-span-1"
                >
                  <span className="text-[10px] uppercase tracking-[0.4em] text-cream/45 mb-3">— Showcase</span>
                  <h3 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-[0.15em] text-cream uppercase leading-none">
                    OUR WORK
                  </h3>
                  <Link
                    to="/gallery"
                    className="font-sans text-[11px] uppercase tracking-[0.25em] text-brand hover:text-brand/80 transition-colors duration-300 mt-6 border-b border-brand/30 pb-1"
                    data-cursor="hover"
                  >
                    view full gallery
                  </Link>
                </div>
              );
            }

            return (
              <PortfolioItem
                key={i}
                src={item.src!}
                title={item.title!}
                meta={item.meta!}
                width={item.w!}
                height={item.h!}
                speed={0.1 + (i % 3) * 0.05}
                className="aspect-[4/5]"
                onClick={() => setActiveIdx(item.originalIndex!)}
              />
            );
          })}
        </div>
      </div>

      {/* Modern Lightbox Photo Preview Modal */}
      {activeIdx !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setActiveIdx(null)}
        >
          {/* Close button */}
          <button 
            onClick={() => setActiveIdx(null)}
            className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-transform duration-300 hover:rotate-90 hover:bg-white/20"
          >
            ✕
          </button>
          
          {/* Previous button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx((prev) => (prev === null ? null : (prev - 1 + works.length) % works.length));
            }}
            className="absolute left-4 sm:left-6 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:scale-105"
          >
            ←
          </button>

          {/* Next button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx((prev) => (prev === null ? null : (prev + 1) % works.length));
            }}
            className="absolute right-4 sm:right-6 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:scale-105"
          >
            →
          </button>

          {/* Image content */}
          <div 
            className="relative max-h-[85vh] max-w-[90vw] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={works[activeIdx].src} 
              alt={works[activeIdx].title} 
              className="max-h-[72vh] sm:max-h-[75vh] max-w-full object-contain rounded-lg border border-white/15 animate-[zoomIn_0.4s_cubic-bezier(0.22,1,0.36,1)] shadow-2xl"
            />
            <div className="mt-6 text-center text-white">
              <p className="font-display text-sm uppercase tracking-[0.25em] text-white/60">{works[activeIdx].meta}</p>
              <h3 className="font-display mt-2 text-2xl font-medium tracking-wide">{works[activeIdx].title}</h3>
            </div>
          </div>
          <style>{`
            @keyframes zoomIn {
              from { transform: scale(0.96); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
          `}</style>
        </div>
      )}
    </section>
  );
}

/* ---------------- SOUL + CINEMA BANNER ---------------- */
function SoulCinema() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-background">
      <div 
        className="relative mx-auto w-full max-w-[1760px] h-[500px] md:h-[650px] overflow-hidden bg-black"
        style={{
          clipPath: "polygon(0 8%, 100% 0, 100% 92%, 0 100%)"
        }}
      >
        {/* Background Image */}
        <img 
          src={manifestoCouple} 
          alt="Traditional Bengali Couple Intimate Moment" 
          className="absolute inset-0 h-full w-full object-cover grayscale opacity-55 scale-105 transition-transform duration-1000"
        />
        {/* Radial Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)]" />
        
        {/* Content Box */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12 z-10">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl tracking-[0.08em] text-white font-medium uppercase drop-shadow-[0_2px_15px_rgba(0,0,0,0.5)]">
              SOUL <span className="font-light text-brand">+</span> CINEMA
            </h2>
          </Reveal>

          <Reveal delay={200} className="mt-8 max-w-2xl">
            <p className="font-display italic text-base sm:text-lg md:text-[21px] leading-[1.65] text-white/85 font-light tracking-wide drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
              "Every wedding is a sacred tapestry, and so are our films. For years, Rounakmanna Films has documented the quiet, powerful heritage of Bengali weddings—the soft sound of shehnai, the vibrant red of alta, and the sacred pheras around the fire. We are fortunate to capture these timeless traditions, weaving them into cinematic heirlooms that carry the warmth, emotion, and age-old soul of Bengal."
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <section id="contact" className="relative bg-charcoal/60 px-6 py-28 md:px-16 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal><p className="text-[10px] uppercase tracking-[0.4em] text-foreground/55">— 04 / Inquire</p></Reveal>
        <h2 className="mt-6 font-display text-6xl font-medium leading-[0.92] tracking-tight md:text-[12vw]">
          <MaskReveal>Let's</MaskReveal>{" "}
          <MaskReveal delay={120}><span className="italic font-medium text-brand">shoot.</span></MaskReveal>
        </h2>

        <form className="mt-16 grid grid-cols-1 gap-10 md:mt-24 md:grid-cols-2 md:gap-x-16 md:gap-y-12" onSubmit={(e) => e.preventDefault()}>
          {[
            { label: "Your name", type: "text", name: "name" },
            { label: "Email", type: "email", name: "email" },
            { label: "Wedding date", type: "text", name: "date" },
            { label: "City", type: "text", name: "city" },
          ].map((f) => (
            <label key={f.name} className="group block">
              <span className="block text-[10px] uppercase tracking-[0.4em] text-foreground/55">{f.label}</span>
              <input
                type={f.type}
                name={f.name}
                className="mt-3 w-full border-0 border-b border-foreground/30 bg-transparent pb-3 text-lg text-foreground outline-none transition-colors focus:border-brand"
              />
            </label>
          ))}
          <label className="block md:col-span-2">
            <span className="block text-[10px] uppercase tracking-[0.4em] text-foreground/55">Tell us about it</span>
            <textarea rows={3} name="brief" className="mt-3 w-full resize-none border-0 border-b border-foreground/30 bg-transparent pb-3 text-lg text-foreground outline-none transition-colors focus:border-brand" />
          </label>
          <div className="md:col-span-2 mt-6 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-sm text-xs text-foreground/55">
              Or write directly to{" "}
              <UnderlineLink href="mailto:hello@rounakmannafilms.com" className="text-brand">
                hello@rounakmannafilms.com
              </UnderlineLink>. We respond within 48 hours.
            </p>
            <button
              type="submit"
              data-cursor="hover"
              className="group/cta relative inline-flex items-center gap-4 rounded-full bg-brand px-8 py-4 font-script text-xl text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <span>Send inquiry</span>
              <span className="transition-transform duration-500 group-hover/cta:translate-x-1">→</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

/* ---------------- WHATSAPP FAB ---------------- */
function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/910000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      data-cursor="hover"
      className="wa-pulse fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.65_0.18_145)] text-white shadow-lg transition-transform hover:scale-105 md:bottom-8 md:right-8"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M16.003 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.6 4.47 1.73 6.42L3.2 28.8l6.6-1.71a12.78 12.78 0 0 0 6.2 1.59h.01c7.07 0 12.8-5.73 12.8-12.8s-5.73-12.8-12.81-12.8Zm0 23.3c-1.91 0-3.79-.51-5.42-1.48l-.39-.23-3.92 1.02 1.05-3.82-.25-.4a10.49 10.49 0 1 1 19.45-5.59c0 5.79-4.72 10.5-10.52 10.5Zm5.77-7.86c-.32-.16-1.87-.92-2.16-1.03-.29-.11-.5-.16-.72.16-.21.32-.82 1.03-1.01 1.24-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.19-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.53-.54-.72-.55l-.62-.01c-.21 0-.55.08-.84.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.06 1.3 3.27c.16.21 2.24 3.41 5.43 4.78.76.33 1.36.53 1.82.68.76.24 1.46.21 2.01.13.61-.09 1.87-.76 2.13-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
