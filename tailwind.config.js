/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : '#ED6E5C',
        'greyish-green': '#40557C'
      },
      screens:{
        'md': {'max': '767px'},
        'lg': {'max': '1023px'},
      },
      backgroundImage: {
        'cta': 'url(./src/assets/side-view-friends-with-smartphone.jpg)'
      }
    },
  },
  plugins: [],
}