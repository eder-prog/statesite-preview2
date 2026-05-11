export default function AboutProcess() {
  return (
    <section id="about" className="py-12 xs:py-16 md:py-24">
      <div className="container-x flex flex-col gap-10 md:gap-16">
        {/* About top */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-6 md:gap-14 items-center reveal-stagger">
          <div>
            <h2 className="text-[26px] xs:text-[28px] md:text-[40px] font-bold mb-5">
              Local Massachusetts Contractor Since 2006
            </h2>
            <p className="text-charcoal-soft m-0 mb-4 text-base">
              State Roofing &amp; Carpentry is a family-operated general contractor
              based in Massachusetts. For over two decades we&apos;ve helped MA
              homeowners protect, repair, and improve their homes — from emergency
              storm damage to full kitchen remodels.
            </p>
            <p className="text-charcoal-soft m-0 mb-4 text-base">
              We don&apos;t subcontract. Our in-house crew handles every project,
              fully insured and fully accountable from estimate to final walkthrough.
            </p>
            <ul className="list-none p-0 mt-3 flex flex-col gap-2 text-[15px] text-charcoal">
              <li>
                <span className="text-orange font-extrabold">✓</span> Family-operated
                since 2006
              </li>
              <li>
                <span className="text-orange font-extrabold">✓</span>{" "}
                Massachusetts-only focus — we know local codes
              </li>
              <li>
                <span className="text-orange font-extrabold">✓</span> In-house crew,
                no subcontracting
              </li>
            </ul>
          </div>
          <div className="about-photo-bg aspect-[4/3] rounded-lg min-h-[220px] md:min-h-[280px] relative overflow-hidden shadow-[0_12px_32px_rgba(0,62,107,0.15)]" />
        </div>

        {/* Process */}
        <div className="pt-8 border-t border-border">
          <h2 className="text-[26px] xs:text-[28px] md:text-[40px] font-bold mb-9 text-center">
            How We Work — 3 Simple Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 reveal-stagger">
            <div className="flex flex-col gap-[14px] items-start text-left">
              <div className="flex-shrink-0 w-[52px] h-[52px] bg-orange text-navy rounded-full flex items-center justify-center font-extrabold text-[20px] shadow-[0_4px_12px_rgba(240,140,43,0.35)]">
                1
              </div>
              <h3 className="text-[19px] md:text-[22px] font-semibold leading-[1.3] mb-0">
                Free Estimate
              </h3>
              <p className="text-charcoal-soft m-0 text-[15px]">
                We respond in 5 minutes, then come on-site to inspect and provide a
                transparent written estimate. No pressure, no surprises.
              </p>
            </div>
            <div className="flex flex-col gap-[14px] items-start text-left">
              <div className="flex-shrink-0 w-[52px] h-[52px] bg-orange text-navy rounded-full flex items-center justify-center font-extrabold text-[20px] shadow-[0_4px_12px_rgba(240,140,43,0.35)]">
                2
              </div>
              <h3 className="text-[19px] md:text-[22px] font-semibold leading-[1.3] mb-0">
                Project Plan
              </h3>
              <p className="text-charcoal-soft m-0 text-[15px]">
                We walk you through scope, materials, timeline, and warranty. You
                approve before any work starts.
              </p>
            </div>
            <div className="flex flex-col gap-[14px] items-start text-left">
              <div className="flex-shrink-0 w-[52px] h-[52px] bg-orange text-navy rounded-full flex items-center justify-center font-extrabold text-[20px] shadow-[0_4px_12px_rgba(240,140,43,0.35)]">
                3
              </div>
              <h3 className="text-[19px] md:text-[22px] font-semibold leading-[1.3] mb-0">
                Quality Execution
              </h3>
              <p className="text-charcoal-soft m-0 text-[15px]">
                Our crew completes the work on schedule, fully insured, with a 100%
                satisfaction guarantee on every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
