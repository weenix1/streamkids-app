import React, { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <main className="h-screen font-sans overflow-x-hidden">{children}</main>
);

export default Layout;
