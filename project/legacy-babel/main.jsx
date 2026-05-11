// Main app

function App() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  const [lang, setLang] = React.useState(t.lang || "nl");
  const [signup, setSignup] = React.useState(null); // null | {serie, day}

  // apply palette
  React.useEffect(()=>{ applyPalette(t.palette); }, [t.palette]);

  const openSignup = (serie=null, day=null) => setSignup({serie, day});
  const closeSignup = () => setSignup(null);

  const c = T.cta[lang];
  const navItems = T.nav[lang];

  return (
    <div>
      {/* TOPBAR */}
      <header className="topbar">
        <div className="shell topbar-inner">
          <a href="#top" className="brand" style={{textDecoration:"none", color:"var(--ink)"}}>
            <span className="brand-mark"></span>
            <span className="brand-name">topswim<span style={{color:"var(--accent)"}}>.</span></span>
          </a>
          <nav className="nav">
            <a href="#cursussen">{navItems[0]}</a>
            <a href="#schedule">{navItems[1]}</a>
            <a href="#coach">{navItems[2]}</a>
            <a href="#faq">{navItems[3]}</a>
            <span className="lang" role="group" aria-label="language">
              <button className={lang==="nl"?"on":""} onClick={()=>setLang("nl")}>NL</button>
              <button className={lang==="en"?"on":""} onClick={()=>setLang("en")}>EN</button>
            </span>
            <button className="btn accent" style={{padding:"10px 18px"}} onClick={()=>openSignup()}>{c.signup}</button>
          </nav>
        </div>
      </header>

      {/* HERO (variant) */}
      <Hero variant={t.heroVariant} lang={lang} openSignup={openSignup}/>

      {/* MARQUEE */}
      <Marquee lang={lang}/>

      {/* COURSES */}
      <Courses lang={lang} openSignup={openSignup}/>

      {/* SCHEDULE */}
      <div style={{borderTop:"1px solid var(--hairline)"}}>
        <Schedule lang={lang} openSignup={openSignup}/>
      </div>

      {/* WHO FOR */}
      <div style={{borderTop:"1px solid var(--hairline)"}}>
        <WhoFor lang={lang}/>
      </div>

      {/* WHAT YOU GET */}
      <WhatYouGet lang={lang}/>

      {/* COACH */}
      <Coach lang={lang}/>

      {/* TESTIMONIALS */}
      <div style={{borderTop:"1px solid var(--hairline)"}}>
        <Testimonials lang={lang}/>
      </div>

      {/* FAQ */}
      <div style={{borderTop:"1px solid var(--hairline)"}}>
        <FAQ lang={lang}/>
      </div>

      {/* FOOTER */}
      <Footer lang={lang} openSignup={openSignup}/>

      {/* SIGNUP MODAL */}
      {signup && <Signup lang={lang} initialSerie={signup.serie} initialDay={signup.day} onClose={closeSignup}/>}

      {/* TWEAKS */}
      <TweaksPanel>
        <TweakSection label={lang==="nl"?"Hero":"Hero"}/>
        <TweakSelect label={lang==="nl"?"Variant":"Variant"} value={t.heroVariant}
          options={[
            {value:"overlay", label:"Overlay (foto + titel)"},
            {value:"editorial", label:"Editorial (split + meta)"},
            {value:"marquee", label:"Marquee (big type)"},
            {value:"split", label:"Split (50/50)"},
          ]}
          onChange={(v)=>setTweak("heroVariant", v)}/>
        <TweakSection label={lang==="nl"?"Palet":"Palette"}/>
        <TweakSelect label={lang==="nl"?"Kleurschema":"Color scheme"} value={t.palette}
          options={[
            {value:"midnight", label:"Midnight Water"},
            {value:"dawn", label:"Dawn"},
            {value:"buoy", label:"Buoy Yellow"},
          ]}
          onChange={(v)=>setTweak("palette", v)}/>
        <TweakSection label={lang==="nl"?"Taal":"Language"}/>
        <TweakRadio label={lang==="nl"?"Taal":"Language"} value={lang}
          options={["nl","en"]}
          onChange={(v)=>{ setLang(v); setTweak("lang", v); }}/>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
