import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-removebg-preview.png";
import { UnderlineLink } from "@/components/UnderlineLink";

export function Footer() {
  return (
    <footer className="relative border-t border-foreground/10 px-4 py-12 md:px-12 lg:px-16 mt-12 md:mt-20 bg-background paper-grain">
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-8 md:gap-8 items-start">
        {/* Column 1: Logo & Brand Statement */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left col-span-2 md:col-span-2">
          <Link to="/" className="inline-block transition-transform duration-300 hover:scale-[1.02]" data-cursor="hover">
            <img 
              src={logo} 
              alt="Rounakmanna Films Logo" 
              className="h-24 md:h-28 w-auto object-contain mx-auto md:mx-0" 
            />
          </Link>
          <p className="mt-6 text-sm font-display italic text-foreground/75 leading-relaxed max-w-xs normal-case tracking-normal mx-auto md:mx-0">
            Preserving the quiet, powerful heritage of Bengali weddings through timeless heirloom films and bridal photography.
          </p>
        </div>

        {/* Column 2: Connect / Social */}
        <div className="flex flex-col items-start col-start-1 col-span-1 md:col-start-auto md:col-span-1">
          <h4 className="text-brand font-semibold text-[11px] uppercase tracking-[0.2em] mb-4 md:mb-6">
            Connect
          </h4>
          <ul className="space-y-2 md:space-y-3">
            <li>
              <UnderlineLink 
                href="https://www.instagram.com/rounakmannafilms?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[15px] md:text-[13px] tracking-wide text-foreground/80 hover:text-brand leading-[1.6]"
                data-cursor="hover"
              >
                Instagram
              </UnderlineLink>
            </li>
            <li>
              <UnderlineLink 
                href="#" 
                className="text-[15px] md:text-[13px] tracking-wide text-foreground/80 hover:text-brand leading-[1.6]"
                data-cursor="hover"
              >
                YouTube
              </UnderlineLink>
            </li>
            <li>
              <UnderlineLink 
                href="#" 
                className="text-[15px] md:text-[13px] tracking-wide text-foreground/80 hover:text-brand leading-[1.6]"
                data-cursor="hover"
              >
                Vimeo
              </UnderlineLink>
            </li>
          </ul>
        </div>

        {/* Column 3: Studio / Presence */}
        <div className="flex flex-col items-start col-start-1 col-span-1 md:col-start-auto md:col-span-1 row-start-3 md:row-start-auto">
          <h4 className="text-brand font-semibold text-[11px] uppercase tracking-[0.2em] mb-4 md:mb-6">
            Studio
          </h4>
          <ul className="space-y-2 md:space-y-3 text-[15px] md:text-[13px] tracking-wide text-foreground/80 normal-case">
            <li>
              <UnderlineLink 
                href="https://maps.google.com/?q=Bargachia,+Howrah,+West+Bengal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[15px] md:text-[13px] font-medium text-foreground/90 hover:text-brand leading-[1.6]"
                data-cursor="hover"
              >
                Howrah, Bargachia
              </UnderlineLink>
            </li>
          </ul>
        </div>

        {/* Column 4: Explore / Index */}
        <div className="flex flex-col items-start col-start-2 col-span-1 md:col-start-auto md:col-span-1 row-start-2 md:row-start-auto row-span-2 md:row-span-1">
          <h4 className="text-brand font-semibold text-[11px] uppercase tracking-[0.2em] mb-4 md:mb-6">
            Index
          </h4>
          <ul className="space-y-2 md:space-y-3">
            <li>
              <Link 
                to="/" 
                className="text-[15px] md:text-[13px] tracking-wide text-foreground/85 hover:text-brand transition-colors duration-300 block leading-[1.6]"
                data-cursor="hover"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/gallery" 
                className="text-[15px] md:text-[13px] tracking-wide text-foreground/85 hover:text-brand transition-colors duration-300 block leading-[1.6]"
                data-cursor="hover"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link 
                to="/packages" 
                className="text-[15px] md:text-[13px] tracking-wide text-foreground/85 hover:text-brand transition-colors duration-300 block leading-[1.6]"
                data-cursor="hover"
              >
                Packages
              </Link>
            </li>
            <li>
              <a 
                href="#top" 
                className="text-[15px] md:text-[13px] tracking-wide text-foreground/85 hover:text-brand transition-colors duration-300 inline-flex items-center gap-1 leading-[1.6]"
                data-cursor="hover"
              >
                Back to Top <span className="text-brand text-xs">↑</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] tracking-wider text-foreground/50 text-center md:text-left">
        <p className="normal-case">
          © {new Date().getFullYear()} Rounakmanna Films. All Rights Reserved.
        </p>
        <div className="flex items-center justify-center md:justify-end gap-2">
          <span className="font-display italic text-foreground/60 normal-case text-[11px] md:text-xs">
            Cream, ink, and a single thread of red.
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
        </div>
      </div>
    </footer>
  );
}
