/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#1976D2',
        'ods-primary': '#232323',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        tertiary: '#9A9A9A',
        caption: '#B3B3B3',
        black: '#000000',
        white: '#FFFFFF',
        'off-white': '#F8F8F8',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        gray: {
          50: '#FCFCFC',
          100: '#F8F8F8',
          200: '#E2E2E2',
          300: '#CDCDCD',
          400: '#B3B3B3',
          500: '#9A9A9A',
          600: '#787878',
          700: '#676767',
          800: '#454545',
          900: '#232323',
        },
        state: {
          danger: '#DD0027',
          warning: 'FF8A00',
          success: '#00DD31',
          info: '#0066FE',
        },
        borderActive: '#232323',
        borderPrimary: '#E2E2E2',
        borderSecondary: '#B3B3B3',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      fontSize: {
        xxxl: '1.5em',
        xxl: '1.38em',
        xl: '1.25em',
        lg: '1.13em',
        md: '1em',
        sm: '0.88em',
        xs: '0.75em',
        xxs: '0.69em',
        h1: [
          '1.5em',
          {
            fontWeight: 700,
            lineHeight: '2.38em',
          },
        ],
        h2: [
          '1.38em',
          {
            fontWeight: 700,
            lineHeight: '2.13em',
          },
        ],
        h3: [
          '1.25em',
          {
            fontWeight: 700,
            lineHeight: '2em',
          },
        ],
        h4: [
          '1.13em',
          {
            fontWeight: 400,
            lineHeight: '1.75em',
          },
        ],
        title1: [
          '1em',
          {
            fontWeight: 700,
            lineHeight: '1.5em',
          },
        ],
        title2: [
          '1em',
          {
            fontWeight: 400,
            lineHeight: '1.5em',
          },
        ],
        title3: [
          '0.88em',
          {
            fontWeight: 700,
            lineHeight: '1.25em',
          },
        ],
        title4: [
          '0.88em',
          {
            fontWeight: 400,
            lineHeight: '1.25em',
          },
        ],
        body1: [
          '0.75em',
          {
            fontWeight: 700,
            lineHeight: '1.13em',
          },
        ],
        body2: [
          '0.75em',
          {
            fontWeight: 400,
            lineHeight: '1.13em',
          },
        ],
        body3: [
          '0.69em',
          {
            fontWeight: 400,
            lineHeight: '1em',
          },
        ],
      },
      fontWeight: {
        bold: 700,
        regular: 400,
      },
      spacing: {
        xxxl: '3em',
        xxl: '2em',
        xl: '1.5em',
        lg: '1.25em',
        md: '1em',
        sm: '0.75em',
        xs: '0.5em',
        xxs: '0.25em',
        xxxs: '0.13em',
      },
      width: {
        mobile: '20.5em',
        desktop: '80em',
      },
      screens: {
        sm: '768px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
