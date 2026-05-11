interface Testimonial {
  quote: string;
  initials: string;
  name: string;
  place: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "\"State did our roof replacement in November. Crew was professional, finished on schedule, cleaned up perfectly. Best contractor experience we've had.\"",
    initials: "SK",
    name: "Sarah K.",
    place: "Quincy, MA — Roof Replacement",
  },
  {
    quote:
      "\"Called them at 11pm during a Nor'easter with a leak. Crew was on the roof by 7am. Saved our ceiling.\"",
    initials: "MR",
    name: "Mike R.",
    place: "Worcester, MA — Emergency Repair",
  },
  {
    quote:
      "\"Hired State for siding plus a deck. Quote was the most transparent we got. Work was excellent. Already recommended to two neighbors.\"",
    initials: "JL",
    name: "Jennifer L.",
    place: "Newton, MA — Siding + Deck",
  },
  {
    quote:
      "\"Kitchen remodel came in on budget and on schedule. Communication was excellent — daily updates from the project manager.\"",
    initials: "DT",
    name: "David T.",
    place: "Cambridge, MA — Kitchen Remodel",
  },
  {
    quote:
      "\"Got quotes from three contractors. State explained everything clearly and didn't oversell. Quality of work matched what they promised.\"",
    initials: "PM",
    name: "Patricia M.",
    place: "Brockton, MA — New Siding",
  },
  {
    quote:
      "\"Ice dam damage caused a leak last winter. State handled the insurance claim documentation and replaced the roof. Smooth from start to finish.\"",
    initials: "RC",
    name: "Robert C.",
    place: "Lowell, MA — Roof + Claim",
  },
  {
    quote:
      "\"Built our composite deck in two weeks. Crew was respectful of our yard and pets. Already booked them for next year's bathroom remodel.\"",
    initials: "AN",
    name: "Amanda N.",
    place: "Framingham, MA — Composite Deck",
  },
  {
    quote:
      "\"Twenty years in this house and finally a contractor who actually shows up when they say they will. Honest pricing, no surprises.\"",
    initials: "JF",
    name: "James F.",
    place: "Lynn, MA — Full Exterior",
  },
];

function Card({
  t,
  ariaHidden = false,
}: {
  t: Testimonial;
  ariaHidden?: boolean;
}) {
  return (
    <div
      {...(ariaHidden ? { "aria-hidden": "true" } : {})}
      className="bg-white p-[22px] xs:p-6 md:p-7 rounded-lg border border-border min-w-[280px] max-w-[280px] xs:min-w-[320px] xs:max-w-[320px] md:min-w-[380px] md:max-w-[380px] flex-shrink-0 shadow-[0_4px_16px_rgba(0,62,107,0.06)]"
    >
      <div className="text-orange text-[18px] tracking-[2px] mb-3">★★★★★</div>
      <p className="text-[15px] text-charcoal m-0 mb-5 leading-[1.55] italic min-h-[90px]">
        {t.quote}
      </p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy to-navy-deep text-white flex items-center justify-center font-bold text-base flex-shrink-0">
          {t.initials}
        </div>
        <div className="text-[13px]">
          <div className="font-bold text-charcoal">{t.name}</div>
          <div className="text-charcoal-soft mt-[2px]">{t.place}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      data-bg="light"
      className="bg-offwhite overflow-hidden py-12 xs:py-16 md:py-24"
    >
      <div className="container-x">
        <div className="text-center mb-12 reveal">
          <h2 className="text-[26px] xs:text-[28px] md:text-[40px] font-bold mb-3">
            What Massachusetts Homeowners Say
          </h2>
          <p className="text-charcoal-soft text-[17px] m-0">
            Real reviews from real projects.{" "}
            <span className="inline-block bg-[rgba(232,118,44,0.12)] text-orange text-[11px] font-semibold py-[2px] px-2 rounded-[4px] tracking-[0.04em] ml-2 uppercase">
              data-pending: real testimonials
            </span>
          </p>
        </div>
        <div className="testimonials-mask overflow-hidden relative mb-12 group">
          <div className="flex gap-6 w-max animate-scroll-left group-hover:[animation-play-state:paused]">
            {testimonials.map((t, i) => (
              <Card key={`a-${i}`} t={t} />
            ))}
            {/* Duplicated for seamless infinite scroll */}
            {testimonials.map((t, i) => (
              <Card key={`b-${i}`} t={t} ariaHidden />
            ))}
          </div>
        </div>
        <p className="text-center text-[12px] text-charcoal-soft -mt-8 mb-8 tracking-[0.04em] uppercase">
          Hover to pause · Reviews are placeholder — data-pending real testimonials
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 opacity-70">
          {[
            "BBB A+ — pending",
            "Insurance Carrier — pending",
            "GAF Cert — pending",
            "Google Reviews — pending",
            "Angi — pending",
          ].map((logo) => (
            <div
              key={logo}
              className="h-10 px-4 bg-white border border-border rounded-[6px] flex items-center text-[12px] font-semibold text-charcoal-soft tracking-[0.04em]"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
