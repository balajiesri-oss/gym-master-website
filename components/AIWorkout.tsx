"use client";

import { motion } from "framer-motion";
import { Sparkles, Dumbbell, Timer, Flame } from "lucide-react";
import { useMemo, useState } from "react";

const goals = ["Strength", "Fat loss", "Athletic", "Hypertrophy"] as const;

const presets: Record<(typeof goals)[number], string[]> = {
  Strength: [
    "Heavy squat wave — top set RPE 8, backoff 4x4",
    "Bench paused triples + close-grip volume",
    "Deadlift speed pulls + core anti-rotation",
  ],
  "Fat loss": [
    "EMOM 12: bike sprints + KB swings",
    "Circuit: sled push, row, ball slam — 5 rounds",
    "Incline walk finisher — 15% grade, nasal breathing",
  ],
  Athletic: [
    "Plyo primer + lateral bounds + stick landings",
    "Agility ladder + reactive hops",
    "Med ball throws — rotational power focus",
  ],
  Hypertrophy: [
    "Leg press cluster — 6,4,2 reps with 20s intra-set rest",
    "Cable fly mechanical drop set",
    "Single-arm lat row — 3s eccentric",
  ],
};

export function AIWorkout() {
  const [goal, setGoal] = useState<(typeof goals)[number]>("Strength");
  const plan = useMemo(() => presets[goal], [goal]);

  return (
    <section
      id="ai-workout"
      className="scroll-mt-24 py-24"
      aria-labelledby="ai-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neon">
              AI-assisted
            </p>
            <h2
              id="ai-heading"
              className="mt-4 font-display text-5xl text-zinc-900 dark:text-white sm:text-6xl"
            >
              SMART <span className="text-neon">PROTOCOLS</span>
            </h2>
            <p className="mt-4 text-[var(--muted)]">
              Preview how Iron Beast AI sequences sessions from your goal,
              recovery score, and equipment availability — full experience in
              the app.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {goals.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGoal(g)}
                  className={`focus-ring rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                    goal === g
                      ? "bg-neon text-white shadow-neon-sm"
                      : "border border-black/10 bg-white text-zinc-700 hover:border-neon/40 dark:border-white/10 dark:bg-transparent dark:text-zinc-300"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={goal}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="glass-panel relative overflow-hidden rounded-3xl p-6"
          >
            <div className="flex items-center gap-2 text-neon">
              <Sparkles className="h-5 w-5" aria-hidden />
              <span className="text-xs font-bold uppercase tracking-[0.3em]">
                Today&apos;s stack
              </span>
            </div>
            <ul className="mt-6 space-y-4">
              {plan.map((line, idx) => (
                <li
                  key={line}
                  className="flex gap-3 rounded-2xl border border-black/5 bg-white/60 p-4 text-sm text-zinc-800 dark:border-white/10 dark:bg-black/30 dark:text-zinc-200"
                >
                  <span className="font-display text-2xl text-neon">
                    {idx + 1}
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-[var(--muted)]">
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1">
                <Dumbbell className="h-3.5 w-3.5 text-neon" aria-hidden /> Racks
                free
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1">
                <Timer className="h-3.5 w-3.5 text-neon" aria-hidden /> 55–70
                min
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1">
                <Flame className="h-3.5 w-3.5 text-neon" aria-hidden /> High
                stimulus
              </span>
            </div>
            <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-neon/15 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
