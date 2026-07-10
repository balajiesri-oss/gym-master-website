"use client";

import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const weekData = [
  { name: "M", kcal: 2100, protein: 165 },
  { name: "T", kcal: 2280, protein: 170 },
  { name: "W", kcal: 1980, protein: 155 },
  { name: "T", kcal: 2350, protein: 172 },
  { name: "F", kcal: 2600, protein: 180 },
  { name: "S", kcal: 2400, protein: 160 },
  { name: "S", kcal: 2200, protein: 158 },
];

export function CaloriesAndProgress() {
  const [kcal, setKcal] = useState(1840);
  const target = 2400;
  const pct = Math.min(100, Math.round((kcal / target) * 100));

  const macros = useMemo(
    () => ({
      p: Math.round((kcal * 0.32) / 4),
      c: Math.round((kcal * 0.42) / 4),
      f: Math.round((kcal * 0.26) / 9),
    }),
    [kcal]
  );

  return (
    <section
      id="nutrition"
      className="scroll-mt-24 border-y border-black/5 bg-zinc-100 py-24 dark:border-white/5 dark:bg-zinc-950/40"
      aria-labelledby="nutrition-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neon">
            Digital tools
          </p>
          <h2
            id="nutrition-heading"
            className="mt-4 font-display text-5xl text-zinc-900 dark:text-white sm:text-6xl"
          >
            FUEL & <span className="text-neon">PROGRESS</span>
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Log calories fast, watch macros auto-balance, and visualize weekly
            training volume inside the member dashboard.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-3xl p-6 lg:col-span-1"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-neon">
              Calories
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Quick adjust — demo UI
            </p>
            <div className="mt-8 flex items-end justify-between gap-4">
              <div>
                <p className="font-display text-6xl text-zinc-900 dark:text-white">
                  {kcal}
                </p>
                <p className="text-xs text-[var(--muted)]">of {target} kcal</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Decrease calories"
                  onClick={() => setKcal((v) => Math.max(1200, v - 50))}
                  className="focus-ring rounded-full border border-black/10 p-2 dark:border-white/15"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Increase calories"
                  onClick={() => setKcal((v) => Math.min(4000, v + 50))}
                  className="focus-ring rounded-full border border-neon/40 bg-neon/10 p-2 text-neon"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div
              className="mt-6 h-3 overflow-hidden rounded-full bg-black/10 dark:bg-white/10"
              role="progressbar"
              aria-valuenow={pct}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Daily calorie progress"
            >
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-neon to-neon-glow"
                initial={false}
                animate={{ width: `${pct}%` }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              />
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 text-center text-xs">
              <div className="rounded-2xl border border-black/10 bg-white/70 p-3 dark:border-white/10 dark:bg-black/30">
                <p className="text-[var(--muted)]">Protein</p>
                <p className="mt-1 font-display text-2xl text-neon">
                  {macros.p}g
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/70 p-3 dark:border-white/10 dark:bg-black/30">
                <p className="text-[var(--muted)]">Carbs</p>
                <p className="mt-1 font-display text-2xl text-zinc-900 dark:text-white">
                  {macros.c}g
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/70 p-3 dark:border-white/10 dark:bg-black/30">
                <p className="text-[var(--muted)]">Fats</p>
                <p className="mt-1 font-display text-2xl text-zinc-900 dark:text-white">
                  {macros.f}g
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="glass-panel rounded-3xl p-6 lg:col-span-2"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-neon">
              Weekly load
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Training calories vs protein target correlation (sample)
            </p>
            <div className="mt-4 h-64 min-h-[240px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={weekData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorKcal" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="#ff0033"
                        stopOpacity={0.35}
                      />
                      <stop offset="95%" stopColor="#ff0033" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(128,128,128,0.2)"
                  />
                  <XAxis dataKey="name" stroke="#888" tick={{ fontSize: 11 }} />
                  <YAxis stroke="#888" tick={{ fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{
                      background: "rgba(10,10,10,0.92)",
                      border: "1px solid rgba(255,0,51,0.25)",
                      borderRadius: 12,
                    }}
                    labelStyle={{ color: "#fff" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="kcal"
                    stroke="#ff0033"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorKcal)"
                    name="kcal"
                  />
                  <Area
                    type="monotone"
                    dataKey="protein"
                    stroke="#a3a3a3"
                    strokeWidth={2}
                    fill="none"
                    name="protein (g)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
