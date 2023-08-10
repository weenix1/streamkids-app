import { Typography } from '@material-tailwind/react'
import React, { FunctionComponent, PropsWithChildren } from 'react';

const Title: FunctionComponent<
  PropsWithChildren<{ variant?: 'h1' | 'h2' | 'h3' | 'h4' | "h5" | "h6", color?: 'white' | 'black' | 'blue', className?: string }>
> = ({ variant = 'h1', children, color = 'blue', className }) => {
  const colors = {
    white: 'text-white',
    black: 'text-black',
    blue: 'text-blue'
  };
  return (
    <Typography variant={variant} className={`font-bold ${colors[color]} ${className}`}>
      {children}
    </Typography>
  );
};

export default Title;
