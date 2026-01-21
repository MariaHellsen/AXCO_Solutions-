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
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Why AXCO Solutions
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/70">
            The experience and relationships to open doors across Europe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.label}
              className="text-center p-6 rounded-xl bg-primary-foreground/5 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="text-4xl font-bold mb-1">{reason.stat}</div>
              <div className="text-sm font-medium text-primary-foreground/90 uppercase tracking-wider mb-3">
                {reason.label}
              </div>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
