import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
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
    { name: "Industries", href: "/industries" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <img src={axcoLogo} alt="AXCO Solutions" className="h-12 w-auto" />
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Helping international technology manufacturers understand European markets and build foundations for
              sustainable growth.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@axcosolutions.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>info@axcosolutions.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>
                    Kršanci 95, Liganj
                    <br />
                    51415 - Lovran - Croatia
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} AXCO Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
