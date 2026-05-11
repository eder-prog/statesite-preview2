export default function Hero() {
  return (
    <section
      data-bg="dark"
      className="relative text-white py-[108px] pb-20 md:pt-[180px] md:pb-[160px] min-h-[520px] md:min-h-[680px] overflow-hidden bg-[#08243D]"
    >
      <div className="hero-bg-photo" />
      <div className="hero-bg-gradient" />
      <div className="container-x relative z-[3]">
        <div className="relative max-w-[680px] text-left">
          <h1 className="text-[30px] xs:text-[34px] md:text-[56px] font-extrabold leading-[1.1] tracking-[-0.02em] mb-5">
            Trusted Massachusetts Roofing &amp; General Contracting. Built local, since 2006.
          </h1>
          <p className="text-[15px] xs:text-base md:text-xl font-normal opacity-[0.92] mb-6 md:mb-8 leading-[1.5]">
            Family-operated. Fully licensed and insured. Serving every city across
            Massachusetts — from roofing and siding to remodeling, framing, and 24/7
            emergency repairs. Response within 5 minutes.
          </p>
          <div className="flex flex-col items-stretch sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-[14px] max-w-full">
            <a
              href="#estimate-form"
              className="inline-flex items-center justify-center gap-2 font-semibold text-[17px] px-[26px] py-[14px] md:px-8 md:py-4 rounded-lg bg-orange text-white shadow-[0_4px_14px_rgba(240,140,43,0.32)] animate-cta-bounce hover:bg-orange-hover hover:[animation-play-state:paused] hover:-translate-y-[2px] hover:scale-[1.02] transition-all duration-200 whitespace-nowrap sm:flex-[0_1_auto] sm:whitespace-nowrap"
            >
              Request a Free Estimate →
            </a>
            <a
              href="tel:+16177022062"
              className="inline-flex items-center justify-center gap-2 font-semibold text-[17px] px-[26px] py-[14px] md:px-8 md:py-4 rounded-lg bg-white/10 text-white border-[1.5px] border-white/[0.32] backdrop-blur-[10px] backdrop-saturate-[140%] shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:bg-white/[0.18] hover:border-white/[0.55] hover:shadow-[0_6px_22px_rgba(0,0,0,0.18)] transition-all duration-200 whitespace-nowrap sm:flex-[0_1_auto] sm:whitespace-nowrap"
            >
              Or Call (617) 702-2062
            </a>
          </div>
          <div className="mt-7 text-[13px] font-medium tracking-[0.06em] uppercase opacity-[0.85]">
            Licensed <span className="mx-2 opacity-50">·</span> Insured{" "}
            <span className="mx-2 opacity-50">·</span> 20+ Years{" "}
            <span className="mx-2 opacity-50">·</span> Free Estimates
          </div>
        </div>
      </div>
    </section>
  );
}
