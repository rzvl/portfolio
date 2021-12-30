import { useState } from 'react';
import DarkModeSwitch from './DarkModeSwitch';
import Navigation from './Navigation';
import SocialMediaIcons from './SocialMediaIcons';

const Sidebar = () => {
  const [darkOrLight, setDarkOrLight] = useState(localStorage.theme);

  const darkOrLightTextSetter = () => {
    if (localStorage.theme === 'dark') {
      setDarkOrLight('dark');
    } else {
      setDarkOrLight('light');
    }
  };

  return (
    <div className="hidden lg:block fixed w-32 h-screen bg-rose-100 dark:bg-zinc-900 border-r-2 border-zinc-200 dark:border-zinc-700 shadow-zinc-900">
      <div className="flex flex-col justify-center items-center h-32">
        <DarkModeSwitch darkOrLightTextSetter={darkOrLightTextSetter} />
        <div className="text-sm text-rose-400 dark:text-yellow-200 pt-5">
          {darkOrLight} mode
        </div>
      </div>
      <Navigation />
      <div className="flex justify-center">
        <SocialMediaIcons />
      </div>
    </div>
  );
};

export default Sidebar;
