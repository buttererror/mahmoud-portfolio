import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://www.buttererror.com";
const siteTitle = "Mahmoud Ahmed | Full-Stack Developer";
const siteDescription =
  "Full-Stack Developer with 7+ years of frontend experience building product interfaces, APIs, relational data, and reliable web applications.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Mahmoud Ahmed Portfolio",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/preview-fullstack.png",
        width: 2560,
        height: 1272,
        alt: "Mahmoud Ahmed portfolio homepage preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/preview-fullstack.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-zinc-50 text-zinc-950">{children}</body>
    </html>
  );
}
