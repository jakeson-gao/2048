import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "International 2048 Versions - Global Game Adaptations",
  description: "Explore different versions of 2048 from around the world. Discover unique adaptations, regional variations, and how the game has been embraced globally.",
  keywords: ["2048 international", "2048 variations", "global 2048", "2048 adaptations", "2048 versions"],
};

export default function InternationalVersion() {
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
            <li className="text-primary">International</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">International 2048 Versions</h1>
        <p className="text-center text-muted-foreground mb-8">
          Discover how 2048 has been adapted and enjoyed around the world
        </p>

        {/* Global Impact */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Global Impact</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Since its release, 2048 has inspired countless adaptations worldwide. From language
              variations to cultural themes, the game has been reimagined in unique ways while
              maintaining its core sliding-and-merging mechanics.
            </p>
          </div>
        </section>

        {/* Regional Variations */}
        <section className="grid gap-8 mb-12">
          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Regional Adaptations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Asian Versions</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Chinese characters edition</li>
                  <li>Japanese kanji version</li>
                  <li>Korean hangul adaptation</li>
                  <li>Traditional Asian themes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">European Variants</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Multi-language support</li>
                  <li>Cultural symbol editions</li>
                  <li>Historical themes</li>
                  <li>Educational adaptations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Variations */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Educational</h3>
            <p className="text-muted-foreground mb-4">
              Versions designed to teach language, math, and cultural concepts while playing.
            </p>
            <Link
              href="/versions/educational"
              className="text-primary hover:underline"
            >
              Learn More →
            </Link>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Cultural</h3>
            <p className="text-muted-foreground mb-4">
              Adaptations featuring local customs, traditions, and cultural elements.
            </p>
            <Link
              href="/versions/cultural"
              className="text-primary hover:underline"
            >
              Explore →
            </Link>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Competitive</h3>
            <p className="text-muted-foreground mb-4">
              Regional tournaments and competitive scenes from different countries.
            </p>
            <Link
              href="/versions/competitive"
              className="text-primary hover:underline"
            >
              View More →
            </Link>
          </div>
        </section>

        {/* Language Support */}
        <section className="bg-card p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Language Support</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Available Languages</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>English (Default)</li>
                <li>简体中文 (Simplified Chinese)</li>
                <li>繁體中文 (Traditional Chinese)</li>
                <li>日本語 (Japanese)</li>
                <li>한국어 (Korean)</li>
                <li>Español (Spanish)</li>
                <li>Français (French)</li>
                <li>Deutsch (German)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Coming Soon</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Italiano (Italian)</li>
                <li>Português (Portuguese)</li>
                <li>Русский (Russian)</li>
                <li>العربية (Arabic)</li>
                <li>हिन्दी (Hindi)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Community Contributions */}
        <section className="bg-secondary/10 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Community Contributions</h2>
          <p className="text-muted-foreground mb-4">
            The international success of 2048 has been driven by its passionate community. Players
            worldwide have contributed translations, cultural adaptations, and unique variations
            that make the game more accessible and enjoyable for everyone.
          </p>
          <Link
            href="/community"
            className="text-primary hover:underline"
          >
            Join Our Community →
          </Link>
        </section>

        {/* Try Different Versions */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">Try Different Versions</h2>
          <p className="text-muted-foreground mb-6">
            Experience 2048 in different languages and cultural adaptations.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/play/language-select"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:opacity-90"
            >
              Choose Language
            </Link>
            <Link
              href="/versions"
              className="bg-secondary text-secondary-foreground px-6 py-2 rounded-md hover:opacity-90"
            >
              Browse All Versions
            </Link>
          </div>
        </section>

        {/* Related Pages */}
        <section className="grid md:grid-cols-2 gap-6">
          <Link
            href="/versions/official"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">← Official Version</h3>
            <p className="text-muted-foreground">Return to the original 2048 game.</p>
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
