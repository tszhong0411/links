import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        default: ['var(--font-inter)', ...fontFamily.sans]
      }
    }
  },
  plugins: []
} satisfies Config
