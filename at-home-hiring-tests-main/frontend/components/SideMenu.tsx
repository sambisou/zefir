import { ReactNode } from 'react';
import { HomeIcon } from './HomeIcon';

const MenuEntry = ({ href, icon, title }: {
  href: string
  icon: ReactNode
  title: ReactNode
}) => {
  return (
    <a className="flex items-center justify-start p-2 my-0 font-thin text-gray-500 transition-colors duration-200 hover:text-gray-800 " href={href}>
      <span className="text-left">
        {icon}
      </span>
      <span className="mx-4 font-normal text-md">
        {title}
      </span>
    </a>
  );
};

export const SideMenu = () => {
  const menu = [
    {
      title: 'Homes',
      icon: <HomeIcon />,
      href: '/',
    },
    {
      title: 'Homes V2',
      icon: <HomeIcon />,
      href: '/homes',
    },
  ];

  return (
    <div className="relative h-full overflow-auto bg-white ">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="h-screen w-72">
          <nav className="pt-3 pl-6">
            <div className="pl-2">
              <h1 className="text-2xl font-semibold text-gray-700 ">
                HOMEFINDR
              </h1>
              <h2 className="text-xs italic text-gray-400">
                Some catchy punchline
              </h2>
            </div>
            {menu.map(entry =>
              <MenuEntry key={entry.title} {...entry} />
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};