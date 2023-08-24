import React from 'react';

interface IllustratedLayoutPanelProps {
  children: React.ReactNode;
  title?: string;
  iconPath?: React.ReactNode;
}

const IllustratedLayoutPanel = ({ children, iconPath }: IllustratedLayoutPanelProps) => {
  return (
    <div className="pt-24 pr-40  pl-40">
      <div className="h-full" style={{ backgroundImage: `url(${iconPath})` }}>
        {children}
      </div>
    </div>
  );
};

export default IllustratedLayoutPanel;
