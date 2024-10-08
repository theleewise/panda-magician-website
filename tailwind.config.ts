import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   primary: colors.green,
    // },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: colors.green,
      },
    },
  },
  plugins: [],
};
export default config;
