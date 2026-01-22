import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import europeMapImg from "@/assets/service-europe-map.jpg";
import euSymbolImg from "@/assets/service-eu-symbol.jpg";
import frankfurtImg from "@/assets/service-frankfurt.jpg";
import euFlagsImg from "@/assets/service-eu-flags.jpg";
import trainBridgeImg from "@/assets/service-train-bridge.jpg";

const services = [
  {
    title: "Market Assessment & Business Expansion",
    description:
      "We evaluate opportunities for entering new markets or expanding existing operations, providing you with actionable insights to grow your business.",
    image: europeMapImg,
  },
  {
    title: "Targeted Commercial Development",
    description:
      "We help you build new commercial contacts in key sectors identified by you or suggested by our team, ensuring that every opportunity aligns with your business goals.",
    image: euSymbolImg,
  },
  {
    title: "Mission Organization & Management",
    description:
      "Our team organizes and manages business missions, facilitating valuable meetings and partnerships that drive growth.",
    image: frankfurtImg,
  },
  {
    title: "Strategic Trade Show Amplification",
    description:
      "Our team helps you choose the right trade show for your goals and arrange the best way of representation, logistics, side events, potential customer visits.",
    image: euFlagsImg,
  },
  {
    title: "Marketing & Communication Strategy",
    description:
      "We develop effective marketing and communication initiatives to strengthen your presence and impact in international markets.",
    image: trainBridgeImg,
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="section-padding bg-background scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            What We Do
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Structured services designed to reduce risk and accelerate your 
            European market entry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-elegant transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
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
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/services">
            <Button variant="outline" size="lg">
              Explore All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
