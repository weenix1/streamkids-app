import React from 'react';
import { ConfigBackGroundValues, ConfigColor } from '../../types';
// import { PropsWithChildren } from 'react';

interface Iprops {
  fullWidth?: boolean;
  children: React.ReactNode;
  bgColor?: ConfigColor;
}

function LayoutPanel({ children, fullWidth, bgColor = 'light-blue' }: Iprops) {
  return <div className={`${fullWidth ? `py-28 ${ConfigBackGroundValues[bgColor]}` : 'px-28 py-28'}`}>{children}</div>;
}

export default LayoutPanel;
