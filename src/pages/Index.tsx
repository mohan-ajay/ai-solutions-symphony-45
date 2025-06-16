
import ModernHeader from "@/components/ModernHeader";
import MetricdustHero from "@/components/MetricdustHero";
import AIPoweredServices from "@/components/AIPoweredServices";
import AIIndustries from "@/components/AIIndustries";
import AIExpertise from "@/components/AIExpertise";
import AISuccessStories from "@/components/AISuccessStories";
import MetricdustFooter from "@/components/MetricdustFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ModernHeader />
      {/* Add padding-top to account for fixed header */}
      <div className="pt-16">
        <MetricdustHero />
        <AIPoweredServices />
        <AIIndustries />
        <AIExpertise />
        <AISuccessStories />
        <MetricdustFooter />
      </div>
    </div>
  );
};

export default Index;
