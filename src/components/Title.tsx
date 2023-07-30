import { Typography } from '@material-tailwind/react'
import React, { FunctionComponent, PropsWithChildren } from 'react';

const Title: FunctionComponent<
  PropsWithChildren<{ variant?: 'h1' | 'h2' | 'h3' }>
> = ({ variant = 'h1', children }) => {
  return (
    <Typography variant={variant} className="font-bold">
      {children}
    </Typography>
  );
};

export default Title;
