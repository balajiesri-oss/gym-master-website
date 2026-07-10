"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

function category(bmi: number) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
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
              <span className="rounded-full border border-neon/30 bg-neon/10 px-4 py-1 text-sm font-semibold text-neon">
                {category(rounded)}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
