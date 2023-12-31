import { Card, CardHeader, CardFooter } from '@material-tailwind/react';
import Text from './Text';
import MoreIcon from '../../assets/icons/more_vert.svg';
import { ConfigBackGroundValues, ConfigColor, ConfigPosition, ConfigSize } from '../../types';
import Box from './Box';
import ChipPill from './ChipPill';
import LockIcon from '../../assets/icons/lockIcon.svg';

interface PlayCardProps {
  duration?: string;
  title?: string;
  iconPosition: ConfigPosition;
  isFooter?: boolean;
  isPlaying?: boolean;
  height?: ConfigSize;
  width?: ConfigSize;
  bgColor?: ConfigColor;
  lock?: boolean;
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

const PlayCard = ({
  duration,
  title,
  iconPosition,
  lock,
  isFooter = false,
  isPlaying = false,
  height = 'md',
  width = 'md',
  bgColor = 'transparant_black',
}: PlayCardProps) => {
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
      <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
        />
        <Box className={`${selectedStyle.text}`}>
          <ChipPill value={duration} bgColor="white" textColor="black" borderColor="white" />
        </Box>
      </CardHeader>
      {isFooter && (
        <CardFooter className="flex items-center justify-between py-2">
          <Text color="black"> {title} </Text>
          <img src={MoreIcon} alt="more icon" />
        </CardFooter>
      )}
      {isPlaying && (
        <div className={`absolute inset-0 ${ConfigBackGroundValues[bgColor]} flex justify-center items-center`}>
          <Text color="white">{lock ? <img src={LockIcon} alt="" /> : 'Now Playing'}</Text>
        </div>
      )}
    </Card>
  );
};

export default PlayCard;

//
