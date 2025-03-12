import Link from "next/link";
import Game2048 from "./components/Game2048";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="bg-card shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">2048</Link>
            <div className="flex gap-6">
              <Link href="/help" className="hover:text-primary">Help Center</Link>
              <Link href="/articles" className="hover:text-primary">Articles</Link>
              <Link href="/#leaderboard" className="hover:text-primary">Leaderboard</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Play 2048 Online</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The Classic Number Puzzle Game - Free to Play!
        </p>
      </header>

      {/* Game Section */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <Game2048 />
      </section>

      {/* How to Play */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">How to Play 2048</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Game Rules</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Use arrow keys to move tiles</li>
                <li>Matching numbers merge into their sum</li>
                <li>Reach the 2048 tile to win</li>
                <li>Plan your moves carefully</li>
              </ul>
              <div className="mt-6">
                <Link href="/help" className="text-primary hover:underline">
                  View Complete Guide →
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Winning Strategies</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Keep your highest number in a corner</li>
                <li>Build a chain of descending numbers</li>
                <li>Maintain empty cells for flexibility</li>
                <li>Think ahead before each move</li>
              </ul>
              <div className="mt-6">
                <Link href="/articles" className="text-primary hover:underline">
                  Read Strategy Guides →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features and Benefits */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Play 2048?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Brain Training</h3>
              <p className="text-muted-foreground">Enhance your strategic thinking and problem-solving skills while having fun.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Educational Value</h3>
              <p className="text-muted-foreground">Practice mental math and pattern recognition in an engaging way.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Global Competition</h3>
              <p className="text-muted-foreground">Compete with players worldwide and climb the leaderboard rankings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-muted-foreground hover:text-primary">Play Game</Link></li>
                <li><Link href="/help" className="text-muted-foreground hover:text-primary">Help Center</Link></li>
                <li><Link href="/articles" className="text-muted-foreground hover:text-primary">Articles</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/articles/mastering-2048-strategy-guide" className="text-muted-foreground hover:text-primary">Strategy Guide</Link></li>
                <li><Link href="/articles/beginner-to-pro-guide" className="text-muted-foreground hover:text-primary">Beginner's Guide</Link></li>
                <li><Link href="/articles/high-score-techniques" className="text-muted-foreground hover:text-primary">High Score Tips</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li><Link href="/#leaderboard" className="text-muted-foreground hover:text-primary">Leaderboard</Link></li>
                <li><Link href="/articles" className="text-muted-foreground hover:text-primary">Latest Articles</Link></li>
                <li><a href="#newsletter" className="text-muted-foreground hover:text-primary">Newsletter</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-muted-foreground hover:text-primary">Terms of Use</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>© 2024 2048 Game - Free to play, no download required.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
