"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

function category(bmi: number) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

function categoryColor(bmi: number) {
  if (bmi < 18.5)
    return {
      text: "text-sky-400",
      bg: "bg-sky-400",
      border: "border-sky-400/30",
    };
  if (bmi < 25)
    return {
      text: "text-emerald-400",
      bg: "bg-emerald-400",
      border: "border-emerald-400/30",
    };
  if (bmi < 30)
    return {
      text: "text-amber-400",
      bg: "bg-amber-400",
      border: "border-amber-400/30",
    };
  return {
    text: "text-rose-400",
    bg: "bg-rose-400",
    border: "border-rose-400/30",
  };
}

function gaugePercent(bmi: number) {
  const clamped = Math.min(Math.max(bmi, 15), 40);
  return ((clamped - 15) / (40 - 15)) * 100;
}

export function BMICalculator() {
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(78);

  const bmi = useMemo(() => {
    const hM = height / 100;
    if (hM <= 0) return 0;
    return weight / (hM * hM);
  }, [height, weight]);

  const rounded = Math.round(bmi * 10) / 10;

  return (
    <section
      id="bmi"
      className="scroll-mt-24 py-24"
      aria-labelledby="bmi-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neon">
              Body metrics
            </p>
            <h2
              id="bmi-heading"
              className="mt-4 font-display text-5xl text-zinc-900 dark:text-white sm:text-6xl"
            >
              BMI <span className="text-neon">CALCULATOR</span>
            </h2>
            <p className="mt-4 text-[var(--muted)]">
              Quick snapshot for orientation — not medical advice. Pair numbers
              with body composition and performance goals.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel rounded-3xl p-8 shadow-glass"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="height"
                  className="text-sm font-medium text-[var(--muted)]"
                >
                  Height (cm)
                </label>
                <input
                  id="height"
                  type="range"
                  min="140"
                  max="220"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="mt-3 w-full accent-neon"
                />
                <p className="mt-2 font-display text-3xl text-zinc-900 dark:text-white">
                  {height}
                </p>
              </div>
              <div>
                <label
                  htmlFor="weight"
                  className="text-sm font-medium text-[var(--muted)]"
                >
                  Weight (kg)
                </label>
                <input
                  id="weight"
                  type="range"
                  min="45"
                  max="160"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="mt-3 w-full accent-neon"
                />
                <p className="mt-2 font-display text-3xl text-zinc-900 dark:text-white">
                  {weight}
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-start gap-2 border-t border-black/10 pt-8 dark:border-white/10">
              <span className="text-xs uppercase tracking-widest text-[var(--muted)]">
                Your BMI
              </span>
              <span className="text-glow font-display text-6xl text-neon">
                {rounded}
              </span>
              <span
                className={`rounded-full border ${categoryColor(rounded).border} px-4 py-1 text-sm font-semibold ${categoryColor(rounded).text}`}
              >
                {category(rounded)}
              </span>

              <div className="mt-4 w-full">
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                  <div className="absolute inset-y-0 left-0 w-full rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 via-amber-400 to-rose-400 opacity-30" />
                  <div
                    className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full ${categoryColor(rounded).bg} shadow-lg ring-2 ring-white/50 transition-all duration-500`}
                    style={{ left: `calc(${gaugePercent(rounded)}% - 8px)` }}
                  />
                </div>
                <div className="mt-1 flex justify-between text-[10px] uppercase tracking-wide text-zinc-500">
                  <span>15</span>
                  <span>18.5</span>
                  <span>25</span>
                  <span>30</span>
                  <span>40</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}