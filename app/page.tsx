import Image from "next/image";
import Link from "next/link";
import Game2048 from "./components/Game2048";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <header className="py-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Play 2048 Online</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The Classic Number Puzzle Game - Free to Play!
        </p>
      </header>

      {/* Game Section */}
      <section className="max-w-4xl mx-auto px-4 py-8">
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
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Winning Strategies</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Keep your highest number in a corner</li>
                <li>Build a chain of descending numbers</li>
                <li>Maintain empty cells for flexibility</li>
                <li>Think ahead before each move</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features and Benefits */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Play 2048?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Brain Training</h3>
              <p className="text-muted-foreground">Enhance your strategic thinking and problem-solving skills while having fun.</p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Educational Value</h3>
              <p className="text-muted-foreground">Practice mental math and pattern recognition in an engaging way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 2048 Game - Free to play, no download required.
          </p>
          <div className="mt-4 space-x-4">
            <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="text-primary hover:underline">Terms of Use</Link>
            <Link href="/contact" className="text-primary hover:underline">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
