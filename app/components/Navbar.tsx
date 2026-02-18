"use client";

import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const closeMenu = (): void => setOpen(false);
  return (
    <nav className="p-4 bg-transparent absolute w-full top-0 z-50">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4">
        <Link href="/" className="heading4 "> Isaac Santos</Link>

        <div className="hidden sm:flex gap-6">
          <Link href="/#about" className="heading4   transition"> About Me</Link>
          <Link href="/projects" className="heading4   transition">
            Projects
          </Link>
          <Link href="/contact" className="heading4   transition">Contact</Link>
        </div>
        <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)} className="sm:hidden p-2 rounded-md hover:bg-white/10 transition">
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="sm:hidden max-w-7xl mx-auto px-4 pt-3">
          <div className="rounded-lg bg-black/40 backdrop-blur-md border border-white/10 p-3 flex flex-col gap-2">
            <Link href="/#about" onClick={closeMenu} className="heading4  transition py-2">About Me</Link>
            <Link href="/projects" onClick={closeMenu} className="heading4  transition py-2">Projects</Link>
            <Link href="/contact" onClick={closeMenu} className="heading4  transition py-2"> Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
