import React from 'react';
import { Button } from '@material-tailwind/react';
import { ConfigColor } from '../types';

interface CustomButtonProps {
  color?: ConfigColor;
  children?: React.ReactNode;
  width?: string;
  borderColor?: ConfigColor;
  height?: string;
  onClick?: () => void;
  bgColor?: ConfigColor;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  dataTestId?: string;
}

function CustomButton({
  bgColor = 'color_blue',
  color,
  width,
  borderColor,
  height,
  onClick,
  disabled,
  type = 'button',
  dataTestId,
  children,
}: CustomButtonProps) {
  return (
    <div>
      <Button
        className={`!text-${color || 'white'} bg-${bgColor} w-${width || '64'} h-${height || '16'
          } rounded-lg`}
        style={{ borderColor: borderColor }}
        onClick={onClick}
        disabled={disabled}
        type={type}
        data-testid={dataTestId}
      >
        {children}
      </Button>
    </div>
  );
}

export default CustomButton;
