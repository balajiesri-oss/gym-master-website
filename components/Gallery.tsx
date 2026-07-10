"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const pairs = [
  {
    before:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80",
    label: "12-week recomp",
  },
  {
    before:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
    label: "Fat loss sprint",
  },
  {
    before:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80",
    label: "Strength block",
  },
];

export function Gallery() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="gallery"
      className="scroll-mt-24 py-24"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neon">
            Transformations
          </p>
          <h2
            id="gallery-heading"
            className="mt-4 font-display text-5xl text-zinc-900 dark:text-white sm:text-6xl"
          >
            BEFORE / <span className="text-neon">AFTER</span>
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Real members. Real discipline. Results vary — effort does not.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {pairs.map((p, i) => (
            <motion.button
              type="button"
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setActive(i)}
              className={`glass-panel group overflow-hidden rounded-2xl text-left transition ${
                active === i ? "ring-2 ring-neon" : "hover:border-neon/30"
              }`}
            >
              <div className="grid grid-cols-2 gap-0">
                <div className="relative aspect-[3/4] bg-zinc-900">
                  <Image
                    src={p.before}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                  <span className="absolute left-2 top-2 rounded bg-black/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    Before
                  </span>
                </div>
                <div className="relative aspect-[3/4] bg-zinc-900">
                  <Image
                    src={p.after}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                  <span className="absolute right-2 top-2 rounded bg-neon/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    After
                  </span>
                </div>
              </div>
              <p className="p-4 text-sm font-semibold text-zinc-900 dark:text-white">
                {p.label}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
