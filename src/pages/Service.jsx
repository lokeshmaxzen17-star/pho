import React from "react";

export default function Service() {
  return (
    <section id="services" className="py-16">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--accent)]">
            Services
          </p>
          <h2 className="font-display text-3xl text-white md:text-4xl">
            Crafted for moments that deserve attention.
          </h2>
          <p className="text-[var(--ink-soft)]">
            Full-service photography with a calm on-set experience, detailed
            planning, and a refined post-production workflow.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              title: "Wedding Photography",
              detail:
                "Multi-day coverage, candid storytelling, and heirloom edits.",
            },
            {
              title: "Pre-Wedding Films",
              detail:
                "Cinematic sequences, styled concepts, and location scouting.",
            },
            {
              title: "Portrait Sessions",
              detail:
                "Studio or outdoor portraits with guided posing and natural light.",
            },
            {
              title: "Brand & Product",
              detail:
                "Lookbooks, campaigns, and clean product storytelling.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-[var(--line)] bg-[var(--surface-strong)] p-6 shadow-md shadow-black/30"
            >
              <h3 className="text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--ink-soft)]">
                {service.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
