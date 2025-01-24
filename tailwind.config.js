import motionPlugin from "tailwindcss-motion";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        typewriter: "typewriter 5s steps(5) infinite",
      },
    },
  },
  plugins: [motionPlugin, require('@tailwindcss/aspect-ratio'),],
};
