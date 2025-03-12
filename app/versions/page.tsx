import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2048 Game Versions - Official, Mobile & International",
  description: "Explore all versions of the 2048 game, including the official release, mobile adaptations, and international variants. Find the perfect way to play 2048.",
  keywords: ["2048 versions", "2048 variants", "2048 adaptations", "2048 mobile", "2048 international", "2048 official"],
};

export default function VersionsIndex() {
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
            <li className="text-primary">Versions</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">2048 Game Versions</h1>
        <p className="text-center text-muted-foreground mb-8">
          Choose your preferred way to play 2048
        </p>

        {/* Main Versions */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <Link
            href="/versions/official"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4">Official</h2>
            <p className="text-muted-foreground mb-4">
              The original 2048 game created by Gabriele Cirulli. Experience the classic that started it all.
            </p>
            <span className="text-primary">Play Original →</span>
          </Link>

          <Link
            href="/versions/mobile"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4">Mobile</h2>
            <p className="text-muted-foreground mb-4">
              Optimized for phones and tablets with touch controls and offline play capability.
            </p>
            <span className="text-primary">Get Mobile →</span>
          </Link>

          <Link
            href="/versions/international"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4">International</h2>
            <p className="text-muted-foreground mb-4">
              Multiple language versions and cultural adaptations from around the world.
            </p>
            <span className="text-primary">Explore Variants →</span>
          </Link>
        </section>

        {/* Special Editions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Special Editions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/versions/educational"
              className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold mb-2">Educational Edition</h3>
              <p className="text-muted-foreground">
                Learn while you play with math-focused and educational variants.
              </p>
            </Link>
            <Link
              href="/versions/competitive"
              className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold mb-2">Competitive Edition</h3>
              <p className="text-muted-foreground">
                Challenge yourself with tournament rules and competitive features.
              </p>
            </Link>
            <Link
              href="/versions/cultural"
              className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold mb-2">Cultural Editions</h3>
              <p className="text-muted-foreground">
                Experience 2048 with themes from different cultures and traditions.
              </p>
            </Link>
            <Link
              href="/versions/accessibility"
              className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold mb-2">Accessible Edition</h3>
              <p className="text-muted-foreground">
                Enhanced accessibility features for players with different needs.
              </p>
            </Link>
          </div>
        </section>

        {/* Version Features */}
        <section className="bg-card p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6">Version Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Official Version</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Classic gameplay</li>
                <li>Original design</li>
                <li>Web-based</li>
                <li>Keyboard controls</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Mobile Version</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Touch controls</li>
                <li>Offline play</li>
                <li>Auto-save</li>
                <li>Mobile UI</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">International</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Multiple languages</li>
                <li>Cultural themes</li>
                <li>Regional adaptations</li>
                <li>Local leaderboards</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Version Comparison */}
        <section className="bg-secondary/10 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Which Version Should You Choose?</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong>Desktop Users:</strong> Try the official version for the classic experience
              with keyboard controls and full-screen gameplay.
            </p>
            <p>
              <strong>Mobile Users:</strong> The mobile version offers the best experience on
              phones and tablets with touch-optimized controls.
            </p>
            <p>
              <strong>International Players:</strong> Choose from our range of language versions
              and cultural adaptations for a localized experience.
            </p>
            <p>
              <strong>Educational Use:</strong> Our educational editions are perfect for
              learning while playing, with math-focused variants.
            </p>
          </div>
        </section>

        {/* Get Started */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Play?</h2>
          <p className="text-muted-foreground mb-6">
            Choose your preferred version and start playing 2048 now
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/play/classic"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:opacity-90"
            >
              Play Classic
            </Link>
            <Link
              href="/download"
              className="bg-secondary text-secondary-foreground px-6 py-2 rounded-md hover:opacity-90"
            >
              Get Mobile App
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
