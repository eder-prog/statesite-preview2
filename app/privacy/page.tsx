import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — State Roofing & Carpentry",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-[14px] text-charcoal-soft mb-9">Last updated: May 11, 2026</p>

        <div className="bg-[#FFF7ED] border border-[#FBD8B3] rounded-[6px] py-[14px] px-[18px] mb-8 text-[14px] text-[#7A4A1A]">
          <strong className="text-[#5B370F]">⚠ Template notice (data-pending):</strong>{" "}
          This Privacy Policy is a starter draft intended to meet A2P 10DLC carrier
          requirements.{" "}
          <strong className="text-[#5B370F]">
            Review with your legal counsel before publishing
          </strong>{" "}
          and adjust to reflect your actual data practices, jurisdictions served, and
          any state-specific requirements (e.g. Massachusetts data privacy laws).
        </div>

        <p className="text-base text-charcoal m-0 mb-3">
          State Roofing &amp; Carpentry (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) respects your privacy. This Privacy Policy explains how we
          collect, use, share, and protect personal information when you visit our
          website, request a free estimate, or communicate with us by phone, email, or
          SMS.
        </p>

        <h2 className="text-[22px] font-bold text-navy mt-10 mb-3 leading-[1.25]">
          1. Information We Collect
        </h2>
        <p className="text-base text-charcoal m-0 mb-3">
          We collect information you voluntarily provide when you request an estimate
          or contact us, including:
        </p>
        <ul className="pl-6 mb-4 text-base text-charcoal list-disc">
          <li className="mb-[6px]">Full name</li>
          <li className="mb-[6px]">Email address</li>
          <li className="mb-[6px]">Phone number (optional)</li>
          <li className="mb-[6px]">City and state</li>
          <li className="mb-[6px]">Service requested and project details</li>
          <li className="mb-[6px]">
            Any additional information you choose to share in the message field
          </li>
        </ul>
        <p className="text-base text-charcoal m-0 mb-3">
          We may also automatically collect limited technical information when you
          visit our website (e.g. IP address, browser type, pages visited). We do not
          use third-party advertising trackers.
        </p>

        <h2 className="text-[22px] font-bold text-navy mt-10 mb-3 leading-[1.25]">
          2. How We Use Your Information
        </h2>
        <p className="text-base text-charcoal m-0 mb-3">
          We use your information only for legitimate business purposes related to
          your request:
        </p>
        <ul className="pl-6 mb-4 text-base text-charcoal list-disc">
          <li className="mb-[6px]">To respond to your estimate request and schedule on-site visits</li>
          <li className="mb-[6px]">
            To communicate with you about your project (by phone, email, or, with your
            consent, SMS)
          </li>
          <li className="mb-[6px]">
            To send service-related updates such as appointment confirmations and
            project status
          </li>
          <li className="mb-[6px]">To comply with legal obligations</li>
        </ul>

        <h2 className="text-[22px] font-bold text-navy mt-10 mb-3 leading-[1.25]">
          3. SMS / Text Message Program
        </h2>
        <p className="text-base text-charcoal m-0 mb-3">
          If you opt in to receive SMS messages by checking the SMS consent box on our
          estimate form, you agree to receive text messages from State Roofing &amp;
          Carpentry related to your estimate, scheduling, and project communication.
        </p>
        <div className="bg-offwhite border border-border border-l-4 border-l-orange rounded-[6px] py-[18px] px-5 my-6 text-[15px]">
          <strong className="text-navy">Key SMS terms:</strong>
          <ul className="mt-[10px] pl-6 list-disc">
            <li className="mb-[6px]">Message frequency varies based on your project</li>
            <li className="mb-[6px]">
              Message and data rates may apply, depending on your mobile carrier
            </li>
            <li className="mb-[6px]">
              Reply <strong>STOP</strong> at any time to unsubscribe
            </li>
            <li className="mb-[6px]">
              Reply <strong>HELP</strong> for help
            </li>
            <li className="mb-[6px]">
              Consent to receive SMS is <strong>not a condition</strong> of receiving
              an estimate or any service
            </li>
            <li className="mb-[6px]">
              We will never sell or share your phone number or SMS content with third
              parties for marketing purposes
            </li>
          </ul>
        </div>
        <p className="text-base text-charcoal m-0 mb-3">
          For full SMS program terms, see our{" "}
          <Link
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange underline"
          >
            Terms of Service
          </Link>
          .
        </p>

        <h2 className="text-[22px] font-bold text-navy mt-10 mb-3 leading-[1.25]">
          4. How We Share Your Information
        </h2>
        <p className="text-base text-charcoal m-0 mb-3">
          We <strong>do not sell, rent, or share your personal information</strong>{" "}
          with third parties for their marketing purposes. We may share information
          only:
        </p>
        <ul className="pl-6 mb-4 text-base text-charcoal list-disc">
          <li className="mb-[6px]">
            With service providers who help us operate our business (e.g. email/SMS
            delivery vendors, scheduling tools) under contractual confidentiality
            obligations
          </li>
          <li className="mb-[6px]">When required by law (subpoena, court order, or legal process)</li>
          <li className="mb-[6px]">To protect our rights, property, or safety, or that of others</li>
        </ul>

        <h2 className="text-[22px] font-bold text-navy mt-10 mb-3 leading-[1.25]">
          5. Data Retention
        </h2>
        <p className="text-base text-charcoal m-0 mb-3">
          We retain estimate request information for as long as necessary to respond
          to your inquiry and fulfill any resulting contract, plus a reasonable period
          afterward for record-keeping and warranty purposes (typically 7 years). You
          may request deletion of your information at any time by contacting us at{" "}
          <a href="mailto:info@stategc.net" className="text-orange underline">
            info@stategc.net
          </a>
          .
        </p>

        <h2 className="text-[22px] font-bold text-navy mt-10 mb-3 leading-[1.25]">
          6. Your Rights
        </h2>
        <p className="text-base text-charcoal m-0 mb-3">You have the right to:</p>
        <ul className="pl-6 mb-4 text-base text-charcoal list-disc">
          <li className="mb-[6px]">Access the personal information we hold about you</li>
          <li className="mb-[6px]">Request correction of inaccurate information</li>
          <li className="mb-[6px]">
            Request deletion of your information (subject to legal retention
            requirements)
          </li>
          <li className="mb-[6px]">
            Opt out of SMS communications at any time by replying STOP
          </li>
          <li className="mb-[6px]">
            Opt out of email communications by replying or contacting us directly
          </li>
        </ul>

        <h2 className="text-[22px] font-bold text-navy mt-10 mb-3 leading-[1.25]">
          7. Security
        </h2>
        <p className="text-base text-charcoal m-0 mb-3">
          We implement reasonable administrative, technical, and physical safeguards
          to protect your information. However, no method of transmission over the
          Internet is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-[22px] font-bold text-navy mt-10 mb-3 leading-[1.25]">
          8. Children&apos;s Privacy
        </h2>
        <p className="text-base text-charcoal m-0 mb-3">
          Our services are intended for adults age 18 and over. We do not knowingly
          collect information from children under 13.
        </p>

        <h2 className="text-[22px] font-bold text-navy mt-10 mb-3 leading-[1.25]">
          9. Changes to This Policy
        </h2>
        <p className="text-base text-charcoal m-0 mb-3">
          We may update this Privacy Policy from time to time. The &quot;Last
          updated&quot; date at the top reflects the most recent revision. Material
          changes will be communicated via our website.
        </p>

        <h2 className="text-[22px] font-bold text-navy mt-10 mb-3 leading-[1.25]">
          10. Contact Us
        </h2>
        <p className="text-base text-charcoal m-0 mb-3">
          Questions about this Privacy Policy or our data practices?
        </p>
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
        <Link href="/terms" className="text-white/85 underline">
          Terms of Service
        </Link>
      </footer>
    </>
  );
}
