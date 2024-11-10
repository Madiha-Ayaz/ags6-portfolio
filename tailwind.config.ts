import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'circle-image': "url('/images (1).jpeg')",
      },
      animation: {
        bounceCustom: 'bounce 2s ease-in-out infinite',
        typing: 'typing 3s steps(30) infinite', // Updated to infinite
        blink: 'blink 0.75s step-end infinite',
        fadeIn: 'fadeIn 1s ease-out forwards',
        zoomInOut: 'zoomInOut 3s ease-in-out infinite', 
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '50%': {
            opacity: '0.5',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        zoomInOut: {
          '0%, 100%': {
            transform: 'scale(1)',  // Start and end at normal size
          },
          '50%': {
            transform: 'scale(1.2)',  // Zoom in by 20%
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: '#FF8F9C',
      },
    },
  },
  plugins: [],
};

export default config;
