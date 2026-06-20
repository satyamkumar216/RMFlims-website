import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { z } from "zod";
import logo from "@/assets/logo-removebg-preview.png";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

const packagesSearchSchema = z.object({
  service: z.string().optional(),
});

export const Route = createFileRoute("/packages")({
  validateSearch: (search) => packagesSearchSchema.parse(search),
  component: PackagesPage,
});

const serviceTabs = [
  { id: "wedding-films", label: "Wedding Films", number: "01" },
  { id: "bridal-portraits", label: "Bridal Portraits", number: "02" },
  { id: "model-photoshoot", label: "Model Photoshoot", number: "03" },
  { id: "podcast-shoot", label: "Podcast Shoot", number: "04" },
  { id: "reel-shoot", label: "Reel Shoot", number: "05" },
  { id: "edit-color", label: "Edit & Color", number: "06" },
];

const packagesData = {
  "wedding-films": [
    {
      title: "The Highlight",
      desc: "Perfect for intimate celebrations, focusing on a condensed cinematic memory.",
      features: [
        "3 to 5 Minute Cinematic Highlight Film",
        "1 Vertical Teaser optimized for Reels/Shorts",
        "Single Director-Cinematographer coverage",
        "Up to 6 hours of consecutive coverage",
        "Raw footage delivered via high-speed digital gallery"
      ],
      tagline: "Essential Cinematography"
    },
    {
      title: "The Feature",
      desc: "Our most popular offering. A comprehensive cinematic record of your story.",
      features: [
        "12 to 15 Minute Cinematic Feature Film",
        "5 Minute Cinematic Highlight Reel",
        "2 Vertical Teasers optimized for social platforms",
        "Two Director-Cinematographers coverage",
        "Aerial drone capture (subject to local regulations)",
        "Up to 10 hours of consecutive coverage per day"
      ],
      tagline: "Signature Cinema"
    },
    {
      title: "The Heirloom",
      desc: "No compromises. The ultimate multi-perspective director's cut of your heritage.",
      features: [
        "20 to 25 Minute Cinematic Documentary Film",
        "5 to 7 Minute Cinematic Highlight Reel",
        "3 Vertical Teasers & social-ready reels",
        "Full multi-cam ceremony & speeches documentation",
        "Three Cinematographers + 1 Dedicated Director",
        "Exclusive 4K Digital Master delivery",
        "Aerial drone cinematography included"
      ],
      tagline: "The Masterpiece Edit"
    }
  ],
  "bridal-portraits": [
    {
      title: "The Portrait Session",
      desc: "Editorial bridal session capturing fine details, garments, and classic poses.",
      features: [
        "3 hours of dedicated solo portrait session",
        "25 signature fully-retouched editorial frames",
        "High-resolution digital proof gallery",
        "Pre-shoot composition & lighting consultation",
        "Next-day sneak peek images"
      ],
      tagline: "Editorial Bridal"
    },
    {
      title: "The Heritage Session",
      desc: "Extended solo and family session incorporating traditional rituals and heirloom details.",
      features: [
        "6 hours of comprehensive portrait coverage",
        "60 signature fully-retouched editorial frames",
        "Premium layout design fine-art heirloom print book",
        "Custom studio and outdoor natural lighting setup",
        "Full styling & creative direction collaboration"
      ],
      tagline: "Fine Art Keepsake"
    }
  ],
  "model-photoshoot": [
    {
      title: "The Portfolio Lookbook",
      desc: "Professional agency-standard lookbook focusing on model profile and versatility.",
      features: [
        "2 hours of studio photoshoot",
        "2 distinct outfit changes / looks",
        "10 high-fashion magazine-grade retouched images",
        "Full digital gallery with raw proofs for selection",
        "Pro lighting setup (softbox, high contrast shadows)"
      ],
      tagline: "Agency Lookbook"
    },
    {
      title: "The Couture Editorial",
      desc: "High-end fashion editorial suitable for magazine entries, designers, and brands.",
      features: [
        "5 hours of indoor studio & outdoor location shoot",
        "5 distinct outfit changes / creative concepts",
        "25 magazine-grade high-fashion retouched images",
        "Full creative direction, moodboarding & posing guidance",
        "Styling & makeup artist coordination support"
      ],
      tagline: "Couture Editorial"
    }
  ],
  "podcast-shoot": [
    {
      title: "Podcast Production",
      desc: "Full multi-cam podcast capture session, tailored acoustics, and professional audio/video master.",
      features: [
        "Up to 2 Hours of studio recording session",
        "Multi-camera setup (up to 3 angles) with 4K cameras",
        "Broadcast-grade multi-track audio recording & levelling",
        "Full video edit with basic cuts, audio syncing & mastering",
        "3 high-impact social media short teasers/reels from the episode"
      ],
      tagline: "Studio Session"
    }
  ],
  "reel-shoot": [
    {
      title: "The Reel Set",
      desc: "Cinematic vertical videos designed to tell a story and capture audience attention.",
      features: [
        "3 cinematic vertical reels (15-30 seconds each)",
        "Crisp vertical format editing and sound design",
        "Color grading optimized for vertical mobile displays",
        "Directing optimized for vertical pacing and hooks",
        "Delivery in 5 business days"
      ],
      tagline: "Social Stories"
    },
    {
      title: "The Cinematic Creator Pack",
      desc: "A batch vertical cinema package for designers, influencers, and bridal labels.",
      features: [
        "8 high-end vertical cinematic reels",
        "Batch editing, trending audio mapping, sound effect layer",
        "Advanced color correction and grading to match brand palette",
        "Full day (8 hours) vertical filming coverage",
        "Hook & pacing optimization strategy collaboration"
      ],
      tagline: "Vertical Cinema Batch"
    }
  ],
  "edit-color": [
    {
      title: "Premium Color Grade",
      desc: "Transform your raw footage with our professional color grading pipeline.",
      features: [
        "Professional color correction (white balance, exposure)",
        "Signature cinema color grading & LUT application",
        "Beauty contrast matching & film grain emulation",
        "Up to 15 minutes of raw edit runtime",
        "2 rounds of grading revisions"
      ],
      tagline: "Color Finishing"
    },
    {
      title: "The Complete Master",
      desc: "Full post-production suite including beauty retouching, color grading, and sound mastering.",
      features: [
        "Frame-by-frame skin retouching & blemishes correction",
        "Signature editorial color grading & film emulation",
        "Audio clean up, mastering, and sound design enhancement",
        "Up to 30 minutes of raw video runtime",
        "Priority delivery & collaborative review cycles"
      ],
      tagline: "Directorial Finish"
    }
  ]
};

