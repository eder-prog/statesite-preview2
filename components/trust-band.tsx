"use client";

import { HardHat, ShieldCheck, Phone, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: number;
  suffix?: string;
  active: boolean;
}

function CountUp({ target, suffix = "", active }: CountUpProps) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setValue(target);
      startedRef.current = true;
      return;
    }
    startedRef.current = true;
    const duration = 1400;
    const start = performance.now();
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    let raf = 0;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = easeOut(p);
      setValue(Math.floor(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
      else setValue(target);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}

export default function TrustBand() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-bg="dark"
      className="bg-navy text-white py-[88px] md:py-[104px] pb-24 md:pb-28 relative overflow-hidden"
    >
      <div className="trust-wedge-top" />
      <div className="trust-wedge-bottom" />
      <div className="container-x">
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-y-9 gap-x-6 lg:gap-6 items-center relative z-[1] reveal-stagger ${
            visible ? "is-visible" : ""
          }`}
        >
          {/* Years */}
          <div className="flex items-center gap-3 md:gap-[18px] text-left">
            <div className="flex-shrink-0 w-[54px] h-[54px] md:w-20 md:h-20 rounded-full bg-white/[0.06] border-2 border-orange flex items-center justify-center text-white shadow-[0_6px_20px_rgba(0,0,0,0.18)]">
              <HardHat className="w-7 h-7 md:w-9 md:h-9" strokeWidth={1.8} />
            </div>
            <div className="flex flex-col gap-[3px] min-w-0">
              <div className="text-[22px] md:text-[36px] font-extrabold text-white leading-none tracking-[-0.02em] flex items-baseline gap-[6px] flex-wrap">
                <CountUp target={20} suffix="+" active={visible} />
              </div>
              <div className="text-[10px] md:text-[13px] font-semibold tracking-[0.06em] md:tracking-[0.08em] uppercase text-white opacity-[0.92] leading-[1.3]">
                Years Of Experience
              </div>
            </div>
          </div>

          {/* Insured */}
          <div className="flex items-center gap-3 md:gap-[18px] text-left">
            <div className="flex-shrink-0 w-[54px] h-[54px] md:w-20 md:h-20 rounded-full bg-white/[0.06] border-2 border-orange flex items-center justify-center text-white shadow-[0_6px_20px_rgba(0,0,0,0.18)]">
              <ShieldCheck className="w-7 h-7 md:w-9 md:h-9" strokeWidth={1.8} />
            </div>
            <div className="flex flex-col gap-[3px] min-w-0">
              <div className="text-[22px] md:text-[36px] font-extrabold text-white leading-none tracking-[-0.02em] flex items-baseline gap-[6px] flex-wrap">
                <CountUp target={100} suffix="%" active={visible} />
              </div>
              <div className="text-[10px] md:text-[13px] font-semibold tracking-[0.06em] md:tracking-[0.08em] uppercase text-white opacity-[0.92] leading-[1.3]">
                Fully Insured &amp; Licensed
              </div>
            </div>
          </div>

          {/* 24/7 */}
          <div className="flex items-center gap-3 md:gap-[18px] text-left">
            <div className="flex-shrink-0 w-[54px] h-[54px] md:w-20 md:h-20 rounded-full bg-white/[0.06] border-2 border-orange flex items-center justify-center text-white shadow-[0_6px_20px_rgba(0,0,0,0.18)]">
              <Phone className="w-7 h-7 md:w-9 md:h-9" strokeWidth={1.8} />
            </div>
            <div className="flex flex-col gap-[3px] min-w-0">
              <div className="text-[22px] md:text-[36px] font-extrabold text-white leading-none tracking-[-0.02em] flex items-baseline gap-[6px] flex-wrap">
                24/7
              </div>
              <div className="text-[10px] md:text-[13px] font-semibold tracking-[0.06em] md:tracking-[0.08em] uppercase text-white opacity-[0.92] leading-[1.3]">
                Emergency Response
              </div>
            </div>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-3 md:gap-[18px] text-left">
            <div className="flex-shrink-0 w-[54px] h-[54px] md:w-20 md:h-20 rounded-full bg-white/[0.06] border-2 border-orange flex items-center justify-center text-white shadow-[0_6px_20px_rgba(0,0,0,0.18)]">
              <Star className="w-7 h-7 md:w-9 md:h-9 fill-current" strokeWidth={1.8} />
            </div>
            <div className="flex flex-col gap-[3px] min-w-0">
              <div className="text-[22px] md:text-[36px] font-extrabold text-white leading-none tracking-[-0.02em] flex items-baseline gap-[6px] flex-wrap">
                5.0 ★
              </div>
              <div className="text-[10px] md:text-[13px] font-semibold tracking-[0.06em] md:tracking-[0.08em] uppercase text-white opacity-[0.92] leading-[1.3]">
                5 Stars Rated
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
