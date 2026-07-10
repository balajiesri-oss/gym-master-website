"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Apple, PlayCircle, Smartphone } from "lucide-react";

export function AppPromo() {
  return (
    <section
      id="app"
      className="scroll-mt-24 overflow-hidden border-y border-black/5 bg-zinc-100 py-24 dark:border-white/5 dark:bg-zinc-950/40"
      aria-labelledby="app-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neon">
            Mobile app
          </p>
          <h2
            id="app-heading"
            className="mt-4 font-display text-5xl text-zinc-900 dark:text-white sm:text-6xl"
          >
            COMMAND CENTER <span className="text-neon">IN YOUR POCKET</span>
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Book classes, track PRs, sync wearables, and get push reminders
            before the gym gets packed.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://apps.apple.com"
              className="focus-ring flex items-center gap-3 rounded-2xl border border-black/10 bg-black px-5 py-3 text-white transition hover:border-neon/50 dark:border-white/10"
            >
              <Apple className="h-8 w-8" aria-hidden />
              <div className="text-left text-xs">
                <span className="block text-white/70">Download on the</span>
                <span className="text-base font-semibold">App Store</span>
              </div>
            </a>
            <a
              href="https://play.google.com"
              className="focus-ring flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-5 py-3 text-zinc-900 transition hover:border-neon/50 dark:bg-zinc-900 dark:text-white dark:hover:border-neon/50"
            >
              <PlayCircle className="h-8 w-8 text-neon" aria-hidden />
              <div className="text-left text-xs">
                <span className="block text-zinc-500 dark:text-white/70">
                  Get it on
                </span>
                <span className="text-base font-semibold">Google Play</span>
              </div>
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3 text-sm text-[var(--muted)]">
            <Smartphone className="h-5 w-5 text-neon" aria-hidden />
            <span>Apple Health & Google Fit ready</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-sm"
        >
          <div
            className="absolute inset-0 rounded-[2.5rem] bg-neon/20 blur-3xl"
            aria-hidden
          />
          <div className="glass-panel relative rounded-[2.5rem] border border-neon/30 p-3 shadow-neon">
            <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80"
                alt=""
                fill
                className="object-cover"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                <p className="text-xs uppercase tracking-widest text-neon">
                  Today
                </p>
                <p className="mt-1 font-display text-3xl text-white">
                  Leg day protocol
                </p>
                <p className="mt-1 text-xs text-white/70">
                  Est. 58 min · RPE 8 target
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
