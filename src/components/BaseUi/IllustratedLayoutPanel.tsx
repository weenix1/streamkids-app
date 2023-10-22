import React from 'react';
import LayoutPanel from './LayoutPanel';
import Box from './Box';

interface IllustratedLayoutPanelProps {
  children: React.ReactNode;
  title?: string;
  iconPath?: React.ReactNode;
}

const IllustratedLayoutPanel = ({ children, iconPath }: IllustratedLayoutPanelProps) => {
  return (
    /*  <div className="pt-24 pr-40  pl-40 h-full"> */

    <LayoutPanel >
      <div style={{ backgroundImage: `url(${iconPath})` }}>
        {children}
      </div>
    </LayoutPanel>


    /*  </div> */
  );
};

export default IllustratedLayoutPanel;
