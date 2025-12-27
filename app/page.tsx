import { PublicHeader, PublicFooter } from "@/components/layout";
import {
  HeroSection,
  WhyAiSeoSection,
  ModulesSection,
  HowItWorksSection,
  CtaSection,
} from "@/components/features/home";

export default function HomePage() {
  return (
    <>
      <PublicHeader />
      <main>
        <HeroSection />
        <WhyAiSeoSection />
        <ModulesSection />
        <HowItWorksSection />
        <CtaSection />
      </main>
      <PublicFooter />
    </>
  );
}
