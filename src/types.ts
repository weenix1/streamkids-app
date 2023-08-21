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
  | 'color_yellow';

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

export type ConfigPosition = 'start' | 'center' | 'end';
export type ConfigSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
