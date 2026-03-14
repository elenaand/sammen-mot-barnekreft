"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Om oss" },
  { href: "/kunstauksjon", label: "Kunstauksjon" },
  { href: "/armbaand", label: "Armbånd" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="h-16 px-8 bg-white border-b border-black/10 flex items-center justify-between sticky top-0 z-50 w-full">
      <Link
        href="/"
        className="border-l-4 border-yellow-400 pl-3 font-bold uppercase tracking-wide text-md"
        onClick={() => setIsOpen(false)}
      >
        Sammen mot barnekreft
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex ">
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
        className="md:hidden p-2"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Lukk meny" : "Åpne meny"}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-black/10 z-40">
          <nav className="flex flex-col  ">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-8 py-4  uppercase text-xs tracking-widest hover:bg-yellow-100 hover:underline-offset-2 transition-colors"
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
