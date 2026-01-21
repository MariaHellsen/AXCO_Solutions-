import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useParallax } from "@/hooks/use-parallax";

import heroImage from "@/assets/hero-about-europe.jpg";
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
  const parallaxOffset = useParallax(0.3);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="European business district skyline"
            className="w-full h-full object-cover scale-110"
            style={{ transform: `translateY(${parallaxOffset}px) scale(1.1)` }}
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight tracking-tight animate-fade-in-up">
              Our Services
            </h1>
            <p className="mt-6 text-2xl sm:text-3xl text-primary-foreground/90 leading-relaxed max-w-3xl animate-fade-in-up delay-100">
              Structured services designed to reduce risk and accelerate your European market entry—without replacing your internal sales team
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail - Alternating Layout with Images */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-6 items-center`}
              >
                {/* Image - 40% smaller */}
                <div className="w-full lg:w-[30%]">
                  <div className="relative overflow-hidden rounded-xl shadow-elegant group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-[70%] space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Explore European Markets?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can support your European expansion goals.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Schedule a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
