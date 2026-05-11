import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#003E6B",
          deep: "#002a4a",
        },
        "navy-deep": "#002a4a",
        orange: {
          DEFAULT: "#F08C2B",
          hover: "#D6731A",
          soft: "rgba(240,140,43,.14)",
        },
        "orange-hover": "#D6731A",
        "orange-soft": "rgba(240,140,43,.14)",
        charcoal: {
          DEFAULT: "#1F2937",
          soft: "#4B5563",
        },
        "charcoal-soft": "#4B5563",
        offwhite: "#F7F8FA",
        border: "#E5E7EB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "12px",
      },
      keyframes: {
        ctaBounce: {
          "0%,100%": {
            transform: "translateY(0) scale(1)",
            boxShadow: "0 4px 14px rgba(240,140,43,.32)",
          },
          "50%": {
            transform: "translateY(-7px) scale(1.04)",
            boxShadow: "0 16px 32px rgba(240,140,43,.55)",
          },
        },
        pulseDot: {
          "0%,100%": { boxShadow: "0 0 0 4px rgba(232,118,44,.25)" },
          "50%": { boxShadow: "0 0 0 8px rgba(232,118,44,.1)" },
        },
        pulseOrange: {
          "0%,100%": { boxShadow: "0 0 0 4px rgba(240,140,43,.28)" },
          "50%": { boxShadow: "0 0 0 8px rgba(240,140,43,.1)" },
        },
        scrollLeft: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "cta-bounce": "ctaBounce 1.5s ease-in-out infinite",
        "pulse-dot": "pulseDot 2s infinite",
        "pulse-orange": "pulseOrange 2s infinite",
        "scroll-left": "scrollLeft 48s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
