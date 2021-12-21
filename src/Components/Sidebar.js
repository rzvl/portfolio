import DarkModeSwitch from './DarkModeSwitch';
import Navigation from './Navigation';

const Sidebar = () => {
  return (
    <div className="fixed w-32 h-screen bg-gradient-to-b from-purple-600 dark:from-black via-blue-500 dark:via-gray-900 to-green-300 dark:to-gray-700 shadow-2xl">
      <div className="flex flex-col justify-center items-center h-32">
        <DarkModeSwitch />
      </div>

      <Navigation />
    </div>
  );
};

export default Sidebar;
