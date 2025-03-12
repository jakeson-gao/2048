import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us - 2048 Game Support",
  description: "Get in touch with the 2048 game team. Contact us for support, feedback, or business inquiries. We're here to help!",
  keywords: ["2048 contact", "2048 support", "2048 help", "contact form", "game support"],
};

export default function Contact() {
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
            <li className="text-primary">Contact</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-center text-muted-foreground mb-8">
          We're here to help! Get in touch with our team.
        </p>

        {/* Contact Options */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card p-6 rounded-lg text-center">
            <h2 className="font-semibold mb-2">Support</h2>
            <p className="text-muted-foreground mb-4">
              Need help with the game? Our support team is ready to assist.
            </p>
            <Link
              href="#support-form"
              className="text-primary hover:underline"
            >
              Get Support →
            </Link>
          </div>
          <div className="bg-card p-6 rounded-lg text-center">
            <h2 className="font-semibold mb-2">Feedback</h2>
            <p className="text-muted-foreground mb-4">
              Share your thoughts and suggestions to help us improve.
            </p>
            <Link
              href="#feedback-form"
              className="text-primary hover:underline"
            >
              Give Feedback →
            </Link>
          </div>
          <div className="bg-card p-6 rounded-lg text-center">
            <h2 className="font-semibold mb-2">Business</h2>
            <p className="text-muted-foreground mb-4">
              For business inquiries and partnerships.
            </p>
            <Link
              href="#business-form"
              className="text-primary hover:underline"
            >
              Business Contact →
            </Link>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-12">
          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              {/* Contact Type */}
              <div>
                <label className="block font-medium mb-2">
                  Type of Contact
                </label>
                <select className="w-full p-2 rounded-md border bg-background">
                  <option value="support">Support Request</option>
                  <option value="feedback">Feedback</option>
                  <option value="business">Business Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Name */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border bg-background"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border bg-background"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full p-2 rounded-md border bg-background"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded-md border bg-background"
                  placeholder="Enter message subject"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-medium mb-2">
                  Message
                </label>
                <textarea
                  className="w-full p-2 rounded-md border bg-background min-h-[150px]"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Additional Contact Info */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Other Ways to Reach Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Email Support</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>General Support: support@2048game.com</p>
                <p>Business Inquiries: business@2048game.com</p>
                <p>Press: press@2048game.com</p>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Social Media</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Twitter: @2048Game</p>
                <p>Facebook: /2048Game</p>
                <p>Discord: Join our community</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-2">How quickly do you respond?</h3>
              <p className="text-muted-foreground">
                We aim to respond to all inquiries within 24-48 hours during business days.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-2">What information should I include?</h3>
              <p className="text-muted-foreground">
                Please include your username, device type, and a detailed description of your issue or feedback.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Need immediate help?</h3>
              <p className="text-muted-foreground">
                Check our <Link href="/help" className="text-primary hover:underline">Help Center</Link> for
                instant answers to common questions.
              </p>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="grid md:grid-cols-2 gap-6">
          <Link
            href="/help"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">Help Center →</h3>
            <p className="text-muted-foreground">Find answers to common questions.</p>
          </Link>
          <Link
            href="/community"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">Community →</h3>
            <p className="text-muted-foreground">Join our player community.</p>
          </Link>
        </section>
      </main>
    </div>
  );
}
