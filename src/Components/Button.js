const Button = ({ type, btnText }) => {
  return (
    <div>
      <button
        type={type}
        className="relative inline-flex items-center justify-start overflow-hidden px-4 py-2 font-medium transition-all bg-zinc-800 dark:bg-zinc-100 border border-zinc-100 dark:border-zinc-800 rounded-lg hover:bg-zinc-100 group"
      >
        <span className="w-60 h-60 rounded rotate-[-40deg] bg-rose-500 dark:bg-yellow-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <span className="text-xl relative w-full text-left text-zinc-200 dark:text-zinc-700 transition-colors duration-300 ease-in-out group-hover:text-zinc-100 dark:group-hover:text-zinc-800">
          {btnText}
        </span>
      </button>
    </div>
  );
};

export default Button;

// border border-zinc-800 dark:border-yellow-400
