import { PlasmaHero } from "@/components/PlasmaHero";
import { PlasmaFeatures } from "@/components/PlasmaFeatures";
import { PlasmaDashboard } from "@/components/PlasmaDashboard";
import { PlasmaContact } from "@/components/PlasmaContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PlasmaHero />
      <PlasmaFeatures />
      <PlasmaDashboard />
      <PlasmaContact />
    </div>
  );
};

export default Index;
