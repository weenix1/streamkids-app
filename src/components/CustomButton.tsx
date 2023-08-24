import React from 'react';
import { Button } from '@material-tailwind/react';

interface CustomButtonProps {
  color?: 'stream_success' | 'stream_color_yellow';
  children?: React.ReactNode;
  width?: string;
  borderColor?: string;
  height?: string;
  onClick?: () => void;
  bgColor?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  dataTestId?: string;
}

function CustomButton({
  bgColor = 'stream_success',
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
        className={`!text-${color || 'white'} !bg-${bgColor} w-${width || '64'} h-${height || '16'
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
