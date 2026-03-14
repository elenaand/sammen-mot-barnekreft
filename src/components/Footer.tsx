"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";

const navLinks = [
  { href: "/", label: "Om oss" },
  { href: "/kunstauksjon", label: "Kunstauksjon" },
  { href: "/armbaand", label: "Armbånd" },
];

export default function Header() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-8 py-12 flex flex-col md:flex-row md:justify-between gap-10">
        {/* Brand */}
        <div>
          <span className="border-l-4 border-yellow-400 pl-3 font-bold uppercase tracking-wide text-md">
            Sammen mot barnekreft
          </span>
          <p className="mt-3 text-sm md:text-lg text-white pl-4">
            Kunstauksjon til inntekt for Barnekreftforeningen
          </p>
        </div>

        {/* Nav */}
        <ul
          className="flex flex-col gap-2 pl-4 md:pl-0 text-xs"
          aria-label="Sidemeny"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="uppercase underline tracking-widest hover:underline-offset-2 transition-colors p-1 hover:text-yellow-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social */}
        <div className="pl-4 md:pl-0 text-xs">
          <a
            href="https://www.instagram.com/sammenmotbarnekreft"
            target="_blank"
            className="flex gap-2 items-center uppercase hover:underline-offset-2 transition-colors hover:text-yellow-400"
          >
            <Instagram size={16} />
            Instagram
          </a>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-white/10 px-8 py-4 text-center text-xs md:text-sm">
        org.nr: 123 456 789 | © 2026 Sammen mot barnekreft
      </div>
    </footer>
  );
}
