import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers/Providers";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://zamirulkabir.com"),
  title: {
    default: "Zamirul Kabir | Full-Stack Web Developer",
    template: "%s | Zamirul Kabir",
  },
  description:
    "Zamirul Kabir is a Full-Stack Web Developer with 2.5+ years of experience in JavaScript, TypeScript, React, Next.js, Node.js, NestJS, MongoDB, PostgreSQL, and MySQL. He builds scalable, high-performance web applications.",
  keywords: [
    "Zamirul Kabir",
    "Full Stack Developer",
    "Web Developer Portfolio",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "NestJS Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "MERN Stack Developer",
    "Bangladesh Web Developer",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  authors: [{ name: "Zamirul Kabir", url: "https://zamirulkabir.com" }],
  creator: "Zamirul Kabir",
  openGraph: {
    title: "Zamirul Kabir | Full-Stack Web Developer",
    description:
      "Portfolio of Zamirul Kabir — Full-Stack Web Developer specializing in React, Next.js, Node.js, and scalable web solutions.",
    url: "https://zamirulkabir.com",
    siteName: "Zamirul Kabir Portfolio",
    images: [
      {
        url: "https://i.ibb.co/Cs0NMCTd/zzamirul.jpg",
        width: 1200,
        height: 630,
        alt: "Zamirul Kabir - Full Stack Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zamirul Kabir | Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer with expertise in React, Next.js, Node.js, NestJS, and modern databases.",
    creator: "@zamirulkabir", // optional
    images: ["https://i.ibb.co/Cs0NMCTd/zzamirul.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://zamirulkabir.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Providers>
      <html lang="en">
        <body
          style={{ overscrollBehaviorY: "contain" }}
          className={`${inter.className} bg-[#0F172A]`}
        >
          {children}
          <Toaster position="top-right" />
        </body>
      </html>
    </Providers>
  );
}
