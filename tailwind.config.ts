import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        hero: "clamp(2.2rem, 4vw, 3.2rem)",
      },
    },
  },
  plugins: [],
};

export default config;
