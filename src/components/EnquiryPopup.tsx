import React, { useEffect, useState } from "react";

export default function EnquiryPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(
    typeof window !== "undefined" && sessionStorage.getItem("rm_popup_dismissed") === "true"
  );

  // Show after scrolling past 55% of page height
  useEffect(() => {
    if (isDismissed) return;
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      if (scrollPos / totalHeight > 0.55) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const closePopup = () => {
    setIsVisible(false);
    setIsDismissed(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("rm_popup_dismissed", "true");
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isDismissed) return null;

  return (
    <div
      className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"} fixed bottom-4 left-4 right-4 w-[calc(100%-32px)] sm:bottom-6 sm:right-6 sm:left-auto sm:w-72 bg-[#F5F0E8] border border-[rgba(139,26,26,0.20)] rounded-[4px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)] transition-opacity transform duration-[350ms] ease-out z-50`}
    >
      {/* Close button */}
      <button
        onClick={closePopup}
        className="absolute top-2 right-2 text-[16px] text-[#999] hover:text-[#666] leading-none"
        aria-label="Close"
      >
        ×
      </button>

      {/* Eyebrow label */}
      <div className="text-[10px] uppercase tracking-[0.15em] text-[#8B1A1A] mb-2 font-medium">
        LIMITED DATES AVAILABLE
      </div>

      {/* Heading */}
      <h3 className="text-[18px] font-serif font-normal text-[#1A1A1A] leading-[1.4]">
        Booking for 2025–26 season
      </h3>

      {/* Subtext */}
      <p className="mt-2 text-[13px] text-[#666] leading-[1.6]">
        Your wedding deserves to be remembered exactly as it felt. Let's talk before your date is gone.
      </p>

      {/* CTA button */}
      <button
        onClick={scrollToContact}
        className="mt-4 w-full bg-[#8B1A1A] text-white text-[12px] uppercase tracking-[0.10em] py-3 rounded-[2px] hover:bg-[#6B1414] transition-colors"
      >
        Enquire Now
      </button>
    </div>
  );
}
