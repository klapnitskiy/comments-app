module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'other-100' : '#F6F8FC',
        'other-300' : '#E2E9F3',
        'secondary-300' : '#3EBF8A',
        'text-700': '#131831',
        'text-400': '#697082',
      },
      backgroundImage: {
        'avatar-self': "url('https://avatarfiles.alphacoders.com/269/269951.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
