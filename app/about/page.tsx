import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About 2048 - Game History and Information",
  description: "Learn about the history and development of 2048, a captivating puzzle game that has engaged millions of players worldwide.",
  keywords: ["2048 game history", "about 2048", "2048 development", "2048 creator", "puzzle game history"],
};

export default function About() {
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
            <li className="text-primary">About</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">About 2048</h1>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover the story behind 2048, a captivating puzzle game that has engaged
          millions of players worldwide.
        </p>

        {/* Game History */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">The Story of 2048</h2>
          <div className="bg-card p-6 rounded-lg space-y-4">
            <p className="text-muted-foreground">
              2048 was created by Gabriele Cirulli in March 2014 as a free, open-source
              project. The game was inspired by existing games like Threes! and 1024,
              but quickly gained its own massive following due to its addictive gameplay
              and clean design.
            </p>
            <p className="text-muted-foreground">
              Within days of its release, the game went viral, attracting millions of
              players worldwide. Its simple yet challenging mechanics resonated with
              casual gamers and puzzle enthusiasts alike, making it a global phenomenon.
            </p>
            <p className="text-muted-foreground">
              Today, 2048 continues to engage players of all ages, inspiring numerous
              variations and adaptations while maintaining its core appeal of strategic
              thinking and pattern recognition.
            </p>
          </div>
        </section>

        {/* Game Stats */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">2048 by the Numbers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">100M+</div>
              <h3 className="font-semibold mb-2">Global Players</h3>
              <p className="text-muted-foreground">
                Players from around the world have enjoyed 2048.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <h3 className="font-semibold mb-2">Languages</h3>
              <p className="text-muted-foreground">
                Available in multiple languages worldwide.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">1B+</div>
              <h3 className="font-semibold mb-2">Games Played</h3>
              <p className="text-muted-foreground">
                Total games played since launch.
              </p>
            </div>
          </div>
        </section>

        {/* How to Play */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">How to Play</h2>
          <div className="bg-card p-6 rounded-lg space-y-4">
            <p className="text-muted-foreground">
              2048 is played on a 4×4 grid. Use your arrow keys to move tiles in any
              direction. When two tiles with the same number touch, they merge into one
              tile with the sum of their values.
            </p>
            <p className="text-muted-foreground">
              The goal is to create a tile with the number 2048, though you can continue
              playing to achieve even higher numbers and scores.
            </p>
            <div className="mt-4">
              <Link
                href="/help"
                className="text-primary hover:underline"
              >
                Learn More About Gameplay →
              </Link>
            </div>
          </div>
        </section>

        {/* Development and Open Source */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Development & Open Source</h2>
          <div className="bg-card p-6 rounded-lg space-y-4">
            <p className="text-muted-foreground">
              2048 was developed using simple web technologies (HTML, CSS, and JavaScript)
              and released as an open-source project. This decision allowed the game to
              be studied, modified, and improved by developers worldwide.
            </p>
            <p className="text-muted-foreground">
              The game's source code is available on GitHub, encouraging collaboration
              and innovation within the developer community. This has led to numerous
              variations and implementations across different platforms.
            </p>
            <div className="mt-4">
              <Link
                href="/tech/development-guide"
                className="text-primary hover:underline"
              >
                View Development Guide →
              </Link>
            </div>
          </div>
        </section>

        {/* Community Impact */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Community Impact</h2>
          <div className="bg-card p-6 rounded-lg space-y-4">
            <p className="text-muted-foreground">
              2048 has grown beyond a simple puzzle game to become a global community
              of players, developers, and enthusiasts. The game has inspired:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Educational programs teaching mathematical thinking</li>
              <li>Competitive tournaments and championships</li>
              <li>Research in artificial intelligence and game theory</li>
              <li>Creative variations and adaptations</li>
            </ul>
            <div className="mt-4">
              <Link
                href="/community"
                className="text-primary hover:underline"
              >
                Join Our Community →
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Ready to Play?</h2>
          <div className="space-x-4">
            <Link
              href="/"
              className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md hover:opacity-90"
            >
              Play Now
            </Link>
            <Link
              href="/articles"
              className="inline-block bg-card text-card-foreground px-6 py-2 rounded-md hover:bg-accent"
            >
              Read Strategies
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
