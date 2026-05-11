// Page sections

function Marquee({ lang }) {
  const words = lang==="nl"
    ? ["Open water seizoen 2026","KNSM · IJburg · Sloterplas","Coach Michiel","Video-analyse","Vanaf €185","6 trainingen","HBFS-serie","Triatleten welkom","City swim ready","Start eind mei"]
    : ["Open water 2026","KNSM · IJburg · Sloterplas","Coach Michiel","Video analysis","From €185","6 sessions","HBFS series","Triathletes welcome","City swim ready","Starts late May"];
  const list = [...words, ...words];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {list.map((w,i)=>(
          <span key={i}>{w}<span className="star">✦</span></span>
        ))}
      </div>
    </div>
  );
}

function Courses({ lang, openSignup }) {
  const c = T.courses[lang];
  return (
    <section id="cursussen" data-screen-label="02 Cursussen" className="shell" style={{padding:"96px 28px"}}>
      <div style={{display:"flex",alignItems:"end",justifyContent:"space-between",marginBottom:48,gap:24,flexWrap:"wrap"}}>
        <div>
          <span className="mono uc" style={{fontSize:11, color:"var(--muted)"}}>§ 02 — {lang==="nl"?"Cursussen":"Courses"}</span>
          <h2 className="display" style={{marginTop:10, maxWidth:900}}>{c.title}</h2>
        </div>
        <a href="#schedule" className="underline-link mono uc" style={{fontSize:11}}>{c.compare} →</a>
      </div>
      <div className="grid-2">
        {/* BASIS */}
        <div className="card" style={{display:"flex",flexDirection:"column",gap:24,padding:0,overflow:"hidden"}}>
          <Photo src="assets/dock-trio.jpg" tag={c.basisTag} idx="€185" coords={lang==="nl"?"6 × 60 MIN":"6 × 60 MIN"} height={280}/>
          <div style={{padding:"0 28px 28px",display:"flex",flexDirection:"column",gap:20}}>
            <div>
              <h3 className="display" style={{fontSize:36}}>{c.basisName}</h3>
              <p style={{margin:"12px 0 0",lineHeight:1.5,color:"var(--muted)",textWrap:"pretty"}}>{c.basisLede}</p>
            </div>
            <ul style={{listStyle:"none",padding:0,margin:0,display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,fontSize:14}}>
              {c.basisFeats.map((f,i)=>(
                <li key={i} style={{display:"flex",gap:8,alignItems:"baseline"}}>
                  <span className="mono" style={{fontSize:10,color:"var(--accent)"}}>0{i+1}</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",borderTop:"1px solid var(--hairline)",paddingTop:20}}>
              <div>
                <div className="mono uc" style={{fontSize:10,color:"var(--muted)"}}>{c.from}</div>
                <div className="serif" style={{fontSize:42,lineHeight:1, fontWeight:500}}>€185</div>
              </div>
              <button className="btn accent" onClick={()=>openSignup("basis")}>{c.enroll} <span className="arr">→</span></button>
            </div>
          </div>
        </div>

        {/* HBFS */}
        <div className="card" style={{display:"flex",flexDirection:"column",gap:24,padding:0,overflow:"hidden",background:"var(--ink)",color:"var(--paper)"}}>
          <Photo src="assets/race.jpg" tag={c.hbfsTag} idx="HBFS" coords={c.hbfsFull} height={280}/>
          <div style={{padding:"0 28px 28px",display:"flex",flexDirection:"column",gap:20}}>
            <div>
              <h3 className="display" style={{fontSize:36, color:"var(--paper)"}}>{c.hbfsName}</h3>
              <p className="mono uc" style={{fontSize:11, marginTop:6, color:"var(--accent)"}}>{c.hbfsFull}</p>
              <p style={{margin:"12px 0 0",lineHeight:1.5,opacity:.78,textWrap:"pretty"}}>{c.hbfsLede}</p>
            </div>
            <ul style={{listStyle:"none",padding:0,margin:0,display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,fontSize:14}}>
              {c.hbfsFeats.map((f,i)=>(
                <li key={i} style={{display:"flex",gap:8,alignItems:"baseline"}}>
                  <span className="mono" style={{fontSize:10,color:"var(--accent)"}}>0{i+1}</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",borderTop:"1px solid rgba(244,237,224,.2)",paddingTop:20}}>
              <div>
                <div className="mono uc" style={{fontSize:10,opacity:.6}}>{c.from}</div>
                <div className="serif" style={{fontSize:42,lineHeight:1, fontWeight:500}}>€225</div>
              </div>
              <button className="btn accent" onClick={()=>openSignup("hbfs")}>{c.enroll} <span className="arr">→</span></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Schedule({ lang, openSignup }) {
  const s = T.schedule[lang];
  const SRCS = ["assets/race.jpg","assets/swim-stroke.jpg","assets/dock-trio.jpg"];
  return (
    <section id="schedule" data-screen-label="03 Schedule" className="shell" style={{padding:"96px 28px"}}>
      <div style={{display:"flex",alignItems:"end",justifyContent:"space-between",marginBottom:48,gap:24,flexWrap:"wrap"}}>
        <div style={{maxWidth:700}}>
          <span className="mono uc" style={{fontSize:11, color:"var(--muted)"}}>§ 03 — {lang==="nl"?"Locaties":"Locations"}</span>
          <h2 className="display" style={{marginTop:10}}>{s.title}</h2>
          <p style={{marginTop:18, fontSize:18, lineHeight:1.5, color:"var(--muted)", textWrap:"pretty"}}>{s.lede}</p>
        </div>
        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
          <span className="pill"><span className="mono">⏱</span> {s.time}</span>
          <span className="pill solid"><span className="mono">↔</span> {s.switch}</span>
        </div>
      </div>
      <div className="grid-3">
        {DAYS.map((d, i)=>(
          <div key={d.key} className="day-card">
            <Photo src={SRCS[i]} tag={(lang==="nl"?d.day_nl:d.day_en).toUpperCase()} idx={`0${i+1} / 03`} coords={d.coords} depth={d.waterTemp} height={220}/>
            <div style={{padding:24, display:"flex", flexDirection:"column", gap:16, flex:1}}>
              <div>
                <div className="mono uc" style={{fontSize:11, color:"var(--accent)"}}>{lang==="nl"?d.start:d.start_en}</div>
                <h3 className="serif" style={{fontSize:34, lineHeight:1, margin:"6px 0 4px", fontWeight:500, letterSpacing:"-.02em"}}>{d.spot}</h3>
                <div style={{fontSize:13, color:"var(--muted)"}}>{d.sub}</div>
              </div>
              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, fontSize:12}}>
                <Spec label={lang==="nl"?"Afstand":"Distance"} value={d.distance}/>
                <Spec label={lang==="nl"?"Diepte":"Depth"} value={d.depth}/>
              </div>
              <p style={{fontSize:14, lineHeight:1.45, margin:0, color:"var(--ink)"}}>{lang==="nl"?d.note_nl:d.note_en}</p>
              <button className="btn ghost" style={{marginTop:"auto", justifyContent:"center"}} onClick={()=>openSignup(null, d.key)}>{s.pickDay} <span className="arr">→</span></button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Spec({label, value}){
  return (
    <div style={{borderTop:"1px solid var(--hairline)", paddingTop:6}}>
      <div className="mono uc" style={{fontSize:9, color:"var(--muted)"}}>{label}</div>
      <div style={{fontWeight:500}}>{value}</div>
    </div>
  );
}

function WhoFor({ lang }) {
  const w = T.whoFor[lang];
  return (
    <section data-screen-label="04 Voor wie" className="shell" style={{padding:"96px 28px"}}>
      <span className="mono uc" style={{fontSize:11, color:"var(--muted)"}}>§ 04 — {lang==="nl"?"Voor wie":"Who"}</span>
      <h2 className="display" style={{marginTop:10, marginBottom:48, maxWidth:900}}>{w.title}</h2>
      <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:1, background:"var(--hairline)", border:"1px solid var(--hairline)", borderRadius:14, overflow:"hidden"}} className="who-grid">
        {w.items.map((it,i)=>(
          <div key={i} style={{padding:32, background:"var(--paper)", display:"flex", flexDirection:"column", gap:14, minHeight:280}}>
            <div className="mono" style={{fontSize:11, color:"var(--accent)", fontWeight:600}}>{it.k}</div>
            <h3 className="serif" style={{fontSize:24, fontWeight:500, lineHeight:1.1, margin:0, letterSpacing:"-.02em"}}>{it.t}</h3>
            <p style={{fontSize:14, lineHeight:1.5, margin:0, color:"var(--muted)", textWrap:"pretty"}}>{it.b}</p>
          </div>
        ))}
      </div>
      <style>{`@media (max-width: 880px){ .who-grid{grid-template-columns:1fr 1fr !important;} } @media (max-width: 560px){ .who-grid{grid-template-columns:1fr !important;} }`}</style>
    </section>
  );
}

function WhatYouGet({ lang }) {
  const w = T.whatYouGet[lang];
  return (
    <section data-screen-label="05 Wat krijg je" style={{padding:"96px 0", background:"var(--ink)", color:"var(--paper)"}}>
      <div className="shell">
        <span className="mono uc" style={{fontSize:11, color:"var(--accent)"}}>§ 05 — {lang==="nl"?"Wat zit erin":"What you get"}</span>
        <h2 className="display" style={{marginTop:10, marginBottom:48, maxWidth:900, color:"var(--paper)"}}>{w.title}</h2>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:24}} className="grid-3">
          {w.items.map((it,i)=>(
            <div key={i} style={{padding:"24px 0", borderTop:"1px solid rgba(244,237,224,.2)", display:"flex", flexDirection:"column", gap:10}}>
              <div style={{display:"flex", alignItems:"baseline", justifyContent:"space-between"}}>
                <span className="mono" style={{fontSize:11, color:"var(--accent)"}}>{it.k}</span>
                <span className="mono uc" style={{fontSize:9, opacity:.5}}>INCL.</span>
              </div>
              <h3 className="serif" style={{fontSize:26, fontWeight:500, lineHeight:1.05, margin:0, letterSpacing:"-.02em", color:"var(--paper)"}}>{it.t}</h3>
              <p style={{fontSize:14, lineHeight:1.5, margin:0, opacity:.78, textWrap:"pretty"}}>{it.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coach({ lang }) {
  const c = T.coach[lang];
  return (
    <section id="coach" data-screen-label="06 Coach" className="shell" style={{padding:"96px 28px"}}>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1.2fr", gap:64, alignItems:"start"}} className="coach-grid">
        <div style={{position:"sticky", top:80}}>
          <Photo src="assets/coach-back.jpg" tag={c.label} idx="MICHIEL" coords="AMSTERDAM · 2016 — NU" height={620}/>
        </div>
        <div>
          <span className="mono uc" style={{fontSize:11, color:"var(--muted)"}}>§ 06 — {c.label}</span>
          <h2 className="display" style={{marginTop:10, marginBottom:32}}>{c.title}</h2>
          {c.bio.map((p,i)=>(
            <p key={i} style={{fontSize:18, lineHeight:1.55, margin:"0 0 18px", textWrap:"pretty"}}>{p}</p>
          ))}
          <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:0, marginTop:36, borderTop:"1px solid var(--hairline)"}} className="coach-stats">
            {c.stats.map((s,i)=>(
              <div key={i} style={{padding:"20px 0", borderRight: i<3 ? "1px solid var(--hairline)" : "none", paddingLeft: i>0 ? 20 : 0}}>
                <div className="serif" style={{fontSize:46, fontWeight:500, lineHeight:1, letterSpacing:"-.03em"}}>{s.v}</div>
                <div className="mono uc" style={{fontSize:10, color:"var(--muted)", marginTop:8}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 880px){ .coach-grid{grid-template-columns:1fr !important;} .coach-grid > div:first-child{position:static !important;} .coach-stats{grid-template-columns:1fr 1fr !important;} }`}</style>
    </section>
  );
}

function Testimonials({ lang }) {
  const items = T.testimonials[lang];
  return (
    <section data-screen-label="07 Testimonials" className="shell" style={{padding:"96px 28px"}}>
      <span className="mono uc" style={{fontSize:11, color:"var(--muted)"}}>§ 07 — {lang==="nl"?"Stemmen uit het water":"Voices from the water"}</span>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:24, marginTop:32}} className="grid-2">
        {items.map((t,i)=>(
          <div key={i} className="card" style={{display:"flex", flexDirection:"column", gap:20, minHeight:240}}>
            <div className="mono" style={{fontSize:24, color:"var(--accent)", lineHeight:1}}>"</div>
            <p className="serif" style={{fontSize:24, lineHeight:1.25, margin:0, fontWeight:400, letterSpacing:"-.01em", flex:1, textWrap:"pretty"}}>{t.q}</p>
            <div style={{display:"flex", alignItems:"center", gap:12, paddingTop:16, borderTop:"1px solid var(--hairline)"}}>
              <div style={{width:36,height:36,borderRadius:"50%",background:"var(--ink)",color:"var(--paper)",display:"grid",placeItems:"center",fontWeight:600,fontSize:14}}>{t.n[0]}</div>
              <div>
                <div style={{fontWeight:600, fontSize:14}}>{t.n}</div>
                <div className="mono uc" style={{fontSize:10, color:"var(--muted)"}}>{t.r}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ({ lang }) {
  const items = T.faq[lang];
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" data-screen-label="08 FAQ" className="shell" style={{padding:"96px 28px 120px"}}>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:64}} className="faq-grid">
        <div>
          <span className="mono uc" style={{fontSize:11, color:"var(--muted)"}}>§ 08 — FAQ</span>
          <h2 className="display" style={{marginTop:10}}>{lang==="nl"?"Vragen,\nantwoorden.":"Questions,\nanswers."}</h2>
        </div>
        <div>
          {items.map((it,i)=>(
            <div key={i} style={{borderTop:"1px solid var(--hairline)", borderBottom: i===items.length-1?"1px solid var(--hairline)":"none"}}>
              <button onClick={()=>setOpen(open===i?-1:i)}
                style={{width:"100%", textAlign:"left", background:"none", border:0, padding:"22px 0", display:"flex", alignItems:"center", justifyContent:"space-between", cursor:"pointer", color:"var(--ink)", font:"inherit"}}>
                <span style={{fontSize:20, fontWeight:500, letterSpacing:"-.01em"}}>{it.q}</span>
                <span className="mono" style={{fontSize:18, color:"var(--accent)", transition:"transform .2s ease", transform: open===i?"rotate(45deg)":"none"}}>+</span>
              </button>
              {open===i && (
                <div style={{paddingBottom:22, fontSize:16, lineHeight:1.6, color:"var(--muted)", maxWidth:680, textWrap:"pretty"}}>{it.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 880px){ .faq-grid{grid-template-columns:1fr !important;} }`}</style>
    </section>
  );
}

function Footer({ lang, openSignup }) {
  const f = T.footer[lang];
  const c = T.cta[lang];
  return (
    <footer data-screen-label="09 Footer" style={{background:"var(--ink)", color:"var(--paper)", padding:"80px 0 32px"}}>
      <div className="shell">
        <div style={{display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:48, paddingBottom:48, borderBottom:"1px solid rgba(244,237,224,.18)"}} className="grid-2">
          <h2 className="display" style={{color:"var(--paper)", fontSize:"clamp(40px,5vw,84px)"}}>{lang==="nl"?"Klaar om buiten te zwemmen?":"Ready to swim outside?"}</h2>
          <div style={{display:"flex", flexDirection:"column", gap:16, alignItems:"flex-start", justifyContent:"end"}}>
            <button className="btn accent" onClick={()=>openSignup()}>{c.signup} <span className="arr">→</span></button>
            <a href="mailto:hello@topswim.nl" className="underline-link" style={{color:"var(--paper)", fontSize:14}}>hello@topswim.nl</a>
            <a href="https://wa.me/31600000000" className="underline-link" style={{color:"var(--paper)", fontSize:14}}>WhatsApp · +31 6 00 000 000</a>
          </div>
        </div>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:24, opacity:.6, fontSize:12, flexWrap:"wrap", gap:12}} className="mono uc">
          <span>{f.made}</span>
          <span>{f.tag}</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Marquee, Courses, Schedule, WhoFor, WhatYouGet, Coach, Testimonials, FAQ, Footer });
