"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  planName?: string;
};

export function BookingModal({ open, onClose, planName }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-title"
        >
          <button
            type="button"
            className="focus-ring absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close booking modal overlay"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="glass-panel relative z-10 w-full max-w-lg rounded-3xl border border-neon/25 p-8 shadow-neon"
          >
            <button
              type="button"
              onClick={onClose}
              className="focus-ring absolute right-4 top-4 rounded-full p-2 text-[var(--muted)] transition hover:bg-black/5 hover:text-zinc-900 dark:hover:bg-white/10 dark:hover:text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <h2
              id="booking-title"
              className="font-display text-4xl tracking-wide text-zinc-900 dark:text-white"
            >
              Book membership
            </h2>
            {planName && (
              <p className="mt-2 text-sm text-neon">
                Selected plan: <span className="font-semibold">{planName}</span>
              </p>
            )}
            <p className="mt-3 text-sm text-[var(--muted)]">
              Leave your details and our team will confirm your start date
              within 24 hours.
            </p>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                onClose();
              }}
            >
              <div>
                <label htmlFor="book-name" className="sr-only">
                  Full name
                </label>
                <input
                  id="book-name"
                  required
                  placeholder="Full name"
                  className="focus-ring w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-500 dark:border-white/10 dark:bg-black/40 dark:text-white dark:placeholder:text-[var(--muted)]"
                />
              </div>
              <div>
                <label htmlFor="book-email" className="sr-only">
                  Email
                </label>
                <input
                  id="book-email"
                  type="email"
                  required
                  placeholder="Email"
                  className="focus-ring w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-500 dark:border-white/10 dark:bg-black/40 dark:text-white dark:placeholder:text-[var(--muted)]"
                />
              </div>
              <div>
                <label htmlFor="book-phone" className="sr-only">
                  Phone
                </label>
                <input
                  id="book-phone"
                  type="tel"
                  placeholder="Phone"
                  className="focus-ring w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-500 dark:border-white/10 dark:bg-black/40 dark:text-white dark:placeholder:text-[var(--muted)]"
                />
              </div>
              <div>
                <label htmlFor="book-plan" className="sr-only">
                  Preferred plan
                </label>
                <select
                  id="book-plan"
                  defaultValue={planName ?? ""}
                  className="focus-ring w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-zinc-900 dark:border-white/10 dark:bg-black/40 dark:text-white"
                >
                  <option value="">Select plan</option>
                  <option value="Beast">Beast — $79/mo</option>
                  <option value="Alpha">Alpha — $119/mo</option>
                  <option value="Titan">Titan — $189/mo</option>
                </select>
              </div>
              <button type="submit" className="btn-neon focus-ring w-full">
                Submit request
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
