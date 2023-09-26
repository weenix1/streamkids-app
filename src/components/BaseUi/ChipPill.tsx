import React from 'react';
import Box from './Box';
import { ConfigColor, ConfigSize } from '../../types';

interface ChipPillProps {
  value?: string;
  icon?: React.ReactNode;
  bgColor?: ConfigColor | 'white';
  textColor?: ConfigColor;
  borderColor?: ConfigColor;
  onClick?: () => void;
  iconPosition?: 'start' | 'end';
  size?: ConfigSize;
  rounded?: 'sm' | 'md' | 'lg' | 'full' | 'none';
}

const ChipPill = ({
  value = 'Dokumente fehlen',
  bgColor = 'white',
  textColor = 'white',
  size = 'xs',
  borderColor = 'white',
  rounded = 'full',
  iconPosition = 'start',
  onClick,
  icon,
}: ChipPillProps) => {
  return (
    <Box
      flexJustifyContent="evenly"
      flexAlignItems="center"
      onClick={onClick}
      className={`cursor-pointer border rounded-${rounded} px-3 py-1 bg-stream_${bgColor} text-${size} text-stream_${textColor} normal-case border-stream_${borderColor}`}
    >
      {iconPosition === 'start' && icon && <div>{icon}</div>}
      <div className="px-1">{value}</div>
      {iconPosition === 'end' && icon && <div>{icon}</div>}
    </Box>
  );
};

export default ChipPill;
