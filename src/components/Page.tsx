import React, { PropsWithChildren } from 'react';
import { ConfigBackGroundValues, ConfigColor } from '../types';

const Page: React.FC<PropsWithChildren<{ bgColor?: ConfigColor }>> = ({ children, bgColor = 'transparent' }) => <div className={`${ConfigBackGroundValues[bgColor]}`}>{children}</div>;

export default Page;
