import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
      },

      gridTemplateColumns: {
        app: 'min-content max-content',
      },

      maxWidth: {
        app: '1600px',
        'product-description': '280px',
      },

      maxHeight: {
        app: '860px',
      },
    },
  },
  plugins: [],
}
export default config
