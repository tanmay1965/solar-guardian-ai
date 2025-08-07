import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu, 
  Database, 
  AlertTriangle, 
  TrendingUp, 
  Globe, 
  Zap,
  Timer,
  Users
} from "lucide-react";
import adityaImage from "@/assets/aditya-l1-satellite.jpg";

export const PlasmaFeatures = () => {
  const features = [
    {
      icon: Database,
      title: "Real-time Aditya-L1 Data Ingestion",
      description: "Continuous monitoring of particle and magnetic field data from India's premier solar observatory",
      status: "live",
      color: "cosmic"
    },
    {
      icon: Cpu,
      title: "LSTM/Transformer AI Models",
      description: "Advanced deep learning algorithms trained on space weather patterns for accurate storm prediction",
      status: "active",
      color: "solar"
    },
    {
      icon: Timer,
      title: "6-12 Hour Lead Time Predictions",
      description: "Critical early warning window allowing infrastructure operators to take protective measures",
      status: "critical",
      color: "primary"
    },
    {
      icon: AlertTriangle,
      title: "Multi-Level Alert System",
      description: "Automated alerts categorized by severity and targeted to specific infrastructure sectors",
      status: "ready",
      color: "alert-warning"
    }
  ];

  const capabilities = [
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast solar storm intensity and Earth-impact probability",
      metrics: "94% accuracy"
    },
    {
      icon: Globe,
      title: "Global Impact Assessment",
      description: "Regional risk analysis for critical infrastructure protection",
      metrics: "200+ sectors monitored"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Sub-second analysis of incoming satellite telemetry",
      metrics: "<100ms latency"
    },
    {
      icon: Users,
      title: "Multi-Stakeholder API",
      description: "Secure data access for government and industry partners",
      metrics: "24/7 availability"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-space-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-solar to-cosmic bg-clip-text text-transparent">
            Core Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            PlasmaNet combines cutting-edge AI with India's space technology for unprecedented solar storm detection
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-cosmic/20 to-solar/20 group-hover:from-cosmic/30 group-hover:to-solar/30 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-solar" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        feature.status === 'live' ? 'border-alert-safe text-alert-safe' :
                        feature.status === 'critical' ? 'border-alert-critical text-alert-critical' :
                        feature.status === 'active' ? 'border-solar text-solar' :
                        'border-primary text-primary'
                      }`}
                    >
                      {feature.status.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Aditya-L1 Integration Section */}
        <div className="mb-20">
          <Card className="overflow-hidden bg-gradient-to-r from-cosmic/10 to-solar/10 border-cosmic/20">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold mb-6 text-foreground">
                  Powered by Aditya-L1
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  India's first dedicated solar mission provides continuous, high-quality data from the L1 Lagrange point, 
                  1.5 million kilometers from Earth - the perfect vantage point for solar observation.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-solar rounded-full" />
                    <span className="text-foreground">Continuous plasma parameter monitoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cosmic rounded-full" />
                    <span className="text-foreground">Magnetic field vector analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">Solar wind velocity measurements</span>
                  </div>
                </div>
                <Button variant="solar" size="lg">
                  Explore Data Integration
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={adityaImage} 
                  alt="Aditya-L1 Satellite"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/20" />
              </div>
            </div>
          </Card>
        </div>

        {/* Technical Capabilities */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Advanced Analytics & Processing
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="p-6 text-center bg-card/60 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 group">
                <div className="p-3 rounded-full bg-gradient-to-br from-cosmic/20 to-solar/20 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="w-6 h-6 text-solar" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{capability.title}</h4>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{capability.description}</p>
                <Badge variant="outline" className="text-xs text-solar border-solar/30">
                  {capability.metrics}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};