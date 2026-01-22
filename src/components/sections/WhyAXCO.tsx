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
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Why AXCO Solutions
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            The experience and relationships to open doors across Europe.
          </p>
        </div>

        {/* Horizontal Stats Strip */}
        <div className="bg-card rounded-2xl shadow-sm border border-border/50 p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {reasons.map((reason, index) => (
              <div
                key={reason.label}
                className="relative text-center lg:text-left animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Divider for desktop (except first item) */}
                {index > 0 && (
                  <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-border" />
                )}
                
                <div className="lg:pl-6">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <reason.icon className="w-5 h-5 text-primary" />
                    <span className="text-3xl sm:text-4xl font-bold text-foreground">
                      {reason.stat}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-primary uppercase tracking-wider mb-1">
                    {reason.label}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed hidden sm:block">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
