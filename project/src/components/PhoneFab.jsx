"use client";

import { Phone } from "lucide-react";

/** Placeholder — zelfde nummer als in de footer; vervang door echt nummer. */
const PHONE_HREF = "tel:+31600000000";

export function PhoneFab() {
  return (
    <a
      href={PHONE_HREF}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-sky-600/30 bg-[#3d94e0] text-white shadow-lg shadow-sky-600/35 transition-all duration-200 hover:scale-105 hover:bg-[#56a8f0] hover:shadow-xl hover:shadow-sky-500/40 active:scale-95 md:bottom-8 md:right-8"
      aria-label="Bel Topswim"
      title="Bel Topswim"
    >
      <Phone className="h-6 w-6" strokeWidth={2} aria-hidden />
    </a>
  );
}
