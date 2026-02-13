import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative grid items-center gap-10 py-12 md:grid-cols-[1.2fr_0.8fr] md:py-12">
      
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-[var(--accent)]">
          Hyderabad - Weddings - Portraits - Brands
        </p>

        <h1 className="font-display text-l leading-tight text-white md:text-6xl">
          Timeless photography for heartfelt moments and bold ideas.
        </h1>

        <p className="text-lg text-[var(--ink-soft)] md:text-s max-w-xl">
          Revanth Creative Studio captures authentic emotion with cinematic
          framing, soft light, and a refined editorial touch. From weddings to
          brand campaigns, every story is crafted with care.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <a
            className="rounded-full bg-[var(--accent)] ring-1 ring-blue-90 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black/40 transition hover:bg-white"
            href="#work"
          >
            View Portfolio
          </a>
          <a
            className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold text-[var(--ink-soft)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            href="#contact"
          >
            Start a Project
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center gap-6 text-sm text-[var(--ink-soft)]"
        >
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
        </motion.div>
      </motion.div>

      {/* Right Visual Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative"
      >
        <div className="rounded-[32px] border border-[var(--line)] ring-1 ring-blue-500/60 bg-[var(--surface)]/80 p-6 shadow-xl shadow-black/40 backdrop-blur">
          <div className="grid gap-4">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="h-40 rounded-2xl bg-[linear-gradient(135deg,#1c1c1c,#2a2a2a)]"
            />
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="h-32 rounded-2xl bg-[linear-gradient(135deg,#1a1a1a,#2f2f2f)]"
              />
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="h-32 rounded-2xl bg-[linear-gradient(135deg,#202020,#323232)]"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center justify-between rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 text-sm text-[var(--ink-soft)]"
            >
              <span>Next session available</span>
              <span className="font-semibold text-[var(--accent)]">Mar 02</span>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute -bottom-14 -left-10 hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)]/80 px-4 py-3 text-xs uppercase tracking-[0.3em] text-[var(--accent)] shadow-lg shadow-black/40 md:block"
        >
          Editorial warm tones
        </motion.div>
      </motion.div>
    </section>
  );
}
