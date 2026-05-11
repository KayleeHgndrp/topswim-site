"use client";

import { useEffect, useState } from "react";
import { TWEAK_DEFAULTS } from "@/lib/tweak-defaults";
import { T, applyPalette } from "./data.jsx";
import { Hero } from "./hero.jsx";
import {
  Marquee,
  Courses,
  Schedule,
  WhoFor,
  WhatYouGet,
  Coach,
  Testimonials,
  FAQ,
  Footer,
} from "./sections.jsx";
import { Signup } from "./signup.jsx";
import {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakSelect,
  TweakRadio,
} from "./tweaks-panel.jsx";
import { btn } from "@/lib/buttons";

export default function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLang] = useState(t.lang || "nl");
  const [signup, setSignup] = useState(null);

  useEffect(() => {
    applyPalette(t.palette);
  }, [t.palette]);

  const openSignup = (serie = null, day = null) => setSignup({ serie, day });
  const closeSignup = () => setSignup(null);

  const c = T.cta[lang];
  const navItems = T.nav[lang];

  return (
    <div>
      <header className="sticky top-0 z-40 border-b border-hairline bg-paper">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-7 md:h-[60px] md:px-7 [@media(max-width:760px)]:px-[18px]">
          <a
            href="#top"
            className="flex items-center gap-2.5 font-bold tracking-tight text-ink no-underline"
          >
            <span className="brand-mark" />
            <span className="text-lg">
              topswim<span className="text-accent">.</span>
            </span>
          </a>
          <nav className="flex items-center gap-[22px] max-md:gap-3.5">
            <a
              href="#cursussen"
              className="text-[13px] tracking-wide text-ink no-underline hover:text-accent max-md:hidden"
            >
              {navItems[0]}
            </a>
            <a
              href="#schedule"
              className="text-[13px] tracking-wide text-ink no-underline hover:text-accent max-md:hidden"
            >
              {navItems[1]}
            </a>
            <a
              href="#coach"
              className="text-[13px] tracking-wide text-ink no-underline hover:text-accent max-md:hidden"
            >
              {navItems[2]}
            </a>
            <a
              href="#faq"
              className="text-[13px] tracking-wide text-ink no-underline hover:text-accent max-md:hidden"
            >
              {navItems[3]}
            </a>
            <span
              className="inline-flex items-center rounded-full border border-hairline p-0.5 text-[11px] max-[560px]:hidden"
              role="group"
              aria-label="language"
            >
              <button
                type="button"
                className={
                  lang === "nl"
                    ? "cursor-pointer rounded-full border-0 bg-ink px-2.5 py-1 font-inherit text-paper max-md:px-2 max-md:py-0.5 max-md:text-[10px]"
                    : "cursor-pointer rounded-full border-0 bg-transparent px-2.5 py-1 font-inherit text-ink max-md:px-2 max-md:py-0.5 max-md:text-[10px]"
                }
                onClick={() => setLang("nl")}
              >
                NL
              </button>
              <button
                type="button"
                className={
                  lang === "en"
                    ? "cursor-pointer rounded-full border-0 bg-ink px-2.5 py-1 font-inherit text-paper max-md:px-2 max-md:py-0.5 max-md:text-[10px]"
                    : "cursor-pointer rounded-full border-0 bg-transparent px-2.5 py-1 font-inherit text-ink max-md:px-2 max-md:py-0.5 max-md:text-[10px]"
                }
                onClick={() => setLang("en")}
              >
                EN
              </button>
            </span>
            <button
              type="button"
              className={`${btn} px-[18px] py-2.5`}
              onClick={() => openSignup()}
            >
              {c.signup}
            </button>
          </nav>
        </div>
      </header>

      <Hero variant={t.heroVariant} lang={lang} openSignup={openSignup} />

      <Marquee lang={lang} />

      <Courses lang={lang} openSignup={openSignup} />

      <div className="border-t border-hairline">
        <Schedule lang={lang} openSignup={openSignup} />
      </div>

      <div className="border-t border-hairline">
        <WhoFor lang={lang} />
      </div>

      <WhatYouGet lang={lang} />

      <Coach lang={lang} />

      <div className="border-t border-hairline">
        <Testimonials lang={lang} />
      </div>

      <div className="border-t border-hairline">
        <FAQ lang={lang} />
      </div>

      <Footer lang={lang} openSignup={openSignup} />

      {signup && (
        <Signup
          lang={lang}
          initialSerie={signup.serie}
          initialDay={signup.day}
          onClose={closeSignup}
        />
      )}

      <TweaksPanel>
        <TweakSection label={lang === "nl" ? "Hero" : "Hero"} />
        <TweakSelect
          label={lang === "nl" ? "Variant" : "Variant"}
          value={t.heroVariant}
          options={[
            { value: "overlay", label: "Overlay (foto + titel)" },
            { value: "editorial", label: "Editorial (split + meta)" },
            { value: "marquee", label: "Marquee (big type)" },
            { value: "split", label: "Split (50/50)" },
          ]}
          onChange={(v) => setTweak("heroVariant", v)}
        />
        <TweakSection label={lang === "nl" ? "Palet" : "Palette"} />
        <TweakSelect
          label={lang === "nl" ? "Kleurschema" : "Color scheme"}
          value={t.palette}
          options={[
            { value: "midnight", label: "Midnight Water" },
            { value: "dawn", label: "Dawn" },
            { value: "buoy", label: "Buoy Yellow" },
          ]}
          onChange={(v) => setTweak("palette", v)}
        />
        <TweakSection label={lang === "nl" ? "Taal" : "Language"} />
        <TweakRadio
          label={lang === "nl" ? "Taal" : "Language"}
          value={lang}
          options={["nl", "en"]}
          onChange={(v) => {
            setLang(v);
            setTweak("lang", v);
          }}
        />
      </TweaksPanel>
    </div>
  );
}
