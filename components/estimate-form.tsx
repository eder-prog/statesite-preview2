"use client";

import { FormEvent } from "react";

interface EstimateFormProps {
  variant?: "inline" | "cta";
  idPrefix?: string;
}

export default function EstimateForm({
  variant = "inline",
  idPrefix,
}: EstimateFormProps) {
  const isCta = variant === "cta";
  const prefix = idPrefix ?? (isCta ? "fc" : "f");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Form submission demo — backend integration is data-pending.");
  }

  const cardClasses = isCta
    ? "bg-white text-charcoal rounded-lg p-[22px] xs:p-[26px] md:p-9 shadow-[0_24px_60px_rgba(0,0,0,0.32)] border border-white/10"
    : "bg-white border border-border rounded-lg p-8 md:p-10 shadow-[0_8px_24px_rgba(15,46,76,0.06)]";

  const labelSize = isCta ? "text-[12px]" : "text-[13px]";
  const inputPad = isCta ? "px-[13px] py-[11px] text-[14px]" : "px-[14px] py-3 text-[15px]";
  const consentBoxPad = isCta ? "p-[14px] my-[6px] mb-4 gap-[10px]" : "p-5 my-2 mb-5 gap-[14px]";
  const consentFont = isCta ? "text-[12px] gap-[10px]" : "text-[13px] gap-3";
  const consentCheckSize = isCta ? "w-4 h-4" : "w-[18px] h-[18px]";
  const submitPad = isCta ? "p-[14px] text-[15px]" : "p-[18px] text-[17px]";
  const privacyFont = isCta ? "text-[11px] mt-3" : "text-[12px] mt-4";

  return (
    <form className={cardClasses} onSubmit={handleSubmit}>
      {isCta && (
        <>
          <h3 className="m-0 mb-1 text-[22px] font-extrabold text-navy tracking-[-0.01em]">
            Request a Free Estimate
          </h3>
          <p className="m-0 mb-5 text-[14px] text-charcoal-soft">
            Response within 5 minutes.
          </p>
        </>
      )}

      {/* Name */}
      <div className={`grid grid-cols-1 gap-4 ${isCta ? "mb-[14px]" : "md:grid-cols-2 mb-4"}`}>
        <div className="flex flex-col gap-[6px]">
          <label htmlFor={`${prefix}-name`} className={`${labelSize} font-semibold text-charcoal tracking-[0.02em]`}>
            Full Name<span className="text-orange ml-[2px]">*</span>
          </label>
          <input
            id={`${prefix}-name`}
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={`w-full ${inputPad} border border-border rounded font-[inherit] text-charcoal bg-white transition-[border-color,box-shadow] duration-200 focus:outline-none focus:border-orange focus:shadow-[0_0_0_3px_rgba(240,140,43,0.14)]`}
          />
        </div>
        {!isCta && (
          <div className="flex flex-col gap-[6px]">
            <label htmlFor={`${prefix}-email`} className={`${labelSize} font-semibold text-charcoal tracking-[0.02em]`}>
              Email<span className="text-orange ml-[2px]">*</span>
            </label>
            <input
              id={`${prefix}-email`}
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className={`w-full ${inputPad} border border-border rounded font-[inherit] text-charcoal bg-white transition-[border-color,box-shadow] duration-200 focus:outline-none focus:border-orange focus:shadow-[0_0_0_3px_rgba(240,140,43,0.14)]`}
            />
          </div>
        )}
      </div>

      {/* Email (CTA variant — separate row) */}
      {isCta && (
        <div className="grid grid-cols-1 gap-4 mb-[14px]">
          <div className="flex flex-col gap-[6px]">
            <label htmlFor={`${prefix}-email`} className={`${labelSize} font-semibold text-charcoal tracking-[0.02em]`}>
              Email<span className="text-orange ml-[2px]">*</span>
            </label>
            <input
              id={`${prefix}-email`}
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className={`w-full ${inputPad} border border-border rounded font-[inherit] text-charcoal bg-white transition-[border-color,box-shadow] duration-200 focus:outline-none focus:border-orange focus:shadow-[0_0_0_3px_rgba(240,140,43,0.14)]`}
            />
          </div>
        </div>
      )}

      {/* Phone */}
      <div className={`grid grid-cols-1 gap-4 ${isCta ? "mb-[14px]" : "mb-4"}`}>
        <div className="flex flex-col gap-[6px]">
          <label htmlFor={`${prefix}-phone`} className={`${labelSize} font-semibold text-charcoal tracking-[0.02em]`}>
            Phone{" "}
            <span className="text-[12px] text-charcoal-soft font-normal">
              (optional)
            </span>
          </label>
          <input
            id={`${prefix}-phone`}
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="(617) 555-0100"
            className={`w-full ${inputPad} border border-border rounded font-[inherit] text-charcoal bg-white transition-[border-color,box-shadow] duration-200 focus:outline-none focus:border-orange focus:shadow-[0_0_0_3px_rgba(240,140,43,0.14)]`}
          />
          {!isCta && (
            <span className="text-[12px] text-charcoal-soft">
              Provide a phone number if you&apos;d prefer a call back or SMS updates.
            </span>
          )}
        </div>
      </div>

      {/* Consents */}
      <div className={`flex flex-col bg-offwhite border border-border rounded ${consentBoxPad}`}>
        <div className={`flex items-start ${consentFont} text-charcoal-soft leading-[1.5]`}>
          <input
            type="checkbox"
            id={`${prefix}-sms`}
            name="sms_consent"
            className={`flex-shrink-0 ${consentCheckSize} mt-[2px] mr-3 accent-orange cursor-pointer`}
          />
          <label htmlFor={`${prefix}-sms`} className="cursor-pointer">
            {isCta ? (
              <>
                <strong>SMS Consent (optional):</strong> By checking this box, I consent
                to receive SMS messages from{" "}
                <strong>State Roofing &amp; Carpentry</strong> at the phone number
                provided. Msg &amp; data rates may apply. Reply <strong>STOP</strong> to
                unsubscribe. See{" "}
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange underline font-semibold"
                >
                  Privacy Policy
                </a>{" "}
                &amp;{" "}
                <a
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange underline font-semibold"
                >
                  Terms
                </a>
                .
              </>
            ) : (
              <>
                <strong>
                  SMS Consent (optional — only if you provided a phone number):
                </strong>{" "}
                By checking this box, I expressly consent to receive SMS messages from{" "}
                <strong>State Roofing &amp; Carpentry</strong> at the phone number
                provided, including estimate updates, scheduling, and project
                communication. Message frequency varies. Msg &amp; data rates may apply.
                Reply <strong>STOP</strong> to unsubscribe at any time. Reply{" "}
                <strong>HELP</strong> for help. Consent is not a condition of purchase.
                See our{" "}
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange underline font-semibold"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange underline font-semibold"
                >
                  Terms of Service
                </a>
                .
              </>
            )}
          </label>
        </div>
        <div className={`flex items-start ${consentFont} text-charcoal-soft leading-[1.5] mt-[14px]`}>
          <input
            type="checkbox"
            id={`${prefix}-contact`}
            name="contact_consent"
            required
            className={`flex-shrink-0 ${consentCheckSize} mt-[2px] mr-3 accent-orange cursor-pointer`}
          />
          <label htmlFor={`${prefix}-contact`} className="cursor-pointer">
            {isCta ? (
              <>
                <strong>Contact Consent (required):</strong> State Roofing &amp;
                Carpentry may contact me about my estimate request. Info not sold or
                shared.
              </>
            ) : (
              <>
                <strong>Contact Consent (required):</strong> I agree that State Roofing
                &amp; Carpentry may contact me by phone or email regarding my estimate
                request. I understand my information will not be sold or shared with
                third parties.
              </>
            )}
          </label>
        </div>
      </div>

      <button
        type="submit"
        className={`w-full ${submitPad} font-bold bg-orange text-white border-0 rounded cursor-pointer tracking-[0.02em] transition-[background] duration-200 shadow-[0_4px_14px_rgba(240,140,43,0.32)] animate-cta-bounce hover:bg-orange-hover hover:[animation-play-state:paused] hover:-translate-y-[2px] hover:scale-[1.01]`}
      >
        Send My Free Estimate Request →
      </button>

      <div className={`text-center ${privacyFont} text-charcoal-soft`}>
        Your information is private.{" "}
        {isCta ? null : "We don't sell or share it. "}
        <a
          href="/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-charcoal-soft underline"
        >
          Privacy Policy
        </a>{" "}
        ·{" "}
        <a
          href="/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="text-charcoal-soft underline"
        >
          {isCta ? "Terms" : "Terms of Service"}
        </a>
        .
      </div>
    </form>
  );
}
