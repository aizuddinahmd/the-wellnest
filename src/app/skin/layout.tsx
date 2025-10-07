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
  title: "The WellNest - Skin Care",
  description:
    "Transform your skin journey with The WellNest. Join our skin care services, book sessions, and discover a healthier you.",
  keywords:
    "skin care, skin care services, skin care booking, skin care session, skin care treatment, skin care product, skin care routine, skin care tips, skin care advice, skin care products, skin care treatment, skin care routine, skin care tips, skin care advice",
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
