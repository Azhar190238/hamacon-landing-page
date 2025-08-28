import FAQsSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowWorks";
import LeadingPractical from "@/components/LeadingPractical";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import ReviewsSection from "@/components/TestimonialsSection";
import React from "react";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <HowItWorks />
      <FAQsSection />
      <ReviewsSection />
      <LeadingPractical />
    </main>
  );
}
