
import RecruitmentHero from "@/components/RecruitmentHero";
import ValuePropositions from "@/components/ValuePropositions";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import ModernFooter from "@/components/ModernFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <RecruitmentHero />
      <ValuePropositions />
      <HowItWorks />
      <UseCases />
      <TestimonialsSlider />
      <ModernFooter />
    </div>
  );
};

export default Index;
