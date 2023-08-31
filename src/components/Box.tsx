import React, { FC, ReactNode, HTMLProps } from 'react';
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

interface BoxProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  flexDirection?: FlexDirection;
  flexJustifyContent?: FlexJustifyContent;
  flexAlignItems?: FlexAlignItems;
  flexWrap?: FlexWrap;
}

const Box: FC<BoxProps> = ({
  children,
  flexDirection = 'row',
  flexJustifyContent,
  flexAlignItems,
  flexWrap,
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
    className
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Box;