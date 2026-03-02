import dynamic from "next/dynamic";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import SocialProofBar from "@/components/sections/SocialProofBar";
import ServingClientsSection from "@/components/sections/ServingClientsSection";
import StatsBar from "@/components/sections/StatsBar";

/* ── Below-the-fold: lazy-loaded for faster initial paint ───────────── */
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"));
const AboutSection = dynamic(() => import("@/components/sections/AboutSection"));
const RecognitionWall = dynamic(() => import("@/components/sections/RecognitionWall"));
const LookBookSection = dynamic(() => import("@/components/sections/LookBookSection"));
const InfluencerSection = dynamic(() => import("@/components/sections/InfluencerSection"));
const TestimonialsCarousel = dynamic(() => import("@/components/sections/TestimonialsCarousel"));
const VideoTestimonialsSection = dynamic(() => import("@/components/sections/VideoTestimonialsSection"));
const FaqSection = dynamic(() => import("@/components/sections/FaqSection"));
const FinalCta = dynamic(() => import("@/components/sections/FinalCta"));
const BrandCollaborations = dynamic(() => import("@/components/sections/BrandCollaborations"));

/**
 * Section order and dark/light rhythm (per Stitch design plan):
 * Hero            → light  (ivory + portrait)
 * SocialProofBar  → DARK   (charcoal ticker)
 * ServingClients  → white  (client logos by geography)
 * StatsBar        → DARK   (charcoal — "By the Numbers")
 * Services        → light  (ivory — 6 service cards)
 * About           → light  (ivory — story + timeline)
 * RecognitionWall → light  (ivory — MSME + credentials)
 * LookBook        → light  (ivory — book promo)
 * Influencer      → light  (ivory — Instagram brand collabs)
 * TestimonialsC   → light  (ivory — client quotes carousel)
 * VideoTests      → DARK   (charcoal — YouTube testimonials)
 * FAQ             → white  (clean white accordion)
 * FinalCta        → DARK   (charcoal)
 * BrandCollabs    → DARK   (charcoal — brand strip)
 * Footer          → DARK   (charcoal — continuous with CTA)
 */
export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <SocialProofBar />
        <ServingClientsSection />
        <StatsBar />
        <ServicesSection />
        <AboutSection />
        <RecognitionWall />
        <LookBookSection />
        <InfluencerSection />
        <TestimonialsCarousel />
        <VideoTestimonialsSection />
        <FaqSection />
        <FinalCta />
        <BrandCollaborations />
      </main>
      <Footer />
    </>
  );
}
