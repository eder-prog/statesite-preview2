import EstimateForm from "./estimate-form";

export default function FinalCta() {
  return (
    <section
      id="contact"
      data-bg="dark"
      className="relative text-white py-16 px-4 xs:py-20 xs:px-5 md:py-[120px] md:px-6 overflow-hidden bg-navy"
    >
      <div className="final-cta-bg" />
      <div className="container-x relative z-[1]">
        <div className="grid grid-cols-1 min-[960px]:grid-cols-2 min-[1200px]:grid-cols-[1.05fr_1fr] gap-12 min-[960px]:gap-14 min-[1200px]:gap-16 items-center text-left max-w-[1200px] mx-auto reveal">
          <div className="flex flex-col gap-[18px]">
            <h2 className="text-white m-0 text-left text-[26px] xs:text-[30px] md:text-[42px] font-bold">
              Ready to Start Your Project?
            </h2>
            <p className="text-[17px] opacity-[0.88] m-0 leading-[1.55]">
              Response within 5 minutes. Licensed, insured, 20+ years serving
              Massachusetts.
            </p>
            <div className="flex flex-wrap gap-[14px] items-center mt-2">
              <a
                href="tel:+16177022062"
                className="inline-flex items-center justify-center gap-2 font-semibold text-[17px] px-[26px] py-[14px] md:px-8 md:py-4 rounded-lg bg-white/10 text-white border-[1.5px] border-white/[0.32] backdrop-blur-[10px] backdrop-saturate-[140%] shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:bg-white/[0.18] hover:border-white/[0.55] hover:shadow-[0_6px_22px_rgba(0,0,0,0.18)] transition-all duration-200"
              >
                Or Call (617) 702-2062
              </a>
            </div>
            <div className="mt-2 text-[14px] text-orange">
              <strong>24/7 Emergency?</strong>{" "}
              <a
                href="tel:+16177022062"
                className="text-orange underline font-semibold hover:text-white"
              >
                Same number, anytime.
              </a>
            </div>
            <div className="mt-2 text-[12px] tracking-[0.08em] uppercase opacity-65 font-semibold">
              Licensed · Insured · 20+ Years Serving MA
            </div>
          </div>
          <EstimateForm variant="cta" idPrefix="fc" />
        </div>
      </div>
    </section>
  );
}
