import React, { useEffect } from 'react';

const ProgressBar = ({ progress }) => {
  useEffect(() => {
    const bar = document.querySelector('.bar');
    bar.classList.remove('w-0');
    bar.style.width = progress;
    bar.classList.remove('bar');
  }, [progress]);

  return (
    <div className="w-full bg-gray-200 rounded-md dark:bg-gray-700 p-1">
      <div className="bar relative bg-rose-500 dark:bg-yellow-400 h-2.5 rounded-sm w-0 transition-all ease-out duration-1000">
        {/* tooltip */}
        <div className=" absolute -right-2 -top-10 w-auto px-4 py-2 text-gray-500 transform translate-x-[35%] bg-zinc-800 dark:bg-zinc-100 opacity-50 xs:opacity-100 rounded">
          <div className="relative flex text-xs text-zinc-100 dark:text-zinc-800 xs:font-bold items-center justify-center w-full h-full leading-none">
            {progress}
            <div className="absolute after bottom-0 w-4 h-4 transform rotate-45 translate-y-3 bg-zinc-800 dark:bg-zinc-100 opacity-50 xs:opacity-100 -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
