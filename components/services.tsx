import Image from "next/image";

interface Service {
  title: string;
  description: string;
  image: string;
  alt: string;
  cta: string;
  ctaHref: string;
  emergency?: boolean;
}

const services: Service[] = [
  {
    title: "Roofing",
    description:
      "Repairs, full installations, inspections, and replacements. Lifetime workmanship warranty.",
    image: "/assets/gallery/roofing/after-1.jpg",
    alt: "Roofing service",
    cta: "Get an Estimate →",
    ctaHref: "#estimate-form",
  },
  {
    title: "Siding",
    description:
      "Residential siding installation, soffit and fascia repair, and full exterior refresh.",
    image: "/assets/gallery/siding/after-1.jpg",
    alt: "Siding service",
    cta: "Get an Estimate →",
    ctaHref: "#estimate-form",
  },
  {
    title: "Decking",
    description:
      "Custom deck design and construction. Pressure-treated, composite, and natural wood.",
    image: "/assets/gallery/decking/after-1.jpg",
    alt: "Decking service",
    cta: "Get an Estimate →",
    ctaHref: "#estimate-form",
  },
  {
    title: "Remodeling",
    description:
      "Room additions, kitchens, bathrooms, and whole-home renovations.",
    image: "/assets/services/remodeling.jpg",
    alt: "Remodeling service",
    cta: "Get an Estimate →",
    ctaHref: "#estimate-form",
  },
  {
    title: "Framing",
    description:
      "New construction and remodel framing by our in-house crew. No subcontracting.",
    image: "/assets/services/framing.jpg",
    alt: "Framing service",
    cta: "Get an Estimate →",
    ctaHref: "#estimate-form",
  },
  {
    title: "Emergency Roofing",
    description:
      "Storm damage, leaks, fallen branches. Available any hour, any day across MA.",
    image: "/assets/gallery/roofing/after-2.jpg",
    alt: "Emergency roofing service",
    cta: "Call Now (617) 702-2062 →",
    ctaHref: "tel:+16177022062",
    emergency: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 xs:py-16 md:py-24">
      <div className="container-x">
        <div className="text-center mb-12 reveal">
          <h2 className="text-[26px] xs:text-[28px] md:text-[40px] font-bold mb-3">
            Complete Home Exterior &amp; General Contracting
          </h2>
          <p className="text-charcoal-soft text-[17px] m-0">
            One contractor for your entire home — roofing, siding, decking,
            remodeling, framing, and emergency repairs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-white border border-border rounded-lg overflow-hidden flex flex-col transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,62,107,0.18)] [@media(hover:none)]:hover:translate-y-0 [@media(hover:none)]:hover:shadow-[0_4px_14px_rgba(0,62,107,0.08)]"
            >
              {s.emergency && (
                <span className="absolute top-3 right-3 bg-orange text-navy text-[11px] font-extrabold py-1 px-[10px] rounded-[20px] tracking-[0.06em] z-[2] shadow-[0_2px_8px_rgba(240,140,43,0.45)]">
                  24/7 AVAILABLE
                </span>
              )}
              <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-navy to-navy-deep">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[550ms] ease-[cubic-bezier(.4,0,.2,1)] group-hover:scale-[1.06] [@media(hover:none)]:group-hover:scale-100"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 pointer-events-none transition-[background] duration-300 bg-gradient-to-b from-[rgba(0,62,107,0.15)] to-[rgba(0,62,107,0.55)] group-hover:bg-gradient-to-b group-hover:from-[rgba(245,179,57,0)] group-hover:to-[rgba(245,179,57,0.55)] [@media(hover:none)]:group-hover:from-[rgba(0,62,107,0.15)] [@media(hover:none)]:group-hover:to-[rgba(0,62,107,0.55)]"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 transition-[background] duration-300">
                <h3 className="text-[19px] md:text-[22px] font-semibold leading-[1.3] mb-2 transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-charcoal-soft text-[15px] m-0 flex-1 max-h-0 opacity-0 overflow-hidden transition-[max-height,opacity,margin,color] duration-300 group-hover:max-h-[200px] group-hover:opacity-100 group-hover:my-0 group-hover:mb-4 group-hover:text-navy [@media(hover:none)]:max-h-[200px] [@media(hover:none)]:opacity-100 [@media(hover:none)]:mb-4">
                  {s.description}
                </p>
                <a
                  href={s.ctaHref}
                  className="text-orange font-bold text-[15px] mt-auto inline-block transition-colors duration-300 group-hover:text-navy [@media(hover:none)]:group-hover:text-orange"
                >
                  {s.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
