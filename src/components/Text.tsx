import { Typography } from '@material-tailwind/react';
import { FunctionComponent, PropsWithChildren } from 'react';
import { ConfigColor, ConfigSize, ConfigTextValues } from '../types';


const Text: FunctionComponent<
  PropsWithChildren<{
    color?: ConfigColor;
    bold?: boolean;
    link?: string;
    onClick?: () => void;
    fontSize?: ConfigSize;
  }>
> = ({
  children,
  color = 'black',
  bold = false,
  onClick,
  fontSize = 'lg',
}) => {
    const fontWeight = bold ? 'font-bold' : 'font-normal';

    return (
      <Typography
        variant={'paragraph'}
        className={`${fontWeight} ${ConfigTextValues[color]} text-${fontSize}`}
        onClick={onClick}
      >
        {children}
      </Typography>
    );
  };

export default Text;