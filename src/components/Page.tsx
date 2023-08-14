import React, { PropsWithChildren } from 'react';

const Page: React.FC<PropsWithChildren<{ bgColor?: string }>> = ({ children, bgColor = '' }) => <div className={`bg-stream_${bgColor} h-full`}>{children}</div>;

export default Page;
