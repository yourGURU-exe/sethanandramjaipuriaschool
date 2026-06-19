import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0B1B3D",
        gold: "#D4AF37",
        alabaster: "#F8F9FA",
        linen: "#FFFFFF",
        inkwell: "#050C1A"
      },
      fontFamily: {
        heading: ["Cormorant Garamond", "Cinzel", "serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
} satisfies Config;
