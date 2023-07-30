import React from 'react';
import { PropsWithChildren } from 'react';

const LayoutPanel: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="px-28 py-28">{children}</div>;
};

export default LayoutPanel;
