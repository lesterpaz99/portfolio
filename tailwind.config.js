/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#011221',
        secondaryColor: '#4D5BCE',
        thirdColor: '#FEA55F',
        accentColor: '#43D9AD',
        linesColor: '#1E2D3D',
        textColor: '#607B96',
        textColor2: '#E5E9F0'
      }
    },
  },
  plugins: [],
}
