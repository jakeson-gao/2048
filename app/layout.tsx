import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "2048 Game - Classic Number Puzzle Game | Play Free Online",
  description: "Experience the ultimate 2048 puzzle game online! Master strategic tile merging, achieve high scores, and challenge your brain. Available in multiple versions: Classic, HD, and Mobile. Perfect for puzzle enthusiasts and math lovers!",
  verification: {
    google: '_DrTUHePq2worIqLzTIKvdjnA7yp6L1-aPdpS--IKKA',
  },
  keywords: [
    // Core Keywords
    "2048", "2048 Game", "Play 2048 Online", "2048 Download", "2048 Guide",
    // Variants and Versions
    "2048 Classic Version", "2048 Mobile Version", "2048 PC Version", "2048 Web Version",
    "2048 Multiplayer Version", "2048 HD", "2048 Lite Version",
    // Gameplay and Tutorial
    "How to Play 2048", "2048 Rules", "2048 Game Tutorial", "2048 Newbie Guide",
    // Strategy and Tips
    "2048 High Score Tips", "2048 Winning Strategies", "2048 Swipe Direction Tips",
    "2048 Merge Tips", "2048 Complete Game Guide", "How to Combine 2048 Tile",
    // Educational Value
    "Brain Exercise Game", "Math Learning Game", "Educational Puzzle Game",
    // Game Comparisons
    "Games Similar to 2048", "2048 vs Threes", "Number Puzzle Games",
    // Technical and Features
    "2048 Game Development", "2048 Game Themes", "2048 Official Version",
    // Mobile and Platform
    "2048 Mobile Game", "2048 Browser Game", "2048 Web App"
  ],
  openGraph: {
    title: "2048 - The Ultimate Number Puzzle Game Experience",
    description: "Play the official 2048 game online! Master strategic moves, unlock achievements, and compete for high scores. Available in Classic, HD, and Mobile versions with multiple themes and challenges.",
    type: "website",
    locale: "en_US",
    siteName: "2048 Game Official",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "2048 Game Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Play 2048 - Classic Number Puzzle Game",
    description: "Challenge yourself with the addictive 2048 puzzle game! Available in multiple versions with HD graphics and custom themes. Perfect for brain training and mathematical thinking.",
    images: ["/twitter-image.png"]
  },
  alternates: {
    canonical: "https://your-domain.com",
    languages: {
      "en-US": "/en-US",
      "zh-CN": "/zh-CN"
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1
  },
  category: "Game",
  applicationName: "2048 Classic Puzzle",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "2048 Game",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
