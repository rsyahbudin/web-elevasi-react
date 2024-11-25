/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Host Grotesk', 'Inter', 'sans-serif'], // Mengubah font default
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["nord"], // Pilih tema monokrom
  },
};
