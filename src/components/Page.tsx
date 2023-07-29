import { PropsWithChildren } from 'react';

const Page: React.FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};

export default Page;
