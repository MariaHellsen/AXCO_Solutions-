import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users, FileText, Languages, TrendingUp, Shield } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "Market Opportunity",
    description:
      "Europe represents one of the world's largest and most sophisticated markets for technology products, with high purchasing power and demand for innovative solutions.",
  },
  {
    icon: Globe,
    title: "Market Fragmentation",
    description:
      "Europe is not one market—it's 40+ countries with different languages, regulations, and business cultures. Local expertise is essential for success.",
  },
  {
    icon: FileText,
    title: "Regulatory Complexity",
    description:
      "CE marking, GDPR, NIS2, and industry-specific regulations require careful navigation. Understanding compliance is critical before market entry.",
  },
  {
    icon: Languages,
    title: "Language & Culture",
    description:
      "Business is conducted differently across Europe. Understanding local expectations, negotiation styles, and relationship norms matters.",
  },
  {
    icon: Users,
    title: "Channel Structures",
    description:
      "Distribution channels, integrator networks, and buying processes vary significantly. The right partners unlock the right customers.",
  },
  {
    icon: Shield,
    title: "Trust & Relationships",
    description:
      "European business culture values trust and long-term relationships. Building credibility takes time and the right introductions.",
  },
];

const stats = [
  { value: "450M+", label: "Population" },
  { value: "$18T+", label: "GDP" },
  { value: "27", label: "EU Countries" },
  { value: "40+", label: "European Markets" },
];

const WhyEuropePage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Why Europe?
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80 leading-relaxed">
              Europe offers tremendous opportunity—but also significant complexity. 
              Understanding why local presence and partnerships matter is the first 
              step to successful expansion.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Understanding the European Market
            </h2>
            <p className="text-lg text-muted-foreground">
              Why simply "going to Europe" isn't enough—and what you need to consider.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="p-8 rounded-xl bg-card card-elevated">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Presence */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Local Presence Matters
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                European customers and partners prefer working with companies that 
                demonstrate commitment to the market. Local presence—whether through 
                offices, partnerships, or dedicated support—builds trust and 
                credibility.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                But building a local team is expensive and risky before you've 
                validated the market. That's where partners come in—and where we 
                can help you find the right ones.
              </p>
              <Link to="/approach">
                <Button variant="outline" size="lg">
                  Learn About Our Approach
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="bg-card rounded-2xl p-8 card-elevated">
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-1">Without Local Presence</h4>
                  <p className="text-sm text-muted-foreground">
                    Limited market understanding, missed opportunities, slower sales cycles, 
                    and difficulty building trust with European buyers.
                  </p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border-2 border-primary/20">
                  <h4 className="font-semibold text-foreground mb-1">With AXCO Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Local market insight, validated partner introductions, faster market 
                    entry, and reduced risk—without the overhead of building a local team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Explore European Markets?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your expansion goals and how we can help you navigate 
            European complexity.
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

export default WhyEuropePage;
