import type { Metadata } from "next";
import "./globals.css";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const seoKeywords = [
  "California music producer",
  "Music producer in California",
  "Top music producer California",
  "Best music producer in California",
  "Professional music production services",
  "Hip hop producer California",
  "Pop music producer California",
  "Custom music production California",
  "Music producer portfolio",
  "Music production studio California",
  "Music producer for hire California",
  "Music producer demo reel",
  "Music producer for artists in California",
  "California recording studio",
  "Sound production California",
  "Song production services California",
  "Producer portfolio music California",
  "Music producer for independent artist",
];

export const metadata: Metadata = {
  title: "Kasteo | Music Producer",
  description:
    "Innovative Music Producer Crafting Immersive Soundscapes and Redefining Modern Music.",
  keywords: seoKeywords,
  authors: [
    {
      name: "Kasteo",
      url: "url",
    },
  ],
  creator: "Kasteo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "website-url",
    title: "Kasteo | Music Producer",
    description:
      "Innovative Music Producer Crafting Immersive Soundscapes and Redefining Modern Music.",
    siteName: "Kasteo | Music Producer",
    // images: [
    //   {
    //     url: siteConfig.ogImage,
    //     width: 1200,
    //     height: 630,
    //     alt: siteConfig.name,
    //   },
    // ],
  },
  icons: {
    icon: "/logo.PNG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.className} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