function PackagesPage() {
  const search = Route.useSearch();
  const [activeTab, setActiveTab] = useState<string>("wedding-films");

  useEffect(() => {
    if (search.service && serviceTabs.some(tab => tab.id === search.service)) {
      setActiveTab(search.service);
    }
  }, [search.service]);

  const activePackages = packagesData[activeTab as keyof typeof packagesData] || [];

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
          <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/55">— Collections</p>
          <h1 className="font-display mt-4 text-[32px] sm:text-7xl font-light tracking-[0.02em] uppercase text-foreground leading-[1.1]">
            OUR PACKAGES
          </h1>
          <p className="font-display italic lowercase text-xl sm:text-3xl text-brand mt-2">
            curated offerings & details
          </p>
        </div>

        {/* Dynamic Service Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 mb-5 border-b border-foreground/10 pb-6 md:mb-16">
          {serviceTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group flex items-center gap-3 px-4 py-2.5 min-h-[44px] rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-brand/10 text-brand font-semibold shadow-sm border border-brand/25"
                  : "text-foreground/60 hover:text-foreground hover:bg-foreground/5 border border-transparent"
              }`}
            >
              <span className={`font-mono text-xs ${activeTab === tab.id ? "text-brand" : "text-foreground/40"}`}>
                {tab.number}
              </span>
              <span className="font-display text-sm sm:text-base uppercase tracking-[0.1em]">
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {activePackages.map((pkg, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between bg-background/55 border border-foreground/10 rounded-[12px] md:rounded-2xl p-4 md:p-10 transition-all duration-500 hover:bg-background hover:border-brand/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5"
            >
              <div>
                <div className="flex items-center justify-between border-b border-foreground/10 pb-4">
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-brand/80 font-bold">
                    {pkg.tagline}
                  </span>
                  <span className="font-display italic text-lg text-foreground/45">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                
                <h3 className="font-display text-3xl font-medium tracking-tight text-foreground mt-4">
                  {pkg.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                  {pkg.desc}
                </p>

                {/* Deliverables List */}
                <ul className="mt-5 space-y-3 md:mt-8 md:space-y-4">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-xs leading-relaxed text-foreground/75">
                      <span className="text-brand text-sm leading-none select-none">✦</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquire CTA Button inside each package */}
              <div className="mt-5 pt-4 md:mt-10 md:pt-6 border-t border-foreground/10">
                <a
                  href="/#contact"
                  className="w-full justify-center group inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.25em] text-foreground hover:text-brand transition-colors duration-300 py-3 min-h-[44px] rounded-lg border border-foreground/15 hover:border-brand/40 bg-foreground/5 hover:bg-brand/5"
                >
                  <span>Book Offering</span>
                  <span className="text-brand transition-transform duration-300 group-hover:translate-x-1">⟶</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
