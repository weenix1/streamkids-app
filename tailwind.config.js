import withMT from '@material-tailwind/react/utils/withMT';

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#00A9F1',
      secondary: '#D9F3FF',
      success: '#00C247',
      white: '#FFFFFF',
      warning: '#FFBA09',
      disable: '#D8D8D8',
      text_gray: '#212121',
      bg_color: '#d9f3ff',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
});
