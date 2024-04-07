import { fontlogo } from "@/_components/fonts/fonts";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      logo: ['var(--font-logo-01)'],
      logoalt: ['var(--font-logo-02)'],
      heading: ['var(--font-heading)'],
      body: ['var(--font-body)'],
    },
  },
  plugins: [],
};
export default config;
