import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2048 Community - Join Fellow Players",
  description: "Join the 2048 game community! Connect with players worldwide, share strategies, participate in tournaments, and climb the leaderboard.",
  keywords: ["2048 community", "2048 players", "2048 tournaments", "2048 leaderboard", "2048 discord"],
};

export default function Community() {
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
            <li className="text-primary">Community</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Join Our Community</h1>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Connect with players worldwide, share strategies, participate in tournaments, and become part of the growing 2048 community.
        </p>

        {/* Community Highlights */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-primary mb-2">50K+</div>
            <h2 className="font-semibold mb-2">Active Players</h2>
            <p className="text-muted-foreground">
              Join thousands of active players from around the world.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <h2 className="font-semibold mb-2">Daily Tournaments</h2>
            <p className="text-muted-foreground">
              Compete in daily tournaments and special events.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <h2 className="font-semibold mb-2">Discord Members</h2>
            <p className="text-muted-foreground">
              Join our active Discord community for real-time discussions.
            </p>
          </div>
        </section>

        {/* Community Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Community Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Global Leaderboard</h3>
              <p className="text-muted-foreground mb-4">
                Compete with players worldwide and climb the rankings. Track your progress
                and see how you stack up against the best.
              </p>
              <Link
                href="/#leaderboard"
                className="text-primary hover:underline"
              >
                View Leaderboard →
              </Link>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Daily Tournaments</h3>
              <p className="text-muted-foreground mb-4">
                Participate in daily tournaments with unique challenges and win exclusive
                rewards and badges.
              </p>
              <Link
                href="/tournaments"
                className="text-primary hover:underline"
              >
                Join Tournaments →
              </Link>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Strategy Sharing</h3>
              <p className="text-muted-foreground mb-4">
                Share your winning strategies, learn from others, and improve your game
                through community discussions.
              </p>
              <Link
                href="/articles"
                className="text-primary hover:underline"
              >
                Browse Strategies →
              </Link>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Achievement System</h3>
              <p className="text-muted-foreground mb-4">
                Earn badges and achievements as you progress. Show off your accomplishments
                to the community.
              </p>
              <Link
                href="/achievements"
                className="text-primary hover:underline"
              >
                View Achievements →
              </Link>
            </div>
          </div>
        </section>

        {/* Discord Community */}
        <section className="mb-12">
          <div className="bg-card p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Join Our Discord Community</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Connect with players in real-time, participate in community events, get instant
              help, and stay updated with the latest news and tournaments.
            </p>
            <a
              href="https://discord.gg/2048game"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md hover:opacity-90"
            >
              Join Discord Server
            </a>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Community Guidelines</h2>
          <div className="space-y-4">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Be Respectful</h3>
              <p className="text-muted-foreground">
                Treat all community members with respect. No harassment, hate speech, or
                inappropriate behavior will be tolerated.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Play Fair</h3>
              <p className="text-muted-foreground">
                Cheating and exploits are strictly prohibited. Play fairly and respect
                the competitive spirit of the game.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Share Knowledge</h3>
              <p className="text-muted-foreground">
                Help fellow players improve by sharing tips and strategies. A rising tide
                lifts all boats!
              </p>
            </div>
          </div>
        </section>

        {/* Get Started */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Ready to Join?</h2>
          <div className="space-x-4">
            <Link
              href="/register"
              className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md hover:opacity-90"
            >
              Create Account
            </Link>
            <Link
              href="/help"
              className="inline-block bg-card text-card-foreground px-6 py-2 rounded-md hover:bg-accent"
            >
              Learn More
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
