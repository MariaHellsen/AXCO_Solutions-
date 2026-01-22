import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Presentation, Users, CheckCircle2 } from "lucide-react";

const servicePackages = [
  {
    icon: Globe,
    title: "European Market Entry Program",
    duration: "3–6 months",
    description: "Comprehensive market entry support from assessment to partner acquisition.",
    features: [
      "Market assessment (countries, channels, competitors)",
      "Partner shortlisting",
      "10–15 qualified meetings",
      "Roadshow planning & execution",
      "Post-mission follow-up support",
    ],
  },
  {
    icon: Presentation,
    title: "Trade Show ROI Accelerator",
    duration: "Event-based",
    description: "Maximize your trade show investment with pre-arranged meetings and on-site support.",
    features: [
      "Trade show selection",
      "Pre-arranged meetings with distributors/integrators",
      "On-site support",
      "Side visits to key partners",
      "Post-show lead conversion",
    ],
  },
  {
    icon: Users,
    title: "Partner Channel Development",
    duration: "Ongoing",
    description: "Build and manage a high-performing partner network across Europe.",
    features: [
      "Distributor recruitment",
      "Integrator onboarding",
      "Pricing & channel strategy guidance",
      "Ongoing partner management support",
    ],
  },
];

const ApproachPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-primary rounded-full" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Example Service Packages</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground leading-tight tracking-tight mb-4 max-w-2xl">
            Flexible Engagement Models for Your European Expansion
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Choose the package that fits your stage and goals. Each can be customized to your specific requirements.
          </p>
        </div>
      </section>

      {/* Service Packages Grid */}
      <section className="pt-4 pb-12 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicePackages.map((pkg, index) => (
              <div
                key={pkg.title}
                className="relative flex flex-col bg-card rounded-2xl border-2 border-border/50 hover:border-primary hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6 flex-1 flex flex-col">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-primary/10">
                    <pkg.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title & Duration */}
                  <h3 className="text-xl font-bold text-foreground mb-1">{pkg.title}</h3>
                  <span className="text-sm text-primary font-medium mb-3">{pkg.duration}</span>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 flex-1">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <Link to="/contact" className="w-full">
                      <Button
                        variant="outline"
                        className="w-full"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Note */}
          <p className="text-center text-muted-foreground mt-8 text-sm">
            Need something different? We create custom engagements tailored to your specific situation.{" "}
            <Link to="/contact" className="text-primary font-medium hover:underline">
              Let's discuss →
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground tracking-tight mb-2">
            Get in Touch
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Let AXCO Solutions help your business thrive in international markets.<br />
            Contact us today to learn more about how our strategic consultancy can drive your success in Europe.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="xl">
              Schedule a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ApproachPage;
