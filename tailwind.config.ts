import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xsm: "480px",
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
      '3xl': '1640px',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
        inco: ['var(--font-inco)'],
        lora: ['var(--font-lora)'],
        popins: ['var(--font-popins)'],
      },
      colors: {
        "brown": "#8B4513",
        "text1": "white",
        "text2": "black",
        "secoundary": "#757575",
        "bg-gray": "#F2F2F2"
      },
      fontWeight: {
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
        1000: "1000",
      },
      fontSize: {
        8: "8px",
        9: "9px",
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        24: "24px",
        28: "28px",
        32: "32px",
        36: "36px",
        38: "38px",
        42: "42px",
        48: "48px",
        52: "52px",
        64: "64px",
        76: "76px",
      },
      transitionDuration: {
        1200: "1200ms",
        2000: "2000ms"
      },
      transitionProperty: {
        'height': "height",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          lg: '24px',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
