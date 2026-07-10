"use client";

import Link from "next/link";
import { Instagram, Youtube, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-black py-16 text-white dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-4xl tracking-[0.15em]">
              IRON BEAST
            </p>
            <p className="mt-3 max-w-md text-sm text-zinc-400">
              Premium training floor, cinematic energy, and coaches who meet you
              where you are — then take you further.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                {
                  href: "https://instagram.com",
                  icon: Instagram,
                  label: "Instagram",
                },
                {
                  href: "https://youtube.com",
                  icon: Youtube,
                  label: "YouTube",
                },
                {
                  href: "https://facebook.com",
                  icon: Facebook,
                  label: "Facebook",
                },
                { href: "https://twitter.com", icon: Twitter, label: "X" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="focus-ring rounded-full border border-white/15 p-2.5 text-zinc-400 transition hover:border-neon hover:text-neon"
                  aria-label={s.label}
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-neon">
              Explore
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="#programs" className="hover:text-white">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#membership" className="hover:text-white">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="hover:text-white">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-neon">
              Legal
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Iron Beast Fitness. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
