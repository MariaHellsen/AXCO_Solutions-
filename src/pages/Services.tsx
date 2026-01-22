import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import europeMapImg from "@/assets/service-europe-map.jpg";
import euSymbolImg from "@/assets/service-eu-symbol.jpg";
import frankfurtImg from "@/assets/service-frankfurt.jpg";
import euFlagsImg from "@/assets/service-eu-flags.jpg";
import trainBridgeImg from "@/assets/service-train-bridge.jpg";

const services = [
  {
    id: "market-assessment",
    title: "Market Assessment & Business Expansion",
    description:
      "We evaluate opportunities for entering new markets or expanding existing operations, providing you with actionable insights to grow your business.",
    image: europeMapImg,
  },
  {
    id: "commercial-development",
    title: "Targeted Commercial Development",
    description:
      "We help you build new commercial contacts in key sectors identified by you or suggested by our team, ensuring that every opportunity aligns with your business goals.",
    image: euSymbolImg,
  },
  {
    id: "mission-organization",
    title: "Mission Organization & Management",
    description:
      "Our team organizes and manages business missions, facilitating valuable meetings and partnerships that drive growth.",
    image: frankfurtImg,
  },
  {
    id: "trade-show",
    title: "Strategic Trade Show Amplification",
    description:
      "Our team helps you choose the right trade show for your goals and arrange the best way of representation, logistics, side events, potential customer visits.",
    image: euFlagsImg,
  },
  {
    id: "marketing",
    title: "Marketing & Communication Strategy",
    description:
      "We develop effective marketing and communication initiatives to strengthen your presence and impact in international markets.",
    image: trainBridgeImg,
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      {/* Page Header - Minimal with accent line */}
      <section className="pt-12 pb-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-primary rounded-full" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">What We Offer</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Structured services designed to reduce risk and accelerate your European market entry—without replacing your internal sales team
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-elegant transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
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
            Let's discuss how our services can support your European expansion goals.
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

export default ServicesPage;
