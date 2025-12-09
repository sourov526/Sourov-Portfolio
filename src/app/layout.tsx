import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description:
    "Full-stack engineer crafting resilient cloud platforms, polished product experiences, and developer tools that scale.",
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description:
      "Full-stack engineer crafting resilient cloud platforms, polished product experiences, and developer tools that scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <span className="noise-overlay" aria-hidden />
          <div className="relative min-h-screen pb-12 md:pb-20">
            <SiteHeader />
            <div className="px-4 pt-6 md:px-8 md:pt-10">
              <main className="space-y-8">{children}</main>
              <footer className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-400 md:mt-16">
                © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js,
                Tailwind, and a lot of curiosity.
              </footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
