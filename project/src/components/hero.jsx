import React from "react";
import { T } from "./data.jsx";
import { Photo } from "./photo.jsx";
import { btn, btnGhost, btnLight } from "@/lib/buttons";

const shell = "relative mx-auto max-w-[1440px] px-7 max-[760px]:px-[18px]";

function HeroEditorial({ lang, openSignup }) {
  const h = T.hero[lang];
  const c = T.cta[lang];
  return (
    <section
      data-screen-label="01 Hero"
      className="px-7 py-8 max-[760px]:px-[18px] max-md:px-0 max-md:py-0"
    >
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-sm bg-ink text-white max-md:rounded-none">
        <div className="grid min-h-[78vh] grid-cols-1 md:grid-cols-[1.05fr_1fr]">
          <div className="relative z-[2] order-2 flex flex-col justify-between px-6 py-9 md:order-1 md:px-14 md:pb-9 md:pt-14">
            <div className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white/55">
              {h.eyebrow}
            </div>
            <div>
              <h1 className="font-serif text-[clamp(48px,5.6vw,80px)] font-normal leading-[1.02] tracking-[-0.025em] text-white [font-variation-settings:'opsz'_144] max-w-[14ch]">
                {h.title[0]} {h.title[1]}
                <span className="italic">{h.title[2]}</span> {h.title[3]}{" "}
                {h.title[4]} {h.title[5]}
              </h1>
              <div className="mt-9 flex flex-wrap gap-3">
                <button type="button" className={btnLight} onClick={openSignup}>
                  {c.signup} <span className="arr">→</span>
                </button>
                <a
                  className={`${btnGhost} border-white/40 text-white`}
                  href="#cursussen"
                >
                  {c.learn}
                </a>
              </div>
            </div>
            <div />
          </div>
          <div className="relative order-1 min-h-[52vh] w-full md:order-2 md:min-h-[480px]">
            <Photo
              scene="underwater"
              tag="LIVE · IJBURG"
              idx="01 / 03"
              coords="52.3589° N · 4.9990° E"
              depth="WATER 16°C"
              height="100%"
              className="absolute inset-0 h-full min-h-full w-full rounded-none md:rounded-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 border-t border-white/15 px-6 py-5 md:grid-cols-[repeat(4,1fr)_auto] md:px-14 md:py-5 md:items-center">
          {h.stat.map((s, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-white/45">
                0{i + 1}
              </span>
              <span className="text-sm font-medium text-white">{s}</span>
            </div>
          ))}
          <div className="col-span-2 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-white/60 max-md:col-span-2 md:col-span-1 md:whitespace-nowrap">
            {h.seriesStart}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroMarquee({ lang, openSignup }) {
  const h = T.hero[lang];
  const c = T.cta[lang];
  const word1 = lang === "nl" ? "Open" : "Open";
  const word2 = lang === "nl" ? "water" : "water";
  return (
    <section
      className="relative min-h-[88vh] overflow-hidden pt-8"
      data-screen-label="01 Hero"
    >
      <div className={shell}>
        <div className="mb-6 flex items-center gap-3.5 text-[11px] text-muted">
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em]">
            {h.eyebrow}
          </span>
        </div>
      </div>
      <div className="whitespace-nowrap px-7 max-[760px]:px-[18px]">
        <div className="font-serif text-[clamp(80px,14vw,220px)] font-light leading-[0.9] tracking-[-0.04em] text-ink [font-variation-settings:'opsz'_144]">
          {word1}{" "}
          <span className="italic text-accent">{word2}</span> coaching
        </div>
      </div>
      <div className={`${shell} mt-6`}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Photo
            scene="dawn"
            tag="MA · KNSM"
            idx="EVENING"
            coords="19:00 — 20:00"
            height={300}
          />
          <Photo
            scene="swimmer"
            tag="WO · IJBURG"
            idx="EVENING"
            coords="19:00 — 20:00"
            height={300}
          />
          <Photo
            scene="underwater"
            tag="DO · SLOTERPLAS"
            idx="EVENING"
            coords="19:00 — 20:00"
            height={300}
          />
        </div>
        <div className="mt-9 grid grid-cols-1 items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <p className="m-0 max-w-[900px] font-serif text-[clamp(28px,3.4vw,48px)] font-normal leading-tight">
            {h.lede}
          </p>
          <div className="flex flex-wrap justify-end gap-3">
            <button type="button" className={btn} onClick={openSignup}>
              {c.signup} <span className="arr">→</span>
            </button>
            <a className={btnGhost} href="#cursussen">
              {c.learn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroSplit({ lang, openSignup }) {
  const h = T.hero[lang];
  const c = T.cta[lang];
  return (
    <section className="relative min-h-[88vh] p-0" data-screen-label="01 Hero">
      <div className="grid min-h-[88vh] grid-cols-1 md:grid-cols-2">
        <div className="order-2 flex flex-col justify-between border-hairline px-6 py-12 md:order-1 md:border-r md:px-14 md:py-20">
          <div className="flex items-center gap-3.5 text-[11px] text-muted">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em]">
              {h.eyebrow}
            </span>
          </div>
          <div>
            <h1 className="font-serif text-[clamp(48px,7vw,118px)] font-normal leading-[0.92] tracking-[-0.035em] [font-variation-settings:'opsz'_144]">
              {h.title[0]} {h.title[1]}
              <span className="italic text-accent">{h.title[2]}</span>.
            </h1>
            <p className="mt-6 max-w-[480px] text-pretty text-lg leading-normal">
              {h.lede}
            </p>
          </div>
          <div>
            <div className="mb-6 flex flex-wrap gap-3">
              <button type="button" className={btn} onClick={openSignup}>
                {c.signup} <span className="arr">→</span>
              </button>
              <a className={btnGhost} href="#cursussen">
                {c.learn}
              </a>
            </div>
            <div className="flex flex-wrap gap-6 border-t border-hairline pt-4">
              {h.stat.map((s, i) => (
                <div key={i}>
                  <div className="font-mono text-[10px] text-muted">
                    0{i + 1}
                  </div>
                  <div className="text-sm font-medium">{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative order-1 min-h-[58vh] w-full bg-paper-2 md:order-2 md:min-h-0 md:p-6">
          <Photo
            scene="underwater"
            tag="LIVE FEED"
            idx="03 / 03"
            coords="SLOTERPLAS · 52.3631° N"
            depth="DEPTH 4.2m"
            height="100%"
            className="h-full min-h-full w-full rounded-none md:rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

function HeroOverlay({ lang, openSignup }) {
  const h = T.hero[lang];
  const c = T.cta[lang];
  return (
    <section
      data-screen-label="01 Hero"
      className="hero-overlay relative flex min-h-0 flex-1 flex-col overflow-hidden bg-[#06152b] text-white"
    >
      <Photo
        scene="underwater"
        src="assets/hero-swimmers.png"
        height="100%"
        className="absolute inset-0 z-0 h-full min-h-full w-full rounded-none [&_img]:min-h-full"
      />
      <div className="relative z-[2] mx-auto flex min-h-0 flex-1 max-w-[1440px] flex-col justify-end px-7 pb-8 pt-20 max-md:px-[18px] max-md:pb-10 max-md:pt-28">
        <div className="max-w-[920px] [text-shadow:0_2px_30px_rgba(6,15,30,0.85),0_1px_2px_rgba(6,15,30,0.6)]">
          <div className="mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-white/85">
            {h.eyebrow}
          </div>
          <h1 className="max-w-[14ch] font-serif text-[clamp(48px,7vw,108px)] font-light leading-[1.02] tracking-[-0.025em] text-white [font-variation-settings:'opsz'_144]">
            {h.title[0]} {h.title[1]}
            <span className="italic">{h.title[2]}</span> {h.title[3]}{" "}
            {h.title[4]} {h.title[5]}
          </h1>
          <div className="mt-9 flex flex-wrap gap-3">
            <button type="button" className={btnLight} onClick={openSignup}>
              {c.signup} <span className="arr">→</span>
            </button>
            <a
              className={`${btnGhost} border-white/40 text-white`}
              href="#cursussen"
            >
              {c.learn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Hero({ variant, lang, openSignup }) {
  if (variant === "overlay")
    return <HeroOverlay lang={lang} openSignup={openSignup} />;
  if (variant === "marquee")
    return <HeroMarquee lang={lang} openSignup={openSignup} />;
  if (variant === "split")
    return <HeroSplit lang={lang} openSignup={openSignup} />;
  return <HeroEditorial lang={lang} openSignup={openSignup} />;
}
