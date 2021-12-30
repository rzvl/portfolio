import React from 'react';
import { NavLink } from 'react-router-dom';

const BorderlessBtn = ({ btnText, link }) => {
  return (
    <div>
      <NavLink
        to={link}
        className="relative px-5 py-3 overflow-hidden font-medium text-zinc-400 rounded-lg shadow-inner group"
      >
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-teal-500 dark:border-blue-400 group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-teal-500 dark:border-blue-400 group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-teal-500 dark:bg-blue-400 group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-teal-500 dark:bg-blue-400 group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-red-600 dark:bg-yellow-400 opacity-0 group-hover:opacity-100"></span>
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-zinc-100 dark:group-hover:text-zinc-600 ease">
          {btnText}
        </span>
      </NavLink>
    </div>
  );
};

export default BorderlessBtn;
