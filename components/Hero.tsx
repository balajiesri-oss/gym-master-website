"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section
      className="relative min-h-[100svh] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <video
          className="h-full w-full scale-105 object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://assets.mixkit.co/videos/52317/52317-thumb-720-0.jpg"
          aria-hidden
        >
          <source
            src="https://assets.mixkit.co/videos/52317/52317-720.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-[var(--bg)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,0,51,0.25),_transparent_55%)]" />
        <div
          className="absolute inset-0 bg-grid-pattern bg-grid opacity-40"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-neon"
        >
          No limits. Only iron.
        </motion.p>
        <motion.h1
          id="hero-heading"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-4xl font-display text-6xl leading-[0.95] text-white sm:text-7xl md:text-8xl lg:text-9xl"
        >
          <span className="text-glow">FORGE</span>{" "}
          <span className="text-glow text-neon">YOUR</span>{" "}
          <span className="text-white/90">LEGACY</span>
        </motion.h1>
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-xl text-base text-[var(--muted)] sm:text-lg"
        >
          Premium coaching, cinematic facilities, and a tribe that pushes you
          past comfort. Step into Iron Beast — where discipline meets design.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#membership"
            className="btn-neon focus-ring inline-flex items-center gap-2"
          >
            <Play className="h-4 w-4 fill-current" aria-hidden />
            Start basic membership
          </a>
          <a href="#programs" className="btn-outline-neon focus-ring">
            View programs
          </a>
        </motion.div>

        <motion.dl
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4"
        >
          {[
            { label: "Active members", to: 2400, suffix: "+" },
            { label: "Sq ft facility", to: 18000, suffix: "" },
            { label: "Expert coaches", to: 32, suffix: "" },
            { label: "Classes weekly", to: 120, suffix: "+" },
          ].map((s) => (
            <div key={s.label}>
              <dt className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                {s.label}
              </dt>
              <dd className="mt-2 font-display text-4xl text-white sm:text-5xl">
                <AnimatedCounter to={s.to} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 sm:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="h-10 w-6 rounded-full border border-white/20"
          aria-hidden
        >
          <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-neon" />
        </motion.div>
      </div>
    </section>
  );
}
