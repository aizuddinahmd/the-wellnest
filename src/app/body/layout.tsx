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
  title: "The WellNest - Body Care",
  description:
    "Transform your body journey with The WellNest. Join our body care services, book sessions, and discover a healthier you.",
  keywords:
    "body care, body care services, body care booking, body care session, body care treatment, body care product, body care routine, body care tips, body care advice, body care products, body care treatment, body care routine, body care tips, body care advice",
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
