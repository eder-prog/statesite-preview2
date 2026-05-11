"use client";

import { useState } from "react";

interface QA {
  q: string;
  a: string;
}

const faqs: QA[] = [
  {
    q: "How do free estimates work?",
    a: "We respond within 5 minutes of your request, then schedule an on-site visit and provide a written estimate covering scope, materials, timeline, and warranty. No deposit required to receive your estimate.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. We hold Massachusetts HIC license #XXXXXXX and carry full general liability and workers' compensation insurance through [Carrier Name].",
  },
  {
    q: "What's your warranty?",
    a: "Materials are covered by manufacturer warranties (up to 50 years for premium roofing). Our workmanship carries a lifetime warranty as long as you own the home.",
  },
  {
    q: "How long does a typical roof replacement take?",
    a: "Most residential roof replacements take 1–3 days depending on size, complexity, and weather. We provide an exact timeline before work begins.",
  },
  {
    q: "Do you help with insurance claims?",
    a: "Yes. For storm damage (Nor'easters, hail, ice dams), we provide documentation and work directly with your insurance adjuster to streamline the claim.",
  },
  {
    q: "How quickly can you respond to emergencies?",
    a: "For 24/7 emergencies (active leaks, storm damage, fallen branches), we aim to be on-site within 4–8 hours, often the same day.",
  },
  {
    q: "What areas of Massachusetts do you serve?",
    a: "All of Massachusetts — including Boston, Worcester, Springfield, Cambridge, Lowell, Brockton, Quincy, Lynn, New Bedford, Newton, Somerville, Framingham, and every town in between.",
  },
  {
    q: "How does pricing work?",
    a: "Free estimates are written and binding. We don't charge hidden fees, and we don't ask for full payment upfront. Most projects use a milestone payment structure.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-offwhite py-12 xs:py-16 md:py-24">
      <div className="container-x max-w-[1200px]">
        <div className="text-center mb-12 reveal">
          <h2 className="text-[26px] xs:text-[28px] md:text-[40px] font-bold mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-charcoal-soft text-[17px] m-0">
            Not finding the answer? Call us anytime at{" "}
            <a
              href="tel:+16177022062"
              className="text-orange font-semibold"
            >
              (617) 702-2062
            </a>
            .
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-y-4 md:gap-x-6 content-start reveal-stagger">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="bg-white border border-border rounded p-5 px-6"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex justify-between items-center gap-4 cursor-pointer font-semibold text-[17px] text-navy text-left"
                >
                  <span>{f.q}</span>
                  <span
                    aria-hidden
                    className="text-[22px] font-normal text-orange flex-shrink-0"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-3 text-charcoal-soft text-[15px] leading-[1.6]">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
