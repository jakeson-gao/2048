import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2048 Game Changelog - Version History and Updates",
  description: "Complete changelog of 2048 game updates, improvements, and new features. Stay informed about the latest changes and enhancements to your favorite puzzle game.",
  keywords: ["2048 updates", "2048 changelog", "2048 version history", "2048 patch notes", "game updates"],
};

export default function Changelog() {
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
            <li><Link href="/updates" className="hover:text-primary">Updates</Link></li>
            <li className="text-primary">Changelog</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">2048 Game Changelog</h1>
        <p className="text-center text-muted-foreground mb-8">
          Track all updates, improvements, and new features
        </p>

        {/* Version History */}
        <div className="space-y-8">
          {/* Latest Version */}
          <section className="bg-card p-6 rounded-lg border-l-4 border-primary">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">Version 2.1.0</h2>
              <span className="text-sm text-muted-foreground">March 10, 2024</span>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-primary mb-2">New Features</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Added global leaderboard system</li>
                  <li>Implemented user accounts and profiles</li>
                  <li>New achievement system with badges</li>
                  <li>Added dark mode support</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Improvements</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Enhanced mobile responsiveness</li>
                  <li>Optimized animation performance</li>
                  <li>Updated UI design for better visibility</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Bug Fixes</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Fixed score calculation issues</li>
                  <li>Resolved touch control sensitivity</li>
                  <li>Fixed game state persistence bugs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Previous Version */}
          <section className="bg-card p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">Version 2.0.0</h2>
              <span className="text-sm text-muted-foreground">February 15, 2024</span>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-primary mb-2">Major Changes</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Complete redesign of the game interface</li>
                  <li>New game modes: Classic, Time Trial, and Practice</li>
                  <li>Added tutorial system for new players</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Improvements</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Improved touch controls</li>
                  <li>Added keyboard shortcuts</li>
                  <li>Enhanced accessibility features</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Older Version */}
          <section className="bg-card p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">Version 1.5.0</h2>
              <span className="text-sm text-muted-foreground">January 1, 2024</span>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-primary mb-2">Features</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Added local high scores</li>
                  <li>New game statistics tracking</li>
                  <li>Implemented undo feature</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Bug Fixes</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Fixed mobile swipe detection</li>
                  <li>Resolved scoring inconsistencies</li>
                  <li>Fixed browser compatibility issues</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Subscribe Section */}
        <section className="mt-12 bg-card p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to receive notifications about new updates and features.
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </section>

        {/* Related Links */}
        <section className="mt-12 grid md:grid-cols-2 gap-6">
          <Link
            href="/updates/latest"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">Latest Updates →</h3>
            <p className="text-muted-foreground">Read about our most recent changes and improvements.</p>
          </Link>
          <Link
            href="/updates/roadmap"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">Future Updates →</h3>
            <p className="text-muted-foreground">Preview upcoming features and planned improvements.</p>
          </Link>
        </section>
      </main>
    </div>
  );
}
