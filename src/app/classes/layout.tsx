import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import "@/styles/colors.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The WellNest - Classes & Packages",
  description:
    "Join our classes and packages at The WellNest. Book sessions, discover our wellness programs, and transform your health journey.",
  keywords:
    "classes, packages, wellness classes, fitness classes, pilates classes, health packages, wellness packages, class booking, package booking, wellness programs, fitness programs, health programs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
