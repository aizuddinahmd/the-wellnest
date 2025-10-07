"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ServiceCategory } from "@/lib/serviceUtils";

// Navigation links constant
const navLinks = [
  // { href: "/face", label: "Face" },
  { href: "/skin", label: "Skin" },
  { href: "/body", label: "Body" },
  { href: "/health-wellness", label: "Health & Wellness" },
  {
    href: "https://the-wellnestbdt.rezerv.co/class",
    label: "Classes",
    external: true,
  },
  {
    href: "https://the-wellnestbdt.rezerv.co/package",
    label: "Packages",
    external: true,
  },
  // { href: "/memberships", label: "Memberships" },
];

interface NavbarProps {
  activeCategory?: ServiceCategory;
}

function Navbar({ activeCategory }: NavbarProps = {}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full flex justify-center items-center top-0 left-0 z-50 pointer-events-none">
      <div className="pointer-events-auto bg-neutral-300/20 hover:bg-neutral-400/30 backdrop-blur-[5px] border border-neutral-300/20 rounded-full shadow-lg flex items-center justify-between px-6 py-3 mt-4 mx-auto max-w-4xl w-[95vw] relative">
        {/* Logo (image for mobile) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/thewellnest-logo.png"
            alt="The WellNest Logo"
            width={160}
            height={80}
            className="object-contain h-10 w-auto"
            priority
          />
        </Link>
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 ml-8">
          {navLinks.map((link, index) => {
            const isActive =
              pathname === link.href ||
              (activeCategory && link.href === `/${activeCategory}`);

            if (link.external) {
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 font-semibold text-base hover:text-[#D6A496] transition-colors"
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link
                key={index}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`${
                  isActive ? "text-[#D6A496]" : "text-neutral-600"
                } font-semibold text-base hover:text-[#D6A496] transition-colors`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        {/* Desktop Right Side: Dashboard and Get Started */}
        <div className="hidden md:flex items-center gap-4 ml-8">
          <Link
            href="https://wa.link/6w1x6w"
            className="bg-[#d6a496] text-white font-semibold rounded-full px-8 py-3 text-base shadow transition-colors"
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
            {navLinks.map((link, index) => {
              const isActive =
                pathname === link.href ||
                (activeCategory && link.href === `/${activeCategory}`);

              if (link.external) {
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-2 text-gray-800 font-semibold text-base hover:text-[#D6A496] rounded"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={index}
                  href={link.href}
                  className={`block w-full px-4 py-2 ${
                    isActive ? "text-[#D6A496]" : "text-gray-800"
                  } font-semibold text-base hover:text-[#D6A496] rounded`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="https://wa.link/6w1x6w"
              className="block w-full px-4 py-2 mt-2 text-center bg-[#d6a496] text-white font-semibold rounded-full text-base hover:bg-[#d6a496]/60 transition-colors"
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
