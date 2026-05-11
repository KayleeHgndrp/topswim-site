// Editorial photo placeholders with monospace metadata labels

function Photo({ tag, idx, coords, depth, height = 360, scene = "water", style, src, noScrim = false }) {
  // scene: water | shore | underwater | swimmer | gear
  const SCENES = {
    water: {
      g: "linear-gradient(180deg, #06152b 0%, #0a1f3d 50%, #1a4475 100%)",
      o: "radial-gradient(140% 100% at 80% 100%, rgba(255,255,255,.08), transparent 55%)"
    },
    shore: {
      g: "linear-gradient(180deg, #f5f3ee 0%, #d8c8a4 60%, #6b6047 100%)",
      o: "radial-gradient(120% 80% at 20% 20%, rgba(255,255,255,.18), transparent 60%)"
    },
    underwater: {
      g: "linear-gradient(180deg, #06121e 0%, #0a2c4a 50%, #1a5878 100%)",
      o: "radial-gradient(130% 100% at 50% 0%, rgba(255,255,255,.22), transparent 55%)"
    },
    swimmer: {
      g: "linear-gradient(180deg, #0a1f3d 0%, #13345e 50%, #2a5a8a 100%)",
      o: "radial-gradient(80% 60% at 70% 50%, rgba(6,15,30,.6), transparent 70%)"
    },
    gear: {
      g: "linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 60%, #404040 100%)",
      o: "radial-gradient(60% 60% at 30% 30%, rgba(255,91,31,.25), transparent 60%)"
    },
    dawn: {
      g: "linear-gradient(180deg, #ff8c4a 0%, #c2603a 35%, #1c4f6e 100%)",
      o: "radial-gradient(60% 40% at 70% 30%, rgba(255,216,77,.55), transparent 70%)"
    }
  };
  const s = SCENES[scene] || SCENES.water;
  return (
    <div className="photo" style={{ height, ...style }}>
      {src ?
      <>
          <img src={src} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          {!noScrim && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(6,15,30,.65) 0%, rgba(6,15,30,.4) 40%, rgba(6,15,30,.85) 100%)" }} />}
        </> :

      <>
          <div className="ph-grad" style={{ background: `${s.o}, ${s.g}` }} />
          <div className="ph-grain" />
          {scene !== "gear" && scene !== "shore" && <div className="ph-water" />}
        </>
      }
      {/* abstract subject */}
      {src && scene === "skip" ? null : null}
      {scene === "swimmer" && !src &&
      <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .55 }}>
          <defs>
            <linearGradient id="armG" x1="0" x2="1">
              <stop offset="0" stopColor="#f4ede0" stopOpacity="0" />
              <stop offset=".5" stopColor="#f4ede0" stopOpacity=".7" />
              <stop offset="1" stopColor="#f4ede0" stopOpacity="0" />
            </linearGradient>
          </defs>
          <ellipse cx="220" cy="170" rx="120" ry="14" fill="url(#armG)" />
          <path d="M120 165 Q200 120 280 165" stroke="#f4ede0" strokeWidth="2.5" fill="none" opacity=".7" />
          <circle cx="195" cy="155" r="10" fill="#f4ede0" opacity=".85" />
          <path d="M205 155 q40 -20 60 -8" stroke="#f4ede0" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M170 158 Q150 130 130 100" stroke="#f4ede0" strokeWidth="3" strokeLinecap="round" fill="none" opacity=".8" />
        </svg>
      }
      {scene === "underwater" &&
      <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", opacity: .4, height: "100px" }}>
          {[...Array(20)].map((_, i) =>
        <circle key={i} cx={20 + i * 22} cy={40 + i % 4 * 45} r={2 + i % 3} fill="#f4ede0" opacity=".7" />
        )}
          <path d="M0 200 Q100 180 200 200 T 400 200" stroke="#f4ede0" strokeWidth="1" fill="none" opacity=".4" />
          <path d="M0 220 Q100 200 200 220 T 400 220" stroke="#f4ede0" strokeWidth="1" fill="none" opacity=".3" />
        </svg>
      }
      {scene === "shore" &&
      <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <rect y="160" width="400" height="80" fill="#1c4f6e" opacity=".6" />
          <circle cx="50" cy="50" r="22" fill="#ffd84d" opacity=".7" />
          <path d="M0 165 Q200 150 400 170 L400 240 L0 240 Z" fill="#0b1c2c" opacity=".5" />
          {[...Array(5)].map((_, i) =>
        <circle key={i} cx={80 + i * 70} cy={155} r="6" fill="#ff5b1f" />
        )}
        </svg>
      }
      {scene === "gear" &&
      <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .85 }}>
          <circle cx="120" cy="120" r="42" fill="none" stroke="#f4ede0" strokeWidth="3" />
          <circle cx="200" cy="120" r="42" fill="none" stroke="#f4ede0" strokeWidth="3" />
          <path d="M162 120 L158 120" stroke="#f4ede0" strokeWidth="6" />
          <path d="M82 120 L62 120 M238 120 L258 120" stroke="#f4ede0" strokeWidth="3" />
          <circle cx="320" cy="120" r="38" fill="#ff5b1f" />
        </svg>
      }
      {scene === "dawn" &&
      <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <circle cx="280" cy="100" r="48" fill="#ffd84d" opacity=".9" />
          <path d="M0 170 Q200 145 400 180 L400 240 L0 240 Z" fill="#0b1c2c" opacity=".55" />
          <path d="M0 190 Q200 175 400 200 L400 240 L0 240 Z" fill="#0b1c2c" opacity=".4" />
        </svg>
      }
      {tag &&
      <div className="ph-tag" style={{ top: 14, left: 14 }}>
          <span className="blink"></span>
          <span>{tag}</span>
        </div>
      }
      {idx &&
      <div className="ph-tag" style={{ top: 14, right: 14 }}>
          <span>{idx}</span>
        </div>
      }
      {(coords || depth) &&
      <div className="ph-tag" style={{ bottom: 14, left: 14, fontSize: 9 }}>
          {coords && <span>{coords}</span>}
          {coords && depth && <span style={{ opacity: .5 }}>·</span>}
          {depth && <span>{depth}</span>}
        </div>
      }
    </div>);

}

window.Photo = Photo;