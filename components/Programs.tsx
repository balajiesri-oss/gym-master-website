"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  HeartPulse,
  Flame,
  Scale,
  Trophy,
  Activity,
} from "lucide-react";

const programs = [
  {
    title: "Strength",
    desc: "Progressive overload, compound lifts, and power blocks.",
    icon: Dumbbell,
  },
  {
    title: "Cardio",
    desc: "Engine building — assault bikes, sleds, and interval lanes.",
    icon: HeartPulse,
  },
  {
    title: "CrossFit",
    desc: "High-skill WODs with scalable intensity for every athlete.",
    icon: Activity,
  },
  {
    title: "Weight Loss",
    desc: "Metabolic circuits + nutrition accountability checkpoints.",
    icon: Scale,
  },
  {
    title: "Bodybuilding",
    desc: "Hypertrophy splits, pose practice, and peak-week guidance.",
    icon: Trophy,
  },
];

export function Programs() {
  return (
    <section
      id="programs"
      className="scroll-mt-24 border-y border-black/5 bg-zinc-100 py-24 dark:border-white/5 dark:bg-zinc-950/50"
      aria-labelledby="programs-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neon">
            Training systems
          </p>
          <h2
            id="programs-heading"
            className="mt-4 font-display text-5xl text-zinc-900 dark:text-white sm:text-6xl"
          >
            PROGRAMS THAT <span className="text-neon">BITE BACK</span>
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Pick your lane — every track is coached, tracked, and tuned for
            results you can feel in the mirror and on the platform.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="glass-panel group relative overflow-hidden rounded-2xl p-6 transition hover:border-neon/35 hover:shadow-neon-sm"
            >
              <div className="flex items-center justify-between">
                <p.icon
                  className="h-8 w-8 text-neon transition group-hover:scale-110"
                  aria-hidden
                />
                <Flame className="h-4 w-4 text-white/10 transition group-hover:text-neon/60 dark:text-white/10" />
              </div>
              <h3 className="mt-6 font-display text-3xl tracking-wide text-zinc-900 dark:text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-[var(--muted)]">{p.desc}</p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-neon/10 blur-2xl transition group-hover:bg-neon/20" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
