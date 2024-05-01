import { addVariablesForColors } from "./src/lib/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      colors: {
        "black-rgba": "rgba(0, 0, 0, 0.7)",
        grey: "#F8F8FF",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      screens: {
        tablet: "800px",
        desktop: "1100px",
      },
      spacing: {
        desktop: "450px",
      },
    },
  },
  plugins: [addVariablesForColors, require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2f89ff",
          neutral: "#F8F8FF",
          secondary: "#273239",
        },
      },
    ],
  },
};
