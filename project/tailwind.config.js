/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        paper: "var(--paper)",
        "paper-2": "var(--paper-2)",
        line: "var(--line)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        water: "var(--water)",
        muted: "var(--muted)",
        hairline: "var(--hairline)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Fraunces", "ui-serif", "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      keyframes: {
        "marquee-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        wave: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-2px)" },
        },
        blink: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(255,255,255,0.7)" },
          "50%": { boxShadow: "0 0 0 6px rgba(255,255,255,0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { transform: "translateY(40px)", opacity: "0.5" },
          to: { transform: "none", opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee-scroll 50s linear infinite",
        wave: "wave 14s linear infinite",
        blink: "blink 1.6s ease-in-out infinite",
        "modal-back": "fade-in 0.25s ease",
        modal: "slide-up 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
