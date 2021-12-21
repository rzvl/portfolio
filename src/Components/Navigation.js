import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="flex flex-col items-center text-purple-200 dark:text-gray-200">
      <NavLink
        to="/"
        className="w-full text-center py-3 border-y border-purple-400 dark:border-gray-500 hover:text-yellow-400 transition duration-500"
      >
        Home
      </NavLink>

      <NavLink
        to="about"
        className="w-full text-center py-3 border-b border-purple-400 dark:border-gray-500 hover:text-yellow-400 transition duration-500"
      >
        About
      </NavLink>

      <NavLink
        to="skills"
        className="w-full text-center py-3 border-b border-purple-400 dark:border-gray-500 hover:text-yellow-400 transition duration-500"
      >
        Skills
      </NavLink>

      <NavLink
        to="works"
        className="w-full text-center py-3 border-b border-purple-400 dark:border-gray-500 hover:text-yellow-400 transition duration-500"
      >
        Works
      </NavLink>

      <NavLink
        to="contact"
        className="w-full text-center py-3 border-b border-purple-400 dark:border-gray-500 hover:text-yellow-400 transition duration-500"
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navigation;
