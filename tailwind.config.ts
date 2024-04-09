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
  },
  plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dimgray: {
          "100": "#666",
          "200": "#616161",
        },
        black: "#000",
        floralwhite: "#fffaed",
        salmon: "#ff6c6c",
        gray: {
          "100": "#4f2a2a",
          "200": "#272121",
          "300": "#252121",
          "400": "#151414",
          "500": "#0e0e0e",
          "600": "#050505",
          "700": "rgba(0, 0, 0, 0.6)",
          "800": "rgba(255, 255, 255, 0)",
          "900": "rgba(252, 253, 255, 0.64)",
          "1000": "rgba(255, 255, 255, 0.32)",
          "1100": "rgba(255, 255, 255, 0.54)",
        },
        whitesmoke: "#f6f6f6",
        oldlace: "#fff8eb",
        mediumslateblue: "#5271ff",
        mintcream: "#f8fcf7",
        cornsilk: "#fcf9dd",
        lemonchiffon: "#fffdcf",
        mediumblue: "#340cd4",
        lightskyblue: "#a8cbff",
        darkslategray: {
          "100": "#254151",
          "200": "#353535",
          "300": "#333",
        },
        firebrick: "#c92e2e",
        gainsboro: "#d9d9d9",
        silver: "#afb8bc",
        orangered: "#fa6400",
        cornflowerblue: {
          "100": "#5993ea",
          "200": "#2ea3f2",
          "300": "rgba(89, 147, 234, 0)",
        },
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        "playfair-display": "'Playfair Display'",
        "open-sans": "'Open Sans'",
        "inria-serif": "'Inria Serif'",
        roboto: "Roboto",
      },
      borderRadius: {
        mini: "15px",
        xl: "20px",
        "sm-1": "13.1px",
        "base-7": "15.7px",
        "base-8": "15.8px",
        "mid-6": "17.6px",
        "base-5": "15.5px",
        "sm-7": "13.7px",
        "56xl": "75px",
        "8xs": "5px",
      },
    },
    fontSize: {
      "2xl": "21px",
      "5xl": "24px",
      "6xl-5": "25.5px",
      "lgi-1": "19.1px",
      "36xl": "55px",
      "sm-1": "13.1px",
      "base-7": "15.7px",
      "6xl-2": "25.2px",
      "base-8": "15.8px",
      "xl-5": "20.5px",
      "base-5": "15.5px",
      "xl-1": "20.1px",
      "sm-9": "13.9px",
      "21xl-4": "40.4px",
      sm: "14px",
      "13xl-9": "32.9px",
      "2xl-9": "21.9px",
      base: "16px",
      lg: "18px",
      smi: "13px",
      "7xl": "26px",
      "3xs": "10px",
      xs: "12px",
      mini: "15px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
