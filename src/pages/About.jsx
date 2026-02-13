import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="grid gap-10 rounded-[36px] border border-[var(--line)] bg-[var(--surface)]/80 p-10 shadow-xl shadow-black/40 backdrop-blur md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--accent)]">
            About
          </p>
          <h2 className="font-display text-3xl text-white md:text-4xl">
            A studio built on warmth, patience, and storytelling.
          </h2>
          <p className="text-[var(--ink-soft)]">
            I work closely with couples, creators, and founders to bring a
            relaxed experience and photographs that feel honest.
          </p>
        </div>
      </div>
    </section>
  );
}
