"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Navigation links constant
const navLinks = [
  { href: "/face", label: "Face" },
  { href: "/skin", label: "Skin" },
  { href: "/body", label: "Body" },
  { href: "/health-wellness", label: "Health & Wellness" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full flex justify-center items-center top-0 left-0 z-50 pointer-events-none">
      <div className="pointer-events-auto bg-white/10 backdrop-blur-md rounded-full shadow-lg flex items-center justify-between px-6 py-3 mt-4 mx-auto max-w-3xl w-[95vw] relative">
        {/* Logo (image for mobile) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/thewellnest-logo.png"
            alt="The WellNest Logo"
            width={100}
            height={40}
            className="object-contain h-10 w-auto"
            priority
          />
        </Link>
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 ml-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-white font-semibold text-base hover:text-[#D6A496] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Desktop Right Side: Dashboard and Get Started */}
        <div className="hidden md:flex items-center gap-4 ml-8">
          <Link
            href="/get-started"
            className="bg-[#b7a37a]   text-black font-semibold rounded-full px-8 py-3 text-base shadow hover:bg-[#c18e4a] transition-colors"
          >
            Book now
          </Link>
        </div>
        {/* Hamburger menu */}
        <button
          className="block md:hidden p-2 rounded focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open menu</span>
          <svg
            width="36"
            height="36"
            fill="none"
            stroke="white"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </button>
        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white/90 rounded-xl shadow-lg flex flex-col items-end w-44 py-2 z-50">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block w-full px-4 py-2 text-gray-800 font-semibold text-base hover:bg-blue-100 rounded"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-started"
              className="block w-full px-4 py-2 mt-2 text-center bg-blue-300 text-black font-semibold rounded-full text-base hover:bg-blue-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Book now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
