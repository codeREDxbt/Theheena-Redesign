import dynamic from "next/dynamic";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollToTop from "@/components/ui/ScrollToTop";
import HeroSection from "@/components/sections/HeroSection";
import SocialProofBar from "@/components/sections/SocialProofBar";
import ServingClientsSection from "@/components/sections/ServingClientsSection";
import StatsBar from "@/components/sections/StatsBar";

/* ── Below-the-fold: lazy-loaded for faster initial paint ───────────── */
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"));
const PainPointsSection = dynamic(() => import("@/components/sections/PainPointsSection"));
const ServiceOutcomesSection = dynamic(() => import("@/components/sections/ServiceOutcomesSection"));
const BusinessROISection = dynamic(() => import("@/components/sections/BusinessROISection"));
const AboutSection = dynamic(() => import("@/components/sections/AboutSection"));
const SkillsSection = dynamic(() => import("@/components/sections/SkillsSection"));
const IIDSection = dynamic(() => import("@/components/sections/IIDSection"));
const TransformativeBenefitsSection = dynamic(() => import("@/components/sections/TransformativeBenefitsSection"));
const RecognitionWall = dynamic(() => import("@/components/sections/RecognitionWall"));
const FashionTVSection = dynamic(() => import("@/components/sections/FashionTVSection"));
const ClothingMistakesSection = dynamic(() => import("@/components/sections/ClothingMistakesSection"));
const MyBookSection = dynamic(() => import("@/components/sections/LookBookSection"));
const InfluencerSection = dynamic(() => import("@/components/sections/InfluencerSection"));
const TestimonialsCarousel = dynamic(() => import("@/components/sections/TestimonialsCarousel"));
const VideoTestimonialsSection = dynamic(() => import("@/components/sections/VideoTestimonialsSection"));
const ReelsShowcaseSection = dynamic(() => import("@/components/sections/ReelsShowcaseSection"));
const FaqSection = dynamic(() => import("@/components/sections/FaqSection"));
const FinalCta = dynamic(() => import("@/components/sections/FinalCta"));
const BrandCollaborations = dynamic(() => import("@/components/sections/BrandCollaborations"));

/**
 * Section order and dark/light rhythm (per Stitch design plan):
 * Hero            → light  (ivory + portrait)
 * SocialProofBar  → DARK   (charcoal ticker)
 * ServingClients  → white  (client logos by geography)
 * StatsBar        → DARK   (charcoal — "By the Numbers")
 * PainPoints      → DARK   (charcoal — Problem Statement)
 * Services        → light  (ivory — 6 service cards)
 * ServiceOutcomes → light  (ivory — Tangible Results)
 * BusinessROI     → light  (white — Image and ROI)
 * IIDSection      → light  (ivory)
 * TransformativeB → DARK   (hero divider — 9 benefits)
 * About           → light  (ivory — story + timeline)
 * Skills          → white  (minimalist grid)
 * RecognitionWall → light  (ivory — MSME + credentials)
 * FashionTV       → light  (FashionTV promo)
 * ClothingMistakes→ white  (GQ style advisory)
 * LookBook        → light  (ivory — book promo)
 * Influencer      → light  (ivory — Instagram brand collabs)
 * TestimonialsC   → light  (ivory — client quotes carousel)
 * VideoTests      → DARK   (charcoal — YouTube testimonials)
 * ReelsShowcase   → white  (clean grid — Instagram Reels)
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
        <PainPointsSection />
        <ServicesSection />
        <ServiceOutcomesSection />
        <BusinessROISection />
        <IIDSection />
        <TransformativeBenefitsSection />
        <AboutSection />
        <SkillsSection />
        <RecognitionWall />
        <FashionTVSection />
        <ClothingMistakesSection />
        <MyBookSection />
        <InfluencerSection />
        <TestimonialsCarousel />
        <VideoTestimonialsSection />
        <ReelsShowcaseSection />
        <FaqSection />
        <FinalCta />
        <BrandCollaborations />
        <WhatsAppButton />
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
}
