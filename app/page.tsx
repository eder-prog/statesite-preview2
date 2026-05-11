import AboutProcess from "@/components/about-process";
import EstimateSection from "@/components/estimate-section";
import Faq from "@/components/faq";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Header from "@/components/header";
import Hero from "@/components/hero";
import RevealOnScroll from "@/components/reveal-on-scroll";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import TrustBand from "@/components/trust-band";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EstimateSection />
        <TrustBand />
        <Services />
        <Gallery />
        <AboutProcess />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
