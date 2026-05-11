import React from "react";
import { T, DAYS } from "./data.jsx";
import { btn, btnGhost } from "@/lib/buttons";

export function Signup({ lang, initialSerie, initialDay, onClose }) {
  const s = T.signup[lang];
  const cc = T.courses[lang];
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({
    serie: initialSerie || null,
    day: initialDay || null,
    name: "",
    email: "",
    phone: "",
    level: s.levels[0],
    goals: "",
    consent: false,
  });
  const [done, setDone] = React.useState(false);

  const update = (k, v) => setData((d) => ({ ...d, [k]: v }));
  const dayObj = data.day ? DAYS.find((d) => d.key === data.day) : null;
  const price = data.serie === "hbfs" ? 225 : 185;
  const serieName = data.serie === "hbfs" ? cc.hbfsName : cc.basisName;

  const canNext = (() => {
    if (step === 0) return !!data.serie;
    if (step === 1) return !!data.day;
    if (step === 2) return data.name && /\S+@\S+\.\S+/.test(data.email);
    return data.consent;
  })();

  const onSubmit = (e) => {
    e?.preventDefault();
    if (step < 3) {
      if (canNext) setStep(step + 1);
      return;
    }
    if (canNext) setDone(true);
  };

  const onBack = () => setStep(Math.max(0, step - 1));

  React.useEffect(() => {
    const k = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [onClose]);

  const optBase =
    "flex w-full cursor-pointer items-start gap-3.5 rounded-sm border border-hairline bg-transparent p-[18px] text-left font-inherit text-ink transition-all duration-150 hover:border-ink max-md:p-3.5";

  const optOn =
    "border-ink bg-[rgba(10,31,61,0.04)] shadow-[0_0_0_3px_rgba(10,31,61,0.08)]";

  if (done) {
    return (
      <div
        className="fixed inset-0 z-[80] flex animate-modal-back items-end justify-center bg-[rgba(11,28,44,0.55)] backdrop-blur-md md:items-center"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        role="presentation"
      >
        <div
          className="animate-modal flex w-full max-w-[780px] flex-col items-center rounded-t-md bg-paper p-12 text-center md:rounded-md"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal
        >
          <div className="mb-6 grid h-16 w-16 place-items-center rounded-full bg-accent">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12l5 5 9-11"
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="font-serif text-5xl font-normal leading-none tracking-tight [font-variation-settings:'opsz'_144]">
            {s.done}
          </h2>
          <p className="mx-auto mb-8 mt-4 max-w-[480px] text-pretty text-[17px] leading-normal text-muted">
            {s.doneSub}
          </p>
          <button type="button" className={btn} onClick={onClose}>
            {s.doneClose}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex animate-modal-back items-end justify-center bg-[rgba(11,28,44,0.55)] backdrop-blur-md md:items-center"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="animate-modal flex max-h-[96vh] w-full max-w-[780px] flex-col overflow-hidden rounded-t-md bg-paper md:max-h-[92vh] md:rounded-md max-[560px]:rounded-t-md"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal
      >
        <div className="flex items-center justify-between gap-4 border-b border-hairline px-7 py-5 pb-4">
          <div className="flex min-w-0 flex-1 items-center gap-4">
            <span className="shrink-0 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
              {s.step} {step + 1} / {s.steps.length}
            </span>
            <div className="relative h-0.5 flex-1 overflow-hidden rounded-sm bg-hairline">
              <div
                className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-300"
                style={{ width: `${((step + 1) / s.steps.length) * 100}%` }}
              />
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={s.close}
            className="cursor-pointer border-0 bg-transparent p-2 text-lg text-ink"
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={onSubmit}
          className="flex flex-1 flex-col gap-6 overflow-y-auto px-7 pb-7 pt-8"
        >
          <div>
            <h3 className="mb-1.5 font-serif text-4xl font-normal leading-none tracking-tight [font-variation-settings:'opsz'_144]">
              {s.steps[step].t}
            </h3>
            <p className="m-0 text-[15px] text-muted">{s.steps[step].s}</p>
          </div>

          {step === 0 && (
            <div className="grid gap-3">
              <button
                type="button"
                className={`${optBase} ${data.serie === "basis" ? optOn : ""}`}
                onClick={() => update("serie", "basis")}
              >
                <span className="mt-1 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-ink">
                  {data.serie === "basis" ? (
                    <span className="h-2 w-2 rounded-full bg-ink" />
                  ) : null}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-accent">
                    {cc.basisTag}
                  </span>
                  <span className="mt-1 block text-[22px] font-semibold">
                    {cc.basisName} — €185
                  </span>
                  <span className="mt-1 block text-[13px] text-pretty text-muted">
                    {cc.basisLede}
                  </span>
                </span>
              </button>
              <button
                type="button"
                className={`${optBase} ${data.serie === "hbfs" ? optOn : ""}`}
                onClick={() => update("serie", "hbfs")}
              >
                <span className="mt-1 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-ink">
                  {data.serie === "hbfs" ? (
                    <span className="h-2 w-2 rounded-full bg-ink" />
                  ) : null}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-accent">
                    {cc.hbfsTag}
                  </span>
                  <span className="mt-1 block text-[22px] font-semibold">
                    {cc.hbfsName} — €225
                  </span>
                  <span className="mt-1 block text-[13px] text-pretty text-muted">
                    {cc.hbfsLede}
                  </span>
                </span>
              </button>
            </div>
          )}

          {step === 1 && (
            <div className="grid gap-2.5">
              {DAYS.map((d) => (
                <button
                  key={d.key}
                  type="button"
                  className={`${optBase} ${data.day === d.key ? optOn : ""}`}
                  onClick={() => update("day", d.key)}
                >
                  <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-ink">
                    {data.day === d.key && (
                      <span className="h-2 w-2 rounded-full bg-ink" />
                    )}
                  </span>
                  <span className="min-w-0 flex-1 text-left">
                    <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-accent">
                      {(lang === "nl" ? d.day_nl : d.day_en).toUpperCase()} ·
                      19:00
                    </span>
                    <span className="mt-1 block text-xl font-semibold">
                      {d.spot}
                    </span>
                    <span className="mt-0.5 block text-[13px] text-muted">
                      {d.sub} · {lang === "nl" ? d.start : d.start_en}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="grid gap-[18px]">
              <div>
                <label className="mb-1 block font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted">
                  {s.nameLbl}
                </label>
                <input
                  className="w-full border-0 border-b border-hairline bg-transparent py-3.5 pb-3 font-sans text-[17px] font-medium leading-tight text-ink outline-none placeholder:text-muted focus:border-accent"
                  required
                  value={data.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder={
                    lang === "nl" ? "Voor- en achternaam" : "First and last name"
                  }
                />
              </div>
              <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
                <div>
                  <label className="mb-1 block font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted">
                    {s.emailLbl}
                  </label>
                  <input
                    type="email"
                    className="w-full border-0 border-b border-hairline bg-transparent py-3.5 pb-3 font-sans text-[17px] font-medium leading-tight text-ink outline-none placeholder:text-muted focus:border-accent"
                    required
                    value={data.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="naam@email.nl"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted">
                    {s.phoneLbl}
                  </label>
                  <input
                    className="w-full border-0 border-b border-hairline bg-transparent py-3.5 pb-3 font-sans text-[17px] font-medium leading-tight text-ink outline-none placeholder:text-muted focus:border-accent"
                    value={data.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+31 6 …"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted">
                  {s.levelLbl}
                </label>
                <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {s.levels.map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => update("level", l)}
                      className={`cursor-pointer rounded-full border px-3.5 py-2.5 font-sans text-[13px] font-medium ${
                        data.level === l
                          ? "border-ink bg-ink text-paper"
                          : "border-hairline bg-transparent text-ink"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-1 block font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted">
                  {s.goalsLbl}
                </label>
                <textarea
                  className="w-full resize-none border-0 border-b border-hairline bg-transparent py-1.5 pb-3 font-sans text-[17px] font-medium leading-tight text-ink outline-none placeholder:text-muted focus:border-accent"
                  rows={2}
                  value={data.goals}
                  onChange={(e) => update("goals", e.target.value)}
                  placeholder={s.goalsPh}
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col gap-3.5 rounded-sm bg-paper-2 p-6">
              <Row k={s.reviewSerie} v={`${serieName} — €${price}`} />
              {dayObj && (
                <Row
                  k={s.reviewDay}
                  v={lang === "nl" ? dayObj.day_nl : dayObj.day_en}
                />
              )}
              {dayObj && (
                <Row k={s.reviewLoc} v={`${dayObj.spot} · ${dayObj.sub}`} />
              )}
              {dayObj && (
                <Row
                  k={s.reviewStart}
                  v={lang === "nl" ? dayObj.start : dayObj.start_en}
                />
              )}
              <Row k={s.nameLbl} v={data.name} />
              <Row k={s.emailLbl} v={data.email} />
              <div className="flex justify-between border-t border-hairline pt-3.5">
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                  {s.total}
                </span>
                <span className="font-serif text-[32px] font-medium leading-none tracking-tight">
                  €{price}
                </span>
              </div>
              <label className="mt-2 flex cursor-pointer items-start gap-2.5">
                <input
                  type="checkbox"
                  checked={data.consent}
                  onChange={(e) => update("consent", e.target.checked)}
                  className="mt-0.5 h-4 w-4 accent-accent"
                />
                <span className="text-[13px] leading-snug text-muted">
                  {s.consent}
                </span>
              </label>
            </div>
          )}
        </form>

        <div className="flex items-center justify-between gap-3 border-t border-hairline px-7 py-4">
          <button
            type="button"
            onClick={onBack}
            disabled={step === 0}
            className={`${btnGhost} ${step === 0 ? "cursor-default opacity-35" : ""}`}
          >
            ← {s.back}
          </button>
          <button
            type="button"
            onClick={onSubmit}
            disabled={!canNext}
            className={`${btn} ${!canNext ? "cursor-not-allowed opacity-40" : ""}`}
          >
            {step < 3 ? s.next : s.submit} <span className="arr">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function Row({ k, v }) {
  return (
    <div className="flex justify-between gap-4 text-sm">
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
        {k}
      </span>
      <span className="text-right font-medium">{v || "—"}</span>
    </div>
  );
}
