import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  const lastUpdated = "April 16, 2026";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
        <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: {lastUpdated}</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
            <p>
              Basic Devs ("we", "us", or "our") respects your privacy. This Privacy Policy
              explains how we collect, use, and protect information when you visit our website
              or interact with our games and services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
            <p className="mb-2">We may collect the following information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Contact details you submit through our contact form (name, email, message).</li>
              <li>Basic technical data such as browser type, device info, and pages visited.</li>
              <li>Gameplay data made available through third-party platforms such as Roblox.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To respond to inquiries submitted through our contact form.</li>
              <li>To improve our website, games, and overall user experience.</li>
              <li>To comply with legal obligations and platform requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Sharing of Information</h2>
            <p>
              We do not sell your personal information. We may share limited data with trusted
              service providers (such as hosting and communication tools) strictly for the
              purpose of operating our website and responding to your messages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Third-Party Platforms</h2>
            <p>
              Our games are distributed through third-party platforms such as Roblox. Your use of
              those platforms is governed by their own privacy policies, which we encourage you to review.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Data Retention</h2>
            <p>
              We retain contact submissions only as long as necessary to respond to your inquiry
              and maintain reasonable business records.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Children's Privacy</h2>
            <p>
              We do not knowingly collect personal information from children under 13. If you
              believe a child has provided us with personal information, please contact us so we
              can remove it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of personal information you
              have provided to us by contacting us using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on
              this page with a revised "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please reach out via our{" "}
              <Link to="/#contact" className="text-primary hover:underline">contact form</Link>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
