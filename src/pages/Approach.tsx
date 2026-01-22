import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Search, CheckCircle, Handshake } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Discovery & Objectives Definition",
    description:
      "We start by understanding your business, products, target markets, and specific goals for European expansion. This phase establishes clear objectives and success criteria.",
    details: [
      "In-depth business and product review",
      "Target market identification",
      "Success criteria definition",
      "Timeline and resource planning",
    ],
  },
  {
    number: "02",
    icon: Search,
    title: "Market & Partner Research",
    description:
      "Comprehensive research into your target European markets, including competitive analysis, regulatory considerations, and systematic identification of potential partners.",
    details: [
      "Market opportunity assessment",
      "Competitive landscape analysis",
      "Regulatory and compliance review",
      "Partner universe identification",
    ],
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Partner Shortlisting & Validation",
    description:
      "Rigorous validation of identified partners—assessing their capabilities, reputation, market position, and strategic fit for your specific requirements.",
    details: [
      "Partner capability assessment",
      "Reputation and references check",
      "Strategic fit evaluation",
      "Shortlist presentation and discussion",
    ],
  },
  {
    number: "04",
    icon: Handshake,
    title: "Structured Introductions & Ongoing Support",
    description:
      "High-quality business introductions with validated partners, followed by ongoing advisory support to help develop lasting, productive relationships.",
    details: [
      "Meeting preparation and briefing",
      "Introduction facilitation",
      "Relationship development support",
      "Ongoing advisory as needed",
    ],
  },
];

const ApproachPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Our Approach
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80 leading-relaxed">
              A structured, transparent methodology focused on preparation, 
              validation, and risk reduction—not aggressive sales tactics.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Philosophy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              European market entry should be approached methodically. We believe in 
              thorough preparation, validated introductions, and building genuine 
              relationships—not shortcuts that lead to failed partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Preparation Over Speed",
                description: "Taking time to understand markets and validate partners leads to better outcomes than rushing to make deals.",
              },
              {
                title: "Quality Over Quantity",
                description: "A few well-matched, validated partners are more valuable than a long list of unqualified contacts.",
              },
              {
                title: "Relationships Over Transactions",
                description: "Building trust and long-term partnerships matters more than quick wins.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-slate-50">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16">
            Our Four-Step Process
          </h2>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-xl font-bold text-primary-foreground">
                        {step.number}
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3 text-foreground">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} bg-card rounded-2xl p-8 card-elevated`}>
                  <div className="aspect-square flex items-center justify-center">
                    <step.icon className="w-32 h-32 text-primary/10" />
                  </div>
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
            Ready to Start?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Let's discuss your European expansion goals in a free consultation.
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

export default ApproachPage;
