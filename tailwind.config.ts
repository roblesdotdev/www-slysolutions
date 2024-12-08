import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans Variable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: 'hsl(var(--black))',
        canvas: {
          primary: 'hsl(var(--canvas-primary))',
          secondary: 'hsl(var(--canvas-secondary))',
        },
        fg: {
          DEFAULT: 'hsl(var(--fg-default) / <alpha-value>)',
          muted: 'hsl(var(--fg-muted) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent-default) / <alpha-value>)',
          variant: 'hsl(var(--accent-variant) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
