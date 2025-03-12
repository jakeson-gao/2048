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
  metadataBase: new URL('https://2048game.com'),
  title: {
    default: '2048 Game - Play the Classic Number Puzzle Game Online for Free',
    template: '%s | 2048 Game'
  },
  description: 'Play the official 2048 puzzle game online! Join numbers to get the 2048 tile. Features multiple versions, tutorials, strategies, and a global leaderboard. Free to play, no download required.',
  keywords: [
    // Core Keywords
    '2048', '2048 Game', 'Play 2048 Online', '2048 Download', '2048 Guide', 'free game',
    // Variants and Versions
    '2048 Classic Version', '2048 Mobile Version', '2048 PC Version', '2048 Web Version',
    '2048 Multiplayer Version', '2048 HD', '2048 Lite Version',
    // Gameplay and Tutorial
    'How to Play 2048', '2048 Rules', '2048 Game Tutorial', '2048 Newbie Guide',
    // Tips and Strategies
    '2048 High Score Tips', '2048 Winning Strategies', '2048 Swipe Direction Tips',
    '2048 Merge Tips', '2048 Complete Game Guide', 'How to Combine 2048 Tile',
    // Educational Value
    'Brain Exercise Game', 'Math Learning Game', 'Educational Puzzle Game',
    // Game Comparisons
    'Games Similar to 2048', '2048 vs Threes', 'Number Puzzle Games',
    // Technical and Features
    '2048 Game Development', '2048 Game Themes', '2048 Official Version',
    // Mobile and Platform
    '2048 Mobile Game', '2048 Browser Game', '2048 Web App'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://2048game.com',
    siteName: '2048 Game - Official Website',
    title: '2048 - The Ultimate Number Puzzle Game',
    description: 'Play the classic 2048 puzzle game online! Challenge yourself with multiple versions, compete on the global leaderboard, and learn winning strategies.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '2048 Game Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '2048 Game - Play Free Online',
    description: 'Challenge yourself with the addictive 2048 puzzle game! Available in multiple versions with HD graphics and custom themes.',
    images: ['/twitter-image.png'],
    creator: '@2048game'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  alternates: {
    canonical: 'https://2048game.com',
    languages: {
      'en-US': '/en-US',
      'zh-CN': '/zh-CN'
    }
  },
  verification: {
    google: '_DrTUHePq2worIqLzTIKvdjnA7yp6L1-aPdpS--IKKA',
  },
  category: 'Game',
  classification: 'Puzzle Game, Brain Training, Educational Game',
  creator: '2048 Game Team',
  publisher: '2048 Game Official',
  applicationName: '2048 Classic Puzzle',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-title': '2048 Game',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#ffffff'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
