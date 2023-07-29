import { PropsWithChildren } from 'react';

const LayoutPanel: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="mt-24">{children}</div>;
};

export default LayoutPanel;
