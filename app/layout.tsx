import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://birdbrain.audio"),
  title: {
    default: "Bird Brain — Neural DSP Audio",
    template: "%s | Bird Brain",
  },
  description:
    "Guitar pedals, eurorack modules, and audio plugins built on neural net DSP. Precision engineering meets analog soul.",
  keywords: [
    "guitar pedals",
    "eurorack",
    "audio plugins",
    "neural DSP",
    "DSP audio",
    "bird brain",
    "neural spice modeling",
    "analog modeling",
    "open weights",
  ],
  openGraph: {
    siteName: "Bird Brain",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@birdbrain_audio",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    types: {
      "application/rss+xml": "https://birdbrain.audio/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Force dark — Bird Brain is always dark
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
