import { Layout } from "@/components/layout/Layout";

const TermsPage = () => {
  return (
    <Layout hideFooter>
      {/* Hero */}
      <section className="section-padding bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Terms of Service
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
              These Terms of Service ("Terms") govern your use of the AXCO Solutions website. By accessing or using this website, you agree to these Terms.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">1. Company Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              AXCO Solutions<br />
              Lovran - Croatia<br />
              Email: <a href="mailto:info@axcosolutions.com" className="text-primary hover:underline">info@axcosolutions.com</a>
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">2. Purpose of the Website</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website is provided for general informational purposes only. It presents information about AXCO Solutions, its experience, and its consultancy services.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Nothing on this website constitutes a binding offer, contract, or guarantee of business results.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">3. Nature of Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              AXCO Solutions provides consultancy, advisory, research, and business development support related to market entry and partnership development.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Unless explicitly agreed in writing:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>AXCO Solutions does not act as a reseller, distributor, legal representative, or employer of its clients.</li>
              <li>AXCO Solutions does not guarantee commercial outcomes, sales volumes, or business success.</li>
              <li>Any formal engagement is subject to a separate written agreement.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">4. Use of the Website</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to use this website lawfully and not to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Misuse or attempt to disrupt the website</li>
              <li>Introduce malicious software</li>
              <li>Use the content for unlawful or misleading purposes</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              AXCO Solutions reserves the right to restrict or terminate access if these Terms are violated.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">5. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this website, including text, logos, graphics, and layout, is the intellectual property of AXCO Solutions unless otherwise stated.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You may not reproduce, distribute, or use any content without prior written permission.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">6. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              AXCO Solutions makes reasonable efforts to ensure the accuracy of information on this website. However:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Information may be incomplete or subject to change</li>
              <li>The website is provided "as is"</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              AXCO Solutions shall not be liable for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Any direct or indirect damages resulting from the use of this website</li>
              <li>Business losses, loss of opportunity, or loss of data</li>
              <li>Content on external websites linked from this site</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">7. External Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website may contain links to third-party websites. AXCO Solutions has no control over and accepts no responsibility for the content or practices of those websites.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">8. Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Personal data is handled in accordance with our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>, which forms part of these Terms.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">9. Governing Law and Jurisdiction</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by the laws of the Netherlands.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Any disputes arising from or related to these Terms shall be subject to the exclusive jurisdiction of the competent courts of the Netherlands.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">10. Changes to These Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              AXCO Solutions may update these Terms at any time. Updated versions will be published on this page with a revised date.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">11. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions regarding these Terms, please contact:
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

export default TermsPage;
