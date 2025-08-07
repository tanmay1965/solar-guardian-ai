import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  Globe, 
  FileText, 
  Shield, 
  Zap,
  Building2,
  Plane,
  Satellite,
  Factory
} from "lucide-react";

export const PlasmaContact = () => {
  const sectors = [
    {
      icon: Building2,
      name: "Government Agencies",
      description: "ISRO, NDMA, and emergency response coordination",
      examples: ["Space weather monitoring", "Disaster preparedness", "National security"],
      color: "cosmic"
    },
    {
      icon: Zap,
      name: "Power Grid Operators",
      description: "Electrical infrastructure protection and grid stability",
      examples: ["Transformer protection", "Load management", "Outage prevention"],
      color: "solar"
    },
    {
      icon: Plane,
      name: "Aviation Industry",
      description: "Flight safety and communication system protection",
      examples: ["Route planning", "Communication backup", "Crew radiation safety"],
      color: "primary"
    },
    {
      icon: Satellite,
      name: "Satellite Companies",
      description: "Spacecraft operations and asset protection",
      examples: ["Orbit adjustments", "System hardening", "Mission planning"],
      color: "alert-warning"
    }
  ];

  const integrationSteps = [
    {
      step: "1",
      title: "Technical Assessment",
      description: "Evaluate your infrastructure and integration requirements"
    },
    {
      step: "2", 
      title: "API Configuration",
      description: "Set up secure data feeds and alert endpoints"
    },
    {
      step: "3",
      title: "Testing & Validation",
      description: "Verify alert delivery and data accuracy"
    },
    {
      step: "4",
      title: "Go Live",
      description: "Begin receiving real-time solar storm predictions"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-space-light to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-solar to-cosmic bg-clip-text text-transparent">
            Partner With PlasmaNet
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join India's premier solar storm early warning network and protect your critical infrastructure
          </p>
        </div>

        {/* Target Sectors */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Critical Infrastructure Sectors
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <Card key={index} className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300 group">
                <div className="text-center">
                  <div className={`p-4 rounded-full w-fit mx-auto mb-4 bg-gradient-to-br ${
                    sector.color === 'cosmic' ? 'from-cosmic/20 to-cosmic/10' :
                    sector.color === 'solar' ? 'from-solar/20 to-solar/10' :
                    sector.color === 'primary' ? 'from-primary/20 to-primary/10' :
                    'from-alert-warning/20 to-alert-warning/10'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <sector.icon className={`w-8 h-8 ${
                      sector.color === 'cosmic' ? 'text-cosmic' :
                      sector.color === 'solar' ? 'text-solar' :
                      sector.color === 'primary' ? 'text-primary' :
                      'text-alert-warning'
                    }`} />
                  </div>
                  <h4 className="font-semibold text-foreground mb-3">{sector.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{sector.description}</p>
                  <div className="space-y-2">
                    {sector.examples.map((example, i) => (
                      <Badge key={i} variant="outline" className="text-xs mx-1">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Integration Process */}
        <div className="mb-20">
          <Card className="p-8 md:p-12 bg-gradient-to-r from-cosmic/10 to-solar/10 border-cosmic/20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              Integration Process
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {integrationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-solar to-primary mx-auto flex items-center justify-center text-2xl font-bold text-solar-foreground">
                      {step.step}
                    </div>
                    {index < integrationSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-solar/50 to-cosmic/50" />
                    )}
                  </div>
                  <h4 className="font-semibold text-foreground mb-3">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8 bg-card/80 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-foreground">
              <Shield className="w-6 h-6 text-solar" />
              Get Started Today
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ready to integrate PlasmaNet into your infrastructure? Our team of space weather experts and 
              engineers will work with you to implement a tailored early warning solution.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-solar/20">
                  <Mail className="w-5 h-5 text-solar" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Contact Email</div>
                  <div className="text-muted-foreground">plasmanet@isro.gov.in</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-cosmic/20">
                  <Phone className="w-5 h-5 text-cosmic" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Support Hotline</div>
                  <div className="text-muted-foreground">+91-80-PLASMANET</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/20">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Technical Portal</div>
                  <div className="text-muted-foreground">api.plasmanet.isro.gov.in</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="solar" className="flex-1">
                Request Integration
              </Button>
              <Button variant="outline" className="flex-1">
                View Documentation
              </Button>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-cosmic/10 to-solar/10 border-cosmic/20">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Why Choose PlasmaNet?
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-solar/20 mt-1">
                  <Satellite className="w-4 h-4 text-solar" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">India's Space Leadership</h4>
                  <p className="text-sm text-muted-foreground">Powered by ISRO's Aditya-L1 mission and decades of space expertise</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-cosmic/20 mt-1">
                  <Shield className="w-4 h-4 text-cosmic" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Mission-Critical Reliability</h4>
                  <p className="text-sm text-muted-foreground">99.9% uptime with redundant systems and fail-safe protocols</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/20 mt-1">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Comprehensive Support</h4>
                  <p className="text-sm text-muted-foreground">24/7 technical support with dedicated integration specialists</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-alert-warning/20 mt-1">
                  <Factory className="w-4 h-4 text-alert-warning" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Industry Partnerships</h4>
                  <p className="text-sm text-muted-foreground">Trusted by leading organizations across critical infrastructure sectors</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/50">
              <Badge className="bg-gradient-to-r from-solar/20 to-cosmic/20 text-foreground border-solar/30 mb-4">
                Available 24/7 for Critical Infrastructure
              </Badge>
              <p className="text-sm text-muted-foreground">
                Our emergency response team is ready to assist with urgent space weather events and system integrations.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};