import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1a1a1a",
        ivory: "#f5f0e8",
        terracotta: "#c4622d",
        "terracotta-dk": "#a44e22",
        border: "#e2ddd6",
        muted: "#6b6560",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["72px", { lineHeight: "1.05", letterSpacing: "0.02em" }],
        "h1": ["56px", { lineHeight: "1.1" }],
        "h2": ["40px", { lineHeight: "1.15" }],
        "h3": ["28px", { lineHeight: "1.2" }],
        "lead": ["20px", { lineHeight: "1.6" }],
        "body": ["16px", { lineHeight: "1.7" }],
        "sm": ["14px", { lineHeight: "1.5" }],
        "label": ["11px", { lineHeight: "1.4", letterSpacing: "0.12em" }],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      borderRadius: {
        // Global override: no rounded corners on this site
        DEFAULT: "0px",
        none: "0px",
      },
      padding: {
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-top': 'env(safe-area-inset-top)',
      },
      animation: {
        ticker: "ticker 28s linear infinite",
      },
      keyframes: {
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
