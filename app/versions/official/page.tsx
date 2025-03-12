import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Official 2048 Game - Original Version by Gabriele Cirulli",
  description: "Play the official version of 2048, created by Gabriele Cirulli. Learn about the game's history, original features, and what makes it the authentic 2048 experience.",
  keywords: ["2048 official", "original 2048", "Gabriele Cirulli 2048", "authentic 2048", "2048 creator"],
};

export default function OfficialVersion() {
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
            <li><Link href="/versions" className="hover:text-primary">Versions</Link></li>
            <li className="text-primary">Official</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Official 2048 Game</h1>
        <p className="text-center text-muted-foreground mb-8">
          The original version created by Gabriele Cirulli
        </p>

        {/* Game History */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Game History</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              2048 was created by Italian web developer Gabriele Cirulli and released on March 9, 2014.
              The game was inspired by existing games like Threes! and 1024, but quickly became a global
              phenomenon due to its simple yet addictive gameplay.
            </p>
            <p className="mb-4">
              Originally developed over a weekend as a free, open-source project, 2048 gained massive
              popularity and has since been played by millions of people worldwide.
            </p>
          </div>
        </section>

        {/* Original Features */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Original Features</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>4x4 grid gameplay</li>
              <li>Clean, minimalist design</li>
              <li>Simple scoring system</li>
              <li>Arrow key controls</li>
              <li>Mobile touch support</li>
              <li>Local score tracking</li>
            </ul>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Game Mechanics</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Merge matching numbers</li>
              <li>Powers of two only</li>
              <li>Random tile spawns (2 or 4)</li>
              <li>Win at 2048 tile</li>
              <li>Continue after winning</li>
              <li>Game over when no moves remain</li>
            </ul>
          </div>
        </section>

        {/* Authenticity */}
        <section className="bg-card p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Play the Official Version?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Authentic Experience</h3>
              <p className="text-muted-foreground">
                Play the game exactly as it was originally designed, with all original mechanics intact.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Original Design</h3>
              <p className="text-muted-foreground">
                Experience the clean, minimalist interface that made the game famous.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">True Challenge</h3>
              <p className="text-muted-foreground">
                Test your skills against the original difficulty and scoring system.
              </p>
            </div>
          </div>
        </section>

        {/* Creator's Note */}
        <section className="bg-secondary/10 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Creator's Note</h2>
          <blockquote className="italic text-muted-foreground mb-4">
            "I created 2048 as a free, open-source project. The game's success was unexpected and
            overwhelming. I'm grateful to everyone who has played and enjoyed the game."
          </blockquote>
          <p className="text-right text-sm">- Gabriele Cirulli</p>
        </section>

        {/* Play Now */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">Experience the Original</h2>
          <p className="text-muted-foreground mb-6">
            Play the official version of 2048 and see why it became a global phenomenon.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/play/classic"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:opacity-90"
            >
              Play Now
            </Link>
            <Link
              href="/articles/game-history"
              className="bg-secondary text-secondary-foreground px-6 py-2 rounded-md hover:opacity-90"
            >
              Read More History
            </Link>
          </div>
        </section>

        {/* Related Versions */}
        <section className="grid md:grid-cols-2 gap-6">
          <Link
            href="/versions/international"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">International Version →</h3>
            <p className="text-muted-foreground">Explore the game's adaptations around the world.</p>
          </Link>
          <Link
            href="/versions/mobile"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">Mobile Version →</h3>
            <p className="text-muted-foreground">Play 2048 on your mobile device.</p>
          </Link>
        </section>
      </main>
    </div>
  );
}
