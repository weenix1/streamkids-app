import { Typography } from '@material-tailwind/react'
import React, { FunctionComponent, PropsWithChildren } from 'react';
import { ConfigColor, ConfigTextValues } from '../types';

const Title: FunctionComponent<
  PropsWithChildren<{ variant?: 'h1' | 'h2' | 'h3' | 'h4' | "h5" | "h6", color?: ConfigColor, className?: string }>
> = ({ variant = 'h1', children, color = 'light-blue', className }) => {

  return (
    <Typography variant={variant} className={`font-bold ${ConfigTextValues[color]} ${className}`}>
      {children}
    </Typography>
  );
};

export default Title;
