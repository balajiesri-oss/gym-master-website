"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Do you offer a free trial?",
    a: "Yes — 3 complimentary visits with a coach intro. Book through the app or front desk.",
  },
  {
    q: "Is there parking?",
    a: "Underground garage with 2 hours validated for members. Bike racks at street level.",
  },
  {
    q: "Can I freeze my membership?",
    a: "Up to 6 weeks annually on Alpha and Titan plans. Beast tier supports 2-week freezes.",
  },
  {
    q: "What should I bring?",
    a: "Flat-soled shoes, a towel, and water. Lifting straps optional — we have premium loaners.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-24 py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.4em] text-neon">
          FAQ
        </p>
        <h2
          id="faq-heading"
          className="mt-4 text-center font-display text-5xl text-zinc-900 dark:text-white sm:text-6xl"
        >
          QUESTIONS <span className="text-neon">ANSWERED</span>
        </h2>

        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="glass-panel overflow-hidden rounded-2xl"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="focus-ring flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-medium text-zinc-900 dark:text-white">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown
                      className="h-5 w-5 shrink-0 text-neon"
                      aria-hidden
                    />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-black/10 px-5 pb-5 pt-4 text-sm text-[var(--muted)] dark:border-white/10">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
