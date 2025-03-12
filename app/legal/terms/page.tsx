import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2048 Terms of Service - Game Usage Agreement",
  description: "Read the terms of service for playing 2048. Understand your rights, responsibilities, and the rules governing the use of our game.",
  keywords: ["2048 terms", "2048 conditions", "2048 rules", "2048 agreement", "game terms"],
};

export default function TermsOfService() {
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
            <li className="text-primary">Terms of Service</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Terms of Service</h1>
        <p className="text-center text-muted-foreground mb-8">
          Last updated: March 15, 2024
        </p>

        {/* Introduction */}
        <section className="prose max-w-none mb-12">
          <p>
            Welcome to 2048. By accessing or using our game, you agree to be bound by these Terms of Service. Please read them carefully before using our services.
          </p>
        </section>

        {/* Acceptance of Terms */}
        <section className="bg-card p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6">1. Acceptance of Terms</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              By accessing or using 2048, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree to these terms, please do not use our services.
            </p>
            <p>
              We reserve the right to modify these terms at any time. Your continued use of the game following any changes constitutes acceptance of those changes.
            </p>
          </div>
        </section>

        {/* Game Rules */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">2. Game Rules and Fair Play</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Gameplay Rules</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Follow game mechanics</li>
                <li>No cheating or exploits</li>
                <li>Respect other players</li>
                <li>Play fairly and honestly</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Prohibited Actions</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Using automated systems</li>
                <li>Manipulating scores</li>
                <li>Disrupting gameplay</li>
                <li>Sharing exploits</li>
              </ul>
            </div>
          </div>
        </section>

        {/* User Accounts */}
        <section className="bg-secondary/10 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6">3. User Accounts</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Account Creation</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Accurate information required</li>
                <li>One account per person</li>
                <li>Secure password required</li>
                <li>Age restrictions apply</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Account Responsibilities</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Maintain account security</li>
                <li>Report unauthorized access</li>
                <li>Keep information updated</li>
                <li>Accept account activity</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">4. Intellectual Property</h2>
          <div className="bg-card p-6 rounded-lg space-y-4 text-muted-foreground">
            <p>
              The game 2048, including but not limited to its code, design, graphics, and content, is protected by copyright and other intellectual property laws.
            </p>
            <div>
              <h3 className="font-semibold mb-2">Usage Rights</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Personal, non-commercial use only</li>
                <li>No redistribution without permission</li>
                <li>No modification of game assets</li>
                <li>Attribution requirements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Termination */}
        <section className="bg-card p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6">5. Termination</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              We reserve the right to terminate or suspend access to our services, without prior notice or liability, for any reason, including:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Violation of these terms</li>
              <li>Fraudulent activity</li>
              <li>Disruptive behavior</li>
              <li>Legal requirements</li>
            </ul>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-secondary/10 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">6. Disclaimer</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              The game is provided "as is" without warranties of any kind, either express or implied. We do not guarantee uninterrupted or error-free service.
            </p>
            <p>
              We are not responsible for any damages or losses resulting from:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Game interruptions</li>
              <li>Technical issues</li>
              <li>Data loss</li>
              <li>User actions</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">Questions About Terms?</h2>
          <p className="text-muted-foreground mb-6">
            If you have any questions about our Terms of Service, please contact us:
          </p>
          <Link
            href="/legal/contact"
            className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90"
          >
            Contact Legal Team
          </Link>
        </section>

        {/* Related Documents */}
        <section className="grid md:grid-cols-2 gap-6">
          <Link
            href="/legal/privacy"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">Privacy Policy →</h3>
            <p className="text-muted-foreground">Learn how we protect your data.</p>
          </Link>
          <Link
            href="/legal/guidelines"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">Community Guidelines →</h3>
            <p className="text-muted-foreground">Read our community standards.</p>
          </Link>
        </section>
      </main>
    </div>
  );
}
