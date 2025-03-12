import type { Metadata } from "next";
import Link from "next/link";
import Game2048 from "@/app/components/Game2048";

export const metadata: Metadata = {
  title: "Classic 2048 Game - Original Version | Play Free Online",
  description: "Play the classic version of 2048 game online. Experience the original puzzle game that started it all. Combine tiles, reach 2048, and challenge your strategic thinking!",
  keywords: ["2048 classic", "original 2048", "2048 game online", "free 2048 game", "classic number puzzle"],
};

export default function Classic2048() {
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
            <li><Link href="/play" className="hover:text-primary">Play</Link></li>
            <li className="text-primary">Classic</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Classic 2048</h1>
        <p className="text-center text-muted-foreground mb-8">
          Experience the original 2048 game that started the phenomenon
        </p>

        {/* Game Component */}
        <div className="mb-12">
          <Game2048 />
        </div>

        {/* Features Section */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Classic Features</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Original 4x4 grid gameplay</li>
              <li>Traditional tile merging mechanics</li>
              <li>Classic color scheme</li>
              <li>Standard scoring system</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Why Play Classic?</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Pure, unmodified gameplay</li>
              <li>Perfect for beginners</li>
              <li>Compare scores with global players</li>
              <li>Master the original strategies</li>
            </ul>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="bg-card p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Corner Strategy</h3>
              <p className="text-muted-foreground">Keep your highest number in a corner and build from there.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Chain Building</h3>
              <p className="text-muted-foreground">Create chains of descending numbers for easier merging.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Think Ahead</h3>
              <p className="text-muted-foreground">Plan several moves in advance to achieve higher scores.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Master 2048?</h2>
          <div className="flex gap-4 justify-center">
            <Link
              href="/guides/tutorial"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:opacity-90"
            >
              View Tutorial
            </Link>
            <Link
              href="/strategy/winning-strategies"
              className="bg-secondary text-secondary-foreground px-6 py-2 rounded-md hover:opacity-90"
            >
              Learn Strategies
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
