import { Layout } from "@/components/layout/Layout";

const PrivacyPage = () => {
  return (
    <Layout hideFooter>
      {/* Hero */}
      <section className="section-padding bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Privacy Policy
            </h1>
            <p className="mt-2 text-muted-foreground">
              Last updated: 1/22/2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl prose prose-slate">
            <p className="text-lg text-muted-foreground leading-relaxed mt-0">
              AXCO Solutions ("we", "our", "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect personal information when you visit our website or contact us.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">1. Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              AXCO Solutions<br />
              Lovran - Croatia<br />
              Email: <a href="mailto:info@axcosolutions.com" className="text-primary hover:underline">info@axcosolutions.com</a>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              AXCO Solutions operates in accordance with the General Data Protection Regulation (GDPR).
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">2. What Personal Data We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may collect and process the following personal data:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Company name</li>
              <li>Message content submitted via contact forms or email</li>
              <li>Technical data such as IP address, browser type, and operating system (via hosting or analytics tools)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We do not intentionally collect sensitive personal data.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">3. How We Collect Your Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect personal data when you:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Contact us via email or a contact form</li>
              <li>Communicate with us for business inquiries</li>
              <li>Visit our website (technical data collected automatically)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">4. Why We Collect Your Data (Legal Basis)</h2>
            <p className="text-muted-foreground leading-relaxed">
              We process personal data for the following purposes:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>To respond to inquiries and communicate with you</li>
              <li>To provide information about our services</li>
              <li>To improve our website and user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              The legal basis for processing is one or more of the following:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Your consent</li>
              <li>Legitimate business interest</li>
              <li>Legal obligation</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">5. Data Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell or rent your personal data.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We may share data only with:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Website hosting providers</li>
              <li>IT or analytics service providers (if applicable)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              All third parties are required to handle data securely and in compliance with GDPR.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">6. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy or to meet legal requirements.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">7. Your Rights Under GDPR</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Restrict or object to processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise these rights, contact us at <a href="mailto:info@axcosolutions.com" className="text-primary hover:underline">info@axcosolutions.com</a>.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You also have the right to lodge a complaint with a relevant data protection authority.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">8. Cookies and Analytics</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may use cookies or similar technologies for basic functionality and analytics purposes.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You can manage or disable cookies through your browser settings. Where required, we will request your consent before placing non-essential cookies.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">9. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We take appropriate technical and organizational measures to protect personal data against unauthorized access, loss, or misuse.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be published on this page with an updated revision date.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">11. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or how we handle your data, please contact:
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              AXCO Solutions<br />
              Email: <a href="mailto:info@axcosolutions.com" className="text-primary hover:underline">info@axcosolutions.com</a><br />
              Lovran - Croatia
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPage;
