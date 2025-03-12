import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Winning Strategies for 2048 - Expert Tips and Techniques",
  description: "Master 2048 with our comprehensive winning strategies guide. Learn corner technique, chain building, and advanced tactics to achieve high scores and reach the 2048 tile.",
  keywords: ["2048 strategy", "2048 winning tips", "how to win 2048", "2048 techniques", "2048 high score strategy"],
};

export default function WinningStrategies() {
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
            <li><Link href="/strategy" className="hover:text-primary">Strategy</Link></li>
            <li className="text-primary">Winning Strategies</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Winning Strategies for 2048</h1>
        <p className="text-center text-muted-foreground mb-8">
          Master these proven techniques to consistently reach high scores
        </p>

        {/* Table of Contents */}
        <div className="bg-card p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Navigation</h2>
          <ul className="space-y-2">
            <li>
              <a href="#corner-strategy" className="text-primary hover:underline">1. Corner Strategy</a>
            </li>
            <li>
              <a href="#chain-building" className="text-primary hover:underline">2. Chain Building Technique</a>
            </li>
            <li>
              <a href="#movement-patterns" className="text-primary hover:underline">3. Movement Patterns</a>
            </li>
            <li>
              <a href="#advanced-tactics" className="text-primary hover:underline">4. Advanced Tactics</a>
            </li>
          </ul>
        </div>

        {/* Strategy Sections */}
        <section id="corner-strategy" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Corner Strategy</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              The corner strategy is the foundation of successful 2048 gameplay. By keeping your highest number tile in a corner,
              you create a stable base for building larger numbers.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Choose a corner (preferably bottom-right or top-left)</li>
              <li>Keep your highest value tile in this corner</li>
              <li>Build descending values adjacent to it</li>
              <li>Only move away from this pattern when absolutely necessary</li>
            </ul>
          </div>
        </section>

        <section id="chain-building" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Chain Building Technique</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Chain building involves creating sequences of tiles that can be merged in succession, maximizing efficiency
              and reducing the risk of board lockup.
            </p>
            <div className="bg-secondary/10 p-4 rounded-lg mb-4">
              <h3 className="font-semibold mb-2">Example Chain Pattern:</h3>
              <p>256 - 128 - 64 - 32 - 16 - 8 - 4 - 2</p>
            </div>
          </div>
        </section>

        <section id="movement-patterns" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Movement Patterns</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Establishing consistent movement patterns helps maintain board control and prevents chaotic tile arrangements.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Primary Pattern</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Up</li>
                  <li>Right</li>
                  <li>Down</li>
                  <li>Right</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Alternative Pattern</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Left</li>
                  <li>Down</li>
                  <li>Right</li>
                  <li>Down</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="advanced-tactics" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Advanced Tactics</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Once you've mastered the basics, these advanced tactics will help you achieve even higher scores.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Edge merging for safe combinations</li>
              <li>Creating merge opportunities in multiple directions</li>
              <li>Managing small tiles efficiently</li>
              <li>Recovery techniques for difficult situations</li>
            </ul>
          </div>
        </section>

        {/* Practice Section */}
        <section className="bg-card p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Practice Makes Perfect</h2>
          <p className="mb-4">
            The best way to master these strategies is through consistent practice. Start with the corner strategy
            and gradually incorporate more advanced techniques as you improve.
          </p>
          <div className="flex justify-center">
            <Link
              href="/play/classic"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:opacity-90"
            >
              Practice Now
            </Link>
          </div>
        </section>

        {/* Related Strategies */}
        <section className="grid md:grid-cols-2 gap-6">
          <Link
            href="/strategy/high-score-tips"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">High Score Tips →</h3>
            <p className="text-muted-foreground">Learn specific techniques for achieving record-breaking scores.</p>
          </Link>
          <Link
            href="/strategy/merge-techniques"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">Advanced Merging →</h3>
            <p className="text-muted-foreground">Master the art of efficient tile merging and chain reactions.</p>
          </Link>
        </section>
      </main>
    </div>
  );
}
