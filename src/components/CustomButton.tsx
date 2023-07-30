import React from 'react';
import { Button } from "@material-tailwind/react";

interface CustomButtonProps {
  children?: React.ReactNode
  color?: string
  width?: string
  borderColor?: string
  height?: string
  onClick?: () => void
  backgroundColor?: string
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  dataTestId?: string;
}

const CustomButton = ({ color, width, borderColor, height, onClick, backgroundColor, disabled, type = 'button', dataTestId, children }: CustomButtonProps) => {

  return (
    <div>
      <Button className={`text-${color || 'white'} bg-${backgroundColor || 'primary'} w-${width || '64'} h-${height || '16'} rounded-lg`}
        style={{ borderColor: borderColor || color || 'transparent' }}
        onClick={onClick}
        disabled={disabled}
        type={type}
        data-testid={dataTestId}>{children}</Button>
    </div>
  )
}

export default CustomButton