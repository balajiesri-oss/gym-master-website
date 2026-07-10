"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const items = [
  {
    quote:
      "Twelve weeks in and I have abs I have not seen since college. The vibe is electric — no mirrors, just work.",
    name: "Chris P.",
    role: "Software lead",
  },
  {
    quote:
      "Coaches actually coach. My squat depth, bracing, and confidence under load completely changed.",
    name: "Aisha K.",
    role: "Nurse & powerlifter",
  },
  {
    quote:
      "I travel constantly. The app programming keeps me consistent — Iron Beast feels like home everywhere.",
    name: "Leo M.",
    role: "Consultant",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v === 0 ? items.length - 1 : v - 1));
  const next = () => setI((v) => (v === items.length - 1 ? 0 : v + 1));

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 border-y border-black/5 bg-zinc-100 py-24 dark:border-white/5 dark:bg-zinc-950/40"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neon">
          Proof
        </p>
        <h2
          id="testimonials-heading"
          className="mt-4 font-display text-5xl text-zinc-900 dark:text-white sm:text-6xl"
        >
          MEMBER <span className="text-neon">VOICES</span>
        </h2>

        <div className="relative mt-14">
          <Quote className="mx-auto h-10 w-10 text-neon/40" aria-hidden />
          <div className="relative min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
                className="mt-6 text-lg text-zinc-800 dark:text-zinc-200 sm:text-xl"
              >
                <p>&ldquo;{items[i].quote}&rdquo;</p>
                <footer className="mt-8">
                  <cite className="not-italic">
                    <span className="font-display text-2xl text-neon">
                      {items[i].name}
                    </span>
                    <span className="mt-1 block text-sm text-[var(--muted)]">
                      {items[i].role}
                    </span>
                  </cite>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="focus-ring rounded-full border border-black/10 p-3 transition hover:border-neon hover:text-neon dark:border-white/15"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div
              className="flex gap-2"
              role="tablist"
              aria-label="Testimonial slides"
            >
              {items.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={idx === i}
                  onClick={() => setI(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === i
                      ? "w-8 bg-neon shadow-neon-sm"
                      : "w-2 bg-black/20 dark:bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="focus-ring rounded-full border border-black/10 p-3 transition hover:border-neon hover:text-neon dark:border-white/15"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
