/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#020617',
        },
        sky: {
          500: '#0ea5e9',
          600: '#0284c7',
        }
      },
    },
  },
  plugins: [],
}
