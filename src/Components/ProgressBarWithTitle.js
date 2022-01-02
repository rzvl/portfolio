import ProgressBar from './ProgressBar';

const ProgressBarWithTitle = ({ title, progress }) => {
  return (
    <div className="max-w-[750px] space-y-12 pt-6">
      <div>
        <h3 className="p-2 text-2xl font-bold text-zinc-700 dark:text-zinc-100">
          {title}
        </h3>
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};

export default ProgressBarWithTitle;
