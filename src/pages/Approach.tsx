import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ApproachPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-primary rounded-full" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Example Service Packages</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground tracking-tight mb-2">
            Ready to Start?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Let's discuss your European expansion goals in a free consultation.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="xl">
              Schedule a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="mt-3 text-sm text-primary-foreground/70">
            No commitment required. We'll discuss your specific situation and goals.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default ApproachPage;
