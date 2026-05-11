// Multi-step signup flow

function Signup({ lang, initialSerie, initialDay, onClose }) {
  const s = T.signup[lang];
  const cc = T.courses[lang];
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({
    serie: initialSerie || null,
    day: initialDay || null,
    name:"", email:"", phone:"", level: s.levels[0], goals:"",
    consent: false,
  });
  const [done, setDone] = React.useState(false);

  const update = (k,v) => setData(d => ({...d, [k]:v}));
  const dayObj = data.day ? DAYS.find(d=>d.key===data.day) : null;
  const price = data.serie === "hbfs" ? 225 : 185;
  const serieName = data.serie==="hbfs" ? cc.hbfsName : cc.basisName;

  const canNext = (() => {
    if (step===0) return !!data.serie;
    if (step===1) return !!data.day;
    if (step===2) return data.name && /\S+@\S+\.\S+/.test(data.email);
    return data.consent;
  })();

  const onSubmit = (e) => {
    e?.preventDefault();
    if (step < 3) { if (canNext) setStep(step+1); return; }
    if (canNext) setDone(true);
  };

  const onBack = () => setStep(Math.max(0, step-1));

  // close on esc
  React.useEffect(()=>{
    const k = (e)=>{ if(e.key==="Escape") onClose(); };
    window.addEventListener("keydown", k);
    return ()=>window.removeEventListener("keydown", k);
  },[onClose]);

  if (done) {
    return (
      <div className="modal-back" onClick={onClose}>
        <div className="modal" onClick={e=>e.stopPropagation()} style={{padding:48, alignItems:"center", textAlign:"center"}}>
          <div style={{width:64,height:64,borderRadius:"50%",background:"var(--accent)",display:"grid",placeItems:"center",margin:"0 auto 24px"}}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5 9-11" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h2 className="display" style={{fontSize:48, marginBottom:16}}>{s.done}</h2>
          <p style={{fontSize:17, lineHeight:1.5, color:"var(--muted)", maxWidth:480, margin:"0 auto 32px", textWrap:"pretty"}}>{s.doneSub}</p>
          <button className="btn" onClick={onClose}>{s.doneClose}</button>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-back" onClick={onClose}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        {/* header */}
        <div style={{padding:"22px 28px 18px", borderBottom:"1px solid var(--hairline)", display:"flex", alignItems:"center", justifyContent:"space-between", gap:16}}>
          <div style={{display:"flex", alignItems:"center", gap:16, flex:1, minWidth:0}}>
            <span className="mono uc" style={{fontSize:11, color:"var(--muted)", flex:"none"}}>{s.step} {step+1} / {s.steps.length}</span>
            <div style={{flex:1, height:3, background:"var(--hairline)", borderRadius:2, position:"relative", overflow:"hidden"}}>
              <div style={{position:"absolute", inset:0, width:`${((step+1)/s.steps.length)*100}%`, background:"var(--accent)", transition:"width .3s ease"}}/>
            </div>
          </div>
          <button onClick={onClose} aria-label={s.close} style={{background:"none",border:0,cursor:"pointer",fontSize:18,padding:8,color:"var(--ink)"}}>✕</button>
        </div>

        <form onSubmit={onSubmit} style={{padding:"32px 28px 28px", display:"flex", flexDirection:"column", gap:24, overflowY:"auto", flex:1}}>
          <div>
            <h3 className="display" style={{fontSize:36, marginBottom:6}}>{s.steps[step].t}</h3>
            <p style={{margin:0, color:"var(--muted)", fontSize:15}}>{s.steps[step].s}</p>
          </div>

          {/* STEP 0 — series */}
          {step===0 && (
            <div style={{display:"grid", gap:12}}>
              <button type="button" className={"opt"+(data.serie==="basis"?" on":"")} onClick={()=>update("serie","basis")}>
                <span className="opt-bullet"/>
                <span style={{flex:1}}>
                  <span className="mono uc" style={{fontSize:10, color:"var(--accent)"}}>{cc.basisTag}</span>
                  <span style={{display:"block", fontSize:22, fontWeight:600, marginTop:4}}>{cc.basisName} — €185</span>
                  <span style={{display:"block", fontSize:13, color:"var(--muted)", marginTop:4, textWrap:"pretty"}}>{cc.basisLede}</span>
                </span>
              </button>
              <button type="button" className={"opt"+(data.serie==="hbfs"?" on":"")} onClick={()=>update("serie","hbfs")}>
                <span className="opt-bullet"/>
                <span style={{flex:1}}>
                  <span className="mono uc" style={{fontSize:10, color:"var(--accent)"}}>{cc.hbfsTag}</span>
                  <span style={{display:"block", fontSize:22, fontWeight:600, marginTop:4}}>{cc.hbfsName} — €225</span>
                  <span style={{display:"block", fontSize:13, color:"var(--muted)", marginTop:4, textWrap:"pretty"}}>{cc.hbfsLede}</span>
                </span>
              </button>
            </div>
          )}

          {/* STEP 1 — day */}
          {step===1 && (
            <div style={{display:"grid", gap:10}}>
              {DAYS.map(d=>(
                <button key={d.key} type="button" className={"opt"+(data.day===d.key?" on":"")} onClick={()=>update("day", d.key)}>
                  <span className="opt-bullet"/>
                  <span style={{flex:1}}>
                    <span className="mono uc" style={{fontSize:10, color:"var(--accent)"}}>{(lang==="nl"?d.day_nl:d.day_en).toUpperCase()} · 19:00</span>
                    <span style={{display:"block", fontSize:20, fontWeight:600, marginTop:4}}>{d.spot}</span>
                    <span style={{display:"block", fontSize:13, color:"var(--muted)", marginTop:2}}>{d.sub} · {lang==="nl"?d.start:d.start_en}</span>
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* STEP 2 — details */}
          {step===2 && (
            <div style={{display:"grid", gap:18}}>
              <div>
                <label className="fl">{s.nameLbl}</label>
                <input className="input" required value={data.name} onChange={e=>update("name", e.target.value)} placeholder={lang==="nl"?"Voor- en achternaam":"First and last name"}/>
              </div>
              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:18}} className="signup-grid-2">
                <div>
                  <label className="fl">{s.emailLbl}</label>
                  <input type="email" className="input" required value={data.email} onChange={e=>update("email", e.target.value)} placeholder="naam@email.nl"/>
                </div>
                <div>
                  <label className="fl">{s.phoneLbl}</label>
                  <input className="input" value={data.phone} onChange={e=>update("phone", e.target.value)} placeholder="+31 6 …"/>
                </div>
              </div>
              <div>
                <label className="fl">{s.levelLbl}</label>
                <div style={{display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap:8, marginTop:8}} className="signup-levels">
                  {s.levels.map(l=>(
                    <button key={l} type="button"
                      onClick={()=>update("level", l)}
                      style={{padding:"10px 14px", borderRadius:999, border:"1px solid var(--hairline)", background: data.level===l?"var(--ink)":"transparent", color: data.level===l?"var(--paper)":"var(--ink)", cursor:"pointer", font:"500 13px/1 'Inter',sans-serif"}}>{l}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="fl">{s.goalsLbl}</label>
                <textarea className="input" rows={2} value={data.goals} onChange={e=>update("goals", e.target.value)} placeholder={s.goalsPh} style={{resize:"none", paddingTop:6}}/>
              </div>
            </div>
          )}

          {/* STEP 3 — review */}
          {step===3 && (
            <div className="card" style={{display:"flex", flexDirection:"column", gap:14}}>
              <Row k={s.reviewSerie} v={`${serieName} — €${price}`}/>
              {dayObj && <Row k={s.reviewDay} v={lang==="nl"?dayObj.day_nl:dayObj.day_en}/>}
              {dayObj && <Row k={s.reviewLoc} v={`${dayObj.spot} · ${dayObj.sub}`}/>}
              {dayObj && <Row k={s.reviewStart} v={lang==="nl"?dayObj.start:dayObj.start_en}/>}
              <Row k={s.nameLbl} v={data.name}/>
              <Row k={s.emailLbl} v={data.email}/>
              <div style={{display:"flex", justifyContent:"space-between", paddingTop:14, borderTop:"1px solid var(--hairline)"}}>
                <span className="mono uc" style={{fontSize:11, color:"var(--muted)"}}>{s.total}</span>
                <span className="serif" style={{fontSize:32, fontWeight:500, lineHeight:1, letterSpacing:"-.02em"}}>€{price}</span>
              </div>
              <label style={{display:"flex", gap:10, alignItems:"flex-start", marginTop:8, cursor:"pointer"}}>
                <input type="checkbox" checked={data.consent} onChange={e=>update("consent", e.target.checked)} style={{marginTop:3, accentColor:"var(--accent)", width:16, height:16}}/>
                <span style={{fontSize:13, color:"var(--muted)", lineHeight:1.4}}>{s.consent}</span>
              </label>
            </div>
          )}
        </form>

        {/* footer actions */}
        <div style={{padding:"18px 28px", borderTop:"1px solid var(--hairline)", display:"flex", justifyContent:"space-between", alignItems:"center", gap:12}}>
          <button onClick={onBack} disabled={step===0} className="btn ghost"
            style={{opacity: step===0 ? .35 : 1, cursor: step===0?"default":"pointer"}}>← {s.back}</button>
          <button onClick={onSubmit} disabled={!canNext} className="btn accent"
            style={{opacity: canNext?1:.4, cursor: canNext?"pointer":"not-allowed"}}>
            {step<3 ? s.next : s.submit} <span className="arr">→</span>
          </button>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px){
          .signup-grid-2{grid-template-columns:1fr !important;}
          .signup-levels{grid-template-columns:1fr !important;}
        }
      `}</style>
    </div>
  );
}

function Row({k, v}){
  return (
    <div style={{display:"flex", justifyContent:"space-between", gap:16, fontSize:14}}>
      <span className="mono uc" style={{fontSize:11, color:"var(--muted)"}}>{k}</span>
      <span style={{fontWeight:500, textAlign:"right"}}>{v || "—"}</span>
    </div>
  );
}

window.Signup = Signup;
