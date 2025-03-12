import Link from 'next/link';

export const metadata = {
  title: 'Game Articles & Guides - 2048 Strategy Tips',
  description: 'Explore in-depth articles about 2048 game strategies, tips, techniques, and advanced guides. Learn from experts and improve your gameplay.',
};

const articles = [
  {
    title: 'Mastering 2048: Complete Strategy Guide',
    description: 'Learn the fundamental strategies and advanced techniques to consistently reach high scores in 2048.',
    category: 'Strategy',
    readTime: '10 min read',
    slug: 'mastering-2048-strategy-guide'
  },
  {
    title: 'Advanced Corner Techniques in 2048',
    description: 'Deep dive into the corner strategy and learn how to maintain control throughout the game.',
    category: 'Advanced',
    readTime: '8 min read',
    slug: 'advanced-corner-techniques'
  },
  {
    title: 'From Beginner to Pro: 2048 Progress Guide',
    description: 'Step-by-step guide to improving your 2048 game, from basic moves to advanced strategies.',
    category: 'Tutorial',
    readTime: '15 min read',
    slug: 'beginner-to-pro-guide'
  },
  {
    title: 'Breaking Records: High Score Techniques',
    description: 'Expert tips and strategies for achieving record-breaking scores in 2048.',
    category: 'Advanced',
    readTime: '12 min read',
    slug: 'high-score-techniques'
  },
  {
    title: 'Common Mistakes to Avoid in 2048',
    description: 'Learn about the most common pitfalls and how to avoid them to improve your game.',
    category: 'Tips',
    readTime: '7 min read',
    slug: 'common-mistakes'
  },
  {
    title: 'Mathematical Patterns in 2048',
    description: 'Explore the mathematical principles and patterns behind the 2048 game.',
    category: 'Analysis',
    readTime: '10 min read',
    slug: 'mathematical-patterns'
  }
];

export default function Articles() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">2048 Game Articles & Guides</h1>
          <p className="text-xl text-muted-foreground">
            Improve your game with our collection of expert guides and strategies
          </p>
        </header>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {['All', 'Strategy', 'Tutorial', 'Advanced', 'Tips', 'Analysis'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="bg-card p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  {article.category}
                </span>
                <span className="text-sm text-muted-foreground">{article.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-muted-foreground mb-4">{article.description}</p>
              <Link
                href={`/articles/${article.slug}`}
                className="text-primary hover:underline"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-card p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6">
            Get the latest 2048 strategies and tips delivered to your inbox
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold mb-4">Ready to Apply These Strategies?</h2>
          <Link
            href="/"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md hover:opacity-90"
          >
            Play 2048 Now
          </Link>
        </div>
      </div>
    </div>
  );
}
