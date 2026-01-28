import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { DeepDiveSection } from "@/components/DeepDiveSection";
import { InteractiveExplainers } from "@/components/InteractiveExplainers";
import { ToolingSection } from "@/components/ToolingSection";
import { LearningModeSection } from "@/components/LearningModeSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <RoadmapSection />
      <DeepDiveSection />
      <InteractiveExplainers />
      <div id="ecosystem">
        <ToolingSection />
      </div>
      <LearningModeSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
