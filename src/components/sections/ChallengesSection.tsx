import { Search, Users, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const challenges = [
  {
    icon: Search,
    question: "Spending months searching, but unable to identify and connect with the right distributors or integrators in Europe?",
  },
  {
    icon: Users,
    question: "Attending trade shows with poor results, failing to secure meetings with real decision-makers?",
  },
  {
    icon: Calendar,
    question: "Planning expensive business trips that lack structure, with few high-quality appointments?",
  },
];

export function ChallengesSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Entering the European market is a critical step for global growth, yet its complexity—unfamiliar business cultures, fragmented channels, and high entry barriers—often stops even the most ambitious manufacturers before they begin.
          </p>
        </div>

        {/* Challenges Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
            Do these challenges sound familiar?
          </h2>
        </div>

        {/* Challenge Cards */}
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-14">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/20"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <challenge.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  {challenge.question}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Statement */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-primary/5 border border-primary/10 rounded-2xl p-8 sm:p-10 text-center">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium">
                Our Solution
              </span>
            </div>
            <p className="text-lg sm:text-xl text-foreground leading-relaxed mt-2">
              We open doors, arrange key meetings, and orchestrate high-impact visits, so you can focus on winning the business.
            </p>
            <div className="mt-6">
              <Button asChild variant="default" size="lg">
                <Link to="/services" className="inline-flex items-center gap-2">
                  Explore Our Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
