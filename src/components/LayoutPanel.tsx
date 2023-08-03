import React from 'react';
// import { PropsWithChildren } from 'react';

interface Iprops {
  fullWidth?: boolean;
  children: React.ReactNode;
}

const LayoutPanel = ({ children,fullWidth }: Iprops) => {
  return <div className={`${fullWidth? "py-28 bg-[#d9f3ff]": "px-28 py-28"}`}>{children}</div>;
};

export default LayoutPanel;
