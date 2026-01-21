import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Target, Briefcase, Flag, Megaphone, ArrowRight, CheckCircle, XCircle } from "lucide-react";

const services = [
  {
    id: "market-assessment",
    icon: TrendingUp,
    title: "Market Assessment & Business Expansion",
    description:
      "We evaluate opportunities for entering new markets or expanding existing operations, providing you with actionable insights to grow your business.",
  },
  {
    id: "commercial-development",
    icon: Target,
    title: "Targeted Commercial Development",
    description:
      "We help you build new commercial contacts in key sectors identified by you or suggested by our team, ensuring that every opportunity aligns with your business goals.",
  },
  {
    id: "mission-organization",
    icon: Briefcase,
    title: "Mission Organization & Management",
    description:
      "Our team organizes and manages business missions, facilitating valuable meetings and partnerships that drive growth.",
  },
  {
    id: "trade-show",
    icon: Flag,
    title: "Strategic Trade Show Amplification",
    description:
      "Our team helps you choose the right trade show for your goals and arrange the best way of representation, logistics, side events, potential customer visits.",
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing & Communication Strategy",
    description:
      "We develop effective marketing and communication initiatives to strengthen your presence and impact in international markets.",
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Our Services
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80 leading-relaxed">
              Structured services designed to reduce risk and accelerate your 
              European market entry—without replacing your internal sales team.
            </p>
          </div>
        </div>
      </section>

      {/* What We Are / Are Not */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-card card-elevated">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                What AXCO Is
              </h3>
              <ul className="space-y-3">
                {[
                  "Strategic market advisor",
                  "European market researcher",
                  "Partner identifier and validator",
                  "Business introduction facilitator",
                  "Trade fair and event support partner",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-card card-elevated">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-destructive" />
                </div>
                What AXCO Is Not
              </h3>
              <ul className="space-y-3">
                {[
                  "Not a reseller or distributor",
                  "Not an importer of your products",
                  "Not a replacement for internal sales",
                  "Not a commission-based sales agent",
                  "Not a one-size-fits-all solution",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <XCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="p-6 rounded-xl bg-card card-elevated"
              >
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Explore European Markets?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can support your European expansion goals.
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

export default ServicesPage;
