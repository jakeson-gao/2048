import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2048 Cookie Policy - Cookie Usage Information",
  description: "Learn about how we use cookies and similar technologies on 2048. Understand what cookies we use and how to manage them.",
  keywords: ["2048 cookies", "2048 tracking", "cookie policy", "cookie settings", "cookie management"],
};

export default function CookiePolicy() {
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
            <li className="text-primary">Cookie Policy</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Cookie Policy</h1>
        <p className="text-center text-muted-foreground mb-8">
          Last updated: March 15, 2024
        </p>

        {/* Introduction */}
        <section className="prose max-w-none mb-12">
          <p>
            This Cookie Policy explains how 2048 uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>
        </section>

        {/* What Are Cookies */}
        <section className="bg-card p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6">What Are Cookies?</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners to make their websites work, or work more efficiently, as well as to provide reporting information.
            </p>
            <p>
              Cookies set by the website owner (in this case, 2048) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies".
            </p>
          </div>
        </section>

        {/* Types of Cookies We Use */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Types of Cookies We Use</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Essential Cookies</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Game progress saving</li>
                <li>Session management</li>
                <li>Security features</li>
                <li>Basic functionality</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Performance Cookies</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Analytics data</li>
                <li>Usage statistics</li>
                <li>Error tracking</li>
                <li>Performance monitoring</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cookie Purposes */}
        <section className="bg-secondary/10 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6">Why We Use Cookies</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Game Functionality</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Save game progress</li>
                <li>Remember preferences</li>
                <li>Maintain scores</li>
                <li>Enable features</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Performance & Analytics</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Improve game performance</li>
                <li>Track usage patterns</li>
                <li>Identify issues</li>
                <li>Enhance user experience</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="bg-card p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6">Third-Party Cookies</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              We use some third-party services that may set cookies on your device. These services include:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Google Analytics (analytics)</li>
              <li>Social media plugins</li>
              <li>Advertising partners</li>
              <li>Content delivery networks</li>
            </ul>
            <p>
              These third-party services have their own privacy policies and cookie policies, which you can review on their respective websites.
            </p>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Managing Your Cookies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Browser Settings</h3>
              <p className="text-muted-foreground mb-4">
                Most browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Block all cookies</li>
                <li>Delete existing cookies</li>
                <li>Allow specific cookies</li>
                <li>Set cookie preferences</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Our Cookie Settings</h3>
              <p className="text-muted-foreground mb-4">
                You can manage your cookie preferences on our website:
              </p>
              <Link
                href="/settings/cookies"
                className="text-primary hover:underline"
              >
                Manage Cookie Settings →
              </Link>
            </div>
          </div>
        </section>

        {/* Updates to Policy */}
        <section className="bg-secondary/10 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
            </p>
            <p>
              When we make changes, we will update the "Last Updated" date at the top of this policy and notify you through a notice on our website.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">Questions About Cookies?</h2>
          <p className="text-muted-foreground mb-6">
            If you have any questions about our use of cookies, please contact us:
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
            href="/legal/privacy"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">Privacy Policy →</h3>
            <p className="text-muted-foreground">Learn about our privacy practices.</p>
          </Link>
          <Link
            href="/legal/terms"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">Terms of Service →</h3>
            <p className="text-muted-foreground">Read our terms and conditions.</p>
          </Link>
        </section>
      </main>
    </div>
  );
}
