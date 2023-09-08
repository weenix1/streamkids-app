import React from 'react';
import { ConfigBackGroundValues, ConfigBorderRadius, ConfigBorderValues, ConfigColor, ConfigSize, ConfigTextValues } from '../../types';

interface CustomButtonProps {
  color?: ConfigColor;
  children?: React.ReactNode;
  width?: ConfigSize;
  borderColor?: ConfigColor;
  height?: ConfigSize;
  onClick?: () => void;
  bgColor?: ConfigColor;
  disabled?: boolean;
  hover?: boolean;
  hoverColor?: ConfigColor;
  type?: 'button' | 'submit' | 'reset' | undefined;
  dataTestId?: string;
  borderR?: ConfigBorderRadius;
}

function CustomButton({
  color = 'white',
  width = 'xl',
  bgColor = 'blue',
  borderColor = 'blue',
  height = 'xs',
  onClick,
  disabled,
  type = 'button',
  dataTestId,
  hover = false,
  hoverColor = 'light-blue',
  children,
  borderR = 'xl'
}: CustomButtonProps) {
  const sizeMap: Record<ConfigSize, string> = {
    xs: 'h-16',
    sm: 'h-24',
    md: 'h-32',
    lg: 'h-40',
    xl: 'h-48',
    '2xl': 'h-64',
  };


  const widthMap: Record<ConfigSize, string> = {
    xs: 'w-24',
    sm: 'w-32',
    md: 'w-40',
    lg: 'w-48',
    xl: 'w-64',
    '2xl': 'w-80',
  };

  return (
    <button onClick={onClick}
      disabled={disabled}
      type={type}
      data-testid={dataTestId} className={`flex justify-center items-center ${widthMap[width]} ${sizeMap[height]} rounded-${borderR} ${ConfigBackGroundValues[bgColor]} ${borderColor} ${onClick} hover:${ConfigBackGroundValues[hoverColor]} ${hover} ${ConfigTextValues[color]} ${ConfigBorderValues[borderColor]}`}>
      {children}
    </button>
  );
}

export default CustomButton;
