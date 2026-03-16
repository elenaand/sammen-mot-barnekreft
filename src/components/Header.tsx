"use client";

import Link from "next/link";
import { Menu, Rainbow, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/kunstauksjon", label: "Kunstauksjon" },
  { href: "/armbaand", label: "Armbånd" },
  { href: "/samarbeidspartnere", label: "Samarbeidspartnere" },
  { href: "/om-oss", label: "Om oss" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-16 px-8 bg-pink-light border-b border-black/10 flex items-center justify-between sticky top-0 z-50 w-full">
      <Link
        href="/"
        className="font-semibold text-md flex items-center gap-4 "
        onClick={() => setIsOpen(false)}
      >
        <Rainbow size={48} className="text-pink-dark" />
        <div className="flex flex-col">
          <span>Sammen</span>
          <span>mot barnekreft</span>
        </div>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden sm:flex ">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="uppercase underline text-xs tracking-widest hover:underline-offset-2 transition-colors px-8 py-4"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button
        className="sm:hidden p-2"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Lukk meny" : "Åpne meny"}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="sm:hidden absolute top-16 left-0 w-full bg-pink-light border-b border-black/10 z-40">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-8 py-4  uppercase text-xs tracking-widest hover:bg-white/50 hover:font-semibold hover:underline-offset-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
