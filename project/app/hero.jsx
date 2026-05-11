// Hero variants

const HERO_VARIANTS = ["overlay", "editorial", "marquee", "split"];

function HeroEditorial({ lang, openSignup }) {
  const h = T.hero[lang];
  const c = T.cta[lang];
  return (
    <section data-screen-label="01 Hero" style={{ padding: "32px 28px 32px" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", background: "var(--ink)", color: "#fff", borderRadius: 2, overflow: "hidden", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", minHeight: "78vh" }} className="hero-edit-grid">
          {/* left — copy */}
          <div style={{ padding: "56px 56px 36px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", zIndex: 2 }}>
            <div className="mono uc" style={{ fontSize: 11, letterSpacing: ".16em", color: "rgba(255,255,255,.55)" }}>{h.eyebrow}</div>
            <div>
              <h1 className="display" style={{ fontSize: "clamp(48px,5.6vw,80px)", color: "#fff", lineHeight: 1.02, letterSpacing: "-.025em", maxWidth: "14ch" }}>
                {h.title[0]} {h.title[1]}<span style={{ fontStyle: "italic" }}>{h.title[2]}</span> {h.title[3]} {h.title[4]} {h.title[5]}
              </h1>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 36 }}>
                <button className="btn light" onClick={openSignup}>{c.signup} <span className="arr">→</span></button>
                <a className="btn ghost" style={{ color: "#fff", borderColor: "rgba(255,255,255,.4)" }} href="#cursussen">{c.learn}</a>
              </div>
            </div>
            <div></div>
          </div>
          {/* right — photo */}
          <div style={{ position: "relative", minHeight: 480 }}>
            <Photo scene="underwater" tag="LIVE · IJBURG" idx="01 / 03" coords="52.3589° N · 4.9990° E" depth="WATER 16°C"
            style={{ position: "absolute", inset: 0, height: "100%", borderRadius: 0 }} />
          </div>
        </div>
        {/* bottom meta strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr) auto", borderTop: "1px solid rgba(255,255,255,.14)", padding: "22px 56px", gap: 32, alignItems: "center" }} className="hero-edit-meta">
          {h.stat.map((s, i) =>
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span className="mono uc" style={{ fontSize: 9, letterSpacing: ".14em", color: "rgba(255,255,255,.45)" }}>0{i + 1}</span>
              <span style={{ fontSize: 14, fontWeight: 500, color: "#fff" }}>{s}</span>
            </div>
          )}
          <div className="mono uc" style={{ fontSize: 10, color: "rgba(255,255,255,.6)", letterSpacing: ".14em", whiteSpace: "nowrap" }}>{h.seriesStart}</div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px){
          .hero-edit-grid{grid-template-columns:1fr !important;}
          .hero-edit-grid > div:first-child{padding:36px 24px 24px !important;}
          .hero-edit-grid > div:last-child{min-height:60vh !important;}
          .hero-edit-meta{grid-template-columns:1fr 1fr !important; padding:18px 24px !important;}
        }
      `}</style>
    </section>);

}

function HeroMarquee({ lang, openSignup }) {
  const h = T.hero[lang];
  const c = T.cta[lang];
  const word1 = lang === "nl" ? "Open" : "Open";
  const word2 = lang === "nl" ? "water" : "water";
  return (
    <section className="hero" data-screen-label="01 Hero" style={{ paddingTop: 32, overflow: "hidden" }}>
      <div className="shell">
        <div className="meta" style={{ marginBottom: 24 }}>
          <span className="mono uc" style={{ fontSize: 11 }}>{h.eyebrow}</span>
        </div>
      </div>
      <div style={{ whiteSpace: "nowrap", padding: "0 28px" }}>
        <div className="hero-marquee-words" style={{ color: "var(--ink)" }}>{word1} <span style={{ fontStyle: "italic", color: "var(--accent)" }}>{word2}</span> coaching</div>
      </div>
      <div className="shell" style={{ marginTop: 24 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }} className="hero-3up">
          <Photo scene="dawn" tag="MA · KNSM" idx="EVENING" coords="19:00 — 20:00" height={300} />
          <Photo scene="swimmer" tag="WO · IJBURG" idx="EVENING" coords="19:00 — 20:00" height={300} />
          <Photo scene="underwater" tag="DO · SLOTERPLAS" idx="EVENING" coords="19:00 — 20:00" height={300} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 32, marginTop: 36, alignItems: "center" }} className="hero-grid">
          <p className="serif" style={{ fontSize: "clamp(28px,3.4vw,48px)", lineHeight: 1.1, margin: 0, fontWeight: 400, maxWidth: 900 }}>
            {h.lede}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "flex-end" }}>
            <button className="btn accent" onClick={openSignup}>{c.signup} <span className="arr">→</span></button>
            <a className="btn ghost" href="#cursussen">{c.learn}</a>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 880px){ .hero-3up{grid-template-columns:1fr !important;} .hero-grid{grid-template-columns:1fr !important;} }`}</style>
    </section>);

}

function HeroSplit({ lang, openSignup }) {
  const h = T.hero[lang];
  const c = T.cta[lang];
  return (
    <section className="hero" data-screen-label="01 Hero" style={{ padding: 0 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "88vh" }} className="hero-split">
        <div style={{ padding: "80px 56px 56px", display: "flex", flexDirection: "column", justifyContent: "space-between", borderRight: "1px solid var(--hairline)" }}>
          <div className="meta">
            <span className="mono uc" style={{ fontSize: 11 }}>{h.eyebrow}</span>
          </div>
          <div>
            <h1 className="display" style={{ fontSize: "clamp(48px,7vw,118px)" }}>
              {h.title[0]} {h.title[1]}<span style={{ fontStyle: "italic", color: "var(--accent)" }}>{h.title[2]}</span>.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.5, marginTop: 24, maxWidth: 480, textWrap: "pretty" }}>{h.lede}</p>
          </div>
          <div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
              <button className="btn accent" onClick={openSignup}>{c.signup} <span className="arr">→</span></button>
              <a className="btn ghost" href="#cursussen">{c.learn}</a>
            </div>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap", paddingTop: 16, borderTop: "1px solid var(--hairline)" }}>
              {h.stat.map((s, i) =>
              <div key={i}>
                  <div className="mono" style={{ fontSize: 10, color: "var(--muted)" }}>0{i + 1}</div>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{s}</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div style={{ position: "relative", padding: 24, background: "var(--paper-2)" }}>
          <Photo scene="underwater" tag="LIVE FEED" idx="03 / 03" coords="SLOTERPLAS · 52.3631° N" depth="DEPTH 4.2m" height="100%" style={{ height: "100%", borderRadius: 8 }} />
        </div>
      </div>
      <style>{`@media (max-width: 880px){ .hero-split{grid-template-columns:1fr !important;} .hero-split > div:first-child{padding:48px 24px !important; border-right:0; border-bottom:1px solid var(--hairline);} .hero-split > div:last-child{min-height:60vh;} }`}</style>
    </section>);

}

function HeroOverlay({ lang, openSignup }) {
  const h = T.hero[lang];
  const c = T.cta[lang];
  return (
    <section data-screen-label="01 Hero" className="hero-overlay" style={{ backgroundColor: "rgba(6, 21, 43, 0)" }}>
      <Photo scene="underwater" src="assets/hero-swimmers.png" style={{ height: "100%", borderRadius: 0 }} />
      <div className="hero-overlay-inner">
        <div style={{ maxWidth: 920, textShadow: "0 2px 30px rgba(6,15,30,.85), 0 1px 2px rgba(6,15,30,.6)" }}>
          <div className="mono uc" style={{ fontSize: 11, letterSpacing: ".18em", color: "rgba(255,255,255,.85)", marginBottom: 24 }}>{h.eyebrow}</div>
          <h1 className="display" style={{ fontSize: "clamp(48px,7vw,108px)", lineHeight: 1.02, letterSpacing: "-.025em", maxWidth: "14ch", fontWeight: 300 }}>
            {h.title[0]} {h.title[1]}<span style={{ fontStyle: "italic" }}>{h.title[2]}</span> {h.title[3]} {h.title[4]} {h.title[5]}
          </h1>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 36 }}>
            <button className="btn light" onClick={openSignup}>{c.signup} <span className="arr">→</span></button>
            <a className="btn ghost" style={{ color: "#fff", borderColor: "rgba(255,255,255,.4)" }} href="#cursussen">{c.learn}</a>
          </div>
        </div>
      </div>
    </section>);

}

function Hero({ variant, lang, openSignup }) {
  if (variant === "overlay") return <HeroOverlay lang={lang} openSignup={openSignup} />;
  if (variant === "marquee") return <HeroMarquee lang={lang} openSignup={openSignup} />;
  if (variant === "split") return <HeroSplit lang={lang} openSignup={openSignup} />;
  return <HeroEditorial lang={lang} openSignup={openSignup} />;
}

Object.assign(window, { Hero, HERO_VARIANTS });