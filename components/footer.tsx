import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      data-bg="dark"
      className="bg-[#091d31] text-white/80 pt-16 pb-8"
    >
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1.4fr] gap-9 md:gap-12">
          <div>
            <Link
              href="/"
              aria-label="State General Contractors Inc"
              className="inline-block h-11 mb-[14px]"
            >
              <Image
                src="/assets/logo-full.png"
                alt="State General Contractors Inc"
                width={460}
                height={88}
                className="h-full w-auto [filter:brightness(0)_invert(1)_opacity(.95)]"
              />
            </Link>
            <p className="text-[14px] text-white/70 m-0 mb-3 leading-[1.55]">
              Trusted Massachusetts roofing &amp; general contracting since 2006.
              Family-operated. Licensed and fully insured.
            </p>
          </div>
          <div>
            <h4 className="text-white text-[14px] font-bold tracking-[0.06em] uppercase m-0 mb-4">
              Services
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2 text-[14px]">
              <li>
                <a href="/#services" className="hover:text-orange">
                  Roofing
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-orange">
                  Siding
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-orange">
                  Decking
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-orange">
                  Remodeling
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-orange">
                  Framing
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-orange">
                  24/7 Emergency Roofing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-[14px] font-bold tracking-[0.06em] uppercase m-0 mb-4">
              Contact
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2 text-[14px]">
              <li>
                <a href="tel:+16177022062" className="hover:text-orange">
                  (617) 702-2062
                </a>
              </li>
              <li>
                <a href="mailto:info@stategc.net" className="hover:text-orange">
                  info@stategc.net
                </a>
              </li>
              <li>24/7 Emergency Available</li>
              <li>Serving All of Massachusetts</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-[14px] font-bold tracking-[0.06em] uppercase m-0 mb-4">
              Areas Served
            </h4>
            <div className="text-[13px] leading-[1.7] text-white/65">
              Boston · Worcester · Springfield · Cambridge · Lowell · Brockton ·
              New Bedford · Quincy · Lynn · Fall River · Newton · Somerville ·
              Framingham · Haverhill · Brookline · Plymouth · Medford · Taunton ·
              Chicopee · Weymouth · and every town across MA
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-wrap justify-between gap-4 text-[12px] text-white/50">
          <div>© 2026 State Roofing &amp; Carpentry. All rights reserved.</div>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
