import { ConfigBackGroundValues, ConfigColor, ConfigPosition, ConfigSize } from "../../types";
import Box from "./Box";
import Text from "./Text";

interface CircleBoxProps {
  width?: ConfigSize;
  height?: ConfigSize;
  bgColor?: ConfigColor;
  iconPosition?: ConfigPosition;
  text?: string;
}


const configSizeValues: Record<ConfigSize, string> = {
  xs: 'w-16',
  sm: 'w-40',
  md: 'w-60',
  lg: 'w-80',
  xl: 'w-full',
  '2xl': 'w-screen',
};

const sizeMap: Record<ConfigSize, string> = {
  xs: 'h-12',
  sm: 'h-16',
  md: 'h-20',
  lg: 'h-40',
  xl: 'h-48',
  '2xl': 'h-64',
};


const CircleBox = ({ width, height, bgColor = 'blue', iconPosition = 'center', text = '' }: CircleBoxProps) => {

  const alignmentStyles = {
    start: {
      icon: 'absolute top-1/2 left-2 transform -translate-y-1/2',
      input: 'pl-8',
    },
    center: {
      icon: 'absolute top-1/4 left-[15%] transform -translate-x-1/2 -translate-y-1/2',
      input: '',
    },
    end: {
      icon: 'absolute top-1/2 right-2 transform -translate-y-1/2',
      input: 'pr-8',
    },
  };

  const widthValue = width ? configSizeValues[width] : '';
  const heightValue = height ? sizeMap[height] : '';

  const selectedStyle = alignmentStyles[iconPosition] || alignmentStyles.end; // default to 'left' if no valid alignment provided


  return (
    <Box>
      <div className={`relative ${widthValue} ${heightValue} ${ConfigBackGroundValues[bgColor]} rounded-full`}>
      </div>
      <div className={`${selectedStyle.icon}`}>
        <Text bold color="blue">{text}</Text>
      </div>
    </Box>

  );
}

export default CircleBox;