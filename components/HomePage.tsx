"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Programs } from "@/components/Programs";
import { BMICalculator } from "@/components/BMICalculator";
import { AIWorkout } from "@/components/AIWorkout";
import { CaloriesAndProgress } from "@/components/CaloriesAndProgress";
import { Membership } from "@/components/Membership";
import { Trainers } from "@/components/Trainers";
import { Schedule } from "@/components/Schedule";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { AppPromo } from "@/components/AppPromo";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";

export function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>();

  const openBooking = (plan?: string) => {
    setSelectedPlan(plan);
    setBookingOpen(true);
  };

  return (
    <>
      <a
        href="#main"
        className="focus-ring fixed left-4 top-4 z-[200] -translate-y-24 rounded-full bg-neon px-4 py-2 text-sm font-semibold text-white transition focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar onBook={() => openBooking()} />
      <main id="main">
        <Hero />
        <About />
        <Programs />
        <BMICalculator />
        <AIWorkout />
        <CaloriesAndProgress />
        <Membership onSelect={(name) => openBooking(name)} />
        <Trainers />
        <Schedule />
        <Testimonials />
        <Gallery />
        <AppPromo />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        planName={selectedPlan}
      />
    </>
  );
}
