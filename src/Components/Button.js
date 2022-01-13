import { Link } from 'react-router-dom';

const Button = ({ type, text, btnType, href, target, rel, to }) => {
  // available types: 'button', 'a', 'link'
  return (
    <div>
      {type === 'button' && (
        <button
          type={btnType}
          className="relative inline-flex items-center justify-start overflow-hidden px-4 py-2 font-medium transition-all bg-zinc-700 dark:bg-zinc-200 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-200 group"
        >
          <span className="w-60 h-60 rounded rotate-[-40deg] bg-rose-500 dark:bg-yellow-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="text-base xs:text-xl relative w-full text-left text-zinc-200 dark:text-zinc-700 transition-colors duration-300 ease-in-out group-hover:text-zinc-200 dark:group-hover:text-zinc-700">
            {text}
          </span>
        </button>
      )}

      {type === 'a' && (
        <a
          href={href}
          target={target}
          rel={rel}
          className="relative inline-flex items-center justify-start overflow-hidden px-4 py-2 font-medium transition-all bg-zinc-700 dark:bg-zinc-200 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-200 group"
        >
          <span className="w-60 h-60 rounded rotate-[-40deg] bg-rose-500 dark:bg-yellow-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="text-base xs:text-xl relative w-full text-left text-zinc-200 dark:text-zinc-700 transition-colors duration-300 ease-in-out group-hover:text-zinc-200 dark:group-hover:text-zinc-700">
            {text}
          </span>
        </a>
      )}

      {type === 'link' && (
        <Link
          to={to}
          className="relative inline-flex items-center justify-start overflow-hidden px-4 py-2 font-medium transition-all bg-zinc-700 dark:bg-zinc-200 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-200 group"
        >
          <span className="w-60 h-60 rounded rotate-[-40deg] bg-rose-500 dark:bg-yellow-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="text-base xs:text-xl relative w-full text-left text-zinc-200 dark:text-zinc-700 transition-colors duration-300 ease-in-out group-hover:text-zinc-200 dark:group-hover:text-zinc-700">
            {text}
          </span>
        </Link>
      )}
    </div>
  );
};

export default Button;
