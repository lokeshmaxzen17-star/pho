import React from "react";
import logo from "../Assests/rlogo.jpg";  // 👈 import your logo

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
      <div className="flex items-center gap-3">
        <img
          alt="Revanth Creative Studio logo"
          className="h-14 w-14 rounded-full border border-[var(--line)] bg-[var(--surface)] object-contain shadow-md shadow-black/50"
          src={logo}
        />
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
            Revanth Creative Studio
          </p>
          <p className="font-display text-lg">Photography & Visual Stories</p>
        </div>
      </div>

      <nav className="hidden items-center gap-8 text-sm font-semibold text-[var(--ink-soft)] md:flex">
        <a className="transition hover:text-[var(--accent)]" href="#work">Work</a>
        <a className="transition hover:text-[var(--accent)]" href="#services">Services</a>
        <a className="transition hover:text-[var(--accent)]" href="#about">About</a>
        <a className="transition hover:text-[var(--accent)]" href="#contact">Contact</a>
      </nav>

      <a
        className="rounded-full border border-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--accent)] hover:text-black"
        href="#contact"
      >
        Book a Shoot
      </a>
    </header>
  );
}
