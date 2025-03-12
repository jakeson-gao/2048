import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2048 Legal Contact - Get in Touch",
  description: "Contact our legal team for questions about privacy, terms of service, or other legal matters related to 2048.",
  keywords: ["2048 legal contact", "privacy contact", "legal support", "2048 support", "legal inquiry"],
};

export default function LegalContact() {
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
            <li><Link href="/legal" className="hover:text-primary">Legal</Link></li>
            <li className="text-primary">Contact</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Legal Contact</h1>
        <p className="text-center text-muted-foreground mb-8">
          Get in touch with our legal team for any questions or concerns.
        </p>

        {/* Contact Options */}
        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Email Us</h2>
            <p className="text-muted-foreground mb-4">
              For direct communication with our legal team:
            </p>
            <a
              href="mailto:legal@2048game.com"
              className="text-primary hover:underline"
            >
              legal@2048game.com
            </a>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Response Time</h2>
            <p className="text-muted-foreground">
              We aim to respond to all legal inquiries within 2-3 business days.
              For urgent matters, please indicate this in your message.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-card p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6">Contact Form</h2>
          <form className="space-y-6">
            {/* Topic Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Topic *
              </label>
              <select
                className="w-full p-2 border rounded-md bg-background"
                required
              >
                <option value="">Select a topic</option>
                <option value="privacy">Privacy Policy</option>
                <option value="terms">Terms of Service</option>
                <option value="cookies">Cookie Policy</option>
                <option value="data">Data Request</option>
                <option value="other">Other Legal Matter</option>
              </select>
            </div>

            {/* Name */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md bg-background"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md bg-background"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                className="w-full p-2 border rounded-md bg-background"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                className="w-full p-2 border rounded-md bg-background min-h-[150px]"
                required
              ></textarea>
            </div>

            {/* Privacy Agreement */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                className="mt-1"
                required
              />
              <label className="text-sm text-muted-foreground">
                I agree to the processing of my personal data as described in the{" "}
                <Link href="/legal/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                . *
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90"
            >
              Submit Inquiry
            </button>
          </form>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-2">What happens after I submit my inquiry?</h3>
              <p className="text-muted-foreground">
                You'll receive an automatic confirmation email. Our legal team will review your inquiry and respond within 2-3 business days.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-2">How is my data handled?</h3>
              <p className="text-muted-foreground">
                All information submitted through this form is handled according to our Privacy Policy. We use secure encryption for data transmission.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Can I request my data?</h3>
              <p className="text-muted-foreground">
                Yes, you can request access to your personal data. Select "Data Request" from the topic dropdown and provide details in your message.
              </p>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="grid md:grid-cols-3 gap-6">
          <Link
            href="/legal/privacy"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">Privacy Policy →</h3>
            <p className="text-muted-foreground">Review our privacy practices.</p>
          </Link>
          <Link
            href="/legal/terms"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">Terms of Service →</h3>
            <p className="text-muted-foreground">Read our terms and conditions.</p>
          </Link>
          <Link
            href="/legal/cookies"
            className="bg-card p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">Cookie Policy →</h3>
            <p className="text-muted-foreground">Learn about our cookie usage.</p>
          </Link>
        </section>
      </main>
    </div>
  );
}
