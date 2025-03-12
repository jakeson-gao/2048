import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2048 Brain Exercise - Mental Benefits of Playing 2048",
  description: "Discover how playing 2048 exercises your brain, improves cognitive skills, and enhances problem-solving abilities. Learn about the mental benefits and cognitive advantages of this addictive puzzle game.",
  keywords: ["2048 brain exercise", "2048 mental benefits", "2048 cognitive skills", "brain training games", "puzzle game benefits"],
};

export default function BrainExercise() {
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
            <li><Link href="/education" className="hover:text-primary">Education</Link></li>
            <li className="text-primary">Brain Exercise</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Brain Exercise Benefits of 2048</h1>
        <p className="text-center text-muted-foreground mb-8">
          Discover how playing 2048 can enhance your cognitive abilities and mental skills
        </p>

        {/* Key Benefits */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Cognitive Enhancement</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Improved pattern recognition</li>
              <li>Enhanced spatial awareness</li>
              <li>Better problem-solving skills</li>
              <li>Increased mental agility</li>
            </ul>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Memory Benefits</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Working memory training</li>
              <li>Strategic thinking practice</li>
              <li>Pattern memorization</li>
              <li>Sequence retention</li>
            </ul>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Mental Skills</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Decision-making practice</li>
              <li>Focus improvement</li>
              <li>Concentration training</li>
              <li>Mental endurance</li>
            </ul>
          </div>
        </section>

        {/* Detailed Benefits */}
        <section className="space-y-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">How 2048 Exercises Your Brain</h2>
            <div className="prose max-w-none">
              <p>
                Playing 2048 engages multiple cognitive functions simultaneously, providing a comprehensive mental workout.
                The game requires players to think several moves ahead, recognize patterns, and make quick decisions under
                pressure.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Scientific Research</h2>
            <div className="prose max-w-none">
              <p>
                Studies have shown that puzzle games like 2048 can help improve:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Short-term memory capacity</li>
                <li>Problem-solving abilities</li>
                <li>Mental processing speed</li>
                <li>Strategic thinking capabilities</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tips for Brain Training */}
        <section className="bg-card p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Maximizing Brain Training Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Regular Practice</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Play daily for 15-30 minutes</li>
                <li>Focus on improvement, not just winning</li>
                <li>Try different strategies</li>
                <li>Challenge yourself with goals</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Advanced Training</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Analyze your gameplay</li>
                <li>Learn from mistakes</li>
                <li>Increase difficulty gradually</li>
                <li>Track your progress</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">Start Your Brain Training Journey</h2>
          <p className="text-muted-foreground mb-6">
            Begin exercising your brain today with 2048. Track your progress and see the improvements in your cognitive abilities.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/play/classic"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:opacity-90"
            >
              Play Now
            </Link>
            <Link
              href="/education/progress-tracking"
              className="bg-secondary text-secondary-foreground px-6 py-2 rounded-md hover:opacity-90"
            >
              Track Progress
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="grid md:grid-cols-2 gap-6">
          <Link
            href="/education/kids-guide"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">2048 for Kids →</h3>
            <p className="text-muted-foreground">How 2048 can help children develop mathematical thinking.</p>
          </Link>
          <Link
            href="/education/math-benefits"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">Mathematical Benefits →</h3>
            <p className="text-muted-foreground">Explore how 2048 improves mathematical reasoning.</p>
          </Link>
        </section>
      </main>
    </div>
  );
}
