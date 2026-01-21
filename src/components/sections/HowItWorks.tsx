import { CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Objectives",
    description:
      "We begin with understanding your products, target markets, expansion goals, and specific requirements for European partnerships.",
  },
  {
    number: "02",
    title: "Market & Partner Research",
    description:
      "Comprehensive research into market opportunities, competitive landscape, and systematic identification of potential partners.",
  },
  {
    number: "03",
    title: "Shortlisting & Validation",
    description:
      "Rigorous validation of identified partners—assessing capabilities, reputation, and strategic fit for your business.",
  },
  {
    number: "04",
    title: "Introductions & Support",
    description:
      "Structured business introductions with ongoing advisory support to help build lasting, productive partnerships.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            How It Works
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            A structured, transparent process designed to reduce risk and deliver results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-2">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative p-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                </div>
              )}

              {/* Step number */}
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4 relative z-10">
                <span className="text-lg font-bold text-primary-foreground">
                  {step.number}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-6 pt-5 border-t border-border">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Transparent process</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Results-focused</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
