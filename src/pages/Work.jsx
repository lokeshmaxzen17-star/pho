import React from "react";

export default function Work() {
  return (
    <section id="work" className="py-16">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--accent)]">
            Portfolio
          </p>
          <h2 className="font-display text-3xl text-white md:text-4xl">
            Signature stories and curated galleries.
          </h2>
        </div>

        <a
          className="rounded-full border border-[var(--line)] px-5 py-2 text-sm font-semibold text-[var(--ink-soft)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          href="https://www.instagram.com/revanth_creative_studio/"
          target="_blank"
          rel="noreferrer"
        >
          Explore Instagram
        </a>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          "Weddings & Rituals",
          "Portrait Sessions",
          "Brand Campaigns",
          "Fashion Editorials",
          "Travel Stories",
          "Product Details",
        ].map((title) => (
          <div
            key={title}
            className="group rounded-3xl border border-[var(--line)] bg-[var(--surface)]/80 p-5 shadow-lg shadow-black/40 backdrop-blur transition hover:-translate-y-1"
          >
            <div className="h-44 rounded-2xl bg-[linear-gradient(140deg,#1b1b1b,#2a2a2a)] transition group-hover:scale-[1.02]" />
            <div className="mt-4 flex items-center justify-between">
              <p className="font-semibold text-white">{title}</p>
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                View
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
