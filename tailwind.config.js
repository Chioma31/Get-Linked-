/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'linear-gradient(#903AFF 100%, #FE34B9 100%)',
        secondary: '#150E28',
        contrast: '#903AFF',
        accent: '#D434FE'
      },
      screens: {
        mobile: '0px',
        // => @media () { ... }

        tablet: '1024px',
        // => @media (min-width: 768px, max:1023px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1024px and max:1279px) { ... }
      },
    },
  },
  plugins: [],
}
