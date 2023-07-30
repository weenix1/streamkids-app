import { Typography } from '@material-tailwind/react'
import React, { FunctionComponent, PropsWithChildren } from 'react';

const Title: FunctionComponent<
  PropsWithChildren<{ variant?: 'h1' | 'h2' | 'h3', color?: 'white' | 'black' }>
> = ({ variant = 'h1', children, color = 'black' }) => {
  const colors = {
    white: 'text-white',
    black: 'text-black',
  };
  return (
    <Typography variant={variant} className={`font-bold ${colors[color]}`}>
      {children}
    </Typography>
  );
};

export default Title;
