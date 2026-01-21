import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import axcoLogo from "@/assets/axco-logo.jpeg";

const navigation = {
  services: [
    { name: "Market Research", href: "/services#research" },
    { name: "Partner Identification", href: "/services#partners" },
    { name: "Business Introductions", href: "/services#introductions" },
    { name: "Trade Fair Support", href: "/services#events" },
  ],
  company: [
    { name: "About AXCO", href: "/about" },
    { name: "Our Approach", href: "/approach" },
    { name: "Why Europe", href: "/why-europe" },
    { name: "Industries", href: "/industries" },
  ],
  resources: [
    { name: "Book Consultation", href: "/contact" },
    { name: "Contact Us", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <img 
                src={axcoLogo} 
                alt="AXCO Solutions" 
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-primary-foreground/70 max-w-sm leading-relaxed">
              Helping international technology manufacturers understand European
              markets, identify reliable local partners, and build foundations for
              sustainable growth.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="mailto:info@axcosolutions.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@axcosolutions.com</span>
              </a>
              <a
                href="tel:+31201234567"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+31 20 123 4567</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="h-4 w-4" />
                <span>Amsterdam, Netherlands</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90 mb-4">
              Get Started
            </h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>Follow us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} AXCO Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
