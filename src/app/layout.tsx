import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Naturopathy Center in Lucknow | Kanchankaya Since 1996",
  description: "Leading naturopathy center in Lucknow since 1996. Expert natural healing for chronic pain, diabetes, obesity & stress. 4.7★ rated. Book consultation today!",
  keywords: "naturopathy center Lucknow, naturopathy treatment Lucknow, best naturopathy Lucknow, Kanchankaya Naturopathy, naturopathy clinic Lucknow",
  openGraph: {
    title: "Best Naturopathy Center in Lucknow | Kanchankaya Since 1996",
    description: "Leading naturopathy center in Lucknow since 1996. Expert natural healing for chronic pain, diabetes, obesity & stress. 4.7★ rated.",
    url: "https://mrsvandanamishra.whitecoats.com/", // Keeping existing URL as requested in MD
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Naturopathy Center in Lucknow | Kanchankaya Since 1996",
    description: "Leading naturopathy center in Lucknow since 1996. Expert natural healing",
  },
  alternates: {
    canonical: "https://mrsvandanamishra.whitecoats.com/",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
