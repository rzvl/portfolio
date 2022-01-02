import ProgressBarWithTitle from '../ProgressBarWithTitle';

const FrameworksTab = () => {
  return (
    <div>
      <ProgressBarWithTitle title={'React'} progress={'80%'} />
      <ProgressBarWithTitle title={'Redux'} progress={'40%'} />
    </div>
  );
};

export default FrameworksTab;
