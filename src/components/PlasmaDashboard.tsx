import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle, 
  Clock,
  Gauge,
  BarChart3,
  Wifi
} from "lucide-react";
import dashboardImage from "@/assets/dashboard-mockup.jpg";

export const PlasmaDashboard = () => {
  const currentStatus = {
    stormLevel: "Low",
    probability: "15%",
    nextUpdate: "14:30 UTC",
    dataStatus: "Live"
  };

  const recentAlerts = [
    { time: "12:45 UTC", level: "Advisory", message: "Minor solar wind fluctuation detected" },
    { time: "08:20 UTC", level: "Normal", message: "Background solar activity nominal" },
    { time: "06:15 UTC", level: "Watch", message: "CME detected, Earth impact unlikely" }
  ];

  const metrics = [
    { label: "Solar Wind Speed", value: "425 km/s", trend: "stable", icon: Activity },
    { label: "Magnetic Field", value: "6.2 nT", trend: "increasing", icon: TrendingUp },
    { label: "Particle Density", value: "8.3 p/cm³", trend: "decreasing", icon: BarChart3 },
    { label: "Data Quality", value: "98.7%", trend: "excellent", icon: Gauge }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cosmic to-primary bg-clip-text text-transparent">
            Real-Time Monitoring Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous monitoring and AI-powered analysis of solar activity for mission-critical early warnings
          </p>
        </div>

        {/* Current Status Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 bg-gradient-to-br from-alert-safe/20 to-alert-safe/10 border-alert-safe/30">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-5 h-5 text-alert-safe" />
              <span className="text-sm font-medium text-muted-foreground">Storm Level</span>
            </div>
            <div className="text-2xl font-bold text-alert-safe">{currentStatus.stormLevel}</div>
          </Card>
          
          <Card className="p-6 bg-gradient-to-br from-primary/20 to-primary/10 border-primary/30">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Impact Probability</span>
            </div>
            <div className="text-2xl font-bold text-primary">{currentStatus.probability}</div>
          </Card>
          
          <Card className="p-6 bg-gradient-to-br from-cosmic/20 to-cosmic/10 border-cosmic/30">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-cosmic" />
              <span className="text-sm font-medium text-muted-foreground">Next Update</span>
            </div>
            <div className="text-2xl font-bold text-cosmic">{currentStatus.nextUpdate}</div>
          </Card>
          
          <Card className="p-6 bg-gradient-to-br from-solar/20 to-solar/10 border-solar/30">
            <div className="flex items-center gap-3 mb-2">
              <Wifi className="w-5 h-5 text-solar" />
              <span className="text-sm font-medium text-muted-foreground">Data Status</span>
            </div>
            <div className="text-2xl font-bold text-solar">{currentStatus.dataStatus}</div>
          </Card>
        </div>

        {/* Main Dashboard Preview */}
        <div className="mb-16">
          <Card className="overflow-hidden bg-card/80 backdrop-blur-sm">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Dashboard Image */}
              <div className="lg:col-span-2 relative">
                <img 
                  src={dashboardImage} 
                  alt="PlasmaNet Dashboard Interface"
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-alert-safe text-alert-safe-foreground">
                    LIVE DATA
                  </Badge>
                </div>
              </div>
              
              {/* Key Metrics */}
              <div className="p-8 bg-gradient-to-b from-space-light to-card">
                <h3 className="text-xl font-bold mb-6 text-foreground">Current Metrics</h3>
                <div className="space-y-6">
                  {metrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <metric.icon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-foreground">{metric.label}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-foreground">{metric.value}</div>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            metric.trend === 'excellent' ? 'text-alert-safe border-alert-safe/30' :
                            metric.trend === 'increasing' ? 'text-solar border-solar/30' :
                            metric.trend === 'stable' ? 'text-primary border-primary/30' :
                            'text-cosmic border-cosmic/30'
                          }`}
                        >
                          {metric.trend}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-border/50">
                  <Button variant="solar" className="w-full">
                    Access Full Dashboard
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Alerts */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8 bg-card/80 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-foreground">
              <AlertCircle className="w-5 h-5 text-solar" />
              Recent Alerts
            </h3>
            <div className="space-y-4">
              {recentAlerts.map((alert, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 border border-border/30">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    alert.level === 'Watch' ? 'bg-alert-warning' :
                    alert.level === 'Advisory' ? 'bg-primary' :
                    'bg-alert-safe'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-foreground">{alert.time}</span>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          alert.level === 'Watch' ? 'text-alert-warning border-alert-warning/30' :
                          alert.level === 'Advisory' ? 'text-primary border-primary/30' :
                          'text-alert-safe border-alert-safe/30'
                        }`}
                      >
                        {alert.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{alert.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-cosmic/10 to-solar/10 border-cosmic/20">
            <h3 className="text-xl font-bold mb-6 text-foreground">Integration Options</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                <h4 className="font-semibold text-foreground mb-2">REST API Access</h4>
                <p className="text-sm text-muted-foreground mb-3">Real-time data feeds and alert endpoints for system integration</p>
                <Button variant="outline" size="sm">Documentation</Button>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                <h4 className="font-semibold text-foreground mb-2">WebSocket Streams</h4>
                <p className="text-sm text-muted-foreground mb-3">Live data streaming for mission-critical applications</p>
                <Button variant="outline" size="sm">Setup Guide</Button>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                <h4 className="font-semibold text-foreground mb-2">Custom Alerts</h4>
                <p className="text-sm text-muted-foreground mb-3">Configurable notification systems for your infrastructure</p>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};