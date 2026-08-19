import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://codesfoundry.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CodesFoundry — Software, made properly.",
    template: "%s · CodesFoundry",
  },
  description:
    "An independent engineering studio building custom applications, integrations, and long-term support for teams that expect craft.",
  keywords: [
    "custom software development",
    "React",
    "Angular",
    "Spring Boot",
    "Node.js",
    "health tech",
    "biometric authentication",
    "third-party integrations",
    "legacy modernization",
    "boutique software studio",
  ],
  authors: [{ name: "CodesFoundry" }],
  openGraph: {
    title: "CodesFoundry — Software, made properly.",
    description:
      "An independent engineering studio building custom applications, integrations, and long-term support.",
    url: siteUrl,
    siteName: "CodesFoundry",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodesFoundry",
    description: "Software, made properly.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <div className="grain" aria-hidden="true" />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
