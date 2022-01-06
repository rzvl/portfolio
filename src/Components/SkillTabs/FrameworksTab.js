import ProgressBarWithTitle from '../ProgressBarWithTitle';

const FrameworksTab = () => {
  return (
    <div>
      <ProgressBarWithTitle title={'React'} progress={'80%'} barId={'react'} />
      <ProgressBarWithTitle title={'Redux'} progress={'40%'} barId={'redux'} />
    </div>
  );
};

export default FrameworksTab;
