import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/CustomCursor";
import { MenuOverlay } from "@/components/MenuOverlay";
import { PortfolioItem } from "@/components/PortfolioItem";
import { Reveal, MaskReveal } from "@/components/Reveal";
import { UnderlineLink } from "@/components/UnderlineLink";

import heroBg from "@/assets/hero-bg.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raunakmanna Films — Cinematic Film Production & Photography" },
      {
        name: "description",
        content:
          "Raunakmanna Films is a premium film production and photography agency crafting high-end model shoots, editorial post-production and cinematic wedding films.",
      },
      { property: "og:title", content: "Raunakmanna Films" },
      {
        property: "og:description",
        content:
          "Premium film production & photography. Model cinematography, post-production, cinematic wedding films.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main id="top" className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <CustomCursor />
      <MenuOverlay />

      <Hero />
      <Marquee />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden">
      {/* Background image stand-in for video reel */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        {/* subtle grain via duplicated dim layer */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-background)_80%)]" />
      </div>

      {/* Top micro labels */}
      <div className="absolute inset-x-0 top-24 z-10 flex justify-between px-6 text-[10px] uppercase tracking-[0.4em] text-foreground/60 md:px-10">
        <span>Est. — Cinematic Studio</span>
        <span className="hidden md:inline">Reel / 2025</span>
      </div>

      {/* Center wordmark */}
      <div className="relative z-10 px-4 text-center">
        <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-foreground/60 md:text-xs">
          Film Production · Photography
        </p>
        <h1 className="hero-breathe font-display text-[14vw] font-bold leading-[0.92] tracking-tight text-foreground md:text-[10vw]">
          <MaskReveal delay={150}>RAUNAKMANNA</MaskReveal>
          <br />
          <MaskReveal delay={350}>
            <span className="italic font-light tracking-tight text-foreground/90">FILMS</span>
          </MaskReveal>
        </h1>
        <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-foreground/60">
          A studio for high-fashion frames, raw emotion, and cinema that lingers.
        </p>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-foreground/70"
      >
        <span className="block scroll-indicator">Scroll to explore</span>
        <span className="mx-auto mt-4 block scroll-line" />
      </a>
    </section>
  );
}

