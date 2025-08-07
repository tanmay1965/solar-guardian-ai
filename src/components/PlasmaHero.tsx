import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Satellite, Brain, Clock } from "lucide-react";
import solarStormImage from "@/assets/solar-storm-hero.jpg";

export const PlasmaHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={solarStormImage} 
          alt="Solar Storm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-space/90 via-space/80 to-space/95" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-solar rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cosmic rounded-full animate-ping" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-solar via-primary to-cosmic bg-clip-text text-transparent">
              PlasmaNet
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              AI-Powered Solar Storm Early Warning System
            </p>
          </div>

          {/* Key Features Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
              <Shield className="w-8 h-8 text-solar mb-3 mx-auto" />
              <h3 className="font-semibold text-sm">Infrastructure Protection</h3>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
              <Satellite className="w-8 h-8 text-cosmic mb-3 mx-auto" />
              <h3 className="font-semibold text-sm">Aditya-L1 Integration</h3>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
              <Brain className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-sm">AI Prediction Models</h3>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
              <Clock className="w-8 h-8 text-alert-warning mb-3 mx-auto" />
              <h3 className="font-semibold text-sm">6-12 Hour Lead Time</h3>
            </Card>
          </div>

          {/* Main Description */}
          <div className="mb-12 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
              Protect critical infrastructure from solar storms using India's Aditya-L1 satellite data and advanced AI models. 
              Get early warnings 6-12 hours before geomagnetic storms impact Earth.
            </p>
            
            <div className="bg-gradient-to-r from-cosmic/20 to-solar/20 rounded-lg p-6 border border-cosmic/30">
              <p className="text-muted-foreground">
                <strong className="text-solar">Current Challenge:</strong> Solar storms like CMEs disrupt satellites, power grids, aviation, and communications with limited warning time.
              </p>
              <p className="text-muted-foreground mt-2">
                <strong className="text-cosmic">PlasmaNet Solution:</strong> Real-time AI analysis of particle and magnetic field data for Earth-impact focused predictions.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              View Live Dashboard
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Integration Guide
            </Button>
          </div>

          {/* Partners/Target Audience */}
          <div className="mt-16 pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-4">Trusted by Critical Infrastructure Sectors</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-foreground/70">
              <span>ISRO</span>
              <span>•</span>
              <span>NDMA</span>
              <span>•</span>
              <span>Power Grid Operators</span>
              <span>•</span>
              <span>Aviation Safety</span>
              <span>•</span>
              <span>Satellite Companies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};