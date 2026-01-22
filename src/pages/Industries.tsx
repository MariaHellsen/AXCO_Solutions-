import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Wifi, Lock, TrafficCone, Building2, TrendingUp, AlertTriangle, Globe, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-europe.jpg";
import { useParallax } from "@/hooks/use-parallax";


const industries = [
  {
    icon: Shield,
    title: "Physical Security",
    description:
      "Video surveillance, intrusion detection, perimeter protection, and integrated security systems.",
    marketSize: "€28B",
    growthRate: "+6.2%",
    complexity: 85,
    challenges: [
      "Fragmented distribution landscape",
      "Strong local integrator networks",
      "Varying standards across countries",
      "Complex tender processes",
    ],
  },
  {
    icon: Wifi,
    title: "IT & Networking",
    description:
      "Network infrastructure, wireless solutions, data center equipment, and IT services.",
    marketSize: "€142B",
    growthRate: "+8.4%",
    complexity: 78,
    challenges: [
      "Established vendor relationships",
      "Channel loyalty and margins",
      "Technical certification requirements",
      "Enterprise sales complexity",
    ],
  },
  {
    icon: Lock,
    title: "Access Control",
    description:
      "Electronic access control, identity management, and visitor management systems.",
    marketSize: "€4.8B",
    growthRate: "+7.1%",
    complexity: 72,
    challenges: [
      "Integration requirements",
      "Local compliance needs",
      "Installer network dependencies",
      "End-user specification influence",
    ],
  },
  {
    icon: TrafficCone,
    title: "Traffic Management",
    description:
      "Traffic monitoring, smart transportation, parking solutions, and urban mobility systems.",
    marketSize: "€12B",
    growthRate: "+9.8%",
    complexity: 92,
    challenges: [
      "Public sector procurement",
      "Long sales cycles",
      "Local reference requirements",
      "Integration with existing infrastructure",
    ],
  },
  {
    icon: Building2,
    title: "Smart Infrastructure",
    description:
      "Building automation, energy management, IoT platforms, and smart city solutions.",
    marketSize: "€35B",
    growthRate: "+11.2%",
    complexity: 88,
    challenges: [
      "Ecosystem complexity",
      "Multiple stakeholder involvement",
      "Standards and interoperability",
      "Pilot project requirements",
    ],
  },
];

const IndustriesPage = () => {
  const parallaxOffset = useParallax(0.3);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="European business district"
            className="w-full h-full object-cover"
            style={{ transform: `translateY(${parallaxOffset}px) scale(1.1)` }}
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary-foreground animate-fade-in-up">
              Industries We Work With
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80 leading-relaxed animate-fade-in-up delay-100">
              We specialize in helping technology manufacturers in security,
              networking, and infrastructure sectors navigate European markets.
            </p>
          </div>
        </div>
      </section>


      {/* Industries - Data-Driven Design */}
      <section className="section-padding bg-background relative">
        {/* Subtle gradient transition from previous section */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              European Market Landscape
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Deep expertise across high-growth technology sectors with unique European dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Industry Info */}
                <div className="p-6 flex flex-col justify-center flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <industry.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {industry.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {industry.description}
                        </p>
                      </div>
                    </div>

                    {/* Data Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border/50">
                      <div>
                        <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-1">
                          <Globe className="w-3.5 h-3.5" />
                          <span>EU Market</span>
                        </div>
                        <span className="text-lg font-bold text-foreground">{industry.marketSize}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-1">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>CAGR</span>
                        </div>
                        <span className="text-lg font-bold text-green-600">{industry.growthRate}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-1">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>Entry Complexity</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-amber-400 to-red-500 rounded-full transition-all duration-700"
                              style={{ width: `${industry.complexity}%` }}
                            />
                          </div>
                          <span className="text-xs font-semibold text-foreground">{industry.complexity}%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                {/* Challenges */}
                <div className="bg-axco-900/5 p-6 mt-auto">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    Market Entry Challenges
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.challenges.map((challenge, i) => (
                      <div 
                        key={challenge} 
                        className="flex items-start gap-2 bg-background/60 backdrop-blur-sm rounded-lg p-2.5 border border-border/30"
                      >
                        <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary">
                          {i + 1}
                        </span>
                        <span className="text-xs text-muted-foreground leading-tight">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AXCO Solution Bridge */}
      <section className="py-10 bg-gradient-to-b from-background via-axco-900/5 to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-primary/20 p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Navigate Complexity With Confidence
                  </h3>
                  <p className="text-muted-foreground">
                    Our deep industry experience means we understand these challenges—and how to address them strategically.
                  </p>
                </div>
                <Link to="/approach">
                  <Button variant="outline" className="flex-shrink-0">
                    Our Approach
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Industries */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Other Technology Sectors
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              While we specialize in the industries above, we also work with
              technology manufacturers in adjacent sectors. If your product
              addresses European enterprise or infrastructure markets, we'd
              be happy to discuss how we might help.
            </p>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Discuss Your Industry
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground tracking-tight mb-2">
            Ready to Explore European Markets?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Let's discuss how our industry expertise can support your expansion.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="xl">
              Schedule a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="mt-3 text-sm text-primary-foreground/70">
            No commitment required. We'll discuss your specific situation and goals.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default IndustriesPage;
