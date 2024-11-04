/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '400px',
        sm: '600px',
        md: '900px',
        lg: '1100px',
        xl: '1440px',
      },
      colors: {
        'background': "#EBE6E6",
        'brand-700': "#0300b5",
        'brand-600': "#0d09e8",
        'brand-500': "#201CFC",
        'brand-400': "#5193fc",
        'brand-300': "#68a1fc",
        'brand-200': "#e3ecfa",
        'text-500': '#1A202C',
        'text-400': "#232a38",
        "text-300": "#293140",
        "text-200": "#374052",
        'light-600': "#ebe8e8",
        'light-500': '#FAF7F7',
        'light-400': '#FFFFFF',
        'yellow-500': "#D69E2E"
      },
      fontFamily: {
        body: "'Poppins',sans-serif",
        mono: ['monospace']

      },
      fontSize: {
        "4xl": "45px",
        "3xl": "40px",
        "2xl": "35px",
        "xl": "30px",
        "lg": "25px",
        "md": "22px",
        "rg": "20px",
        "sm": "18px",
        "xs": "16px",
        "2xs": "14px",
        "3xs": "12px"
      },
      fontWeight: {
        'eb': 700,
        'b': 600,
        'sb': 500,
        'mb': 400,
        'r': 300
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  },
  plugins: [],
}