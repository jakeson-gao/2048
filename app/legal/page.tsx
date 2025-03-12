import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2048 Legal Hub - Policies & Documents",
  description: "Access all legal documents, policies, and resources for the 2048 game, including privacy policy, terms of service, and cookie policy.",
  keywords: ["2048 legal", "privacy policy", "terms of service", "cookie policy", "legal documents", "2048 policies"],
};

export default function LegalHub() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">2048</Link>
            <div className="flex gap-6">
              <Link href="/help" className="hover:text-primary">Help</Link>
              <Link href="/articles" className="hover:text-primary">Articles</Link>
              <Link href="/#leaderboard" className="hover:text-primary">Leaderboard</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-2">
        <div className="text-sm breadcrumbs">
          <ul className="flex gap-2 text-muted-foreground">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li className="text-primary">Legal</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Legal Information</h1>
        <p className="text-center text-muted-foreground mb-8">
          Access all legal documents and policies related to the 2048 game.
        </p>

        {/* Main Documents */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Essential Documents</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/legal/terms"
              className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">Terms of Service</h3>
              <p className="text-muted-foreground mb-4">
                Rules and guidelines for using the 2048 game, including user responsibilities and game policies.
              </p>
              <span className="text-primary">Read Terms →</span>
            </Link>
            <Link
              href="/legal/privacy"
              className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">Privacy Policy</h3>
              <p className="text-muted-foreground mb-4">
                How we collect, use, and protect your personal information while using our game.
              </p>
              <span className="text-primary">Read Policy →</span>
            </Link>
          </div>
        </section>

        {/* Additional Policies */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Additional Policies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/legal/cookies"
              className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold mb-2">Cookie Policy</h3>
              <p className="text-muted-foreground mb-4">
                Information about how we use cookies and similar technologies.
              </p>
              <span className="text-primary">Learn More →</span>
            </Link>
            <Link
              href="/legal/copyright"
              className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold mb-2">Copyright Notice</h3>
              <p className="text-muted-foreground mb-4">
                Details about intellectual property rights and usage permissions.
              </p>
              <span className="text-primary">View Notice →</span>
            </Link>
            <Link
              href="/legal/community"
              className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold mb-2">Community Guidelines</h3>
              <p className="text-muted-foreground mb-4">
                Standards for community interaction and acceptable behavior.
              </p>
              <span className="text-primary">Read Guidelines →</span>
            </Link>
          </div>
        </section>

        {/* Data Protection */}
        <section className="bg-secondary/10 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6">Data Protection</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-4">GDPR Compliance</h3>
              <p className="text-muted-foreground mb-4">
                We comply with the General Data Protection Regulation (GDPR) for users in the European Union.
              </p>
              <Link
                href="/legal/gdpr"
                className="text-primary hover:underline"
              >
                Learn about your GDPR rights →
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-4">CCPA Rights</h3>
              <p className="text-muted-foreground mb-4">
                California residents have specific rights under the California Consumer Privacy Act (CCPA).
              </p>
              <Link
                href="/legal/ccpa"
                className="text-primary hover:underline"
              >
                Learn about your CCPA rights →
              </Link>
            </div>
          </div>
        </section>

        {/* Licensing */}
        <section className="bg-card p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6">Licensing Information</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              The 2048 game is licensed under the MIT License. This means you can:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Use the game for personal or commercial purposes</li>
              <li>Modify the source code</li>
              <li>Distribute the game</li>
              <li>Include the game in your own projects</li>
            </ul>
            <div className="mt-6">
              <Link
                href="/legal/license"
                className="text-primary hover:underline"
              >
                View full license details →
              </Link>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center bg-card p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Questions?</h2>
          <p className="text-muted-foreground mb-6">
            If you have any questions about our legal documents or policies,
            our legal team is here to help.
          </p>
          <Link
            href="/legal/contact"
            className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90"
          >
            Contact Legal Team
          </Link>
        </section>
      </main>
    </div>
  );
}
