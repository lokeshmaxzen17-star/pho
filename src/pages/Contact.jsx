import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="grid gap-10 rounded-[36px] border border-[var(--line)] bg-[var(--surface)]/90 p-10 shadow-xl shadow-black/40 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--accent)]">
            Contact
          </p>
          <h2 className="font-display text-3xl text-white md:text-4xl">
            Let us craft your next story.
          </h2>
          <p className="text-[var(--ink-soft)]">
            Share your event date, location, and vision. We will respond
            within 24 hours with availability and a tailored proposal.
          </p>

          <div className="space-y-3 text-sm text-[var(--ink-soft)]">
            <div className="flex items-center justify-between border-b border-[var(--line)] pb-2">
              <span>Email</span>
              <span className="font-semibold text-white">
                hello@revanthcreative.com
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-[var(--line)] pb-2">
              <span>Phone</span>
              <span className="font-semibold text-white">
                +91 90000 00000
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Studio</span>
              <span className="font-semibold text-white">
                Jubilee Hills, Hyderabad
              </span>
            </div>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <label className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              Full Name
            </label>
            <input
              className="mt-2 w-full rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              Email Address
            </label>
            <input
              type="email"
              className="mt-2 w-full rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)]"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              Event Details
            </label>
            <textarea
              className="mt-2 min-h-[120px] w-full rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)]"
              placeholder="Tell us about your event, date, location, and style."
            />
          </div>

          <button
            type="button"
            className="w-full rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black/40 transition hover:bg-white"
          >
            Send Inquiry
          </button>

          <p className="text-xs text-[var(--ink-soft)]">
            You can also DM on Instagram or YouTube.
          </p>
        </form>
      </div>
    </section>
  );
}
