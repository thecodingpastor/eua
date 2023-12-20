import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFF",
      black: "#000",
      yellow: {
        500: "#FFC107",
      },
      gray: {
        400: "#8F8F8F",
      },
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      Georgia: ["Georgia", "sans-serif"],
      menu: ["Manrope", "sans-serif"],
      libre: ["'Libre Baskerville'", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
