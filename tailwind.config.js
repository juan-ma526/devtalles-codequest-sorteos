/** @type {import('tailwindcss').Config} */
module.exports = {
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
    extend:{
      colors:{
        'devtallesColorPlus':'#130c25',
        'devtallesColor':'#1d1238'
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#13B8A6",

          "secondary": "#a955f7",

          "accent": "#00da00",

          "neutral": "#070707",

          "base-100": "#fcffff",

          "info": "#1c99ff",

          "success": "#009c64",

          "warning": "#fcda00",

          "error": "#ff839b",
        },
      },
    ],
  },
};
