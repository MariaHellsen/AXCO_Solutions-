import { Target, Users, Lightbulb } from "lucide-react";

const audiences = [
  {
    icon: Target,
    title: "Planning European Expansion",
    description:
      "Technology manufacturers ready to enter or expand in European markets with a structured, low-risk approach.",
  },
  {
    icon: Lightbulb,
    title: "Strong Products, Limited Presence",
    description:
      "Companies with proven solutions seeking to establish credibility and partnerships across European countries.",
  },
  {
    icon: Users,
    title: "Seeking Trusted Introductions",
    description:
      "Businesses looking for validated market insight and quality connections to distributors, integrators, and resellers.",
  },
];

export function WhoWeSupport() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Who We Support
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            We work with international technology companies serious about building 
            sustainable European market presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {audiences.map((item, index) => (
            <div
              key={item.title}
              className="group p-6 rounded-xl bg-card card-elevated animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
