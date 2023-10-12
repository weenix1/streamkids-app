import {
  Card,
  CardHeader,
} from "@material-tailwind/react";
import { ConfigBackGroundValues, ConfigColor, ConfigPosition, ConfigSize } from "../../types";
import Box from "./Box";
import ChipPill from "./ChipPill";
import React, { useState } from "react";
import ProgressStepper from "./ProgressStepper";

interface MovieCardProps {
  duration?: string;
  title?: string;
  icon?: React.ReactNode;
  iconPosition: ConfigPosition;
  isFooter?: boolean;
  height?: ConfigSize;
  width?: ConfigSize;
  bgColor?: ConfigColor;
  skipIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
  playIcon?: React.ReactNode;
  pauseIcon?: React.ReactNode;
  progressBar?: boolean
  onClick?: () => void;
  togglePlayIcon?: () => React.ReactNode;
  pauseOrPlay?: React.ReactNode;
}

const widthSizeValues: Record<ConfigSize, string> = {
  xs: 'w-40',
  sm: 'w-27',
  md: 'w-80',
  lg: 'w-72',
  xl: 'w-full',
  '2xl': 'w-screen',
};

const heightSizeValues: Record<ConfigSize, string> = {
  xs: 'h-40',
  sm: 'h-60',
  md: 'h-39',
  lg: 'h-72',
  xl: 'h-full',
  '2xl': 'h-screen',
};



const MovieCard = ({ title, iconPosition, height = 'md', width = 'lg', playIcon, nextIcon, skipIcon, pauseIcon, progressBar = false, pauseOrPlay }: MovieCardProps) => {
  const iconVisibilityMap = {
    pauseOrPlay: {
      playIcon: false,
      pauseIcon: false,
    },
    nextIcon: false,
    skipIcon: false,
    progressBar: false
  };

  const [iconVisibility, setIconVisibility] = useState(iconVisibilityMap);

  const handleMouseEnter = () => {
    setIconVisibility({
      pauseOrPlay: {
        playIcon: !!playIcon,
        pauseIcon: !!pauseIcon,
      },
      nextIcon: !!nextIcon,
      skipIcon: !!skipIcon,
      progressBar: !!progressBar
    });
  };

  const handleMouseLeave = () => {
    setIconVisibility(iconVisibilityMap);
  };

  const widthValue = width ? widthSizeValues[width] : '';
  const heightValue = height ? heightSizeValues[height] : '';


  const alignmentStyles = {
    start: {
      icon: 'absolute top-1/2 left-2 transform -translate-y-1/2',
      text: 'absolute top-1/2 left-2 transform -translate-y-1/2',
    },
    center: {
      icon: 'absolute top-1/2 left-2/4  transform -translate-x-1/2 -translate-y-1/2',
      text: 'absolute top-14 left-10 transform -translate-y-1/2',
    },
    end: {
      icon: 'absolute bottom-2 right-2 transform -translate-y-1/2',
      text: 'absolute bottom-2 right-2 transform -translate-y-1/2',
    },
    top: {
      icon: 'absolute top-2 left-2 transform -translate-y-1/2',
      text: 'absolute top-6 left-2 transform -translate-y-1/2 ',
    },
    right: {
      icon: 'absolute top-1/2 right-2 transform -translate-y-1/2',
      text: 'absolute top-6 right-2 transform -translate-y-1/2',
    },
    bottom: {
      icon: 'absolute bottom-10 left-2 transform -translate-y-1/2',
      text: 'absolute bottom-2 left-2 transform -translate-y-1/2',
    },
    left: {
      icon: 'absolute top-1/2 left-2 transform -translate-y-1/2',
      text: 'absolute top-1/2 left-2 transform -translate-y-1/2',
    },
  };

  const selectedStyle = alignmentStyles[iconPosition] || alignmentStyles.end; // default to 'left' if no valid alignment provided


  const choosePLayPauseIcon = () => {
    if (iconVisibility.pauseOrPlay.playIcon) {
      return playIcon
    }
    if (iconVisibility.pauseOrPlay.pauseIcon) {
      return pauseIcon
    }
    return null
  }

  const playIconStyle = alignmentStyles.center
  const nextIconStyle = alignmentStyles.right
  const skipIconStyle = alignmentStyles.left
  const progressBarStyle = alignmentStyles.bottom

  const backgroundImageStyle = {
    backgroundImage: `url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const cardStyle = {
    ...backgroundImageStyle, // Apply background image style
    // Add other card styles here
  };

  return (

    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={cardStyle}
      className={`${widthValue} ${heightValue} overflow-hidden relative rounded-none `}>
      <Box className={`${selectedStyle.text}`}>
        <ChipPill value={title} bgColor="white" textColor="black" borderColor="white" />
      </Box>
      {iconVisibility.pauseOrPlay.playIcon || iconVisibility.pauseOrPlay.pauseIcon && (
        <Box className={`${playIconStyle.icon}`} >
          {choosePLayPauseIcon()}
        </Box>
      )}
      {iconVisibility.nextIcon && (
        <Box className={`${nextIconStyle.icon}`}>
          {nextIcon}
        </Box>
      )}
      {iconVisibility.skipIcon && (
        <Box className={`${skipIconStyle.icon}`}>
          {skipIcon}
        </Box>
      )}
      <Box flexJustifyContent="center" className={`${progressBarStyle.icon}`}>
        {progressBar && iconVisibility.progressBar && (
          <ProgressStepper percentage={50} size="md" width="md" status="blue-dark" />
        )}
      </Box>
    </Card>

  );
}

export default MovieCard;