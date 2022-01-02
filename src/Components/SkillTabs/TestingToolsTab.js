import ProgressBarWithTitle from '../ProgressBarWithTitle';

const TestingToolsTab = () => {
  return (
    <div>
      <ProgressBarWithTitle title={'Mocha'} progress={'65%'} />
      <ProgressBarWithTitle title={'Chai'} progress={'70%'} />
      <ProgressBarWithTitle title={'Jest'} progress={'80%'} />
    </div>
  );
};

export default TestingToolsTab;