/* ---------------- MARQUEE strip ---------------- */
function Marquee() {
  const items = ["Cinematography", "Editorial", "Weddings", "Post-Production", "Direction", "Color"];
  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-charcoal/40 py-6">
      <div className="flex animate-[scroll_30s_linear_infinite] gap-12 whitespace-nowrap text-[10vw] font-light italic tracking-tight text-foreground/70 md:text-[5vw]">
        {Array.from({ length: 4 }).flatMap((_, k) =>
          items.map((i, idx) => (
            <span key={`${k}-${idx}`} className="inline-flex items-center gap-12">
              {i}
              <span className="text-foreground/30">✦</span>
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
    <section id="about" className="relative px-6 py-28 md:px-16 md:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-3">
          <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">— 01 / Manifesto</p>
        </Reveal>

        <div className="md:col-span-9">
          <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-7xl">
            <MaskReveal>We chase the unrehearsed —</MaskReveal>
            <br />
            <MaskReveal delay={120}>
              <span className="text-foreground/55">
                quiet glances, brutal light, the half-second before a smile.
              </span>
            </MaskReveal>
            <br />
            <MaskReveal delay={240}>
              <span className="italic font-light">Then we cut it like cinema.</span>
            </MaskReveal>
          </h2>

          <Reveal delay={400} className="mt-12 grid grid-cols-1 gap-8 text-sm leading-relaxed text-foreground/65 md:grid-cols-2 md:text-base">
            <p>
              Raunakmanna Films is a director-led studio working across high-fashion model
              cinematography, editorial post-production, and intimate wedding films. We treat
              every frame as a still you would frame on a wall.
            </p>
            <p>
              Our work lives at the intersection of restraint and obsession — minimal in
              composition, maximal in feeling. Stories that look like memory.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
const services = [
  {
    n: "01",
    title: "Model Cinematography",
    body: "Editorial-grade film and stills for fashion houses, brands, and personal portfolios.",
    tags: ["Look-book", "Campaign", "Test Shoot"],
  },
  {
    n: "02",
    title: "Makeup & Editing Post-Production",
    body: "Retouching, grade, and finishing — frame-by-frame craft that elevates the original take.",
    tags: ["Retouch", "Color Grade", "Beauty Edit"],
  },
  {
    n: "03",
    title: "Wedding Films",
    body: "Cinema-first wedding storytelling. Documentary at heart, directed with intent.",
    tags: ["Feature Film", "Highlight Reel", "Stills"],
  },
];

function Services() {
  return (
    <section id="services" className="relative bg-charcoal/40 px-6 py-28 md:px-16 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">— 02 / Practice</p>
            <h2 className="mt-4 font-display text-5xl font-medium leading-[0.95] tracking-tight md:text-8xl">
              <MaskReveal>What</MaskReveal>{" "}
              <MaskReveal delay={120}>
                <span className="italic font-light">we do.</span>
              </MaskReveal>
            </h2>
          </Reveal>
          <Reveal delay={200} className="max-w-sm text-sm text-foreground/55">
            Three disciplines, one obsession with frame, light, and time.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-border/50 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 120}
              className="group relative flex flex-col gap-10 bg-background p-8 transition-colors duration-500 hover:bg-charcoal md:p-12"
            >
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.4em] text-foreground/40">
                <span>{s.n}</span>
                <span className="transition-transform duration-500 group-hover:translate-x-1">↗</span>
              </div>

              <h3 className="font-display text-2xl font-medium leading-tight tracking-tight md:text-3xl">
                {s.title}
              </h3>

              <p className="text-sm leading-relaxed text-foreground/55">{s.body}</p>

              <ul className="mt-auto flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.3em] text-foreground/45">
                {s.tags.map((t) => (
                  <li key={t} className="rounded-full border border-border px-3 py-1">
                    {t}
                  </li>
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
  { src: p1, title: "Silver Halide", meta: "Editorial · 2025", w: 1024, h: 1280, span: "md:col-span-5 md:row-span-2 aspect-[4/5]" },
  { src: p2, title: "Anika & Rohan", meta: "Wedding Film · 2025", w: 1600, h: 1024, span: "md:col-span-7 aspect-[16/10]" },
  { src: p3, title: "Behind the Set", meta: "Documentary · 2024", w: 1024, h: 1024, span: "md:col-span-4 aspect-square" },
  { src: p4, title: "Crimson Veil", meta: "Bridal · 2025", w: 1024, h: 1400, span: "md:col-span-3 aspect-[3/4]" },
  { src: p5, title: "Weightless", meta: "Fashion Film · 2024", w: 1400, h: 1024, span: "md:col-span-7 aspect-[16/10]" },
  { src: p6, title: "Last Light", meta: "Wedding · 2024", w: 1024, h: 1280, span: "md:col-span-5 aspect-[4/5]" },
];

function Portfolio() {
  return (
    <section id="work" className="relative px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 flex items-end justify-between gap-6 md:mb-20">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">— 03 / Vault</p>
            <h2 className="mt-4 font-display text-5xl font-medium leading-[0.95] tracking-tight md:text-8xl">
              <MaskReveal>Selected</MaskReveal>
              <br />
              <MaskReveal delay={120}>
                <span className="italic font-light text-foreground/70">work.</span>
              </MaskReveal>
            </h2>
          </Reveal>
          <Reveal delay={200} className="hidden text-right text-xs uppercase tracking-[0.3em] text-foreground/45 md:block">
            <p>Frames from</p>
            <p className="text-foreground">2024 — 2025</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
          {works.map((w, i) => (
            <PortfolioItem
              key={i}
              src={w.src}
              title={w.title}
              meta={w.meta}
              width={w.w}
              height={w.h}
              speed={0.1 + (i % 3) * 0.05}
              className={`${w.span} aspect-[4/5] md:aspect-auto`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <section id="contact" className="relative bg-charcoal/30 px-6 py-28 md:px-16 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">— 04 / Inquire</p>
        </Reveal>

        <h2 className="mt-6 font-display text-6xl font-medium leading-[0.92] tracking-tight md:text-[12vw]">
          <MaskReveal>Let's</MaskReveal>{" "}
          <MaskReveal delay={120}>
            <span className="italic font-light">shoot.</span>
          </MaskReveal>
        </h2>

        <form
          className="mt-16 grid grid-cols-1 gap-10 md:mt-24 md:grid-cols-2 md:gap-x-16 md:gap-y-12"
          onSubmit={(e) => e.preventDefault()}
        >
          {[
            { label: "Your name", type: "text", name: "name" },
            { label: "Email", type: "email", name: "email" },
            { label: "Project type", type: "text", name: "type" },
            { label: "Budget (optional)", type: "text", name: "budget" },
          ].map((f) => (
            <label key={f.name} className="group block">
              <span className="block text-[10px] uppercase tracking-[0.4em] text-foreground/45">
                {f.label}
              </span>
              <input
                type={f.type}
                name={f.name}
                className="mt-3 w-full border-0 border-b border-border/70 bg-transparent pb-3 text-lg text-foreground outline-none transition-colors focus:border-foreground"
              />
            </label>
          ))}

          <label className="block md:col-span-2">
            <span className="block text-[10px] uppercase tracking-[0.4em] text-foreground/45">
              Tell us about it
            </span>
            <textarea
              rows={3}
              name="brief"
              className="mt-3 w-full resize-none border-0 border-b border-border/70 bg-transparent pb-3 text-lg text-foreground outline-none transition-colors focus:border-foreground"
            />
          </label>

          <div className="md:col-span-2 mt-6 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-sm text-xs text-foreground/45">
              Or write directly to{" "}
              <UnderlineLink href="mailto:hello@raunakmanna.films" className="text-foreground">
                hello@raunakmanna.films
              </UnderlineLink>
              . We respond within 48 hours.
            </p>

            <button
              type="submit"
              data-cursor="hover"
              className="group/cta relative inline-flex items-center gap-4 overflow-hidden rounded-full border border-foreground px-8 py-4 text-xs uppercase tracking-[0.4em] text-foreground transition-colors duration-500 hover:bg-foreground hover:text-background"
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

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="relative border-t border-border/50 px-6 py-12 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-end gap-8 text-[10px] uppercase tracking-[0.3em] text-foreground/50 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <p className="text-foreground">© Raunakmanna Films</p>
          <p className="mt-1">All frames reserved · 2025</p>
        </div>
        <div className="space-y-2">
          <p className="text-foreground/40">Social</p>
          <ul className="space-y-1">
            <li><UnderlineLink href="#" className="text-foreground">Instagram</UnderlineLink></li>
            <li><UnderlineLink href="#" className="text-foreground">Vimeo</UnderlineLink></li>
            <li><UnderlineLink href="#" className="text-foreground">Behance</UnderlineLink></li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-foreground/40">Studio</p>
          <p className="text-foreground/80 normal-case tracking-normal">Mumbai · Delhi</p>
        </div>
        <div className="space-y-2 text-right md:text-left">
          <p className="text-foreground/40">Index</p>
          <a href="#top" className="text-foreground">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
