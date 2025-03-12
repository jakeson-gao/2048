import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2048 Game Resources - Guides, Tools & Documentation",
  description: "Access comprehensive resources for the 2048 game, including strategy guides, development tools, documentation, and community content.",
  keywords: ["2048 resources", "2048 guides", "2048 tools", "2048 documentation", "2048 community"],
};

export default function ResourcesIndex() {
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
            <li className="text-primary">Resources</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Game Resources</h1>
        <p className="text-center text-muted-foreground mb-8">
          Everything you need to master, develop, and enjoy 2048
        </p>

        {/* Main Categories */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <Link
            href="/resources/guides"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4">Strategy Guides</h2>
            <p className="text-muted-foreground mb-4">
              Comprehensive guides and tutorials to improve your gameplay and reach higher scores.
            </p>
            <span className="text-primary">View Guides →</span>
          </Link>

          <Link
            href="/resources/tools"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4">Tools & Apps</h2>
            <p className="text-muted-foreground mb-4">
              Useful tools, practice modes, and companion apps to enhance your 2048 experience.
            </p>
            <span className="text-primary">Browse Tools →</span>
          </Link>

          <Link
            href="/resources/community"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4">Community</h2>
            <p className="text-muted-foreground mb-4">
              Join the 2048 community, share strategies, and participate in discussions.
            </p>
            <span className="text-primary">Join Now →</span>
          </Link>
        </section>

        {/* Documentation */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Documentation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/resources/api"
              className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold mb-2">API Documentation</h3>
              <p className="text-muted-foreground">
                Technical documentation for developers integrating with our API.
              </p>
            </Link>
            <Link
              href="/resources/sdk"
              className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold mb-2">SDK & Libraries</h3>
              <p className="text-muted-foreground">
                Development kits and libraries for building 2048 variants.
              </p>
            </Link>
            <Link
              href="/resources/integration"
              className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold mb-2">Integration Guide</h3>
              <p className="text-muted-foreground">
                Learn how to integrate 2048 into your website or application.
              </p>
            </Link>
            <Link
              href="/resources/localization"
              className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold mb-2">Localization Guide</h3>
              <p className="text-muted-foreground">
                Resources for translating and adapting 2048 to different languages.
              </p>
            </Link>
          </div>
        </section>

        {/* Educational Resources */}
        <section className="bg-card p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6">Educational Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">For Teachers</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Lesson plans and activities</li>
                <li>Math curriculum integration</li>
                <li>Student progress tracking</li>
                <li>Classroom competition tools</li>
              </ul>
              <Link
                href="/resources/education"
                className="inline-block mt-4 text-primary hover:underline"
              >
                Access Educational Materials →
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2">For Students</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Practice exercises</li>
                <li>Strategy tutorials</li>
                <li>Math concepts explained</li>
                <li>Progress certificates</li>
              </ul>
              <Link
                href="/resources/students"
                className="inline-block mt-4 text-primary hover:underline"
              >
                Start Learning →
              </Link>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <Link
            href="/resources/research"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">Research & Analysis</h3>
            <p className="text-muted-foreground">
              Academic papers, studies, and mathematical analysis of 2048.
            </p>
          </Link>
          <Link
            href="/resources/media"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">Media Kit</h3>
            <p className="text-muted-foreground">
              Logos, screenshots, and press materials for content creators.
            </p>
          </Link>
          <Link
            href="/resources/faq"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">FAQ</h3>
            <p className="text-muted-foreground">
              Frequently asked questions and detailed answers.
            </p>
          </Link>
        </section>

        {/* Newsletter */}
        <section className="bg-secondary/10 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to receive new resources, guides, and community updates
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
      </main>
    </div>
  );
}
