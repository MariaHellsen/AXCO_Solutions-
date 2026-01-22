import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const challenges = [
  {
    number: "01",
    question: "Spending months searching, but unable to identify and connect with the right distributors or integrators in Europe?",
  },
  {
    number: "02",
    question: "Attending trade shows with poor results, failing to secure meetings with real decision-makers?",
  },
  {
    number: "03",
    question: "Planning expensive business trips that lack structure, with few high-quality appointments?",
  },
];

export function ChallengesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Entering the European market is a critical step for global growth, yet its complexity—unfamiliar business cultures, fragmented channels, and high entry barriers—often stops even the most ambitious manufacturers before they begin.
          </p>
        </div>

        {/* Challenges Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
            Do these challenges sound familiar?
          </h2>
        </div>

        {/* Numbered Challenges List */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="flex items-start gap-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-5xl sm:text-6xl font-bold text-primary/20 leading-none select-none">
                  {challenge.number}
                </span>
                <p className="text-foreground/80 text-lg leading-relaxed pt-2">
                  {challenge.question}
                </p>
              </div>
            ))}
          </div>
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
                <a href="#what-we-do" className="inline-flex items-center gap-2">
                  Explore Our Services
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
