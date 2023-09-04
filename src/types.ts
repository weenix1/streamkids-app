export type ConfigColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'white'
  | 'warning'
  | 'disabled'
  | 'text_gray'
  | 'bg_color'
  | 'color_blue'
  | 'color_yellow'
  | 'dark_gray';

// we need to keep this list in sync with the tailwind.config.js, unfortunately ts is not able to have real static types
// if you change the type of this array, then add the entry in this values array
export const ConfigColorValues: ConfigColor[] = [
  'primary',
  'secondary',
  'success',
  'white',
  'warning',
  'disabled',
  'text_gray',
  'bg_color',
  'color_blue',
];

export const ConfigBorderValues: Record<ConfigColor, string> = {
  primary: 'border-stream_primary',
  secondary: 'border-stream_secondary',
  bg_color: 'border-stream_bg_color',
  success: 'border-stream_success',
  white: 'border-stream_white',
  warning: 'border-stream_warning',
  disabled: 'border-stream_disabled',
  text_gray: 'border-stream_text_gray',
  color_blue: 'border-stream_color_blue',
  color_yellow: 'border-stream_color_yellow',
  dark_gray: 'border-stream_dark_gray',
};

export const ConfigTextValues: Record<ConfigColor, string> = {
  primary: 'text-stream_primary',
  secondary: 'text-stream_secondary',
  bg_color: 'text-stream_bg_color',
  success: 'text-stream_success',
  white: 'text-stream_white',
  warning: 'text-stream_warning',
  disabled: 'text-stream_disabled',
  text_gray: 'text-stream_text_gray',
  color_blue: 'text-stream_color_blue',
  color_yellow: 'text-stream_color_yellow',
  dark_gray: 'text-stream_dark_gray',
};

export const ConfigBackGroundValues: Record<ConfigColor, string> = {
  primary: 'bg-stream_primary',
  secondary: 'bg-stream_secondary',
  bg_color: 'bg-stream_bg_color',
  success: 'bg-stream_success',
  white: 'bg-stream_white',
  warning: 'bg-stream_warning',
  disabled: 'bg-stream_disabled',
  text_gray: 'bg-stream_text_gray',
  color_blue: 'bg-stream_color_blue',
  color_yellow: 'bg-stream_color_yellow',
  dark_gray: 'bg-stream_dark_gray',
};

export type ConfigPosition = 'start' | 'center' | 'end';
export type ConfigSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
