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
  title: "The WellNest - Health & Wellness",
  description:
    "Transform your health and wellness journey with The WellNest. Join our health services, book sessions, and discover a healthier you.",
  keywords:
    "health wellness, health services, wellness services, health booking, wellness booking, health session, wellness session, health treatment, wellness treatment, health routine, wellness routine, health tips, wellness tips, health advice, wellness advice",
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
