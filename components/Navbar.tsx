"use client";

import { motion } from "framer-motion";
import { Menu, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#membership", label: "Membership" },
  { href: "#trainers", label: "Trainers" },
  { href: "#schedule", label: "Schedule" },
  { href: "#contact", label: "Contact" },
];

export function Navbar({ onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-black/10 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-black/70"
          : "border-transparent bg-white/30 backdrop-blur-sm dark:bg-black/10"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#"
          className="focus-ring flex items-center gap-3 rounded-lg"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-neon/40 shadow-neon-sm">
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=128&h=128&fit=crop"
              alt=""
              width={40}
              height={40}
              className="object-cover"
              priority
            />
          </div>
          <div className="leading-tight">
            <span className="font-display text-2xl tracking-[0.2em] text-zinc-900 dark:text-white">
              IRON BEAST
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.35em] text-neon">
              Fitness
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="focus-ring text-sm font-medium text-[var(--muted)] transition hover:text-zinc-900 dark:hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {mounted && (
            <button
              type="button"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="focus-ring rounded-full border border-black/10 p-2.5 text-[var(--muted)] transition hover:border-neon/40 hover:text-neon dark:border-white/10"
              aria-label={
                resolvedTheme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          )}
          <button
            type="button"
            onClick={onBook}
            className="btn-neon focus-ring hidden text-sm sm:inline-flex"
          >
            Join now
          </button>
          <button
            type="button"
            className="focus-ring rounded-lg border border-white/10 p-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-black/10 bg-white/95 px-4 py-4 dark:border-white/10 dark:bg-black/90 lg:hidden"
        >
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-[var(--muted)]"
              >
                {l.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onBook();
              }}
              className="btn-neon mt-2 w-full"
            >
              Join now
            </button>
          </div>
        </div>
      )}
    </motion.header>
  );
}
