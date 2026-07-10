"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
];

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 py-24"
      aria-labelledby="about-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,0,51,0.06),_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neon">
              About the gym
            </p>
            <h2
              id="about-heading"
              className="mt-4 font-display text-5xl text-zinc-900 dark:text-white sm:text-6xl"
            >
              BUILT FOR <span className="text-neon">BEASTS</span>
            </h2>
            <p className="mt-6 text-[var(--muted)]">
              Iron Beast Fitness is a performance sanctuary — blacked-out
              floors, competition-grade racks, recovery suites, and a sound
              system that hits like your last rep. We blend science-backed
              programming with the energy of a championship locker room.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-[var(--muted)]">
              {[
                "Olympic lifting platforms & calibrated plates",
                "Recovery: contrast therapy, percussion, mobility lab",
                "24/7 member access on Titan plans",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-neon shadow-neon-sm" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {images.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`glass-panel group relative overflow-hidden rounded-2xl bg-zinc-900 ${
                  i === 0
                    ? "col-span-2 aspect-[21/9] sm:aspect-[2/1]"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
