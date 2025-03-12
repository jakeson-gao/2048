import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2048 Privacy Policy - Data Collection & Usage",
  description: "Learn about how we collect, use, and protect your personal information when you play 2048. Read our comprehensive privacy policy.",
  keywords: ["2048 privacy policy", "2048 data collection", "2048 data protection", "2048 privacy", "game privacy"],
};

export default function PrivacyPolicy() {
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
            <li><Link href="/legal" className="hover:text-primary">Legal</Link></li>
            <li className="text-primary">Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Privacy Policy</h1>
        <p className="text-center text-muted-foreground mb-8">
          Last updated: March 15, 2024
        </p>

        {/* Introduction */}
        <section className="prose max-w-none mb-12">
          <p>
            Welcome to 2048. We are committed to protecting your privacy and ensuring you have a positive experience on our website. This privacy policy outlines our practices for collecting, using, and protecting your personal information.
          </p>
        </section>

        {/* Information Collection */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Information We Collect</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Automatically Collected</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Device information</li>
                <li>Browser type and version</li>
                <li>IP address</li>
                <li>Operating system</li>
                <li>Access times and dates</li>
                <li>Game statistics</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-4">User Provided</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Email address (optional)</li>
                <li>Username (if created)</li>
                <li>Profile information</li>
                <li>Game preferences</li>
                <li>Communication preferences</li>
                <li>Feedback and comments</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="bg-card p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6">How We Use Your Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Game Functionality</h3>
              <p className="text-muted-foreground">
                We use your information to provide and improve the game experience, including:
              </p>
              <ul className="list-disc list-inside mt-2 text-muted-foreground">
                <li>Saving game progress</li>
                <li>Maintaining leaderboards</li>
                <li>Providing personalized features</li>
                <li>Technical support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Communication</h3>
              <p className="text-muted-foreground">
                If you opt-in, we may use your email address to:
              </p>
              <ul className="list-disc list-inside mt-2 text-muted-foreground">
                <li>Send game updates</li>
                <li>Notify about new features</li>
                <li>Respond to inquiries</li>
                <li>Share promotional content</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Data Protection</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Security Measures</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Encrypted data transmission</li>
                <li>Secure data storage</li>
                <li>Regular security audits</li>
                <li>Access controls</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Your Rights</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Access your data</li>
                <li>Request data deletion</li>
                <li>Opt-out of communications</li>
                <li>Update preferences</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Third-Party Services */}
        <section className="bg-secondary/10 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
          <p className="text-muted-foreground mb-4">
            We may use third-party services for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Analytics (Google Analytics)</li>
            <li>Advertisement services</li>
            <li>Payment processing</li>
            <li>Cloud storage</li>
          </ul>
          <p className="mt-4 text-muted-foreground">
            These services may collect additional information as outlined in their respective privacy policies.
          </p>
        </section>

        {/* Contact Information */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-muted-foreground mb-6">
            If you have any questions about our privacy policy or data practices, please contact us:
          </p>
          <Link
            href="/legal/contact"
            className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90"
          >
            Contact Privacy Team
          </Link>
        </section>

        {/* Related Policies */}
        <section className="grid md:grid-cols-2 gap-6">
          <Link
            href="/legal/terms"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">Terms of Service →</h3>
            <p className="text-muted-foreground">Read our terms and conditions.</p>
          </Link>
          <Link
            href="/legal/cookies"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">Cookie Policy →</h3>
            <p className="text-muted-foreground">Learn about our use of cookies.</p>
          </Link>
        </section>
      </main>
    </div>
  );
}
