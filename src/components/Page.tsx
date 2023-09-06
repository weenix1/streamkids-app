import React, { PropsWithChildren } from 'react';
import { ConfigBackGroundValues, ConfigColor } from '../types';

const Page: React.FC<PropsWithChildren<{ bgColor?: ConfigColor }>> = ({ children, bgColor = 'white' }) => <div className={`${ConfigBackGroundValues[bgColor]} h-full`}>{children}</div>;

export default Page;
