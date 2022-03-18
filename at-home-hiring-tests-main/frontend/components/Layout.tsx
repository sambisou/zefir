import { FC } from 'react';

import { SideMenu } from './SideMenu';

export const Layout: FC = ({ children }) => (
  <main className="relative h-screen overflow-hidden text-gray-800 bg-gray-100">
    <div className="flex items-start justify-between">
      <SideMenu />
      <div className="flex flex-col w-full md:space-y-4">
        <div className="h-screen px-4 pb-24 overflow-y-auto md:px-6">
          {children}
        </div>
      </div>
    </div>
  </main>
);
