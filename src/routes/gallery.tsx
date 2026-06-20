import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import logo from "@/assets/logo-removebg-preview.png";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

// Import all portfolio images
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import heroBride from "@/assets/hero-bride.jpg";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

const galleryItems = [
  { id: 1, src: p1, title: "Silver Halide", category: "Editorial", year: "2025", aspect: "aspect-[4/5] md:col-span-1" },
  { id: 2, src: p2, title: "Anika & Rohan", category: "Weddings", year: "2025", aspect: "aspect-[16/10] md:col-span-2" },
  { id: 3, src: p3, title: "Behind the Set", category: "Editorial", year: "2024", aspect: "aspect-square md:col-span-1" },
  { id: 4, src: p4, title: "Crimson Veil", category: "Bridal", year: "2025", aspect: "aspect-[3/4] md:col-span-1" },
  { id: 5, src: p5, title: "Weightless", category: "Editorial", year: "2024", aspect: "aspect-[16/10] md:col-span-2" },
  { id: 6, src: p6, title: "Last Light", category: "Weddings", year: "2024", aspect: "aspect-[4/5] md:col-span-1" },
  { id: 7, src: heroBride, title: "Golden Hour Bride", category: "Bridal", year: "2025", aspect: "aspect-[3/4] md:col-span-1" },
];

function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  useEffect(() => {
    if (activeIdx === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIdx(null);
      if (e.key === "ArrowLeft") {
        setActiveIdx((prev) => (prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length));
      }
      if (e.key === "ArrowRight") {
        setActiveIdx((prev) => (prev === null ? null : (prev + 1) % filteredItems.length));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIdx, filteredItems]);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground paper-grain px-4 py-6 md:px-12 md:py-12 flex flex-col">
      <CustomCursor />
      {/* Header */}
      <header className="flex items-center justify-between border-b border-foreground/10 pb-6 md:pb-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Rounakmanna Films Logo" className="h-16 md:h-20 w-auto object-contain" />
        </Link>
        <Link 
          to="/" 
          className="font-display text-sm sm:text-base uppercase tracking-[0.25em] text-foreground/80 hover:text-brand transition-colors duration-300 border-b border-transparent hover:border-brand pb-0.5 min-h-[44px] flex items-center"
        >
          ← Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full mt-12 md:mt-20">
        <div className="text-center max-w-2xl mx-auto mb-5 md:mb-24">
          <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/55">— Archive</p>
          <h1 className="font-display mt-4 text-[32px] sm:text-7xl font-light tracking-[0.02em] uppercase text-foreground leading-[1.1]">
            THE GALLERY
          </h1>
          <p className="font-display italic lowercase text-xl sm:text-3xl text-brand mt-2">
            selected frames & moments
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-8 mb-5 md:mb-16">
          {["All", "Weddings", "Bridal", "Editorial"].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setActiveIdx(null);
              }}
              className={`font-display text-sm sm:text-base uppercase tracking-[0.2em] px-4 py-2 min-h-[44px] flex items-center justify-center border-b-2 transition-all duration-300 ${
                filter === cat 
                  ? "border-brand text-brand font-semibold" 
                  : "border-transparent text-foreground/60 hover:text-foreground hover:border-foreground/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8 auto-rows-fr">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveIdx(index)}
              className={`group relative overflow-hidden bg-charcoal rounded-[12px] md:rounded-2xl cursor-pointer ${item.aspect} shadow-md transition-all duration-700 hover:shadow-xl`}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-6" />
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
                <span className="text-[10px] uppercase tracking-[0.1em] md:tracking-[0.3em] text-white/70 block whitespace-nowrap">{item.category} · {item.year}</span>
                <h3 className="font-display text-[13px] md:text-lg sm:text-xl font-medium text-white mt-1 break-words leading-tight">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox Modal */}
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
              setActiveIdx((prev) => (prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length));
            }}
            className="absolute left-4 sm:left-6 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:scale-105"
          >
            ←
          </button>

          {/* Next button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx((prev) => (prev === null ? null : (prev + 1) % filteredItems.length));
            }}
            className="absolute right-4 sm:right-6 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:scale-105"
          >
            →
          </button>

          {/* Image and Meta */}
          <div 
            className="relative max-h-[85vh] max-w-[90vw] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={filteredItems[activeIdx].src} 
              alt={filteredItems[activeIdx].title} 
              className="max-h-[72vh] sm:max-h-[75vh] max-w-full object-contain rounded-lg border border-white/15 animate-[zoomIn_0.4s_cubic-bezier(0.22,1,0.36,1)] shadow-2xl"
            />
            <div className="mt-6 text-center text-white">
              <p className="font-display text-sm uppercase tracking-[0.25em] text-white/60">
                {filteredItems[activeIdx].category} · {filteredItems[activeIdx].year}
              </p>
              <h3 className="font-display mt-2 text-2xl font-medium tracking-wide">
                {filteredItems[activeIdx].title}
              </h3>
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
    </div>
  );
}
