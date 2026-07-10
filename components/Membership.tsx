"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Beast",
    price: 79,
    blurb: "Essential access for committed lifters.",
    features: ["Floor access", "Locker + showers", "2 guest passes / mo"],
  },
  {
    name: "Alpha",
    price: 119,
    blurb: "Most popular — classes + open gym.",
    features: [
      "Everything in Beast",
      "Unlimited classes",
      "Sauna access",
      "Form checks",
    ],
    highlight: true,
  },
  {
    name: "Titan",
    price: 189,
    blurb: "All-access + priority coaching.",
    features: [
      "Everything in Alpha",
      "4 PT sessions / mo",
      "24/7 access",
      "Nutrition roadmap",
    ],
  },
];

type Props = { onSelect: (name: string) => void };

export function Membership({ onSelect }: Props) {
  return (
    <section
      id="membership"
      className="scroll-mt-24 py-24"
      aria-labelledby="membership-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neon">
            Membership
          </p>
          <h2
            id="membership-heading"
            className="mt-4 font-display text-5xl text-zinc-900 dark:text-white sm:text-6xl"
          >
            CHOOSE YOUR <span className="text-neon">TIER</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">
            Transparent pricing. Cancel anytime. Military & student discounts at
            the desk.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`glass-panel relative flex flex-col rounded-3xl p-8 ${
                t.highlight
                  ? "border-neon/50 shadow-neon ring-1 ring-neon/30"
                  : "border-black/10 dark:border-white/10"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-neon px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-neon-sm">
                  Best value
                </span>
              )}
              <h3 className="font-display text-4xl text-zinc-900 dark:text-white">
                {t.name}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{t.blurb}</p>
              <p className="mt-6 font-display text-6xl text-neon">
                ${t.price}
                <span className="font-sans text-lg font-medium text-[var(--muted)]">
                  /mo
                </span>
              </p>
              <ul className="mt-8 flex-1 space-y-3 text-sm text-[var(--muted)]">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-neon" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => onSelect(t.name)}
                className={`focus-ring mt-10 w-full rounded-full py-3 text-sm font-semibold transition ${
                  t.highlight
                    ? "btn-neon"
                    : "border border-neon/40 text-neon hover:bg-neon/10"
                }`}
              >
                Book {t.name}
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
