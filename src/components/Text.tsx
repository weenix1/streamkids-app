import { Typography } from '@material-tailwind/react';
import React, { FunctionComponent, PropsWithChildren } from 'react';

const Text: FunctionComponent<
  PropsWithChildren<{
    variant?: 'basic' | 'normal' | 'title';
    bold?: boolean;
    className?: string;
  }>
> = ({ children, variant = 'basic', bold = false, className = '' }) => {
  const colors = {
    basic: 'text-white',
    title: 'text-black',
    normal: 'text-text_gray',
  };
  const fontWeight = bold ? 'font-bold' : 'font-normal';
  return (
    <Typography variant="paragraph" className={`${className} ${fontWeight} ${colors[variant]}`}>
      {children}
    </Typography>
  );
};

export default Text;
