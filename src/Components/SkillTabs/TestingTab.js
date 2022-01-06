import ProgressBarWithTitle from '../ProgressBarWithTitle';

const TestingTab = () => {
  return (
    <div>
      <ProgressBarWithTitle title={'Mocha'} progress={'65%'} barId={'mocha'} />
      <ProgressBarWithTitle title={'Chai'} progress={'70%'} barId={'chai'} />
      <ProgressBarWithTitle title={'Jest'} progress={'80%'} barId={'jest'} />
    </div>
  );
};

export default TestingTab;
