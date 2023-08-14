import withMT from '@material-tailwind/react/utils/withMT';

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      stream_primary: '#00A9F1',
      stream_secondary: '#D9F3FF',
      stream_success: '#00C247',
      stream_white: '#FFFFFF',
      stream_warning: '#FFBA09',
      stream_disable: '#D8D8D8',
      stream_text_gray: '#212121',
      stream_bg_color: '#d9f3ff',
      stream_color_blue: '#3265B5',
      stream_color_yellow: '#FFEB4F',
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
