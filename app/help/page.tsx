import Link from 'next/link';

export const metadata = {
  title: 'Help Center - Learn How to Play 2048',
  description: 'Complete guide to playing 2048. Learn game rules, strategies, tips, and tricks to achieve high scores and master the game.',
};

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">2048 Game Help Center</h1>

        {/* Quick Start Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Quick Start Guide</h2>
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Basic Rules</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use arrow keys to move all tiles</li>
              <li>When two tiles with the same number touch, they merge into one</li>
              <li>After each move, a new tile appears (2 or 4)</li>
              <li>Create a tile with the number 2048 to win!</li>
            </ul>
            <div className="mt-6">
              <Link
                href="/"
                className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md hover:opacity-90"
              >
                Start Playing Now
              </Link>
            </div>
          </div>
        </section>

        {/* Strategy Guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Winning Strategies</h2>
          <div className="grid gap-6">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Corner Strategy</h3>
              <p className="mb-4">Keep your highest number tile in a corner and build a chain of descending numbers.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pick a corner (usually top-left or bottom-right)</li>
                <li>Keep your highest number tile there</li>
                <li>Build a snake pattern of descending numbers</li>
                <li>Only move away from this pattern when absolutely necessary</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Merging Tips</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Plan several moves ahead</li>
                <li>Don't rush - take your time to analyze the board</li>
                <li>Keep similar numbers close to each other</li>
                <li>Maintain at least one empty column or row for movement</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Advanced Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Advanced Techniques</h2>
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Chain Reactions</h3>
            <p className="mb-4">Master these advanced techniques to achieve higher scores:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create multiple merges in a single move</li>
              <li>Use edge tiles to build larger numbers safely</li>
              <li>Keep track of where new tiles might appear</li>
              <li>Develop backup strategies for when your main pattern breaks</li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">What happens when the board is full?</h3>
              <p>The game ends when no legal moves remain. This happens when the board is full and no adjacent tiles can be merged.</p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">How is the score calculated?</h3>
              <p>Your score increases by the value of each merged tile. For example, merging two 4s gives you 8 points.</p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Can I undo a move?</h3>
              <p>In the classic version, there is no undo feature. This adds to the strategic challenge of the game.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Play?</h2>
          <p className="mb-6">Put your knowledge to the test and try to reach 2048!</p>
          <Link
            href="/"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md hover:opacity-90"
          >
            Play 2048 Now
          </Link>
        </section>
      </div>
    </div>
  );
}
