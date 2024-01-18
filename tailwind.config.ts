import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
       'xs': '250px',
       'xp': '350px',
       'sm': '640px',
       'md': '780px',
       'lg': '1024px',
       'xl': '1280px',
       '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      zIndex: {
        '100': '100',
        '80': '80',
      }
    },
    colors: {
      BgTop: '#f2828d',
      gold: '#ad9046',
      blurMenu: '#444444',
    }
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
export default config
