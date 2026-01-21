import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-europe.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="European business district skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight tracking-tight animate-fade-in-up">
            Expand Your Technology Business into Europe with the Right Partners
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl animate-fade-in-up delay-100">
            AXCO Solutions helps international technology manufacturers understand 
            European markets, identify reliable local partners, and build strong 
            foundations for sustainable growth—without building a local sales team.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/approach">
              <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                Our Approach
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
