"use client";

import { useEffect } from "react";

/**
 * Attaches an IntersectionObserver to all `.reveal` and `.reveal-stagger`
 * elements on the page and toggles `.is-visible` when they enter the viewport.
 * Mount once near the root of the page.
 */
export default function RevealOnScroll() {
  useEffect(() => {
    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      document
        .querySelectorAll<HTMLElement>(".reveal,.reveal-stagger")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    document
      .querySelectorAll<HTMLElement>(".reveal,.reveal-stagger")
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
