import React from 'react';
import useMediaQuery from '../../../hooks/useMediaQuery';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navbar: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <>
      {isDesktop ? <DesktopNav /> : <MobileNav />}
    </>
  );
};

export default Navbar;
