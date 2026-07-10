"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Twitter, Linkedin } from "lucide-react";

const trainers = [
  {
    name: "Marcus Cole",
    role: "Head of Strength",
    img: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=600&q=80",
  },
  {
    name: "Elena Voss",
    role: "Performance Dietitian",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
  },
  {
    name: "Jordan Blake",
    role: "CrossFit Lead",
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
  },
  {
    name: "Sam Rivera",
    role: "Bodybuilding Coach",
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&q=80",
  },
];

export function Trainers() {
  return (
    <section
      id="trainers"
      className="scroll-mt-24 border-y border-black/5 bg-zinc-100 py-24 dark:border-white/5 dark:bg-zinc-950/40"
      aria-labelledby="trainers-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neon">
              Coaches
            </p>
            <h2
              id="trainers-heading"
              className="mt-4 font-display text-5xl text-zinc-900 dark:text-white sm:text-6xl"
            >
              ELITE <span className="text-neon">TRAINERS</span>
            </h2>
          </div>
          <p className="max-w-md text-[var(--muted)]">
            Certified, battle-tested, and obsessed with your progression — not
            their ego.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass-panel group overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
                <Image
                  src={t.img}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-display text-2xl text-white">{t.name}</p>
                  <p className="text-xs uppercase tracking-wider text-neon">
                    {t.role}
                  </p>
                  <div className="mt-3 flex gap-2">
                    <a
                      href="https://instagram.com"
                      className="focus-ring rounded-full border border-white/20 p-2 text-white/80 transition hover:border-neon hover:text-neon"
                      aria-label={`${t.name} on Instagram`}
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a
                      href="https://twitter.com"
                      className="focus-ring rounded-full border border-white/20 p-2 text-white/80 transition hover:border-neon hover:text-neon"
                      aria-label={`${t.name} on X`}
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      className="focus-ring rounded-full border border-white/20 p-2 text-white/80 transition hover:border-neon hover:text-neon"
                      aria-label={`${t.name} on LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
