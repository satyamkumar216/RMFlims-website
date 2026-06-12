import { useEffect, useState } from "react";

const links = [
  { label: "Index", href: "#top" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function MenuOverlay() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      {/* Top bar */}
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 md:px-10">
        <a
          href="#top"
          className="text-[11px] uppercase tracking-[0.3em] text-foreground/80 hover:text-foreground"
        >
          RM — Films
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="group relative flex h-10 w-10 items-center justify-center"
        >
          <span
            className={`absolute h-px w-7 bg-foreground transition-transform duration-500 ${
              open ? "translate-y-0 rotate-45" : "-translate-y-[5px]"
            }`}
          />
          <span
            className={`absolute h-px w-7 bg-foreground transition-transform duration-500 ${
              open ? "translate-y-0 -rotate-45" : "translate-y-[5px]"
            }`}
          />
        </button>
      </header>

      {/* Full screen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-[clip-path] duration-[900ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
          open
            ? "[clip-path:circle(150%_at_calc(100%-2.5rem)_2.5rem)]"
            : "[clip-path:circle(0%_at_calc(100%-2.5rem)_2.5rem)]"
        }`}
      >
        <nav className="flex h-full w-full flex-col justify-between px-6 pt-28 pb-10 md:px-16 md:pt-32">
          <ul className="flex flex-col gap-3 md:gap-5">
            {links.map((l, i) => (
              <li key={l.href} className="mask-line">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ animationDelay: `${0.1 + i * 0.08}s` }}
                  className={`block text-[14vw] font-semibold leading-[0.95] tracking-tight text-foreground md:text-[8vw] ${
                    open ? "menu-item-inner menu-item-inner-in" : "menu-item-inner"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-6 text-xs uppercase tracking-[0.25em] text-muted-foreground md:flex-row md:items-end md:justify-between">
            <div className="space-y-1">
              <p className="text-foreground/50">Studio</p>
              <a 
                href="https://maps.google.com/?q=Bargachia,+Howrah,+West+Bengal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground hover:text-brand transition-colors duration-300 normal-case tracking-normal font-medium block mt-1"
                data-cursor="hover"
              >
                Howrah, Bargachia
              </a>
            </div>
            <div className="space-y-1">
              <p className="text-foreground/50">Get in touch</p>
              <a href="mailto:hello@rounakmanna.films" className="text-foreground hover:opacity-70">
                hello@rounakmanna.films
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
