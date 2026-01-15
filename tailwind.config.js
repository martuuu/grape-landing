import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Base colors mapped to COMMIT palette
        primary: '#138bae', // commit default
        secondary: '#1ba1c9', // commit light
        accent: '#26bce9', // commit lighter
        'bg-light': '#ade4f7', // commit pale
        default: '#052832', // commit darkest (for text)
        muted: '#1283a5', // commit dark (for muted text)
        
        // COMMIT Brand Colors - New Cyan/Teal Palette
        'commit': {
          darkest: '#052832',
          darker: '#117999',
          dark: '#1283a5',
          DEFAULT: '#138bae',
          light: '#1ba1c9',
          lighter: '#26bce9',
          lightest: '#59cbee',
          pale: '#ade4f7',
        },
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },

      animation: {
        fade: 'fadeInUp 1s both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      
      // COMMIT Gradient Utilities
      backgroundImage: {
        'gradient-commit': 'linear-gradient(to right, #138bae, #26bce9)',
        'gradient-commit-dark': 'linear-gradient(to right, #052832, #117999)',
        'gradient-commit-light': 'linear-gradient(to right, #59cbee, #ade4f7)',
      },
    },
  },
  plugins: [
    typographyPlugin,
    tailwindcssAnimate,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
