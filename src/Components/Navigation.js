import { NavLink } from 'react-router-dom';

const Navigation = ({ isMobile, closeMobileMenu }) => {
  return (
    <nav className="flex flex-col items-center text-zinc-800 dark:text-zinc-100">
      <NavLink
        to="/"
        onClick={() => isMobile && closeMobileMenu()}
        className="w-full text-center py-3 border-y border-zinc-400 dark:border-zinc-700 hover:text-rose-700 dark:hover:text-yellow-300 transition duration-500"
      >
        Home
      </NavLink>

      <NavLink
        to="about"
        onClick={() => isMobile && closeMobileMenu()}
        className="w-full text-center py-3 border-b border-zinc-400 dark:border-zinc-700 hover:text-rose-700 dark:hover:text-yellow-300 transition duration-500"
      >
        About
      </NavLink>

      <NavLink
        to="skills"
        onClick={() => isMobile && closeMobileMenu()}
        className="w-full text-center py-3 border-b border-zinc-400 dark:border-zinc-700 hover:text-rose-700 dark:hover:text-yellow-300 transition duration-500"
      >
        Skills
      </NavLink>

      <NavLink
        to="works"
        onClick={() => isMobile && closeMobileMenu()}
        className="w-full text-center py-3 border-b border-zinc-400 dark:border-zinc-700 hover:text-rose-700 dark:hover:text-yellow-300 transition duration-500"
      >
        Works
      </NavLink>

      <NavLink
        to="contact"
        onClick={() => isMobile && closeMobileMenu()}
        className="w-full text-center py-3 border-b border-zinc-400 dark:border-zinc-700 hover:text-rose-700 dark:hover:text-yellow-300 transition duration-500"
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navigation;
