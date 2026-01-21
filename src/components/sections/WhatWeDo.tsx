import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Handshake, Calendar, Users } from "lucide-react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "European Market Research & Opportunity Assessment",
    description:
      "Comprehensive analysis of market potential, competitive landscape, regulatory requirements, and entry strategies tailored to your technology and target countries.",
  },
  {
    icon: Handshake,
    title: "Partner & Channel Identification",
    description:
      "Systematic identification and profiling of potential distributors, integrators, resellers, and strategic partners across European markets.",
  },
  {
    icon: Calendar,
    title: "Strategic Business Introductions",
    description:
      "Facilitation of high-quality, pre-qualified meetings with validated partners—prepared and positioned for productive business discussions.",
  },
  {
    icon: Users,
    title: "Trade Fair & Market Visit Support",
    description:
      "Expert guidance for trade fairs, business missions, and market visits to maximize your European presence and networking opportunities.",
  },
];

export function WhatWeDo() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            What We Do
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Structured services designed to reduce risk and accelerate your 
            European market entry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-xl bg-card card-elevated animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <service.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 text-center">
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
