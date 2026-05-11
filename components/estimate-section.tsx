import EstimateForm from "./estimate-form";

export default function EstimateSection() {
  return (
    <section
      id="estimate-form"
      className="bg-offwhite py-14 xs:py-18 md:py-24"
    >
      <div className="container-x max-w-[760px]">
        <div className="text-center mb-8 reveal">
          <h2 className="mb-2 text-[28px] md:text-[36px] font-bold text-charcoal">
            Request Your Free Estimate
          </h2>
          <p className="text-charcoal-soft m-0 text-base">
            Tell us about your project. We&apos;ll respond with a written estimate.
          </p>
          <div className="inline-flex items-center gap-2 mt-3 bg-orange-soft text-orange text-[13px] font-semibold py-[6px] px-[14px] rounded-[20px] tracking-[0.04em]">
            ⚡ Response within 5 minutes
          </div>
        </div>
        <div className="reveal">
          <EstimateForm variant="inline" />
        </div>
        <div className="mt-6 text-center text-[14px] text-charcoal-soft p-[14px] bg-white border border-border rounded">
          <strong className="text-navy">24/7 Emergency?</strong> Skip the form —{" "}
          <a
            href="tel:+16177022062"
            className="text-orange no-underline font-bold"
          >
            call (617) 702-2062
          </a>{" "}
          anytime.
        </div>
      </div>
    </section>
  );
}
