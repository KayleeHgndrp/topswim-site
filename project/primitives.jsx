// primitives.jsx — small shared components

const Arrow = ({ size = 14 }) => (
  <svg className="btn__arrow" width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Wrap = ({ children, className = "" }) => (
  <div className={`wrap ${className}`}>{children}</div>
);

const SectionHead = ({ eyebrow, title, lede, id }) => (
  <div className="sectionHead" id={id}>
    <div>
      <div className="eyebrow" style={{ marginBottom: 18 }}>{eyebrow}</div>
      <h2 className="display sectionHead__title">{title}</h2>
    </div>
    <div className="sectionHead__lede">{lede}</div>
  </div>
);

const Placeholder = ({ label, className = "", style, corner = "bl" }) => (
  <div className={`ph ${className}`} data-label={label} data-corner={corner} style={style}></div>
);

const Nav = ({ lang, setLang, t, onSignup }) => (
  <nav className="nav">
    <div className="nav__inner">
      <a className="nav__logo" href="#top">
        <span className="nav__logo-mark"></span>
        topswim
      </a>
      <div className="nav__links">
        <a className="nav__link" href="#courses">{t.nav.courses}</a>
        <a className="nav__link" href="#locations">{t.nav.locations}</a>
        <a className="nav__link" href="#coach">{t.nav.coach}</a>
        <a className="nav__link" href="#faq">{t.nav.faq}</a>
      </div>
      <div className="nav__right">
        <div className="lang">
          <button data-active={lang === "nl"} onClick={() => setLang("nl")}>NL</button>
          <button data-active={lang === "en"} onClick={() => setLang("en")}>EN</button>
        </div>
        <button className="btn btn--accent btn--sm" onClick={onSignup}>
          {t.nav.signup} <Arrow size={12} />
        </button>
      </div>
    </div>
  </nav>
);

Object.assign(window, { Arrow, Wrap, SectionHead, Placeholder, Nav });
