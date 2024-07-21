import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary
        violet: "#9e7f66",
        "light-violet": "#939bf4",
        "dark-blue": "#19202d",
        midnight: "#121721",
        // secondary
        white: "#fff",
        "light-grey": "#f4f6f8",
        grey: "#9daec2",
        "dark-grey": "#6e8098",
        "royal-blue": "#5964e0",
      },
      backgroundImage: {
        "header-pattern-desktop": "url('/assets/desktop/bg-pattern-header.svg')"
      }
    },
  },
  plugins: [],
};
export default config;
