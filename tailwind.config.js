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
      color_blue: '#3265B5',
      color_yellow: '#FFEB4F',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      backgroundGradient: {
        blue: 'var(--gradient-blue, linear-gradient(315deg, #00B0FF 0%, #A9E2FC 100%))',
      },
    },
  },
  plugins: [],
});
