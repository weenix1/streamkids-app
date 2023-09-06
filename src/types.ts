/* export type ConfigColor =
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
  | 'dark_gray'; */

export type ConfigColor =
  | 'white'
  | 'blue-gray'
  | 'gray'
  | 'brown'
  | 'deep-orange'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'light-green'
  | 'green'
  | 'teal'
  | 'cyan'
  | 'light-blue'
  | 'blue'
  | 'indigo'
  | 'deep-purple'
  | 'purple'
  | 'pink'
  | 'red';

// we need to keep this list in sync with the tailwind.config.js, unfortunately ts is not able to have real static types
// if you change the type of this array, then add the entry in this values array
/* export const ConfigColorValues: ConfigColor[] = [
  'primary',
  'secondary',
  'success',
  'white',
  'warning',
  'disabled',
  'text_gray',
  'bg_color',
  'color_blue',
]; */

export const ConfigColorValues: ConfigColor[] = [
  'white',
  'blue-gray',
  'gray',
  'brown',
  'deep-orange',
  'orange',
  'amber',
  'yellow',
  'lime',
  'light-green',
  'green',
  'teal',
  'cyan',
  'light-blue',
  'blue',
  'indigo',
  'deep-purple',
  'purple',
  'pink',
  'red',
];

export const ConfigBorderValues: Record<ConfigColor, string> = {
  white: 'border-stream_white',
  'blue-gray': 'border-stream_blue-gray',
  gray: 'border-stream_gray',
  brown: 'border-stream_brown',
  'deep-orange': 'border-stream_deep-orange',
  orange: 'border-stream_orange',
  amber: 'border-stream_amber',
  yellow: 'border-stream_yellow',
  lime: 'border-stream_lime',
  'light-green': 'border-stream_light-green',
  green: 'border-stream_green',
  teal: 'border-stream_teal',
  cyan: 'border-stream_cyan',
  'light-blue': 'border-stream_secondary',
  blue: 'border-stream_primary',
  indigo: 'border-stream_indigo',
  'deep-purple': 'border-stream_deep-purple',
  purple: 'border-stream_purple',
  pink: 'border-stream_pink',
  red: 'border-stream_red',
};

export const ConfigTextValues: Record<ConfigColor, string> = {
  white: 'text-stream_white',
  'blue-gray': 'text-stream_blue-gray',
  gray: 'text-stream_gray',
  brown: 'text-stream_brown',
  'deep-orange': 'text-stream_deep-orange',
  orange: 'text-stream_orange',
  amber: 'text-stream_amber',
  yellow: 'text-stream_yellow',
  lime: 'text-stream_lime',
  'light-green': 'text-stream_light-green',
  green: 'text-stream_green',
  teal: 'text-stream_teal',
  cyan: 'text-stream_cyan',
  'light-blue': 'text-stream_secondary',
  blue: 'text-stream_primary',
  indigo: 'text-stream_indigo',
  'deep-purple': 'text-stream_deep-purple',
  purple: 'text-stream_purple',
  pink: 'text-stream_pink',
  red: 'text-stream_red',
};

export const ConfigBackGroundValues: Record<ConfigColor, string> = {
  white: 'bg-stream_white',
  'blue-gray': 'bg-stream_blue-gray',
  gray: 'bg-stream_gray',
  brown: 'bg-stream_brown',
  'deep-orange': 'bg-stream_deep-orange',
  orange: 'bg-stream_orange',
  amber: 'bg-stream_amber',
  yellow: 'bg-stream_yellow',
  lime: 'bg-stream_lime',
  'light-green': 'bg-stream_light-green',
  green: 'bg-stream_green',
  teal: 'bg-stream_teal',
  cyan: 'bg-stream_cyan',
  'light-blue': 'bg-stream_secondary',
  blue: 'bg-stream_primary',
  indigo: 'bg-stream_indigo',
  'deep-purple': 'bg-stream_deep-purple',
  purple: 'bg-stream_purple',
  pink: 'bg-stream_pink',
  red: 'bg-stream_red',
};

export type ConfigPosition = 'start' | 'center' | 'end';
export type ConfigSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
