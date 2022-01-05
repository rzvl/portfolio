import { MenuIcon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import DarkModeSwitch from './DarkModeSwitch';
import Navigation from './Navigation';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="lg:hidden flex justify-between items-center w-full h-14 px-10 bg-red-100 dark:bg-zinc-900 shadow">
      <div>
        <DarkModeSwitch />
      </div>
      <div>
        {open ? (
          <XIcon
            className="h-6 w-6 cursor-pointer text-zinc-900 dark:text-zinc-100"
            onClick={handleClick}
          />
        ) : (
          <MenuIcon
            className="h-6 w-6 cursor-pointer text-zinc-900 dark:text-zinc-100"
            onClick={handleClick}
          />
        )}
      </div>
      {open && (
        <div className="absolute w-full top-14 right-0 bg-zinc-100 dark:bg-zinc-800 z-30">
          <Navigation isMobile={true} closeMobileMenu={handleClick} />
        </div>
      )}
    </div>
  );
};

export default Navbar;

// bg-gradient-to-r from-purple-600 dark:from-black via-blue-500 dark:via-black to-green-300 dark:to-gray-900
