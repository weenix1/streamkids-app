import React from 'react';
// import { PropsWithChildren } from 'react';

interface Iprops {
  fullWidth?: boolean;
  children: React.ReactNode;
  background?: string;
}

function LayoutPanel({ children, fullWidth, background }: Iprops) {
  return <div className={`${fullWidth ? `py-28 bg-${background}` : 'px-28 py-28'}`}>{children}</div>;
}

export default LayoutPanel;
