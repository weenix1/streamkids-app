const withMT = require('@material-tailwind/react/utils/withMT');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}')],
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
      stream_yellow: '#FFEB4F',
      stream_dark_gray: '#424242',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
});
