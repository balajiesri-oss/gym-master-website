"use client";

import { motion } from "framer-motion";

const rows = [
  {
    time: "06:00",
    mon: "HIIT Engine",
    tue: "Strength A",
    wed: "CrossFit",
    thu: "Mobility",
    fri: "MetCon",
    sat: "Open gym",
    sun: "Recovery",
  },
  {
    time: "08:00",
    mon: "Strength B",
    tue: "Cardio Lab",
    wed: "Olympic",
    thu: "HIIT",
    fri: "Strength A",
    sat: "Team WOD",
    sun: "Yoga flow",
  },
  {
    time: "12:00",
    mon: "Power hour",
    tue: "Lunch lift",
    wed: "Skill clinic",
    thu: "Lunch lift",
    fri: "Power hour",
    sat: "—",
    sun: "—",
  },
  {
    time: "18:00",
    mon: "CrossFit",
    tue: "Hypertrophy",
    wed: "Engine",
    thu: "CrossFit",
    fri: "Fight night",
    sat: "—",
    sun: "—",
  },
  {
    time: "20:00",
    mon: "Open gym",
    tue: "Open gym",
    wed: "Open gym",
    thu: "Open gym",
    fri: "Open gym",
    sat: "—",
    sun: "—",
  },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;

export function Schedule() {
  return (
    <section
      id="schedule"
      className="scroll-mt-24 py-24"
      aria-labelledby="schedule-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neon">
            Timetable
          </p>
          <h2
            id="schedule-heading"
            className="mt-4 font-display text-5xl text-zinc-900 dark:text-white sm:text-6xl"
          >
            WORKOUT <span className="text-neon">SCHEDULE</span>
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Updated weekly in the Iron Beast app. Reserve your spot before
            classes cap out.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 overflow-x-auto rounded-2xl border border-black/10 bg-white/50 shadow-glass dark:border-white/10 dark:bg-white/[0.03]"
        >
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <caption className="sr-only">Weekly class schedule</caption>
            <thead>
              <tr className="border-b border-black/10 dark:border-white/10">
                <th
                  scope="col"
                  className="p-4 font-semibold text-zinc-900 dark:text-white"
                >
                  Time
                </th>
                {days.map((d) => (
                  <th
                    key={d}
                    scope="col"
                    className="p-4 font-semibold text-zinc-900 dark:text-white"
                  >
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr
                  key={r.time}
                  className="border-b border-black/5 last:border-0 dark:border-white/5"
                >
                  <th
                    scope="row"
                    className="whitespace-nowrap p-4 font-medium text-neon"
                  >
                    {r.time}
                  </th>
                  <td className="p-4 text-[var(--muted)]">{r.mon}</td>
                  <td className="p-4 text-[var(--muted)]">{r.tue}</td>
                  <td className="p-4 text-[var(--muted)]">{r.wed}</td>
                  <td className="p-4 text-[var(--muted)]">{r.thu}</td>
                  <td className="p-4 text-[var(--muted)]">{r.fri}</td>
                  <td className="p-4 text-[var(--muted)]">{r.sat}</td>
                  <td className="p-4 text-[var(--muted)]">{r.sun}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
