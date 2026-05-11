"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [onDark, setOnDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let raf: number | null = null;
    let headerHeight = 72;

    const measure = () => {
      const el = document.querySelector<HTMLElement>("[data-site-header]");
      if (el) headerHeight = el.getBoundingClientRect().height || 72;
    };

    const update = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      const probeY = headerHeight + 8;
      const samples = [
        window.innerWidth * 0.15,
        window.innerWidth * 0.5,
        window.innerWidth * 0.85,
      ];
      let darkVotes = 0;
      let total = 0;
      for (const x of samples) {
        const el = document.elementFromPoint(x, probeY);
        if (!el) continue;
        const section = (el as Element).closest("[data-bg]") as HTMLElement | null;
        total++;
        if (section && section.dataset.bg === "dark") darkVotes++;
      }
      const isDark = total === 0 ? y < 80 : darkVotes >= Math.ceil(total / 2);
      setOnDark(isDark);
      setIsScrolled(y > 80);
      raf = null;
    };

    measure();
    window.addEventListener("resize", measure, { passive: true });
    // initial run after layout
    requestAnimationFrame(update);
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const logoFilterClass = onDark
    ? "[filter:brightness(0)_invert(1)_drop-shadow(0_2px_8px_rgba(0,0,0,0.45))]"
    : "";

  return (
    <header
      data-site-header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,border-color,backdrop-filter,box-shadow] duration-300 ${
        onDark ? "header-on-dark" : "header-on-light"
      }`}
    >
      <div className="w-full px-[10px] xs:px-4 md:px-7 xl:px-10">
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-16 md:h-[72px] gap-4 md:gap-6">
          {/* Logo */}
          <Link
            href="/"
            aria-label="State General Contractors Inc — Home"
            className={`relative block h-[38px] md:h-12 ml-1 md:ml-11 flex-shrink-0 overflow-hidden transition-[width] duration-500 ease-[cubic-bezier(.4,0,.2,1)] ${
              isScrolled ? "w-[46px] md:w-[54px]" : "w-40 md:w-[230px]"
            }`}
          >
            <Image
              src="/assets/logo-full.png"
              alt="State General Contractors Inc"
              width={460}
              height={96}
              priority
              className={`absolute top-1/2 left-0 -translate-y-1/2 h-full w-auto max-w-none transition-[opacity,transform] duration-500 ease-[cubic-bezier(.4,0,.2,1)] pointer-events-none ${logoFilterClass} ${
                isScrolled
                  ? "opacity-0 translate-x-10 scale-95"
                  : "opacity-100 translate-x-0"
              }`}
            />
            <Image
              src="/assets/logo-icon.png"
              alt=""
              aria-hidden="true"
              width={108}
              height={108}
              className={`absolute top-1/2 left-0 -translate-y-1/2 h-full w-auto max-w-none transition-[opacity,transform] duration-500 ease-[cubic-bezier(.4,0,.2,1)] pointer-events-none ${logoFilterClass} ${
                isScrolled
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 -translate-x-2 scale-[.85]"
              }`}
            />
          </Link>

          {/* Nav */}
          <nav
            className={`hidden lg:flex justify-self-center items-center gap-1 text-sm font-semibold rounded-full p-[6px] border transition-colors duration-300 ${
              onDark
                ? "bg-white/[0.08] border-white/[0.12] text-white/95 backdrop-blur-[6px]"
                : "bg-white/[0.35] border-[rgba(0,62,107,0.12)] text-charcoal backdrop-blur-[8px] backdrop-saturate-[160%]"
            }`}
          >
            <a href="/#services" className={`px-[14px] py-[6px] rounded-full transition-colors ${onDark ? "hover:bg-white/[0.12] hover:text-orange" : "hover:bg-[rgba(0,62,107,0.08)] hover:text-orange"}`}>Services</a>
            <a href="/#gallery" className={`px-[14px] py-[6px] rounded-full transition-colors ${onDark ? "hover:bg-white/[0.12] hover:text-orange" : "hover:bg-[rgba(0,62,107,0.08)] hover:text-orange"}`}>Gallery</a>
            <a href="/#about" className={`px-[14px] py-[6px] rounded-full transition-colors ${onDark ? "hover:bg-white/[0.12] hover:text-orange" : "hover:bg-[rgba(0,62,107,0.08)] hover:text-orange"}`}>About</a>
            <a href="/#faq" className={`px-[14px] py-[6px] rounded-full transition-colors ${onDark ? "hover:bg-white/[0.12] hover:text-orange" : "hover:bg-[rgba(0,62,107,0.08)] hover:text-orange"}`}>FAQ</a>
            <a href="/#contact" className={`px-[14px] py-[6px] rounded-full transition-colors ${onDark ? "hover:bg-white/[0.12] hover:text-orange" : "hover:bg-[rgba(0,62,107,0.08)] hover:text-orange"}`}>Contact</a>
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-3 flex-nowrap justify-self-end">
            {/* 24/7 + phone pill — hidden under 1200px */}
            <div
              className={`hidden min-[1200px]:flex items-center gap-2 py-[6px] pl-[14px] pr-4 rounded-full border whitespace-nowrap transition-colors ${
                onDark
                  ? "bg-white/[0.08] border-white/[0.12] backdrop-blur-[6px]"
                  : "bg-white/[0.35] border-[rgba(0,62,107,0.12)] backdrop-blur-[8px] backdrop-saturate-[160%]"
              }`}
            >
              <span
                className="hidden md:inline-flex items-center gap-[6px] text-[11px] font-bold tracking-[0.06em] uppercase text-orange leading-none pr-3 border-r whitespace-nowrap"
                style={{
                  borderRightColor: onDark
                    ? "rgba(255,255,255,0.18)"
                    : "rgba(0,62,107,0.15)",
                }}
                title="24/7 Emergency Available"
                aria-label="24/7 Emergency Available"
              >
                <span className="inline-block w-[7px] h-[7px] rounded-full bg-orange animate-pulse-orange" />
                24/7
              </span>
              <a
                href="tel:+16177022062"
                className="text-orange font-bold text-[15px] md:text-base flex items-center gap-[6px] whitespace-nowrap"
              >
                (617) 702-2062
              </a>
            </div>
            {/* Request Estimate CTA */}
            <a
              href="/#estimate-form"
              className="inline-flex items-center gap-[6px] px-3 py-2 md:px-[22px] md:py-[11px] text-[12px] md:text-[15px] font-bold bg-orange text-white rounded-full no-underline tracking-[0.01em] shadow-[0_4px_14px_rgba(240,140,43,0.32)] animate-cta-bounce hover:bg-orange-hover [animation-play-state:running] hover:[animation-play-state:paused] whitespace-nowrap group"
            >
              Request Free Estimate{" "}
              <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
