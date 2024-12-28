import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xxxs: ["8px", { lineHeight: "1.3" }],
      xxs: ["9px", { lineHeight: "1.3" }],
      xs: ["10px", { lineHeight: "1.3" }],
      sm: ["12px", { lineHeight: "1.3" }],
      base: ["14px", { lineHeight: "1.2" }],
      lg: ["16px", { lineHeight: "1.2" }],
      xl: ["18px", { lineHeight: "1.2" }],
      "2xl": ["20px", { lineHeight: "1.1" }],
      "3xl": ["24px", { lineHeight: "1.1" }],
      "4xl": ["28px", { lineHeight: "1.1" }],
      "5xl": ["32px", { lineHeight: "1.1" }],
      "6xl": ["36px", { lineHeight: "1.1" }],
      "7xl": ["40px", { lineHeight: "1" }],
      "8xl": ["48px", { lineHeight: "1" }],
      "9xl": ["56px", { lineHeight: "1" }],
    },
    extend: {
      colors: {
        accent: "#102C57",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
