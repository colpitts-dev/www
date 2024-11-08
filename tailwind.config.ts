import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "#1b1b1c",
        light: "#f2f4f7",
        surface: "#fff",
        "surface-dark": "#212324",
        stroke: "#eaecf0",
        "stroke-dark": "#363738",
      },
    },
  },
  plugins: [],
};
export default config;
