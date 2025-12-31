import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kasparro | AI-Native SEO & Brand Intelligence Platform",
  description:
    "Win visibility in the AI search era. Kasparro is the AI-native SEO platform built for ChatGPT, Gemini, Perplexity, and the next generation of search.",
  keywords: ["AI SEO", "brand intelligence", "ChatGPT SEO", "AI search optimization"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip link for keyboard navigation */}
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div id="main-content">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
