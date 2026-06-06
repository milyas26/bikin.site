import type { Metadata } from "next";
import { Fraunces, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import Providers from "@/app/providers";
import { defaultSiteMetadata } from '@/lib/seo'

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = defaultSiteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="32f7c70a-b3f7-447a-933c-8a3fe19b58d4"></script>
      </head>
      <body className={`${fraunces.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased`}>
        <Providers>
          {children}
          <Footer />
          <BottomNav />
        </Providers>
      </body>
    </html>
  );
}
