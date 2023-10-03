import {
  Card,
  CardHeader,
} from "@material-tailwind/react";
import { ConfigBackGroundValues, ConfigColor, ConfigPosition, ConfigSize } from "../../types";
import Box from "./Box";
import ChipPill from "./ChipPill";

interface MovieCardProps {
  duration?: string;
  title?: string;
  icon?: React.ReactNode;
  iconPosition: ConfigPosition;
  isFooter?: boolean;
  height?: ConfigSize;
  width?: ConfigSize;
  bgColor?: ConfigColor;
}

const widthSizeValues: Record<ConfigSize, string> = {
  xs: 'w-40',
  sm: 'w-27',
  md: 'w-80',
  lg: 'w-760',
  xl: 'w-full',
  '2xl': 'w-screen',
};

const heightSizeValues: Record<ConfigSize, string> = {
  xs: 'h-40',
  sm: 'h-60',
  md: 'h-80',
  lg: 'h-760',
  xl: 'h-full',
  '2xl': 'h-screen',
};

const MovieCard = ({ title, iconPosition, height = 'md', width = 'md', }: MovieCardProps) => {

  const widthValue = width ? widthSizeValues[width] : '';
  const heightValue = height ? heightSizeValues[height] : '';

  const alignmentStyles = {
    start: {
      icon: 'absolute top-1/2 left-2 transform -translate-y-1/2',
      text: 'absolute top-1/2 left-2 transform -translate-y-1/2',
    },
    center: {
      icon: 'absolute top-14 left-10 transform -translate-x-1/2 -translate-y-1/2',
      text: 'absolute top-14 left-10 transform -translate-y-1/2',
    },
    end: {
      icon: 'absolute top-1/2 right-2 transform -translate-y-1/2',
      text: 'absolute bottom-2 right-2 transform -translate-y-1/2',
    },
    top: {
      icon: 'absolute top-2 left-2 transform -translate-y-1/2',
      text: 'absolute top-6 left-2 transform -translate-y-1/2 ',
    },
    right: {
      icon: 'absolute top-6 right-2 transform -translate-y-1/2',
      text: 'absolute top-6 right-2 transform -translate-y-1/2',
    },
    bottom: {
      icon: 'absolute bottom-2 left-2 transform -translate-y-1/2',
      text: 'absolute bottom-2 left-2 transform -translate-y-1/2',
    },
    left: {
      icon: 'absolute top-1/2 left-2 transform -translate-y-1/2',
      text: 'absolute top-1/2 left-2 transform -translate-y-1/2',
    },
  };

  const selectedStyle = alignmentStyles[iconPosition] || alignmentStyles.end; // default to 'left' if no valid alignment provided

  return (

    <Card className={`${widthValue} ${heightValue} overflow-hidden relative `}>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
        />
        <Box className={`${selectedStyle.text}`}>
          <ChipPill value={title} bgColor="white" textColor="black" borderColor="white" />
        </Box>
      </CardHeader>

    </Card>

  );
}

export default MovieCard;

//  