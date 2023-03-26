/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'league': ['League Spartan', 'sans-serif'],
    },
    colors: {
      'background': 'hsl(180, 52%, 96%)',
      'cardborder': 'hsl(180, 29%, 50%)',
      'featured': 'hsl(180, 14%, 20%)',
      'time': 'hsl(180, 8%, 52%)',
      'tag': 'hsl(180, 31%, 95%)',
      'hoverclose': 'hsl(180, 14%, 20%)',
    },
    backgroundImage: {
      'header': "url('/public/assets/bgHeader.svg')",
      'headerMob': "url('/public/assets/bgHeaderMob.svg')",
    },
  },
  plugins: [],
}
