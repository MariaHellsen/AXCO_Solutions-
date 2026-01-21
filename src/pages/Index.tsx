import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ChallengesSection } from "@/components/sections/ChallengesSection";
import { WhoWeSupport } from "@/components/sections/WhoWeSupport";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { WhyAXCO } from "@/components/sections/WhyAXCO";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ChallengesSection />
      <WhoWeSupport />
      <WhatWeDo />
      <WhyAXCO />
      <HowItWorks />
      <CTASection />
    </Layout>
  );
};

export default Index;
