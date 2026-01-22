import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Wifi, Lock, TrafficCone, Building2 } from "lucide-react";
import heroImage from "@/assets/hero-europe.jpg";
import { useParallax } from "@/hooks/use-parallax";
import { WhoWeSupport } from "@/components/sections/WhoWeSupport";

const industries = [
  {
    icon: Shield,
    title: "Physical Security",
    description:
      "Video surveillance, intrusion detection, perimeter protection, and integrated security systems.",
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

      {/* Who We Support */}
      <WhoWeSupport />

      {/* Industries */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-6">
                    <industry.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    {industry.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {industry.description}
                  </p>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} bg-slate-50 rounded-2xl p-8`}>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Typical European Market Challenges
                  </h3>
                  <ul className="space-y-3">
                    {industry.challenges.map((challenge) => (
                      <li key={challenge} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
