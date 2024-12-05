/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Host Grotesk', 'Inter', 'sans-serif'], // Mengubah font default
      },
      colors: {
        'netral': '#94765f'
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["autumn"], // Pilih tema monokrom
  },
};
