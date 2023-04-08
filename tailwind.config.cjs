/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        default: ['var(--font-sora)', 'var(--font-noto-sans-tc)'],
      },
    },
  },
  plugins: [],
}
