import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users, Languages, Award } from "lucide-react";
import heroAboutImage from "@/assets/hero-about-europe.jpg";

const stats = [
  {
    icon: Award,
    value: "20+",
    label: "Years of Experience",
    description: "Two decades helping technology companies expand into Europe.",
  },
  {
    icon: Globe,
    value: "25+",
    label: "Countries",
    description: "Experience across European markets from Nordic to Mediterranean.",
  },
  {
    icon: Languages,
    value: "8+",
    label: "Languages",
    description: "Multilingual team with native understanding of local markets.",
  },
  {
    icon: Users,
    value: "500+",
    label: "Partners in Network",
    description: "Established relationships with distributors and integrators.",
  },
];

const values = [
  {
    title: "Integrity",
    description:
      "We provide honest assessments and realistic expectations. If we don't think we can help, we'll tell you.",
  },
  {
    title: "Quality",
    description:
      "We focus on quality over quantity—in our research, our partner recommendations, and our introductions.",
  },
  {
    title: "Partnership",
    description:
      "We work as an extension of your team, aligned with your goals and invested in your success.",
  },
  {
    title: "Long-term View",
    description:
      "We build relationships and strategies for sustainable growth, not quick wins that don't last.",
  },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroAboutImage}
            alt="Beautiful European cities skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary-foreground animate-fade-in-up">
              About AXCO Solutions
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80 leading-relaxed animate-fade-in-up delay-100">
              Two decades of experience helping international technology companies 
              understand, enter, and grow in European markets.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                AXCO Solutions was founded on a simple observation: many excellent 
                technology companies struggle to expand into Europe—not because 
                their products aren't good enough, but because they lack the local 
                knowledge, relationships, and structured approach needed to succeed.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Over the past two decades, we've helped manufacturers from Asia, 
                North America, Latin America, and other regions navigate European 
                complexity. We've learned what works, what doesn't, and how to 
                reduce the risk of market entry.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we continue to focus on what we do best: providing the 
                research, insights, and introductions that help technology 
                companies build successful European partnerships.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide how we work with clients and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="p-8 rounded-xl bg-card card-elevated">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Our European Expertise
            </h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-slate-50">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Geographic Coverage
                </h3>
                <p className="text-muted-foreground">
                  We have experience across all major European markets including DACH 
                  (Germany, Austria, Switzerland), Benelux, Nordics, UK & Ireland, 
                  France, Iberia, Italy, and Central/Eastern Europe.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Industry Focus
                </h3>
                <p className="text-muted-foreground">
                  Physical security, IT & networking, access control, traffic 
                  management, and smart infrastructure. We understand the channels, 
                  players, and dynamics in these sectors.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Language Capabilities
                </h3>
                <p className="text-muted-foreground">
                  Our team works in English, German, Dutch, French, Spanish, 
                  Italian, Portuguese, and other European languages—enabling 
                  effective communication across markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Let's Talk About Your European Goals
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your expansion plans.
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

export default AboutPage;
