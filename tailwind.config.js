/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        global: '#F5FCFE',
        blocks: '#D5E4E8',
        card: '#5B6670',
        success: '#87C881',
        danger: '#B87A7A',
        text: {
          light: '#DBDCDC',
          DEFAULT: '#8D8F99',
        },
      },
    },
  },
  plugins: [],
};
