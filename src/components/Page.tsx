import React, { PropsWithChildren } from 'react';
import { ConfigBackGroundValues, ConfigColor } from '../types';

const Page: React.FC<PropsWithChildren<{ bgColor?: ConfigColor }>> = ({ children, bgColor = 'white' }) => <div className={`${ConfigBackGroundValues[bgColor]} h-screen`}>{children}</div>;

export default Page;
