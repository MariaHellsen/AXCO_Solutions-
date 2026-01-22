import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Briefcase, Flag, Megaphone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Market Assessment & Business Expansion",
    description:
      "We evaluate opportunities for entering new markets or expanding existing operations, providing you with actionable insights to grow your business.",
  },
  {
    icon: Target,
    title: "Targeted Commercial Development",
    description:
      "We help you build new commercial contacts in key sectors identified by you or suggested by our team, ensuring that every opportunity aligns with your business goals.",
  },
  {
    icon: Briefcase,
    title: "Mission Organization & Management",
    description:
      "Our team organizes and manages business missions, facilitating valuable meetings and partnerships that drive growth.",
  },
  {
    icon: Flag,
    title: "Strategic Trade Show Amplification",
    description:
      "Our team helps you choose the right trade show for your goals and arrange the best way of representation, logistics, side events, potential customer visits.",
  },
  {
    icon: Megaphone,
    title: "Marketing & Communication Strategy",
    description:
      "We develop effective marketing and communication initiatives to strengthen your presence and impact in international markets.",
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="section-padding bg-axco-900 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            What We Do
          </h2>
          <p className="mt-2 text-lg text-white/80">
            Structured services designed to reduce risk and accelerate your 
            European market entry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
