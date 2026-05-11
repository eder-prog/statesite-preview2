import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — State Roofing & Carpentry",
};

export default function TermsPage() {
  return (
    <>
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="max-w-[1000px] mx-auto px-6 flex items-center justify-between h-16">
          <Link
            href="/"
            aria-label="State General Contractors Inc — Home"
            className="inline-block h-[38px]"
          >
            <Image
              src="/assets/logo-full.png"
              alt="State General Contractors Inc"
              width={460}
              height={76}
              className="h-full w-auto"
            />
          </Link>
          <Link
            href="/"
            className="text-[14px] text-charcoal-soft font-medium hover:text-orange"
          >
            ← Back to site
          </Link>
        </div>
      </header>

      <main className="max-w-[780px] mx-auto px-6 pt-14 pb-24">
        <div className="text-[13px] text-charcoal-soft mb-2 tracking-[0.04em] uppercase font-semibold">
          Legal
        </div>
        <h1 className="text-[36px] font-extrabold text-navy m-0 mb-3 leading-[1.15] tracking-[-0.02em]">
          Terms of Service
        </h1>
        <p className="text-[14px] text-charcoal-soft mb-9">Last updated: May 11, 2026</p>

        <div className="bg-[#FFF7ED] border border-[#FBD8B3] rounded-[6px] py-[14px] px-[18px] mb-8 text-[14px] text-[#7A4A1A]">
          <strong className="text-[#5B370F]">⚠ Template notice (data-pending):</strong>{" "}
          These Terms of Service are a starter draft intended to meet A2P 10DLC carrier
          requirements (Twilio, Sinch, Bandwidth, etc.) and standard small-business
          service terms.{" "}
          <strong className="text-[#5B370F]">
            Review with your legal counsel before publishing
          </strong>{" "}
          and adjust to reflect your contract terms, warranty specifics, jurisdiction,
          and Massachusetts contractor law (M.G.L. c.142A).
        </div>

        <nav className="bg-offwhite border border-border rounded-lg py-[18px] px-[22px] mb-9 text-[14px]">
          <strong className="block mb-2 text-navy text-[13px] tracking-[0.04em] uppercase">
            Contents
          </strong>
          <ol className="m-0 pl-5 list-decimal">
            <li className="mb-1">
              <a href="#acceptance" className="text-orange underline">
                Acceptance of Terms
              </a>
            </li>
            <li className="mb-1">
              <a href="#services" className="text-orange underline">
                Services
              </a>
            </li>
            <li className="mb-1">
              <a href="#estimates" className="text-orange underline">
                Estimates &amp; Pricing
              </a>
            </li>
            <li className="mb-1">
              <a href="#sms-program" className="text-orange underline">
                SMS Program Terms (A2P 10DLC)
              </a>
            </li>
            <li className="mb-1">
              <a href="#warranty" className="text-orange underline">
                Warranty
              </a>
            </li>
            <li className="mb-1">
              <a href="#insurance" className="text-orange underline">
                License &amp; Insurance
              </a>
            </li>
            <li className="mb-1">
              <a href="#limitations" className="text-orange underline">
                Limitation of Liability
              </a>
            </li>
            <li className="mb-1">
              <a href="#governing-law" className="text-orange underline">
                Governing Law
              </a>
            </li>
            <li className="mb-1">
              <a href="#contact" className="text-orange underline">
                Contact
              </a>
            </li>
          </ol>
        </nav>

        <h2 id="acceptance" className="scroll-mt-20 text-[22px] font-bold text-navy mt-10 mb-3 leading-[1.25]">
          1. Acceptance of Terms
        </h2>
        <p className="text-base text-charcoal m-0 mb-3">
          By using this website, requesting an estimate, or engaging State Roofing
          &amp; Carpentry (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or
          &quot;State Roofing&quot;) for services, you agree to these Terms of Service.
          If you do not agree, do not use our website or services.
        </p>

        <h2 id="services" className="scroll-mt-20 text-[22px] font-bold text-navy mt-10 mb-3 leading-[1.25]">
          2. Services
        </h2>
        <p className="text-base text-charcoal m-0 mb-3">
          State Roofing &amp; Carpentry provides residential general contracting
          services across the Commonwealth of Massachusetts, including:
        </p>
        <ul className="pl-6 mb-4 text-base text-charcoal list-disc">
          <li className="mb-[6px]">
            Roofing — repairs, installations, inspections, and replacements
          </li>
          <li className="mb-[6px]">Siding — residential siding, soffit, and fascia</li>
          <li className="mb-[6px]">Decking — custom deck design and construction</li>
          <li className="mb-[6px]">
            Remodeling — additions, kitchens, bathrooms, and whole-home renovations
          </li>
          <li className="mb-[6px]">Framing — new construction and remodel framing</li>
          <li className="mb-[6px]">24/7 emergency roofing response</li>
        </ul>

        <h2 id="estimates" className="scroll-mt-20 text-[22px] font-bold text-navy mt-10 mb-3 leading-[1.25]">
          3. Estimates &amp; Pricing
        </h2>
        <p className="text-base text-charcoal m-0 mb-3">
          Free estimates are provided without obligation. Estimates are based on the
          information provided in the request and an on-site inspection. Final pricing
          may be adjusted if scope, conditions, or material costs change after the
          estimate is issued. All written estimates include scope, materials,
          timeline, and warranty terms. No deposit is required to receive an estimate.
        </p>

        <h2 id="sms-program" className="scroll-mt-20 text-[22px] font-bold text-navy mt-10 mb-3 leading-[1.25]">
          4. SMS Program Terms (A2P 10DLC)
        </h2>
        <p className="text-base text-charcoal m-0 mb-3">
          State Roofing &amp; Carpentry operates an SMS messaging program for customers
          who provide a phone number and consent to receive text messages. The
          following terms apply to all SMS communications under our program.
        </p>

        <div className="bg-offwhite border border-border border-l-4 border-l-orange rounded-[6px] py-[18px] px-5 my-6 text-[15px]">
          <strong className="text-navy">Program purpose:</strong> Estimate updates,
          appointment scheduling, project status communication, and customer service
          responses related to your inquiry or active project.
        </div>

        <h3 className="text-[17px] font-semibold text-charcoal mt-6 mb-2">
          4.1 Opt-In
        </h3>
        <p className="text-base text-charcoal m-0 mb-3">
          You opt in to receive SMS messages by checking the SMS Consent box on our
          estimate form and providing your mobile phone number. Consent is express,
          voluntary, and is <strong>not a condition</strong> of receiving an estimate
          or services.
        </p>

        <h3 className="text-[17px] font-semibold text-charcoal mt-6 mb-2">
          4.2 Message Frequency
        </h3>
        <p className="text-base text-charcoal m-0 mb-3">
          Message frequency varies based on the status of your inquiry or project.
          Typically, you can expect 1–10 messages per month while an estimate or
          project is active.
        </p>

        <h3 className="text-[17px] font-semibold text-charcoal mt-6 mb-2">
          4.3 Message &amp; Data Rates
        </h3>
        <p className="text-base text-charcoal m-0 mb-3">
          Standard message and data rates may apply, depending on your mobile carrier
          and plan. State Roofing &amp; Carpentry is not responsible for charges from
          your carrier.
        </p>

        <h3 className="text-[17px] font-semibold text-charcoal mt-6 mb-2">
          4.4 Opt-Out
        </h3>
        <p className="text-base text-charcoal m-0 mb-3">
          You may opt out of SMS communications at any time by replying{" "}
          <strong>STOP</strong> to any message we send. After opting out, you will
          receive a confirmation message and no further texts. To resume messages,
          reply <strong>START</strong>.
        </p>

        <h3 className="text-[17px] font-semibold text-charcoal mt-6 mb-2">
          4.5 Help
        </h3>
        <p className="text-base text-charcoal m-0 mb-3">
          Reply <strong>HELP</strong> to any message for assistance. You may also
          contact us directly at{" "}
          <a href="tel:+16177022062" className="text-orange underline">
            (617) 702-2062
          </a>{" "}
          or{" "}
          <a href="mailto:info@stategc.net" className="text-orange underline">
            info@stategc.net
          </a>
          .
        </p>

        <h3 className="text-[17px] font-semibold text-charcoal mt-6 mb-2">
          4.6 Supported Carriers
        </h3>
        <p className="text-base text-charcoal m-0 mb-3">
          Our SMS program is supported on all major U.S. carriers, including AT&amp;T,
          T-Mobile, Verizon Wireless, and others. Carriers are not liable for delayed
          or undelivered messages.
        </p>

        <h3 className="text-[17px] font-semibold text-charcoal mt-6 mb-2">
          4.7 Privacy
        </h3>
        <p className="text-base text-charcoal m-0 mb-3">
          We do not sell, rent, or share your phone number or SMS content with third
          parties for marketing purposes. See our{" "}
          <Link
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange underline"
          >
            Privacy Policy
          </Link>{" "}
          for full details on how we handle your information.
        </p>

        <h2 id="warranty" className="scroll-mt-20 text-[22px] font-bold text-navy mt-10 mb-3 leading-[1.25]">
          5. Warranty
        </h2>
        <p className="text-base text-charcoal m-0 mb-3">
          <em>(Adjust to your actual warranty terms — data-pending.)</em>
        </p>
        <p className="text-base text-charcoal m-0 mb-3">
          State Roofing &amp; Carpentry stands behind the quality of our work.
          Workmanship is warrantied for the life of the project as long as you own
          the property, subject to the specific terms outlined in your written
          project contract. Materials are warrantied per manufacturer specifications
          (typically 25–50 years for roofing materials).
        </p>

        <h2 id="insurance" className="scroll-mt-20 text-[22px] font-bold text-navy mt-10 mb-3 leading-[1.25]">
          6. License &amp; Insurance
        </h2>
        <p className="text-base text-charcoal m-0 mb-3">
          State Roofing &amp; Carpentry holds Massachusetts Home Improvement Contractor
          (HIC) license #XXXXXXX <em>(data-pending)</em> and carries comprehensive
          general liability and workers&apos; compensation insurance. Proof of insurance
          and license is available upon request.
        </p>

        <h2 id="limitations" className="scroll-mt-20 text-[22px] font-bold text-navy mt-10 mb-3 leading-[1.25]">
          7. Limitation of Liability
        </h2>
        <p className="text-base text-charcoal m-0 mb-3">
          To the maximum extent permitted by Massachusetts law, State Roofing &amp;
          Carpentry shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages arising out of or related to your use of
          this website. Our total liability for any claim arising from a written
          contract shall not exceed the amount you paid us under that contract.
        </p>

        <h2 id="governing-law" className="scroll-mt-20 text-[22px] font-bold text-navy mt-10 mb-3 leading-[1.25]">
          8. Governing Law
        </h2>
        <p className="text-base text-charcoal m-0 mb-3">
          These Terms are governed by the laws of the Commonwealth of Massachusetts,
          without regard to its conflict-of-law principles. Any dispute arising from
          these Terms or our services shall be resolved exclusively in the state or
          federal courts located in Massachusetts.
        </p>

        <h2 id="contact" className="scroll-mt-20 text-[22px] font-bold text-navy mt-10 mb-3 leading-[1.25]">
          9. Contact
        </h2>
        <p className="text-base text-charcoal m-0 mb-3">Questions about these Terms?</p>
        <div className="bg-offwhite border border-border rounded-lg py-5 px-[22px] mt-6 text-[15px]">
          <strong className="text-navy block mb-[6px]">State Roofing &amp; Carpentry</strong>
          Phone:{" "}
          <a href="tel:+16177022062" className="text-orange underline">
            (617) 702-2062
          </a>
          <br />
          Email:{" "}
          <a href="mailto:info@stategc.net" className="text-orange underline">
            info@stategc.net
          </a>
          <br />
          Service area: All of Massachusetts, USA
        </div>
      </main>

      <footer className="bg-navy-deep text-white/70 py-8 px-6 text-[13px] text-center">
        © 2026 State Roofing &amp; Carpentry ·{" "}
        <Link href="/" className="text-white/85 underline">
          Home
        </Link>{" "}
        ·{" "}
        <Link href="/privacy" className="text-white/85 underline">
          Privacy Policy
        </Link>
      </footer>
    </>
  );
}
