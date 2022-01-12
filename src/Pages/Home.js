import { Link } from 'react-router-dom';
import AnimatedBlob from '../Components/AnimatedBlob';

const Home = () => {
  return (
    <div className="w-full lg:pl-32 bg-zinc-100 dark:bg-zinc-800">
      <div className="w-full min-h-screen py-10 md:py-20">
        <div className="relative mx-auto p-5 xs:p-16 max-w-5xl w-4/5 flex gap-5 rounded-lg bg-zinc-100 dark:bg-zinc-800 border-2 border-rose-500 dark:border-yellow-400 z-0">
          <div className="hidden xs:block absolute inset-0 rotate-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 border-2 border-rose-500 dark:border-yellow-400 -z-10"></div>
          <div className="hidden xs:block absolute inset-0 rotate-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 border-2 border-rose-500 dark:border-yellow-400 -z-10"></div>
          <div className="hidden xs:block absolute inset-0 rotate-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 border-2 border-rose-500 dark:border-yellow-400 -z-10"></div>
          <div className="hidden xs:block absolute inset-0 rotate-[4deg] rounded-lg bg-zinc-100 dark:bg-zinc-800 border-2 border-rose-500 dark:border-yellow-400 -z-10"></div>
          {/* right column */}
          <div className="flex-1">
            <h2 className="mb-5 xs:mb-10 text-2xl xs:text-4xl lg:text-5xl xl:text-6xl tracking-tight font-extrabold text-rose-500 dark:text-yellow-400">
              Fluid & Creative Web Development
            </h2>
            <p className="mb-6 text-base xs:text-lg text-zinc-700 dark:text-zinc-200">
              I create beautiful, fast, and highly responsive websites by
              following programming's best practices.
            </p>
            {/* button */}
            <Link
              to="works"
              className="relative inline-flex items-center justify-start overflow-hidden px-4 py-2 font-medium transition-all bg-zinc-800 dark:bg-zinc-100 border border-zinc-100 dark:border-zinc-800 rounded-lg hover:bg-zinc-100 group"
            >
              <span className="w-60 h-60 rounded rotate-[-40deg] bg-rose-500 dark:bg-yellow-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="text-base xs:text-xl relative w-full text-left text-zinc-200 dark:text-zinc-700 transition-colors duration-300 ease-in-out group-hover:text-zinc-100 dark:group-hover:text-zinc-800">
                See My Works
              </span>
            </Link>
          </div>
          {/* left column */}
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <AnimatedBlob />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
