"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

type Category = "roofing" | "siding" | "decking" | "stairs";
type Filter = "all" | Category;

interface GalleryItem {
  category: Category;
  before: string;
  after: string;
  title: string;
  desc: string;
}

const items: GalleryItem[] = [
  // Roofing (2)
  { category: "roofing", before: "/assets/gallery/roofing/before-1.jpg", after: "/assets/gallery/roofing/after-1.jpg", title: "Roofing", desc: "Roof replacement, MA" },
  { category: "roofing", before: "/assets/gallery/roofing/before-2.jpg", after: "/assets/gallery/roofing/after-2.jpg", title: "Roofing", desc: "Full roof installation, MA" },
  // Siding (5)
  { category: "siding", before: "/assets/gallery/siding/before-1.jpg", after: "/assets/gallery/siding/after-1.jpg", title: "Siding", desc: "Exterior siding refresh, MA" },
  { category: "siding", before: "/assets/gallery/siding/before-2.jpg", after: "/assets/gallery/siding/after-2.jpg", title: "Siding", desc: "Full siding replacement, MA" },
  { category: "siding", before: "/assets/gallery/siding/before-3.jpg", after: "/assets/gallery/siding/after-3.jpg", title: "Siding", desc: "Residential siding, MA" },
  { category: "siding", before: "/assets/gallery/siding/before-4.jpeg", after: "/assets/gallery/siding/after-4.jpeg", title: "Siding", desc: "Exterior renovation, MA" },
  { category: "siding", before: "/assets/gallery/siding/before-5.jpg", after: "/assets/gallery/siding/after-5.jpg", title: "Siding", desc: "Soffit + fascia refresh, MA" },
  // Decking (3)
  { category: "decking", before: "/assets/gallery/decking/before-1.jpg", after: "/assets/gallery/decking/after-1.jpg", title: "Decking", desc: "Custom deck build, MA" },
  { category: "decking", before: "/assets/gallery/decking/before-2.jpg", after: "/assets/gallery/decking/after-2.jpg", title: "Decking", desc: "Deck rebuild, MA" },
  { category: "decking", before: "/assets/gallery/decking/before-3.jpg", after: "/assets/gallery/decking/after-3.jpg", title: "Decking", desc: "Composite decking, MA" },
  // Stairs (1)
  { category: "stairs", before: "/assets/gallery/stairs/before-1.jpg", after: "/assets/gallery/stairs/after-1.jpg", title: "Stairs", desc: "Custom stair installation, MA" },
];

