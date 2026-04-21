import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        panel: "rgba(21, 24, 29, 0.76)",
        neon: {
          green: "#78c8a3",
          blue: "#4da3ff",
          orange: "#f6a347",
          red: "#ef4444"
        }
      },
      boxShadow: {
        glow: "0 0 25px rgba(120, 200, 163, 0.25)"
      },
      backdropBlur: {
        xs: "2px"
      }
    }
  },
  plugins: []
} satisfies Config;
