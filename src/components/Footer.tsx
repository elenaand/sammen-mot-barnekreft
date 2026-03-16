"use client";

import { Instagram, Mail, Rainbow } from "lucide-react";

export default function Header() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-3xl mx-auto px-8 py-12 flex flex-col md:flex-row md:justify-between gap-10 items-center">
        {/* Brand */}
        <div className="font-semibold text-md flex items-center gap-4">
          <Rainbow size={48} className="text-pink-dark" />
          <div className="flex flex-col">
            <span>Sammen</span>
            <span>mot barnekreft</span>
          </div>
        </div>

        {/* Nav
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
        </ul> */}

        {/* Social */}
        <ul
          className="flex flex-col md:flex-row pl-4 md:pl-0 text-sm gap-4"
          aria-label="Sidemeny"
        >
          <li>
            <a
              href="https://www.instagram.com/sammenmotbarnekreft"
              target="_blank"
              className="flex gap-2 underline items-center uppercase hover:underline-offset-2 transition-colors hover:text-pink-dark"
            >
              <Instagram size={16} />
              Instagram
            </a>
          </li>
          <li>
            <a
              href="mailto:hei@sammenmotbarnekreft.no"
              target="_blank"
              className="flex gap-2 underline items-center uppercase hover:underline-offset-2 transition-colors hover:text-pink-dark"
            >
              <Mail size={16} />
              Kontakt oss
            </a>
          </li>
        </ul>
      </div>

      {/* Legal */}
      <div className="border-t border-white/10 px-8 py-4 text-center text-xs md:text-sm">
        org.nr: 936 473 881 | © 2026 Sammen mot barnekreft
      </div>
    </footer>
  );
}
