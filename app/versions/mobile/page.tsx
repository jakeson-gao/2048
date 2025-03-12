import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile 2048 - Play on Your Phone or Tablet",
  description: "Experience 2048 on your mobile device with touch controls, offline play, and mobile-optimized features. Download the app or play in your mobile browser.",
  keywords: ["2048 mobile", "2048 app", "2048 phone", "2048 tablet", "2048 touch", "offline 2048"],
};

export default function MobileVersion() {
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
            <li className="text-primary">Mobile</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Mobile 2048</h1>
        <p className="text-center text-muted-foreground mb-8">
          Play 2048 anywhere, anytime on your mobile device
        </p>

        {/* Mobile Features */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Mobile Features</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Responsive touch controls</li>
              <li>Offline play capability</li>
              <li>Progress auto-save</li>
              <li>Battery-efficient design</li>
              <li>Customizable themes</li>
              <li>Haptic feedback</li>
            </ul>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Device Support</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>iOS (iPhone & iPad)</li>
              <li>Android phones & tablets</li>
              <li>Mobile web browsers</li>
              <li>Progressive Web App</li>
              <li>Offline-first design</li>
              <li>Cross-device sync</li>
            </ul>
          </div>
        </section>

        {/* Download Options */}
        <section className="bg-card p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Download Options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">App Stores</h3>
              <div className="space-y-4">
                <Link
                  href="/download/ios"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <span>Download on App Store</span>
                </Link>
                <Link
                  href="/download/android"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <span>Get it on Google Play</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Web Version</h3>
              <p className="text-muted-foreground mb-4">
                Play directly in your mobile browser with our PWA version.
                No download required!
              </p>
              <Link
                href="/play"
                className="text-primary hover:underline"
              >
                Play in Browser →
              </Link>
            </div>
          </div>
        </section>

        {/* Mobile Experience */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Touch Controls</h3>
            <p className="text-muted-foreground">
              Intuitive swipe controls optimized for mobile play. Smooth and responsive touch interactions.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Offline Mode</h3>
            <p className="text-muted-foreground">
              Play without internet connection. Your progress is automatically saved locally.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Mobile UI</h3>
            <p className="text-muted-foreground">
              Redesigned interface for mobile screens. Easy to read and navigate on any device.
            </p>
          </div>
        </section>

        {/* Mobile Tips */}
        <section className="bg-secondary/10 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Mobile Gaming Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Touch Controls</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Swipe in any direction to move tiles</li>
                <li>Quick swipes for faster gameplay</li>
                <li>Double-tap to undo (if enabled)</li>
                <li>Long press for additional options</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Mobile Settings</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Adjust touch sensitivity</li>
                <li>Enable/disable haptic feedback</li>
                <li>Choose color themes</li>
                <li>Configure auto-save frequency</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Get Started */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">Get Started Now</h2>
          <p className="text-muted-foreground mb-6">
            Choose your preferred way to play 2048 on mobile
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/download"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:opacity-90"
            >
              Download App
            </Link>
            <Link
              href="/play"
              className="bg-secondary text-secondary-foreground px-6 py-2 rounded-md hover:opacity-90"
            >
              Play in Browser
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
            href="/versions/international"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">← International Versions</h3>
            <p className="text-muted-foreground">Explore different language and cultural adaptations.</p>
          </Link>
        </section>
      </main>
    </div>
  );
}
