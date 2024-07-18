/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-violet": "#CC9900",
        "custom-brown": "#BEA792",
        "custom-green": "#759584"
      }
    }
  },
  plugins: []
};
