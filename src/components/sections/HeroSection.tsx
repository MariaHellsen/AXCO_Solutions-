import heroImage from "@/assets/hero-about-europe.jpg";
import { useParallax } from "@/hooks/use-parallax";

export function HeroSection() {
  const parallaxOffset = useParallax(0.4);

  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="European business district skyline"
          className="w-full h-full object-cover scale-110"
          style={{ transform: `translateY(${parallaxOffset}px) scale(1.1)` }}
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight tracking-tight animate-fade-in-up">
            Expand Your Technology Business into Europe with AXCO Solutions
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl animate-fade-in-up delay-100">
            The fastest, lowest-risk way for manufacturers to build real business in Europe
          </p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