const filterTabs: { key: Filter; label: string }[] = [
  { key: "all", label: "All (11)" },
  { key: "roofing", label: "Roofing (2)" },
  { key: "siding", label: "Siding (5)" },
  { key: "decking", label: "Decking (3)" },
  { key: "stairs", label: "Stairs (1)" },
];

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visibleItems = useMemo(
    () => (filter === "all" ? items : items.filter((it) => it.category === filter)),
    [filter]
  );

  const close = useCallback(() => setOpenIndex(null), []);

  const next = useCallback(() => {
    setOpenIndex((idx) => {
      if (idx === null) return idx;
      return (idx + 1) % visibleItems.length;
    });
  }, [visibleItems.length]);

  const prev = useCallback(() => {
    setOpenIndex((idx) => {
      if (idx === null) return idx;
      return (idx - 1 + visibleItems.length) % visibleItems.length;
    });
  }, [visibleItems.length]);

  // Scroll lock + keyboard
  useEffect(() => {
    if (openIndex === null) {
      document.body.classList.remove("lightbox-active");
      return;
    }
    document.body.classList.add("lightbox-active");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("lightbox-active");
    };
  }, [openIndex, close, prev, next]);

  // Clamp openIndex when filter changes
  useEffect(() => {
    if (openIndex !== null && openIndex >= visibleItems.length) {
      setOpenIndex(null);
    }
  }, [visibleItems.length, openIndex]);

  const openItem = openIndex !== null ? visibleItems[openIndex] : null;

  return (
    <section id="gallery" className="bg-offwhite py-12 xs:py-16 md:py-24">
      <div className="container-x">
        <div className="text-center mb-12 reveal">
          <h2 className="text-[26px] xs:text-[28px] md:text-[40px] font-bold mb-3">
            Our Recent Work Across Massachusetts
          </h2>
          <p className="text-charcoal-soft text-[17px] m-0">
            Before/after photos from real projects. Filter by service.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {filterTabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setFilter(t.key)}
              className={`px-[18px] py-2 rounded-3xl border text-[14px] font-medium cursor-pointer transition-colors ${
                filter === t.key
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-charcoal border-border hover:bg-offwhite"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 reveal-stagger">
          {visibleItems.map((it, idx) => (
            <button
              key={`${it.category}-${idx}-${it.before}`}
              type="button"
              onClick={() => setOpenIndex(idx)}
              className="group relative aspect-[4/3] bg-[#cfd8e3] rounded overflow-hidden cursor-pointer transition-[transform,box-shadow] duration-300 shadow-[0_4px_14px_rgba(0,62,107,0.08)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_12px_28px_rgba(0,62,107,0.18)] text-left focus:outline-none focus:ring-2 focus:ring-orange"
            >
              <Image
                src={it.before}
                alt={`${it.title} project — before`}
                fill
                loading="lazy"
                sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
                className="object-cover transition-opacity duration-[550ms] ease-[cubic-bezier(.4,0,.2,1)] group-hover:opacity-0 [@media(hover:none)]:opacity-0"
              />
              <Image
                src={it.after}
                alt={`${it.title} project — after`}
                fill
                loading="lazy"
                sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
                className="object-cover opacity-0 transition-opacity duration-[550ms] ease-[cubic-bezier(.4,0,.2,1)] group-hover:opacity-100 [@media(hover:none)]:opacity-100"
              />
              {/* BA badge */}
              <span className="absolute top-[10px] left-[10px] bg-white/95 text-navy text-[10px] font-extrabold py-[5px] px-[9px] rounded-[4px] tracking-[0.08em] z-[3] flex items-center gap-[6px] transition-[background,color] duration-300 group-hover:bg-orange group-hover:text-white [@media(hover:none)]:bg-orange [@media(hover:none)]:text-white">
                <span className="block [@media(hover:none)]:hidden">
                  <span className="inline group-hover:hidden">BEFORE</span>
                  <span className="hidden group-hover:inline">AFTER</span>
                </span>
                <span className="hidden [@media(hover:none)]:inline">AFTER</span>
                <span
                  aria-hidden
                  className="w-[14px] h-px bg-charcoal-soft inline-block transition-colors duration-300 group-hover:bg-white"
                />
              </span>
              {/* Hover hint */}
              <span className="absolute top-[10px] right-[10px] bg-[rgba(0,42,74,0.7)] text-white text-[10px] font-semibold py-[5px] px-2 rounded-[4px] tracking-[0.04em] z-[3] opacity-100 group-hover:opacity-0 transition-opacity duration-300 backdrop-blur-[4px]">
                Tap to compare
              </span>
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 py-[14px] pb-3 px-3 bg-gradient-to-t from-[rgba(0,42,74,0.92)] to-transparent text-white text-[13px] font-semibold leading-[1.35] z-[2]">
                <strong className="block font-bold text-[14px] mb-[2px]">
                  {it.title}
                </strong>
                {it.desc}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {openItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-caption"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[rgba(2,15,30,0.78)] backdrop-blur-[16px] backdrop-saturate-[140%] opacity-100"
        >
          <button
            type="button"
            aria-label="Close lightbox"
            onClick={close}
            className="fixed top-6 right-6 w-12 h-12 rounded-full bg-white/[0.12] backdrop-blur-[10px] border border-white/20 text-white text-[24px] font-light cursor-pointer flex items-center justify-center transition-[background,transform] duration-200 hover:bg-white/[0.22] hover:scale-[1.08] z-[102]"
          >
            ×
          </button>
          <button
            type="button"
            aria-label="Previous project"
            onClick={prev}
            className="fixed top-1/2 left-6 -translate-y-1/2 w-12 h-12 rounded-full bg-white/[0.12] backdrop-blur-[10px] border border-white/20 text-white text-[22px] font-light cursor-pointer flex items-center justify-center transition-[background] duration-200 hover:bg-white/[0.22] z-[102]"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next project"
            onClick={next}
            className="fixed top-1/2 right-6 -translate-y-1/2 w-12 h-12 rounded-full bg-white/[0.12] backdrop-blur-[10px] border border-white/20 text-white text-[22px] font-light cursor-pointer flex items-center justify-center transition-[background] duration-200 hover:bg-white/[0.22] z-[102]"
          >
            →
          </button>
          <div className="relative max-w-[1280px] w-full max-h-[calc(100vh-100px)] flex flex-col gap-[14px] items-center z-[101]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-[18px] w-full max-h-[calc(100vh-200px)]">
              <div className="relative bg-black/40 rounded-lg overflow-hidden aspect-[4/3] shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                <span className="absolute top-[14px] left-[14px] bg-white/95 text-navy text-[11px] font-extrabold py-[6px] px-3 rounded-[4px] tracking-[0.08em] z-[2]">
                  BEFORE
                </span>
                <Image
                  src={openItem.before}
                  alt={`${openItem.title} — before`}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative bg-black/40 rounded-lg overflow-hidden aspect-[4/3] shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                <span className="absolute top-[14px] left-[14px] bg-orange text-white text-[11px] font-extrabold py-[6px] px-3 rounded-[4px] tracking-[0.08em] z-[2]">
                  AFTER
                </span>
                <Image
                  src={openItem.after}
                  alt={`${openItem.title} — after`}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div
              id="lightbox-caption"
              className="text-white text-center text-[15px] font-medium flex items-center gap-[14px] justify-center flex-wrap"
            >
              <strong className="font-bold tracking-[0.04em] uppercase text-[12px] text-orange py-1 px-[10px] bg-[rgba(240,140,43,0.15)] rounded-[4px] border border-[rgba(240,140,43,0.3)]">
                {openItem.title}
              </strong>
              <span>{openItem.desc}</span>
              <span className="text-white/60 text-[12px] tracking-[0.04em]">
                {(openIndex ?? 0) + 1} / {visibleItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
