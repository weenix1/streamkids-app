import { FC, ReactNode, HTMLProps } from 'react';
import clsx from 'clsx';

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type FlexJustifyContent =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly';
type FlexAlignItems = 'start' | 'end' | 'center' | 'stretch' | 'baseline';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type TextAlign = 'left' | 'center' | 'right' | 'justify' | 'start' | 'end';
type FlexGrow = 'grow' | 'grow-0';
type flexBasis = 'auto' | 'full' | 'screen' | 'none' | 'flex-1';

interface BoxProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  flexDirection?: FlexDirection;
  flexJustifyContent?: FlexJustifyContent;
  flexAlignItems?: FlexAlignItems;
  flexWrap?: FlexWrap;
  textAlign?: TextAlign;
  flexGrow?: FlexGrow;
  flexBasis?: flexBasis;

}

const Box: FC<BoxProps> = ({
  children,
  flexDirection = 'row',
  flexJustifyContent,
  flexAlignItems,
  textAlign,
  flexWrap,
  flexGrow,
  flexBasis,
  className,
  ...rest
}) => {
  const classes = clsx(
    'flex',
    {
      'flex-row': flexDirection === 'row',
      'flex-row-reverse': flexDirection === 'row-reverse',
      'flex-col': flexDirection === 'column',
      'flex-col-reverse': flexDirection === 'column-reverse',
    },
    {
      'justify-start': flexJustifyContent === 'start',
      'justify-end': flexJustifyContent === 'end',
      'justify-center': flexJustifyContent === 'center',
      'justify-between': flexJustifyContent === 'between',
      'justify-around': flexJustifyContent === 'around',
      'justify-evenly': flexJustifyContent === 'evenly',
    },
    {
      'items-start': flexAlignItems === 'start',
      'items-end': flexAlignItems === 'end',
      'items-center': flexAlignItems === 'center',
      'items-stretch': flexAlignItems === 'stretch',
      'items-baseline': flexAlignItems === 'baseline',
    },
    {
      'flex-nowrap': flexWrap === 'nowrap',
      'flex-wrap': flexWrap === 'wrap',
      'flex-wrap-reverse': flexWrap === 'wrap-reverse',
    },
    {
      'text-left': textAlign === 'left',
      'text-center': textAlign === 'center',
      'text-right': textAlign === 'right',
      'text-justify': textAlign === 'justify',
      'text-start': textAlign === 'start',
      'text-end': textAlign === 'end',
    },
    {
      'flex-grow': flexGrow === 'grow',
      'flex-grow-0': flexGrow === 'grow-0',
    },
    {
      'flex-auto': flexBasis === 'auto',
      'flex-full': flexBasis === 'full',
      'flex-screen': flexBasis === 'screen',
      'flex-none': flexBasis === 'none',
      'flex-1': flexBasis === 'flex-1',
    },
    className
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Box;
