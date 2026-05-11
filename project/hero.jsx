// hero.jsx — three hero variants

const HeroV1 = ({ t, onSignup }) => (
  <section className="hero hero-v1">
    <Wrap>
      <div className="eyebrow" style={{ marginBottom: 28 }}>{t.hero.eyebrow}</div>
      <div className="hero-v1__grid">
        <div>
          <h1 className="display hero-v1__title">
            {t.hero.title_1} <em>{t.hero.title_em}</em> {t.hero.title_2}
          </h1>
          <p className="hero-v1__sub">{t.hero.sub}</p>
          <div className="hero-v1__cta">
            <button className="btn btn--accent" onClick={onSignup}>
              {t.hero.cta_primary} <Arrow />
            </button>
            <a className="btn btn--ghost" href="#courses">{t.hero.cta_secondary}</a>
          </div>
        </div>
        <Placeholder label="HERO_001 / coach demonstrating sighting technique, IJ at sunset" className="hero-v1__photo" />
      </div>
      <div className="hero-v1__meta">
        {[t.hero.stat_1, t.hero.stat_2, t.hero.stat_3].map(([n, l], i) => (
          <div className="hero-v1__metaItem" key={i}>
            <div className="num">{n}</div>
            <div className="lbl">{l}</div>
          </div>
        ))}
      </div>
    </Wrap>
  </section>
);

const HeroV2 = ({ t, onSignup }) => (
  <section className="hero hero-v2">
    <div className="hero-v2__photo">
      <Placeholder label="HERO_002 / wide shot, swimmer entering water at dawn, KNSM" style={{ position: "absolute", inset: 0, borderRadius: 0 }} corner="tl" />
      <div className="hero-v2__overlay">
        <div className="eyebrow" style={{ marginBottom: 24 }}>{t.hero.eyebrow}</div>
        <h1 className="display hero-v2__title">
          {t.hero.title_1} <em style={{ color: "var(--accent)", fontStyle: "italic", fontWeight: 500 }}>{t.hero.title_em}</em> {t.hero.title_2}
        </h1>
        <div className="hero-v2__row">
          <p className="hero-v2__sub">{t.hero.sub}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="btn btn--accent" onClick={onSignup}>
              {t.hero.cta_primary} <Arrow />
            </button>
            <a className="btn btn--ghost" href="#courses" style={{ borderColor: "color-mix(in oklch, var(--paper) 30%, transparent)", color: "var(--paper)" }}>
              {t.hero.cta_secondary}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HeroV3 = ({ t, onSignup }) => (
  <section className="hero hero-v3">
    <Wrap>
      <div className="eyebrow" style={{ marginBottom: 28 }}>{t.hero.eyebrow}</div>
      <div className="hero-v3__grid">
        <div>
          <h1 className="display hero-v3__title">
            {t.hero.title_1} <em style={{ color: "var(--accent)", fontStyle: "italic", fontWeight: 500 }}>{t.hero.title_em}</em> {t.hero.title_2}
          </h1>
          <p className="hero-v3__sub">{t.hero.sub}</p>
          <div className="hero-v3__cta">
            <button className="btn btn--accent" onClick={onSignup}>
              {t.hero.cta_primary} <Arrow />
            </button>
            <a className="btn btn--ghost" href="#courses">{t.hero.cta_secondary}</a>
          </div>
        </div>
        <div className="hero-v3__schedule">
          <div className="hero-v3__sched-head">
            <div className="display" style={{ fontSize: 28, fontWeight: 600 }}>{t.hero.sched_title}</div>
            <div className="mono" style={{ color: "var(--muted)" }}>{t.hero.sched_sub}</div>
          </div>
          {t.locations.list.map((loc, i) => (
            <div className="hero-v3__sched-row" key={i}>
              <div className="hero-v3__sched-day">{loc.day.slice(0, 3)}</div>
              <div>
                <div className="hero-v3__sched-loc">{loc.name}</div>
                <div className="hero-v3__sched-sub">{loc.area} · 19:00–20:00</div>
              </div>
              <div className="hero-v3__sched-date">{loc.date}</div>
            </div>
          ))}
        </div>
      </div>
    </Wrap>
  </section>
);

const Hero = ({ variant, t, onSignup }) => {
  if (variant === "immersive") return <HeroV2 t={t} onSignup={onSignup} />;
  if (variant === "schedule") return <HeroV3 t={t} onSignup={onSignup} />;
  return <HeroV1 t={t} onSignup={onSignup} />;
};

Object.assign(window, { Hero });
