import { Typography } from '@material-tailwind/react';
import { FunctionComponent, PropsWithChildren } from 'react';

const Text: FunctionComponent<
  PropsWithChildren<{
    variant?: 'basic' | 'normal' | 'title';
    bold?: boolean;
    className?: string;
  }>
> = ({ children, variant = 'basic', bold = false, className = '' }) => {
  const colors = {
    basic: 'text-stream_white',
    title: 'text-stream_black',
    normal: 'text-stream_text_gray',
  };
  const fontWeight = bold ? 'font-bold' : 'font-normal';
  return (
    <Typography variant="paragraph" className={`${className} ${fontWeight} ${colors[variant]}`}>
      {children}
    </Typography>
  );
};

export default Text;
