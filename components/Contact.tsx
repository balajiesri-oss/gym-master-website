"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-black/5 bg-zinc-100 py-24 dark:border-white/5 dark:bg-zinc-950/30"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neon">
              Contact
            </p>
            <h2
              id="contact-heading"
              className="mt-4 font-display text-5xl text-zinc-900 dark:text-white sm:text-6xl"
            >
              VISIT <span className="text-neon">IRON BEAST</span>
            </h2>
            <p className="mt-4 text-[var(--muted)]">
              Tours daily 10a–6p. Drop your info and a membership advisor will
              reach out same day.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-[var(--muted)]">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-neon"
                  aria-hidden
                />
                <span>1200 Steel Ave, Downtown District, NY 10012</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-neon" aria-hidden />
                <a href="tel:+12125550199" className="hover:text-neon">
                  +1 (212) 555-0199
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-neon" aria-hidden />
                <a
                  href="mailto:hello@ironbeast.fitness"
                  className="hover:text-neon"
                >
                  hello@ironbeast.fitness
                </a>
              </li>
            </ul>

            <form
              className="mt-10 space-y-4"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Contact form"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="c-name"
                    placeholder="Name"
                    className="focus-ring w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm dark:border-white/10 dark:bg-black/40 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="c-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    placeholder="Email"
                    className="focus-ring w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm dark:border-white/10 dark:bg-black/40 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="c-msg" className="sr-only">
                  Message
                </label>
                <textarea
                  id="c-msg"
                  rows={4}
                  placeholder="How can we help?"
                  className="focus-ring w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm dark:border-white/10 dark:bg-black/40 dark:text-white"
                />
              </div>
              <button type="submit" className="btn-neon focus-ring">
                Send message
              </button>
            </form>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel overflow-hidden rounded-3xl border border-black/10 dark:border-white/10"
          >
            <div className="aspect-[4/3] w-full sm:aspect-video lg:aspect-auto lg:min-h-[480px]">
              <iframe
                title="Iron Beast Fitness location on Google Maps"
                className="h-full min-h-[320px] w-full border-0 lg:min-h-[480px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132576894!2d-73.98811768459398!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
