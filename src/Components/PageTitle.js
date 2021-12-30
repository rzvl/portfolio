const PageTitle = ({ title, bg }) => {
  return (
    <h2 className="w-full flex flex-col justify-center items-center">
      <span className="text-5xl font-extrabold text-rose-500 dark:text-yellow-400 z-10">
        {title}
      </span>
      <span className="hidden sm:block relative -top-24 text-9xl font-extrabold text-zinc-300 dark:text-zinc-700 opacity-25">
        {bg}
      </span>
    </h2>
  );
};

export default PageTitle;
