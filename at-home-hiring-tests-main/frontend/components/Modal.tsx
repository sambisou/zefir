import { FC, ReactNode } from 'react';

import { CrossIcon } from './CrossIcon';

const Overlay = ({ onClose }: { onClose?: () => void; }) => (
  <div className="absolute w-full h-full bg-gray-900 opacity-50" onClick={onClose}></div>
);

const Card: FC<{ className?: string }> = ({
  children,
  className,
}) => (
  <div className={`bg-gray-50 border border-gray-300 rounded-lg shadow-xl ${className || ''}`}>
    <div className="px-6 py-4 text-left">{children}</div>
  </div>
);

const Header: FC<{ onClose?: () => void; }> = ({
  children,
  onClose,
}) => (
  <div className="flex items-center justify-between pb-3">
    {!!children && <p className="text-2xl font-bold">{children}</p>}
    {!!onClose &&
      <div className="z-50 cursor-pointer modal-close" onClick={onClose}>
        <CrossIcon />
      </div>}
  </div>
);

export const Modal: FC<{
  isVisible?: boolean;
  onClose?: () => void;
  title?: ReactNode;
}> = ({
  children,
  isVisible,
  onClose,
  title,
}) => (
  <div
    className={`${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    } transition-opacity duration-200 fixed w-full h-full top-0 left-0 flex items-center justify-center`}
  >
    <Overlay onClose={onClose} />
    <Card className="z-50 w-11/12 mx-auto overflow-y-auto md:max-w-md">
      <Header onClose={onClose}>{title}</Header>
      {children}
    </Card>
  </div>
);