import React from "react";
import { T, DAYS } from "./data.jsx";
import { Photo } from "./photo.jsx";
import { btn, btnGhost } from "@/lib/buttons";

const shell = "relative mx-auto max-w-[1440px] px-7 max-[760px]:px-[18px]";

const displayH2 =
  "font-serif text-[clamp(40px,5.5vw,84px)] font-normal leading-[0.94] tracking-[-0.035em] [font-variation-settings:'opsz'_144]";

const displayH3 =
  "font-serif text-4xl font-normal leading-none tracking-[-0.035em] [font-variation-settings:'opsz'_144] md:text-[clamp(26px,3vw,40px)]";

const monoEyebrow = "font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted";

const serifHeading = "font-serif font-medium tracking-[-0.02em]";

export function Marquee({ lang }) {
  const words =
    lang === "nl"
      ? [
          "Open water seizoen 2026",
          "KNSM · IJburg · Sloterplas",
          "Coach Michiel",
          "Video-analyse",
          "Vanaf €185",
          "6 trainingen",
          "HBFS-serie",
          "Triatleten welkom",
          "City swim ready",
          "Start eind mei",
        ]
      : [
          "Open water 2026",
          "KNSM · IJburg · Sloterplas",
          "Coach Michiel",
          "Video analysis",
          "From €185",
          "6 sessions",
          "HBFS series",
          "Triathletes welcome",
          "City swim ready",
          "Starts late May",
        ];
  const list = [...words, ...words];
  return (
    <div className="overflow-hidden bg-ink text-white" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-9 py-[18px] font-serif text-[22px] font-light italic tracking-tight max-md:py-3.5 max-md:text-base">
        {list.map((w, i) => (
          <span key={i} className="inline-flex items-center gap-[18px]">
            {w}
            <span className="not-italic font-mono text-[10px] tracking-[0.2em] text-accent-2">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Courses({ lang, openSignup }) {
  const c = T.courses[lang];
  return (
    <section
      id="cursussen"
      data-screen-label="02 Cursussen"
      className={`${shell} py-24`}
    >
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className={monoEyebrow}>
            § 02 — {lang === "nl" ? "Cursussen" : "Courses"}
          </span>
          <h2 className={`${displayH2} mt-2.5 max-w-[900px]`}>{c.title}</h2>
        </div>
        <a
          href="#schedule"
          className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink underline decoration-1 underline-offset-4 hover:text-accent"
        >
          {c.compare} →
        </a>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-6 overflow-hidden rounded-sm bg-paper-2 p-0">
          <Photo
            src="assets/dock-trio.jpg"
            tag={c.basisTag}
            idx="€185"
            coords={lang === "nl" ? "6 × 60 MIN" : "6 × 60 MIN"}
            height={280}
          />
          <div className="flex flex-col gap-5 px-7 pb-7">
            <div>
              <h3 className={`${displayH3} text-4xl`}>{c.basisName}</h3>
              <p className="mt-3 text-pretty leading-normal text-muted">
                {c.basisLede}
              </p>
            </div>
            <ul className="m-0 grid list-none grid-cols-2 gap-2 p-0 text-sm">
              {c.basisFeats.map((f, i) => (
                <li key={i} className="flex items-baseline gap-2">
                  <span className="font-mono text-[10px] text-accent">
                    0{i + 1}
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t border-hairline pt-5">
              <div>
                <div className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
                  {c.from}
                </div>
                <div className="font-serif text-[42px] font-medium leading-none">
                  €185
                </div>
              </div>
              <button
                type="button"
                className={btn}
                onClick={() => openSignup("basis")}
              >
                {c.enroll} <span className="arr">→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 overflow-hidden rounded-sm bg-ink p-0 text-paper">
          <Photo
            src="assets/race.jpg"
            tag={c.hbfsTag}
            idx="HBFS"
            coords={c.hbfsFull}
            height={280}
          />
          <div className="flex flex-col gap-5 px-7 pb-7">
            <div>
              <h3 className={`${displayH3} text-paper`}>{c.hbfsName}</h3>
              <p className="mt-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
                {c.hbfsFull}
              </p>
              <p className="mt-3 text-pretty leading-normal opacity-80">
                {c.hbfsLede}
              </p>
            </div>
            <ul className="m-0 grid list-none grid-cols-2 gap-2 p-0 text-sm">
              {c.hbfsFeats.map((f, i) => (
                <li key={i} className="flex items-baseline gap-2">
                  <span className="font-mono text-[10px] text-accent">
                    0{i + 1}
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t border-[rgba(244,237,224,0.2)] pt-5">
              <div>
                <div className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] opacity-60">
                  {c.from}
                </div>
                <div className="font-serif text-[42px] font-medium leading-none">
                  €225
                </div>
              </div>
              <button
                type="button"
                className={btn}
                onClick={() => openSignup("hbfs")}
              >
                {c.enroll} <span className="arr">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Schedule({ lang, openSignup }) {
  const s = T.schedule[lang];
  const SRCS = [
    "assets/race.jpg",
    "assets/swim-stroke.jpg",
    "assets/dock-trio.jpg",
  ];
  return (
    <section
      id="schedule"
      data-screen-label="03 Schedule"
      className={`${shell} py-24`}
    >
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[700px]">
          <span className={monoEyebrow}>
            § 03 — {lang === "nl" ? "Locaties" : "Locations"}
          </span>
          <h2 className={`${displayH2} mt-2.5`}>{s.title}</h2>
          <p className="mt-[18px] text-pretty text-lg leading-normal text-muted">
            {s.lede}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-2.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-ink">
            <span className="font-mono">⏱</span> {s.time}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-ink bg-ink px-2.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-paper">
            <span className="font-mono">↔</span> {s.switch}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {DAYS.map((d, i) => (
          <div
            key={d.key}
            className="relative flex min-h-[380px] flex-col overflow-hidden rounded-sm bg-paper-2"
          >
            <Photo
              src={SRCS[i]}
              tag={(lang === "nl" ? d.day_nl : d.day_en).toUpperCase()}
              idx={`0${i + 1} / 03`}
              coords={d.coords}
              depth={d.waterTemp}
              height={220}
            />
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div>
                <div className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
                  {lang === "nl" ? d.start : d.start_en}
                </div>
                <h3
                  className={`${serifHeading} mt-1.5 text-[34px] leading-none`}
                >
                  {d.spot}
                </h3>
                <div className="mt-1 text-[13px] text-muted">{d.sub}</div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <Spec
                  label={lang === "nl" ? "Afstand" : "Distance"}
                  value={d.distance}
                />
                <Spec
                  label={lang === "nl" ? "Diepte" : "Depth"}
                  value={d.depth}
                />
              </div>
              <p className="m-0 text-sm leading-snug text-ink">
                {lang === "nl" ? d.note_nl : d.note_en}
              </p>
              <button
                type="button"
                className={`${btnGhost} mt-auto justify-center`}
                onClick={() => openSignup(null, d.key)}
              >
                {s.pickDay} <span className="arr">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Spec({ label, value }) {
  return (
    <div className="border-t border-hairline pt-1.5">
      <div className="font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-muted">
        {label}
      </div>
      <div className="font-medium">{value}</div>
    </div>
  );
}

export function WhoFor({ lang }) {
  const w = T.whoFor[lang];
  return (
    <section data-screen-label="04 Voor wie" className={`${shell} py-24`}>
      <span className={monoEyebrow}>
        § 04 — {lang === "nl" ? "Voor wie" : "Who"}
      </span>
      <h2 className={`${displayH2} mb-12 mt-2.5 max-w-[900px]`}>{w.title}</h2>
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-hairline bg-hairline max-[880px]:grid-cols-2 max-[560px]:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {w.items.map((it, i) => (
          <div
            key={i}
            className="flex min-h-[280px] flex-col gap-3.5 bg-paper p-8"
          >
            <div className="font-mono text-[11px] font-semibold text-accent">
              {it.k}
            </div>
            <h3 className={`${serifHeading} m-0 text-2xl leading-tight`}>
              {it.t}
            </h3>
            <p className="m-0 text-pretty text-sm leading-normal text-muted">
              {it.b}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function WhatYouGet({ lang }) {
  const w = T.whatYouGet[lang];
  return (
    <section
      data-screen-label="05 Wat krijg je"
      className="bg-ink py-24 text-paper"
    >
      <div className={shell}>
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
          § 05 — {lang === "nl" ? "Wat zit erin" : "What you get"}
        </span>
        <h2
          className={`${displayH2} mb-12 mt-2.5 max-w-[900px] text-paper`}
        >
          {w.title}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {w.items.map((it, i) => (
            <div
              key={i}
              className="flex flex-col gap-2.5 border-t border-[rgba(244,237,224,0.2)] py-6 pt-6"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] text-accent">{it.k}</span>
                <span className="font-mono text-[9px] font-medium uppercase tracking-[0.14em] opacity-50">
                  INCL.
                </span>
              </div>
              <h3
                className={`${serifHeading} m-0 text-[26px] leading-tight text-paper`}
              >
                {it.t}
              </h3>
              <p className="m-0 text-pretty text-sm leading-normal opacity-80">
                {it.b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Coach({ lang }) {
  const c = T.coach[lang];
  return (
    <section
      id="coach"
      data-screen-label="06 Coach"
      className={`${shell} py-24`}
    >
      <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-[1fr_1.2fr]">
        <div className="top-20 md:sticky">
          <Photo
            src="assets/coach-back.jpg"
            tag={c.label}
            idx="MICHIEL"
            coords="AMSTERDAM · 2016 — NU"
            height={620}
          />
        </div>
        <div>
          <span className={monoEyebrow}>
            § 06 — {c.label}
          </span>
          <h2 className={`${displayH2} mb-8 mt-2.5`}>{c.title}</h2>
          {c.bio.map((p, i) => (
            <p
              key={i}
              className="mb-[18px] text-pretty text-lg leading-[1.55] last:mb-0"
            >
              {p}
            </p>
          ))}
          <div className="mt-9 grid grid-cols-2 border-t border-hairline md:grid-cols-4">
            {c.stats.map((st, i) => (
              <div
                key={i}
                className={`border-hairline py-5 pl-5 first:pl-0 md:border-r md:pr-5 ${i === 3 ? "md:border-r-0" : ""}`}
              >
                <div className="font-serif text-[46px] font-medium leading-none tracking-[-0.03em]">
                  {st.v}
                </div>
                <div className="mt-2 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
                  {st.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials({ lang }) {
  const items = T.testimonials[lang];
  return (
    <section data-screen-label="07 Testimonials" className={`${shell} py-24`}>
      <span className={monoEyebrow}>
        § 07 —{" "}
        {lang === "nl" ? "Stemmen uit het water" : "Voices from the water"}
      </span>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((t, i) => (
          <div
            key={i}
            className="flex min-h-[240px] flex-col gap-5 rounded-sm bg-paper-2 p-6"
          >
            <div className="font-mono text-2xl leading-none text-accent">"</div>
            <p
              className={`${serifHeading} m-0 flex-1 text-2xl font-normal leading-tight tracking-[-0.01em] text-pretty`}
            >
              {t.q}
            </p>
            <div className="flex items-center gap-3 border-t border-hairline pt-4">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-ink text-sm font-semibold text-paper">
                {t.n[0]}
              </div>
              <div>
                <div className="text-sm font-semibold">{t.n}</div>
                <div className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
                  {t.r}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FAQ({ lang }) {
  const items = T.faq[lang];
  const [open, setOpen] = React.useState(0);
  return (
    <section
      id="faq"
      data-screen-label="08 FAQ"
      className={`${shell} pb-[120px] pt-24`}
    >
      <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_1.4fr]">
        <div>
          <span className={monoEyebrow}>§ 08 — FAQ</span>
          <h2 className={`${displayH2} mt-2.5 whitespace-pre-line`}>
            {lang === "nl"
              ? "Vragen,\nantwoorden."
              : "Questions,\nanswers."}
          </h2>
        </div>
        <div>
          {items.map((it, i) => (
            <div
              key={i}
              className={`border-t border-hairline ${i === items.length - 1 ? "border-b border-hairline" : ""}`}
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full cursor-pointer items-center justify-between border-0 bg-transparent py-[22px] pl-0 pr-0 font-inherit text-ink"
              >
                <span className="text-xl font-medium tracking-tight">
                  {it.q}
                </span>
                <span
                  className={`font-mono text-lg text-accent transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="max-w-[680px] pb-[22px] text-base leading-relaxed text-muted text-pretty">
                  {it.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer({ lang, openSignup }) {
  const f = T.footer[lang];
  const c = T.cta[lang];
  return (
    <footer
      data-screen-label="09 Footer"
      className="bg-ink pb-8 pt-20 text-paper"
    >
      <div className={shell}>
        <div className="grid grid-cols-1 gap-12 border-b border-[rgba(244,237,224,0.18)] pb-12 md:grid-cols-[1.4fr_1fr]">
          <h2
            className={`${displayH2} text-paper [font-size:clamp(40px,5vw,84px)]`}
          >
            {lang === "nl"
              ? "Klaar om buiten te zwemmen?"
              : "Ready to swim outside?"}
          </h2>
          <div className="flex flex-col items-start justify-end gap-4">
            <button type="button" className={btn} onClick={() => openSignup()}>
              {c.signup} <span className="arr">→</span>
            </button>
            <a
              href="mailto:hello@topswim.nl"
              className="text-sm text-paper underline decoration-1 underline-offset-4 hover:text-accent-2"
            >
              hello@topswim.nl
            </a>
            <a
              href="https://wa.me/31600000000"
              className="text-sm text-paper underline decoration-1 underline-offset-4 hover:text-accent-2"
            >
              WhatsApp · +31 6 00 000 000
            </a>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 font-mono text-xs font-medium uppercase tracking-[0.14em] opacity-60">
          <span>{f.made}</span>
          <span>{f.tag}</span>
        </div>
      </div>
    </footer>
  );
}
