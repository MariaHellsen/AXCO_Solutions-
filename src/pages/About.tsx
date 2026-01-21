import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users, Languages, Award, MapPin } from "lucide-react";

const highlights = [
  { icon: Award, label: "20+ Years Experience" },
  { icon: Globe, label: "5 Countries Lived In" },
  { icon: Languages, label: "6 Languages Spoken" },
  { icon: Users, label: "Extensive Partner Network" },
];

const regions = ["DACH", "Benelux", "Nordics", "UK & Ireland", "France", "Iberia", "Italy", "Central/Eastern Europe"];
const languages = ["English", "German", "Dutch", "French", "Spanish", "Italian", "Portuguese", "Russian"];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section - Split Layout */}
      <section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-1 bg-primary rounded-full" />
                <span className="text-sm font-medium text-primary uppercase tracking-wider">About Us</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6">
                Unlock Your Business Potential with Our Expertise in European Markets
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are a passionate team of technology enthusiasts with over 20 years of experience 
                driving business growth across Europe in the IT and Physical Security sectors.
              </p>
              
              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {highlights.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border-2 border-dashed border-slate-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
                  <Users className="w-16 h-16 mb-4" />
                  <span className="text-lg font-medium">Team Photo</span>
                  <span className="text-sm">Placeholder for image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
              What Sets Us Apart?
            </h2>
            <div className="bg-card rounded-xl p-8 shadow-sm">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We bring more than just knowledge of the market—we bring a true understanding of the local 
                cultures and business practices across Europe. With experience living and working in the 
                Netherlands, Austria, the UK, Italy, and Croatia, and having traveled and worked across 
                the continent, we speak the key languages of the region.
              </p>
              
              {/* Countries & Languages */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-5 rounded-lg bg-slate-50">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Geographic Coverage</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    We have experience across all major European markets.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {regions.map((region) => (
                      <span key={region} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-5 rounded-lg bg-slate-50">
                  <div className="flex items-center gap-2 mb-3">
                    <Languages className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Language Capabilities</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Our team works fluently in key European languages.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <span key={lang} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network & Relationships */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            {/* Image Placeholder */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border-2 border-dashed border-slate-300">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
                <Globe className="w-16 h-16 mb-4" />
                <span className="text-lg font-medium">Network Visual</span>
                <span className="text-sm">Placeholder for image</span>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Strong, Lasting Relationships
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                For more than two decades, we've cultivated strong, lasting relationships with an extensive 
                network of Distributors, Installers, and System Integrators.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                These connections, built with care and trust, benefit the manufacturers we represent 
                and those ready to join our growing portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
            We Are Here to Drive Your Success
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Pioneering growth and ensuring your business thrives in the dynamic, fast-paced European market. 
            Let us help you navigate the opportunities of tomorrow, today.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="xl" className="font-semibold">
              Start the Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
