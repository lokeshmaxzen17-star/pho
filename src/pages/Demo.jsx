import React from "react";

export default function Demo() {
  return (
    <section className="grid items-center gap-10 py-12 md:grid-cols-[1.2fr_0.8fr] md:py-20">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.4em] text-[var(--accent)]">
          Hyderabad - Weddings - Portraits - Brands
        </p>
        <h1 className="font-display text-4xl leading-tight text-white md:text-6xl">
          Timeless photography for heartfelt moments and bold ideas.
        </h1>
        <p className="text-lg text-[var(--ink-soft)] md:text-xl">
          Revanth Creative Studio captures authentic emotion with cinematic
          framing, soft light, and a refined editorial touch. From weddings
          to brand campaigns, every story is crafted with care.
        </p>

        <div className="flex flex-wrap gap-4">
          <a className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black/40 transition hover:bg-white" href="#work">
            View Portfolio
          </a>
          <a className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold text-[var(--ink-soft)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]" href="#contact">
            Start a Project
          </a>
        </div>

        <div className="flex items-center gap-6 text-sm text-[var(--ink-soft)]">
          <div>
            <p className="text-2xl font-semibold text-white">9+</p>
            <p>Years of storytelling</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">320+</p>
            <p>Client shoots</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">40+</p>
            <p>Brand collaborations</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="rounded-[32px] border border-[var(--line)] bg-[var(--surface)]/80 p-6 shadow-xl shadow-black/40 backdrop-blur">
          <div className="grid gap-4">
            <div className="h-40 rounded-2xl bg-[linear-gradient(135deg,#1c1c1c,#2a2a2a)]" />
            <div className="grid grid-cols-2 gap-4">
              <div className="h-32 rounded-2xl bg-[linear-gradient(135deg,#1a1a1a,#2f2f2f)]" />
              <div className="h-32 rounded-2xl bg-[linear-gradient(135deg,#202020,#323232)]" />
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 text-sm text-[var(--ink-soft)]">
              <span>Next session available</span>
              <span className="font-semibold text-[var(--accent)]">Mar 02</span>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-8 -left-6 hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)]/80 px-4 py-3 text-xs uppercase tracking-[0.3em] text-[var(--accent)] shadow-lg shadow-black/40 md:block">
          Editorial warm tones
        </div>
      </div>
    </section>
  );
}
