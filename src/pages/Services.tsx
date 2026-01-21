import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Handshake, Calendar, Users, ArrowRight, CheckCircle, XCircle } from "lucide-react";

const services = [
  {
    id: "research",
    icon: Search,
    title: "European Market Research & Opportunity Assessment",
    description:
      "Comprehensive analysis of market potential, competitive landscape, regulatory requirements, and entry strategies tailored to your technology and target countries.",
    features: [
      "Market size and growth analysis",
      "Competitive landscape mapping",
      "Regulatory and compliance overview",
      "Entry strategy recommendations",
      "Country prioritization frameworks",
    ],
  },
  {
    id: "partners",
    icon: Handshake,
    title: "Partner & Channel Identification",
    description:
      "Systematic identification and profiling of potential distributors, integrators, resellers, and strategic partners across European markets.",
    features: [
      "Partner profiling and assessment",
      "Distributor network mapping",
      "Integrator capability analysis",
      "Reseller identification",
      "Strategic partner matching",
    ],
  },
  {
    id: "introductions",
    icon: Calendar,
    title: "Strategic Business Introductions",
    description:
      "Facilitation of high-quality, pre-qualified meetings with validated partners—prepared and positioned for productive business discussions.",
    features: [
      "Meeting preparation and briefing",
      "Introduction facilitation",
      "Negotiation support",
      "Follow-up coordination",
      "Relationship development guidance",
    ],
  },
  {
    id: "events",
    icon: Users,
    title: "Trade Fair & Market Visit Support",
    description:
      "Expert guidance for trade fairs, business missions, and market visits to maximize your European presence and networking opportunities.",
    features: [
      "Trade fair strategy and planning",
      "Business mission coordination",
      "Meeting scheduling at events",
      "Market visit itinerary planning",
      "On-ground support and interpretation",
    ],
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
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} bg-slate-100 rounded-2xl aspect-video flex items-center justify-center`}>
                  <div className="text-center p-8">
                    <service.icon className="w-16 h-16 text-primary/20 mx-auto mb-4" />
                    <p className="text-muted-foreground">Visual representation</p>
                  </div>
                </div>
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
