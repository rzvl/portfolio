import { MenuIcon } from '@heroicons/react/outline';
import DarkModeSwitch from './DarkModeSwitch';

const Navbar = () => {
  return (
    <div className="lg:hidden flex justify-between w-full px-10 py-5 bg-red-100 dark:bg-zinc-900 shadow">
      <div>
        <DarkModeSwitch />
      </div>
      <div>
        <MenuIcon className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
      </div>
    </div>
  );
};

export default Navbar;

// bg-gradient-to-r from-purple-600 dark:from-black via-blue-500 dark:via-black to-green-300 dark:to-gray-900
