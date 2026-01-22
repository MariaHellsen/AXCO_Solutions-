import { Globe, Users, Languages, Network } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    stat: "20+",
    label: "Years Experience",
    description: "Two decades of helping technology companies navigate European markets successfully.",
  },
  {
    icon: Users,
    stat: "25+",
    label: "Countries",
    description: "Deep understanding of local business cultures across European markets.",
  },
  {
    icon: Languages,
    stat: "8+",
    label: "Languages",
    description: "Multilingual team with pan-European exposure and native market insight.",
  },
  {
    icon: Network,
    stat: "500+",
    label: "Partners Network",
    description: "Established long-term relationships with distributors, integrators, and industry players.",
  },
];

export function WhyAXCO() {
  return (
    <section className="section-padding bg-axco-900/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Why AXCO Solutions
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            The experience and relationships to open doors across Europe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {reasons.map((reason, index) => (
            <div
              key={reason.label}
              className="group text-center p-5 rounded-xl bg-card card-elevated animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{reason.stat}</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                {reason.label}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
