import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ChallengesSection } from "@/components/sections/ChallengesSection";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { WhyAXCO } from "@/components/sections/WhyAXCO";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ChallengesSection />
      <WhatWeDo />
      <WhyAXCO />
      <CTASection />
    </Layout>
  );
};

export default Index;
