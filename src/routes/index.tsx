import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/CustomCursor";
import { PortfolioItem } from "@/components/PortfolioItem";
import { Reveal, MaskReveal } from "@/components/Reveal";
import { UnderlineLink } from "@/components/UnderlineLink";

import heroBride from "@/assets/hero-bride.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raunakmanna Films — Wedding Cinematography & Photography" },
      {
        name: "description",
        content:
          "Raunakmanna Films crafts heirloom wedding films and bridal photography — quiet, cinematic, deeply Indian.",
      },
      { property: "og:title", content: "Raunakmanna Films" },
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
      <a href="#top" className="flex items-baseline gap-1 leading-none">
        <span className="font-script text-4xl font-bold tracking-tight text-brand md:text-5xl">RM</span>
        <span className="font-script text-lg italic text-foreground/80 md:text-xl">flims</span>
      </a>

      <nav className="hidden md:flex items-center gap-16 lg:gap-24">
        {["Gallery", "Review", "Broucher"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            data-cursor="hover"
            className="font-script text-2xl text-foreground/85 transition-colors hover:text-brand"
          >
            {l}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-5 md:gap-7">
        <a
          href="#broucher"
          className="hidden font-script text-2xl italic text-foreground/85 transition-colors hover:text-brand md:inline-block"
        >
          Broucher
        </a>
        <a
          href="#contact"
          data-cursor="hover"
          className="font-script rounded-full bg-brand px-6 py-2 text-xl text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 md:px-7 md:text-2xl"
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
          src={heroBride}
          alt="Bride at her wedding — Raunakmanna Films"
          width={1920}
          height={1280}
          className="h-full w-full object-cover [filter:grayscale(100%)_contrast(1.05)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,oklch(0.18_0.005_60/0.35)_100%)]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="hero-breathe font-display text-[11vw] font-medium leading-[0.9] tracking-tight text-cream drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] md:text-[8.5vw]">
            <MaskReveal delay={150}>RAUNAKMANNA</MaskReveal>
          </h1>
          <div className="mt-2 flex w-full items-center justify-center gap-4 md:mt-3 md:gap-8">
            <span className="h-px w-16 bg-foreground md:w-28" />
            <span className="flims-in font-display text-[10vw] font-medium italic tracking-[0.18em] text-brand md:text-[6.5vw]">
              FLIMS
            </span>
            <span className="h-px w-16 bg-foreground md:w-28" />
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
    <section id="about" className="relative px-6 py-28 md:px-16 md:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-3">
          <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/55">— 01 / Manifesto</p>
        </Reveal>
        <div className="md:col-span-9">
          <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-7xl">
            <MaskReveal>We chase the unrehearsed —</MaskReveal>
            <br />
            <MaskReveal delay={120}>
              <span className="text-foreground/60">
                a stolen glance, an heirloom passed, the half-second before a vow.
              </span>
            </MaskReveal>
            <br />
            <MaskReveal delay={240}>
              <span className="italic font-medium text-brand">Then we cut it like cinema.</span>
            </MaskReveal>
          </h2>
          <Reveal delay={400} className="mt-12 grid grid-cols-1 gap-8 text-sm leading-relaxed text-foreground/70 md:grid-cols-2 md:text-base">
            <p>
              Raunakmanna Films is a director-led wedding & portrait studio. We treat every frame
              like a still you would frame on a wall — restrained in composition, rich in feeling.
            </p>
            <p>
              From the soft hum of haldi mornings to the cinematic still of the final pheras, we
              shoot stories that look like memory.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
const services = [
  { n: "01", title: "Wedding Films", body: "Cinema-first wedding storytelling. Documentary at heart, directed with intent.", tags: ["Feature Film", "Highlight Reel", "Stills"] },
  { n: "02", title: "Bridal Portraits", body: "Editorial-grade portraiture for brides, families and pre-wedding moments.", tags: ["Pre-wedding", "Bridal", "Portrait"] },
  { n: "03", title: "Edit & Color", body: "Retouching, grade and finishing — frame-by-frame craft that elevates the original take.", tags: ["Retouch", "Color Grade", "Beauty Edit"] },
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
            Three disciplines, one obsession with frame, light, and time.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-foreground/15 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 120}
              className="group relative flex flex-col gap-10 bg-background/70 p-8 transition-colors duration-500 hover:bg-background md:p-12"
            >
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.4em] text-foreground/50">
                <span>{s.n}</span>
                <span className="text-brand transition-transform duration-500 group-hover:translate-x-1">↗</span>
              </div>
              <h3 className="font-display text-2xl font-medium leading-tight tracking-tight md:text-3xl">{s.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/65">{s.body}</p>
              <ul className="mt-auto flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.3em] text-foreground/55">
                {s.tags.map((t) => (
                  <li key={t} className="rounded-full border border-foreground/20 px-3 py-1">{t}</li>
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
    <section id="gallery" className="relative px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 flex items-end justify-between gap-6 md:mb-20">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/55">— 03 / Gallery</p>
            <h2 className="mt-4 font-display text-5xl font-medium leading-[0.95] tracking-tight md:text-8xl">
              <MaskReveal>Selected</MaskReveal>
              <br />
              <MaskReveal delay={120}><span className="italic font-medium text-brand">work.</span></MaskReveal>
            </h2>
          </Reveal>
          <Reveal delay={200} className="hidden text-right text-xs uppercase tracking-[0.3em] text-foreground/55 md:block">
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
              <UnderlineLink href="mailto:hello@raunakmannaflims.com" className="text-brand">
                hello@raunakmannaflims.com
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

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="relative border-t border-foreground/15 px-6 py-12 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-end gap-8 text-[10px] uppercase tracking-[0.3em] text-foreground/60 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <a href="#top" className="flex items-baseline gap-1 leading-none">
            <span className="font-script text-3xl font-bold text-brand">RM</span>
            <span className="font-script text-base italic text-foreground/70">flims</span>
          </a>
          <p className="mt-3">© Raunakmanna Flims · 2025</p>
        </div>
        <div className="space-y-2">
          <p className="text-foreground/50">Social</p>
          <ul className="space-y-1">
            <li><UnderlineLink href="#" className="text-foreground">Instagram</UnderlineLink></li>
            <li><UnderlineLink href="#" className="text-foreground">YouTube</UnderlineLink></li>
            <li><UnderlineLink href="#" className="text-foreground">Vimeo</UnderlineLink></li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-foreground/50">Studio</p>
          <p className="text-foreground/85 normal-case tracking-normal">Mumbai · Delhi · Pan India</p>
        </div>
        <div className="space-y-2 text-right md:text-left">
          <p className="text-foreground/50">Index</p>
          <a href="#top" className="text-foreground">Back to top ↑</a>
        </div>
      </div>
    </footer>
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
